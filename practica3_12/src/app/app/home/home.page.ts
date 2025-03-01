import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  validations_form!: FormGroup;

  // Mensajes de error personalizados
  validationMessages = {
    nombre: [
      { type: 'required', message: 'El nombre es obligatorio.'}
    ],
    apellidos:[
      { type: 'required', message: 'Los apellidos son obligatorio.'}
    ],
    fecha_nac:[
      { type: 'required', message: 'La fecha de nacimiento es obligatoria.'}
    ],
    dni: [
      { type: 'required', message: 'El dni es obligatorio.'},
      { type: 'minlength', message: 'El dni debe tener al menos 9 caracteres.' },
      { type: 'maxlength', message: 'El dni no puede ser mas largo de 9 caracteres' },
      { type: 'pattern', message: 'El dni debe tener 8 carácteres numericos, 1 guión y 1 letra'},
      { type: 'validDni', message: 'El dni es incorrecto.'}
    ]
  };
  constructor(
    public formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fecha_nac: new FormControl('', Validators.required),
      dni: new FormControl('', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^\d{8}-[A-Za-z]$/), 
        this.dniObligatorio('fecha_nac'),
        this.validDni(),
      ])),
    });
  }

  validDni(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value || ''; // Maneja valores nulos o vacíos

      if (!value) {
        return null; // No se valida nada si el campo está vacío (deja que otros validadores manejen 'required')
      }

      // Dividir el valor en número y letra
      const [numeros, letra] = value.split('-');
      const numero = parseInt(numeros, 10);

      // Letras válidas en el DNI español
      const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
      const resto = numero % 23;

      // Validar que la letra corresponda al número
      if (letras[resto] !== letra.toUpperCase()) {
        return { validDni: true }; // DNI incorrecto
      }
      return null; // DNI válido
    };
  }

  dniObligatorio(fechaControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const formGroup = control.parent; // Obtenemos el FormGroup al que pertenece el control
      if (!formGroup) {
        return null; // Si no hay un FormGroup, no hacemos ninguna validación
      }
  
      const fechaControl = formGroup.get(fechaControlName); // Obtenemos el control de la fecha de nacimiento
      if (!fechaControl || !fechaControl.value) {
        return null; // Si no hay valor en el control de fecha, no validamos el DNI
      }
  
      // Calculamos la edad basada en el año actual
      const fechaNacimiento = new Date(fechaControl.value); // Convertimos la fecha ingresada a un objeto Date
      const edad = new Date().getFullYear() - fechaNacimiento.getFullYear(); // Calculamos la edad en años
  
      // Verificamos si ya cumplió años este año (para los que tienen exactamente 18)
      const esMayorDeEdad =
        edad > 18 || // Es mayor de 18 años
        (edad === 18 && new Date() >= new Date(fechaNacimiento.setFullYear(new Date().getFullYear()))); // Cumplió 18 este año
  
      // Si es mayor de edad y el DNI está vacío o tiene solo espacios, se marca como inválido
      if (esMayorDeEdad && (!control.value || control.value.trim() === '')) {
        return { dniRequerido: true }; // Error: DNI obligatorio para mayores de edad
      }
  
      return null; // Sin errores: el DNI es válido o no es obligatorio
    };
  }
  
  onSubmit(values: any) {
    console.log(values);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        detail: JSON.stringify(values),
        numero: 3
      }
    };
    this.navCtrl.navigateForward('/detail', navigationExtras);
  }
}
