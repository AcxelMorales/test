import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  public numeroSelect:number = 100;
  public activedBotton:boolean = false;

  nosotros = [
    { id:1,nombre:'Oficina Bayport'},
    { id:2,nombre:'Reintegro'},
    { id:3,nombre:'Redes sociales'},
    { id:4,nombre:'Outsourcing'},
    { id:5,nombre:'Vantage'},
    { id:6,nombre:'Asesor freelance'},
    { id:7,nombre:'Volante'},
    { id:8,nombre:'elempleo.com'},
    { id:9,nombre:'Vincuventa'},
    { id:10,nombre:'Otro'},
  ]
              
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(numeroItem,index){
    this.activedBotton = true;
    this.numeroSelect = index;
  }

  enviarInformacion(){
    console.log('jcjskhc');
    
  }

}
