import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

import { CodeInputComponent } from 'angular-code-input';

@Component({
  selector: 'app-valid-phone-mail',
  templateUrl: './valid-phone-mail.component.html',
  styleUrls: ['./valid-phone-mail.component.css'],
})
export class ValidPhoneMailComponent implements OnInit {

  alertS = false;
  showAlert;
  phoneMailOTP: FormGroup;
  seconds: number = 200;
  interval: any;
  activeLoad = false;
  activeAlert = false;
  msjErrors = false;
  msjSuccesss = false;
  erroresenv = [];
  successenv: string;
  errores = [];
  successcod: string;
  public msjSuccess: boolean = false;
  public msjError: boolean = false;
  color = '#00405F';
  public activeContinua: boolean = false;
  public email: string;
  public codigo: number;

  @ViewChild('input') codeInput!: CodeInputComponent;

  constructor(
    private route: Router,
    private _authService: AuthService,
    private _route: ActivatedRoute
  ) {
    this.phoneMailOTP = new FormGroup({
      phoMaiOTP: new FormControl('', [
        // Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.email = this._route.snapshot.params.email;
    this.counter();
  }

  private counter(): void {
    this.interval = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds = 0;
        return;
      }
      this.seconds--;
    }, 1000);
  }

  onCodeCompleted(event) {
    this.activeLoad = true;
    this.codigo = event;
    this._authService.validate_otp(this.email, this.codigo).subscribe(
      (resp) => {
        console.log(resp);

        if (resp.code == 200) {
          this.activeContinua = true;
          this.successcod = resp.message;
          this.msjSuccesss = true;
          setInterval(() => {
            this.msjSuccesss = false;
          }, 5000);
        } else {
          this.codeInput.reset();
          this.msjError = true;
          this.errores = resp.errors;
          setInterval(() => {
            this.msjError = false;
          }, 5000);
        }
        this.activeLoad = false;
      },
      (error) => {
        this.activeLoad = false;
        this.activeAlert = true;
        console.error(error);
      }
    );
  }

  sendOTP() {
    this.alertS = true;
  }

  onSubmit() {
    this.route.navigate(['/nueva-contrasena', this.email, this.codigo]);
  }

  renviarOtp() {
    this.activeLoad = true;
    this._authService.envio_otp(this.email).subscribe(
      (resp) => {
        if (resp.code == 200) {
          this.successenv = resp.message;
          this.msjSuccess = true;
          this.seconds = 200;
          setInterval(() => {
            this.msjSuccess = false;
          }, 5000);
        } else {
          this.errores = resp.errors;
          this.msjError = true;
          setInterval(() => {
            this.msjError = false;
          }, 5000);
        }
        this.activeLoad = false;
      },
      (error) => {
        this.activeLoad = false;
        this.activeAlert = true;
        console.error(error);
      }
    );
  }

}
