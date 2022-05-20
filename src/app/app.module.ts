import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PwaComponent } from './pwa/pwa.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { FooterComponent } from './components/footer/footer.component';
import { OTPCorreoComponent } from './auth/otpcorreo/otpcorreo.component';
import { CodeInputModule } from 'angular-code-input';
import { OtpcelularComponent } from './auth/otpcelular/otpcelular.component';
import { ConfMailPssComponent } from './auth/conf-mail-pss/conf-mail-pss.component';
import { NewPsswComponent } from './auth/new-pssw/new-pssw.component';
import { RouterModule } from '@angular/router';
import { ConfNewPssComponent } from './auth/conf-new-pss/conf-new-pss.component';
import { HeaderDeskComponent } from './components/header-desk/header-desk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidPhoneMailComponent } from './auth/valid-phone-mail/valid-phone-mail.component';
import { FinFlujoComponent } from './auth/fin-flujo/fin-flujo.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertglobalComponent } from './components/alertglobal/alertglobal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CorreoPipe } from './pipes/correo.pipe';
import { DatosComponent } from './pwa/datos/datos.component';
import { HeaderPwaComponent } from './components/header-pwa/header-pwa.component';
import { ProcesorevicionComponent } from './pwa/procesorevicion/procesorevicion.component';
import { DatosenviadosComponent } from './pwa/datosenviados/datosenviados.component';
import { RevisandoInformacionComponent } from './pwa/revisando-informacion/revisando-informacion.component';
import { NosotrosComponent } from './pwa/nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PwaComponent,
    InicioSesionComponent,
    RegistroComponent,
    FooterComponent,
    OTPCorreoComponent,
    OtpcelularComponent,
    ConfMailPssComponent,
    NewPsswComponent,
    ConfNewPssComponent,
    HeaderDeskComponent,
    FooterComponent,
    ValidPhoneMailComponent,
    FinFlujoComponent,
    LoaderComponent,
    AlertglobalComponent,
    CorreoPipe,
    DatosComponent,
    HeaderPwaComponent,
    ProcesorevicionComponent,
    DatosenviadosComponent,
    RevisandoInformacionComponent,
    NosotrosComponent,
  ],
  imports: [
    CodeInputModule.forRoot({
      codeLength: 6,
      isCharsCode: true,
      code: '',
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
