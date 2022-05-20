import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../providers/CustomValidators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-new-pssw',
  templateUrl: './new-pssw.component.html',
  styleUrls: ['./new-pssw.component.css'],
})
export class NewPsswComponent implements OnInit {
  password;
  passwordC;
  showValidaciones = false;
  show = false;
  showC = false;
  newPssw: FormGroup;
  color='#00405F';
  showV = false;
  load = false;
  alert = false;
  msjError = false;
  errores = [];
  public codigo: string;
  public email: string;
  public newPassword: any;

  constructor(private route: Router,
    private _authService: AuthService,
    private _route: ActivatedRoute
    ) {
    this.newPssw = new FormGroup(
      {
        pass: new FormControl('', [
          Validators.compose([
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
          ]),
        ]),
        confirmPass: new FormControl('', [Validators.required]),
      },
      CustomValidators.mustMatch('pass', 'confirmPass')
    );


  }

  showValid(event: any){
    if(event == ''){
      this.showV = false;
    } else {
      this.showV = true;
    }
  }

  ngOnInit(): void {
    this.password = 'password';
    this.passwordC = 'password';
    this.codigo = this._route.snapshot.params.codigo;
    this.email = this._route.snapshot.params.email;


  }

  showPass() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
      this.showV = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  showPassConf() {
    if (this.passwordC === 'password') {
      this.passwordC = 'text';
      this.showC = true;


    } else {
      this.passwordC = 'password';
      this.showC = false;
    }
  }



  confPssw() {
    this.load = true;
     const {pass: newPassword} = this.newPssw.value;
     this._authService.cambio_password(this.email, newPassword, this.codigo).subscribe(resp =>{
       if(resp.code == 200){
        this.route.navigate(['/confirmar-contrasena']);
       }else{
        this.errores = resp.errors;
        this.msjError = true;
        setInterval(()=>{
          this.msjError = false;
        }, 5000);
      }
      this.load = false;
     },error=>{
      this.load = false;
      this.alert = true;
       console.error(error);
     });
  }
}
