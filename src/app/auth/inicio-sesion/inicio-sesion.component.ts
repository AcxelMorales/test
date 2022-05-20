import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../providers/CustomValidators';

import { AuthService } from '../../services/auth/auth.service';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {

  password;
  show = false;
  inicioSesion: FormGroup;
  color = '#00405F';
  activeload = false;
  activeAlert = false;
  msjError = false;
  msjSuccess = false;
  errores = [];
  success: string;

  constructor(private _authService: AuthService, private router: Router) {
    this.inicioSesion = new FormGroup({
      mail: new FormControl('', [
        Validators.compose([
          Validators.required,
          CustomValidators.patternValidator(
            /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            {
              hasMail: true,
            }
          ),
        ]),
      ]),
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
    });
  }

  ngOnInit(): void {
    this.password = 'password';
  }

  onSubmit(): void {
    this.activeload = true;
    const { mail: email, pass: password } = this.inicioSesion.value;
    this._authService.login(email, password).subscribe(
      (resp) => {
        if (resp.code == 200) {
          this.msjSuccess = true;
          setInterval(() => {
            this.msjSuccess = false;
          }, 5000);
          this.success = resp.message;
          this.router.navigate(['/termino-proceso']);
        } else {
          this.errores = resp.errors;
          this.msjError = true;
          setInterval(() => {
            this.msjError = false;
            this.activeload = false;
          }, 5000);
        }
        this.activeload = false;
      },
      (error) => {
        this.activeload = false;
        this.activeAlert = true;
        console.log(error);
      }
    );
  }

  olvidoPassword(): void {
    this.router.navigate(['/confirmar-correo']);
  }

  showPass(): void {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
