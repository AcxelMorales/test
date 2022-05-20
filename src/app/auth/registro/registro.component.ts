import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/providers/CustomValidators';
import { Router } from '@angular/router';
import { Error, User } from 'src/app/interfaces/registro';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public crearCuentaForm:FormGroup;
  public isNombreValido:boolean = false;
  public correoExistente:boolean = false;
  public numeroExistente:boolean = false;
  public numeroDeError:number = 0;
  public showValidaciones:boolean = false;
  public activeAlert = false;
  public email:string;
  public celular:string

  color='#00405F';
  show:boolean = true;
  load = false;

  constructor(
    private _router:Router,
    private _authService:AuthService
  ) { }

  ngOnInit(): void {
    this.formularioCrearCuenta();
  }

  formularioCrearCuenta(){
    this.crearCuentaForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z ]+$/i),
      ]),
      correo: new FormControl('', [
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,{
            soloMail:true
          })
        ])
      ]),
      celular: new FormControl('', [
        Validators.compose([
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
          CustomValidators.patternValidator(/^[0-9]+$/i,{
            numbers:true,
          }),
          CustomValidators.patternValidator(/^3/i,{
            onlyNumber:true
          })
        ])
      ]),
      pass: new FormControl('', Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, {
          hasNumber: true,
        }),
        CustomValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true,
        }),
        CustomValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true,
        }),
        CustomValidators.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true,
          }
        ),
        Validators.minLength(8),
      ])),
    });
  }

  showPassword(){
    this.show = !this.show;
  }

  validarCelular(event){
    if(this.crearCuentaForm.controls.celular.errors.numbers){
      this.numeroDeError = 1
      return
    }
    if(this.crearCuentaForm.controls.celular.errors.onlyNumber){
      this.numeroDeError = 2
      return
    }
    if( event.length != 0 && event.length < 10){
      this.numeroDeError = 3;
      return
    }
    this.numeroDeError = 0;
  }

  onCheckError() {
    const { nombre, celular, correo, pass } = this.crearCuentaForm.controls;

    if (pass.touched || nombre.touched || celular.touched || correo.touched) {
      document.querySelector('.content').classList.add('helper-content-lap');
    }

    // const mediaqueryListTablet = window.matchMedia('(max-width: 768px)');
    // const mediaqueryListMobile = window.matchMedia('(max-width: 450px)');

    // if (mediaqueryListTablet.matches) {
    //   if (pass.touched || nombre.touched || celular.touched || correo.touched) {
    //     document.getElementById('img-woman').classList.add('helper-svgs-error-input');
    //     document.getElementById('trazado').classList.add('helper-svgs-error-input');
    //     document.querySelector('.content').classList.add('helper-content-tablet');
    //   } else {
    //     document.getElementById('img-woman').classList.remove('helper-svgs-error-input');
    //     document.getElementById('trazado').classList.remove('helper-svgs-error-input');
    //     document.querySelector('.content').classList.remove('helper-content-tablet');
    //   }
    // }

    // if (mediaqueryListMobile.matches) {
    //   if (pass.touched || nombre.touched || celular.touched || correo.touched) {
    //     document.getElementById('img-woman').classList.add('helper-svgs-error-input-mobile');
    //     document.getElementById('trazado').classList.add('helper-svgs-error-input-mobile');
    //     document.querySelector('.content').classList.add('helper-content-mobile');
    //   } else {
    //     document.getElementById('img-woman').classList.remove('helper-svgs-error-input-mobile');
    //     document.getElementById('trazado').classList.remove('helper-svgs-error-input-mobile');
    //     document.querySelector('.content').classList.remove('helper-content-mobile');
    //   }
    // }
  }

  mostrarValidaciones(event) {
    const mediaqueryListLap = window.matchMedia('(max-width: 1440px)');
    const mediaqueryListDesk = window.matchMedia('(max-width: 1025px)');
    const mediaqueryListTablet = window.matchMedia('(max-width: 768px)');
    const mediaqueryListMobile = window.matchMedia('(max-width: 450px)');

    if (event == '') {
      this.showValidaciones = false;
      // if(mediaqueryListLap.matches){
      //   document.querySelector('.content').classList.remove('helper-content-lap');
      // }

      // if(mediaqueryListDesk.matches){
      //   document.querySelector('.content').classList.remove('helper-content');
      // }

      // if (mediaqueryListTablet.matches) {
      //   document.getElementById('img-woman').classList.remove('helper-svgs-error-rules');
      //   document.getElementById('trazado').classList.remove('helper-svgs-error-rules');
      //   document.querySelector('.content').classList.remove('helper-content-tablet-input');
      // }

      // if (mediaqueryListMobile.matches) {
      //   document.getElementById('img-woman').classList.remove('helper-svgs-input-mobile');
      //   document.getElementById('trazado').classList.remove('helper-svgs-input-mobile');
      //   document.querySelector('.content').classList.remove('helper-content-mobile-valid');
      // }
    } else {
      this.showValidaciones = true;

      document.querySelector('.content').classList.add('helper-content-lap');
      if(mediaqueryListLap.matches){
      }

      // if(mediaqueryListDesk.matches){
      //   document.querySelector('.content').classList.add('helper-content');
      // }

      // if (mediaqueryListTablet.matches) {
      //   document.getElementById('img-woman').classList.add('helper-svgs-error-rules');
      //   document.getElementById('trazado').classList.add('helper-svgs-error-rules');
      //   document.querySelector('.content').classList.add('helper-content-tablet-input');
      // }

      // if (mediaqueryListMobile.matches) {
      //   document.getElementById('img-woman').classList.add('helper-svgs-input-mobile');
      //   document.getElementById('trazado').classList.add('helper-svgs-input-mobile');
      //   document.querySelector('.content').classList.add('helper-content-mobile-valid');
      // }
    }
  }

  crearCuenta(){
    this.load = true;
    const {celular:cellphone,correo:email,nombre:completeNames,pass:password } = this.crearCuentaForm.value;

    let parametros:User = {
        email,
        password,
        cellphone,
        completeNames
    }

    this._authService.crear_cuenta(parametros).subscribe(
      resp=>{
        console.log(resp);

        if(resp.code == 200){
          localStorage.setItem('dataOtp',JSON.stringify({email,password}));
          this._router.navigate(['/correo']);
        }else{
          this.validacionDeErrores(resp.errors);
        }
        this.load = false;
      },error=>{
        this.activeAlert = true;
        this.load = false;
        console.log(<any>error);
      }
    );

  }

  validacionDeErrores(errores:Error[]){
    errores.map( value =>{
        switch(value.param){
          case 'email':
            this.correoExistente = true;
            this.email = value.msg;
            setTimeout(()=>{
              this.correoExistente = false
            },10000);
            break;

          case 'cellphone':
            this.numeroExistente = true;
            this.celular = value.msg;
            setTimeout(()=>{
              this.numeroExistente = false
            },10000)
            break;
        }
    })
  }


}
