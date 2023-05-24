import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { MdevolService } from '../servicios/mdevol.service';

import { MprestamoService } from '../servicios/mprestamo.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.page.html',
  styleUrls: ['./devolucion.page.scss'],
})
export class DevolucionPage implements OnInit {
  lista: any=[];
  constructor(private serv: MdevolService, public alerta: AlertController ) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.mDevols);
  }
  async delete(element: any) {
    let miAlerta = await this.alerta.create({
      header: 'Seguro de Eliminar Dato de la Devolucion?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.eliminar(element._links.self.href),
            console.log('Borrado');
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });
    miAlerta.present();

  }
  public eliminar(usu: string) {
    this.serv.borrar(usu).subscribe(data => this.ngOnInit());
  }
}
