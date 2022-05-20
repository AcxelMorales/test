import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomValidators } from '../../providers/CustomValidators';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-conf-mail-pss',
  templateUrl: './conf-mail-pss.component.html',
  styleUrls: ['./conf-mail-pss.component.css']
})
export class ConfMailPssComponent implements OnInit {
  confMailPass: FormGroup;
  color='#00405F';
  activeLoad  = false;
  activeAlert = false;
  msjError = false;
  msjSuccess = false;
  errores: string;

  constructor(private route: Router,
   private _authService: AuthService,
   private _route: ActivatedRoute) {
    this.confMailPass = new FormGroup({
      mail: new FormControl('', [
        Validators.required,
        CustomValidators.patternValidator(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,{
          hasMail:true
        })
      ]),
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.activeLoad = true;
    const {mail: email} = this.confMailPass.value;

    this._authService.envio_otp(email).subscribe(
      resp =>{
        if(resp.code == 200){
          this.route.navigate(['/validar-correo', email]);
        }else{
            this.errores = resp.error;
            this.msjError = true;
            setInterval(()=>{
              this.msjError = false;
            }, 5000);
        }
        this.activeLoad = false;
      }, error=>{
        this.activeLoad = false;
        this.activeAlert = true;
        console.error(error);
      }
    )


  }

}
