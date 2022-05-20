import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  public datos: FormGroup;
  public activeDocumento:boolean = false;
  public activeOpcionesGenero:boolean = false;
  public activeOpcionesDocumento:boolean = false;
  public genero:string = 'Seleciona la opción';
  public documento:string = 'Seleciona la opción';

  constructor() {
    this.datos = new FormGroup({
      tipodocumento: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
      numerodocumento: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
      digitoverificador: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
      genero: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
      departamento: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
      ciudad: new FormControl('', [
        Validators.compose([
          Validators.required
        ]),
      ]),
    });
  }

  ngOnInit(): void {

  }

  mostrarDocumento(){
    const { tipodocumento } = this.datos.value;
    if(tipodocumento == 3){
      this.activeDocumento = true
    }else{
      this.activeDocumento = false
    }
  }
  selectedOptionDocumento(valor,cadena){
    this.datos.controls.tipodocumento.setValue(valor);
    this.activeOpcionesDocumento = false;
    this.documento = cadena;
    
    if(valor === 3){
      this.activeDocumento = true;
    }else{
      this.activeDocumento = false;
    }
  }

  selectedOptionGenero(valor,cadena){
    this.datos.controls.genero.setValue(valor);
    this.activeOpcionesGenero = false;
    this.genero = cadena;
  }


  busqueda(){

  }

  onSubmit(){
    console.log(this.datos.value);
    
  }
}
