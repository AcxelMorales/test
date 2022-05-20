import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertglobal',
  templateUrl: './alertglobal.component.html',
  styleUrls: ['./alertglobal.component.css']
})
export class AlertglobalComponent implements OnInit {
closed = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
this.closed= false;
  }
}
