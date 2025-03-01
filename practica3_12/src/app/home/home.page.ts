import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

mostrarBoton: boolean = false; // ocultar boton

validations_form!: FormGroup;
genders?: Array<string>;

// Mensajes de error personalizados
validationMessages = {
    nombre: [
      { type: 'required', message: 'El nombre es obligatorio.' },
      { type: 'minlength', message: 'El nombre debe tener más de 5 letras.' },
      { type: 'maxlength', message: 'El nombre debe tener máximo 25 caracteres.' },
      { type: 'pattern', message: 'El nombre de usuario debe comenzar con una letra y contener solo letras o números.' },
      { type: 'validUsername', message: 'Usuario no válido.' },
    ],
    apellidos: [
      { type: 'required', message: 'Apellido es obligatorio.' },
    ],
    fechaN:[
      { type: 'noEsMayorDeEdad', message: 'Debes ser mayor de 18 años'},
      { type: 'required', message: 'Fecha es obligatorio.' },
    ],
    terms: [
      { type: 'required', message: 'terminos es obligatorio.' },
      { type: 'pattern', message: 'Debes aceptar los terminos y condiciones.' }
    ],
  };
  
  

constructor(

public formBuilder: FormBuilder,
private navCtrl: NavController

) {}


ngOnInit() {


this.genders = [
"Male",
"Female"
];
this.validations_form = this.formBuilder.group({
nombre: new FormControl('', Validators.compose([
Validators.maxLength(25),
Validators.minLength(5),
Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]+$'),
Validators.required,
this.validUsername(),
])),

apellidos: new FormControl('', Validators.required),


//fecha
fechaN: new FormControl('', Validators.compose([
  Validators.required,
  this.mayorEdad(),
])),

terms: new FormControl(false, Validators.compose([Validators.required, Validators.pattern('true')])),

});
}

validUsername(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value ? control.value.toLowerCase() : '';
      if (value === 'abc123' || value === 'cba321') {
        return { validUsername: true }; // Devuelve el error
      }
      return null; // Válido
    };
  }

  mayorEdad(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const fechaN = new Date(control.value); // Fecha introducida en el control
    const hoy = new Date(); // Fecha actual

    // Calcular la edad en años
    let edad = hoy.getFullYear() - fechaN.getFullYear();
    const mes = hoy.getMonth() - fechaN.getMonth();
    const dia = hoy.getDate() - fechaN.getDate();

    // Ajustar si el mes y día de nacimiento aún no han pasado este año
    if (mes < 0 || (mes === 0 && dia < 0)) {
      edad--;
    }

    if(edad >= 18){
      this.mostrarBoton=true;
    }

    
    return edad >= 18 ? null : { noEsMayorDeEdad: true };
  };

}  
    
// recibe los valores del formularios
onSubmit(values: any){
 console.log(values);
 let navigationExtras: NavigationExtras = {
 queryParams: {
 user: JSON.stringify(values),
 }
 };
 this.navCtrl.navigateForward('/details', navigationExtras); // aqui indicamos la pagina
 }
  }//end_class
