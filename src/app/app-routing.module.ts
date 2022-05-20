import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { OtpcelularComponent } from './auth/otpcelular/otpcelular.component';
import { OTPCorreoComponent } from './auth/otpcorreo/otpcorreo.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ConfMailPssComponent } from './auth/conf-mail-pss/conf-mail-pss.component';
import { NewPsswComponent } from './auth/new-pssw/new-pssw.component';
import { ConfNewPssComponent } from './auth/conf-new-pss/conf-new-pss.component';
import { ValidPhoneMailComponent } from './auth/valid-phone-mail/valid-phone-mail.component';
import { FinFlujoComponent } from './auth/fin-flujo/fin-flujo.component';
import { AlertglobalComponent } from './components/alertglobal/alertglobal.component';
import { PwaComponent } from './pwa/pwa.component';
import { DatosComponent } from './pwa/datos/datos.component';
import { ProcesorevicionComponent } from './pwa/procesorevicion/procesorevicion.component';
import { DatosenviadosComponent } from './pwa/datosenviados/datosenviados.component';
import { RevisandoInformacionComponent } from './pwa/revisando-informacion/revisando-informacion.component';
import { NosotrosComponent } from './pwa/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: `registro` },
      { path: `registro`, component: RegistroComponent },
      { path: `inicio-sesion`, component: InicioSesionComponent },
      { path: `correo`, component: OTPCorreoComponent },
      // { path: `celular`, component: OtpcelularComponent },
      { path: `confirmar-correo`, component: ConfMailPssComponent },
      { path: `nueva-contrasena/:email/:codigo`, component: NewPsswComponent },
      { path: `confirmar-contrasena`, component: ConfNewPssComponent },
      { path: `validar-correo/:email`, component: ValidPhoneMailComponent },
      { path: `termino-proceso`, component: FinFlujoComponent },
    ],
  },
  {
    path: '',
    component: PwaComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: `datos` },
      { path: `datos`, component: DatosComponent },
      { path: `procesorevicion`, component: ProcesorevicionComponent },
      { path: `datosenviados`, component: DatosenviadosComponent },
      { path: `revisando`, component: RevisandoInformacionComponent },
      { path: `nosotros`, component: NosotrosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
