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
esMayor: boolean = false;
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
      { type: 'required', message: 'Fecha es obligatorio.' },
    ],
    dni:[
      { type: 'dniInvalido', message: 'El dni NO es válido.' },
      { type: 'esMayorDeEdad', message: 'El dni es obligatorio por ser mayor de edad.' }
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
fechaN: new FormControl('', Validators.required),

//dni
dni: new FormControl('', this.validaDni()),

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

validaDni(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const fechaNControl = this.validations_form?.get('fechaN');
      if (!fechaNControl) return null; // Evitar errores si el control no existe

      const fechaN = new Date(fechaNControl.value);
      const hoy = new Date();

      // Calcular la edad
      let edad = hoy.getFullYear() - fechaN.getFullYear();
      const mes = hoy.getMonth() - fechaN.getMonth();
      const dia = hoy.getDate() - fechaN.getDate();
      if (mes < 0 || (mes === 0 && dia < 0)) edad--;

      // Si el usuario es mayor de edad, validar el DNI como obligatorio
      if (edad >= 18 && !control.value) {
        return { required: true }; // Error de obligatoriedad
      }else{
        this.mostrarBoton=true;
        this.esMayor=true;
      }

      // Validar formato del DNI si hay un valor
      const dniRegex = /^[0-9]{8}[A-Z]$/;
      if (control.value && !dniRegex.test(control.value)) {
        return { dniInvalido: true }; // Error de formato
      }

      return null; // Sin errores
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
