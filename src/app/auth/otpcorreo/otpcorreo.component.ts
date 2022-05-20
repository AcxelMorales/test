import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeInputComponent } from 'angular-code-input';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/registro';
import { CustomValidators } from 'src/app/providers/CustomValidators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-otpcorreo',
  templateUrl: './otpcorreo.component.html',
  styleUrls: ['./otpcorreo.component.css']
})
export class OTPCorreoComponent implements OnInit {
  @ViewChild('input') codeInput!:CodeInputComponent;

  public errores = [];
  public error:string;
  public success:string;
  public msjSuccess:boolean = false;
  public msjError:boolean = false;
  public cambiarEmailForm:FormGroup;
  public validContinue:boolean = false;
  public activeAlert = false;
  public activeLoader = false;
  public enamascarado:string;
  public code:number;

  public email:string;
  public password:string;

  public color = '#00405F';
  public seconds:number = 200;
  public data:any;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _serviceAuth:AuthService
  ) { }

  ngOnInit(): void {
    this.counter();

    this.data = JSON.parse(localStorage.getItem('dataOtp'));
    this.email = this.data.email;
    this.password = this.data.password;

    this.cambiarEmailForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.compose([
          CustomValidators.patternValidator(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,{
            soloEmail:true
          })
        ])
      ])
    })

  }

  private counter(): void {
    setInterval(() => {
      if(this.seconds === 0) return this.seconds = 0;
      this.seconds--;
    }, 1000);
  }

  onCodeCompleted(codigo){
    this.activeLoader = true;
    this._serviceAuth.validate_otp_email(this.email,Number(codigo)).subscribe( resp=>{
      if(resp.code == 200){
        this.validContinue = true;
      }else{
        this.codeInput.reset();
        this.msjError = true;
        this.error = resp.errors[0].msg ;
        this.ocultarMensajes();
      }
      this.activeLoader = false;
    },error=>{
      this.activeLoader = false;
      this.activeAlert = true;
      console.log(<any>error);
    });
  }



  renviarCodigo(){
    this.activeLoader = true;
    this._serviceAuth.envio_otp_email(this.email).subscribe(resp=>{
      if(resp.code == 200){
        this.msjSuccess = true;
        this.success = resp.message;
        this.seconds = 200;
        this.ocultarMensajes();
      }else{
        this.msjError = true;
        this.error = resp.errors[0].msg;
        this.ocultarMensajes();
      }
      this.activeLoader = false;
    },error=>{
      this.activeLoader = false;
      this.activeAlert = true;
      console.log(<any>error)
    });
  }

  cambiarEmail(){
    this.activeLoader = true;
    const { email } = this.cambiarEmailForm.value;
    this._serviceAuth.cambio_correo(this.email,email,this.password).subscribe(resp=>{
      if(resp.code == 200){
        this.email = email;
        this.msjSuccess = true;
        this.msjError = false; 
        this.seconds = 200;
        this.success = resp.message;
        this.ocultarMensajes();
      }else{
        this.msjError = true;
        this.error = resp.errors['msg'];
        this.ocultarMensajes();
      }
      this.activeLoader = false;
    },error=>{
      this.activeLoader = false;
      this.activeAlert = true;
      console.log(error);
    });
    this.cambiarEmailForm.reset();
  }

  continuar(){
    this._router.navigate(['/termino-proceso']);
  }

  ocultarMensajes(){
    setTimeout(() => {
      this.msjError = false;
      this.msjSuccess = false; 
    }, 5000);
  }

}
