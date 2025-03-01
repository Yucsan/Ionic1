import { Component, OnInit } from '@angular/core';  // OnInit
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';  // validaciones
import { NavigationExtras } from '@angular/router'; //navegacion
import { NavController } from '@ionic/angular'; //navegacion


/*
ionic g page Pagina2

ionic generate service data

RECUERDA archivo: home.module.ts

ReactiveFormsModule en el import{} y @NgModule({

..,ReactiveFormsModule
}) 


*/

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],

})

export class HomePage implements OnInit {

    validations_form!: FormGroup;  //validaciones
    genders?: Array<string>;

    mcorreo: Boolean = false;

    // validaciones
    validationMessages = {

        username: [
          { type: 'required', message: 'Username is required.' },
          { type: 'minlength', message: 'Username must be at least 5 characters long.' },
          { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
          { type: 'pattern', message: 'Username must start with a letter and contain only letters or numbers.' },
          { type: 'validUsername', message: 'This username is not allowed.' },
        ],

        lastname:[
            { type: 'saludo', message: 'Hola Fernando Chang.' },
        ],
     
        email: [
          { type: 'required', message: 'Email is required.' },
          { type: 'pattern', message: 'Enter a valid email.' },
     
        ],
     
        terms: [{ type: 'pattern', message: 'You must accept the terms and conditions.' }],
     
      };

    constructor(
        public formBuilder: FormBuilder,  //formu validaciones

        private navCtrl: NavController    //Navegación
    ) { }


    ngOnInit() {

        this.genders = [
            "Male",
            "Female"
        ];


        // validaciones
        this.validations_form = this.formBuilder.group({

            username: new FormControl('', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(5),
                Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
                Validators.required,

                this.validUsername(),

            ])),

            name: new FormControl('', Validators.required),

            lastname: new FormControl('', Validators.compose([ // si usas compose en la funcion apellidos(): ValidatorFn {...}
                Validators.required, 
                this.apellidos()

            ])),

            email: new FormControl('', Validators.compose([
                //Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+[@]{1}[a-zA-Z0-9-]+[.]{1}[a-zA-Z]+$')

            ])),

            gender: new FormControl(this.genders[0], Validators.required),

            terms: new FormControl(false, Validators.pattern('true'))

        });

    }

    apellidos(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            const value = control.value ? control.value.toLowerCase() : '';
            if(value == 'chang'){
                this.mcorreo = true;

                this.validations_form.get('email')?.setValidators([
                    Validators.required, 
                  ]);

                return{ saludo: true};
            }


        return null;
        };
    }


    // validacion personalizada username
    validUsername(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
          const value = control.value ? control.value.toLowerCase() : '';
          if (value === 'abc123' || value === 'cba321') {
            return { validUsername: true }; // Devuelve el error
          }
    
          return null; // Válido
    
        };
      }

    // metodo que envia formulario  
    onSubmit(values: any) {
        console.log(values);
        let navigationExtras: NavigationExtras = {
            queryParams: {
                user: JSON.stringify(values),
                numero: 3

            }

        };

        this.navCtrl.navigateForward('/user', navigationExtras); // a otra página

    }

}//end_class
