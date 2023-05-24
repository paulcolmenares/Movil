import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';

import { EjemplarService } from '../servicios/ejemplar.service';
import { MdevolService } from '../servicios/mdevol.service';

@Component({
  selector: 'app-anulacion-devo',
  templateUrl: './anulacion-devo.page.html',
  styleUrls: ['./anulacion-devo.page.scss'],
})
export class AnulacionDevoPage implements OnInit {
  lista: any=[];
  per: any=[];
  ejem: any=[];
  ddvol= new FormGroup({
    dvol: new FormControl ('',[]),
    ejem: new FormControl('', [])
  })
  constructor(private serv: MdevolService,public alerta: AlertController, private serv2: EjemplarService) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.mDevols);
   
    this.serv2.list().subscribe(data =>{ this.ejem=data._embedded.ejemplars;})
  }
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  Eliminaremos(){
    console.log(this.ddvol.value);
this.serv.eliminar(this.ddvol.value).subscribe();
  }
}
