import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDeskComponent } from './header-desk/header-desk.component';
import { FooterComponent } from './footer/footer.component';
import { OtpCorreoModalComponent } from './otp-correo-modal/otp-correo-modal.component';
import { OtpCelularModalComponent } from './otp-celular-modal/otp-celular-modal.component';
import { AlertglobalComponent } from './alertglobal/alertglobal.component';
import { HeaderPwaComponent } from './header-pwa/header-pwa.component';



@NgModule({
  declarations: [HeaderDeskComponent, FooterComponent, OtpCorreoModalComponent, OtpCelularModalComponent, AlertglobalComponent, HeaderPwaComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderDeskComponent, FooterComponent]
})
export class ComponentsModule { }
