import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conf-new-pss',
  templateUrl: './conf-new-pss.component.html',
  styleUrls: ['./conf-new-pss.component.css']
})
export class ConfNewPssComponent {

  color: string = '#00405F';

  constructor(private route: Router) { }

  onSubmit(): void {
    this.route.navigate(['/inicio-sesion']);
  }

}
