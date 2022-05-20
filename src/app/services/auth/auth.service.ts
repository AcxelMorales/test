import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponseUser,User } from '../../interfaces/registro';
import { InLogin } from './inLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiurl = `${environment.ApiConecta}`

  constructor(private http: HttpClient) { }

  // auth

  login(email: string, password: string):Observable<InLogin>{
    return this.http.post<InLogin>(this.apiurl+'login',{email, password})
  }

  crear_cuenta(params:User):Observable<IResponseUser>{
    return this.http.post<IResponseUser>(this.apiurl+'create-account',params)
  }


  // account
  cambio_password(email: string, newPassword: string, code: string):Observable<IResponseUser>{
    return this.http.put<IResponseUser>(this.apiurl+`change-password/${email}`,{newPassword, code});
  }

  cambio_correo(actual:string,email:string,password:string):Observable<IResponseUser>{
    return this.http.put<IResponseUser>(this.apiurl+`change-email/${actual}`,{password,email});
  }

  cambio_celular(email:string):Observable<any>{
    return this.http.put(this.apiurl+`/change-cellphone/${email}`,{})
  }


  // OTPmail

  envio_otp_email(email:string):Observable<IResponseUser>{
    return this.http.get<IResponseUser>(this.apiurl+`generate-otp-email/${email}`);
  }

  validate_otp_email(email:string, code:number):Observable<IResponseUser>{
    return this.http.get<IResponseUser>(this.apiurl+`validate-otp-email/${email}?code=${code}`);
  }


  // OTPsms

  envio_otp_celular(email:string):Observable<any>{
    return this.http.get(this.apiurl+`/generate-otp-sms/${email}`,{})
  }

  validate_otp_celular(email:string, code:any):Observable<any>{
    return this.http.get(this.apiurl+`/validate-otp-sms/${email}?code=${code}`,{})
  }


  // OTP

  envio_otp(email:string):Observable<IResponseUser>{
    return this.http.get<IResponseUser>(this.apiurl+`generate-otp/${email}`);
  }

  validate_otp(email:string, code:number):Observable<any>{
    return this.http.get<IResponseUser>(this.apiurl+`validate-otp/${email}?code=${code}`);
  }


  }
