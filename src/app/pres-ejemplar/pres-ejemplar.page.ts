import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { MprestamoService } from '../servicios/mprestamo.service';


@Component({
  selector: 'app-pres-ejemplar',
  templateUrl: './pres-ejemplar.page.html',
  styleUrls: ['./pres-ejemplar.page.scss'],
})
export class PresEjemplarPage implements OnInit {
  lista: any=[];
  constructor(private serv: MprestamoService,public alerta: AlertController) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.mPrestamoes);
  }
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos de Prestamo del Ejemplar", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 100);
    usu.line(200, 25, 200, 100); usu.line(15, 100, 200, 100);
    usu.text("Codigo: ", 20, 30);
    usu.text("Fecha: ", 20, 40);
    usu.text("Estudiante: ", 20, 50);
    usu.text("Fecha Inicio: ", 20, 60);
    usu.text("Fecha Fin: ", 20, 70);
    usu.text("Tipo Prestamo: ", 20, 80);
     usu.text("Estado: ", 20, 90);
    usu.setTextColor('black');
   // usu.text(element.codp, 40, 30);
    usu.text(element.fecha, 40, 40);
    usu.text(element.fini, 45, 60);
    usu.text(element.ffin, 40, 70);
   // usu.text(element.tipopres, 40, 30);
    // usu. (element.estado,50,60); 
    usu.save("Prestamo");
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar Dato de la Persona?',
      buttons:[{
        text: 'Aceptar' ,
        handler: () => {
          this.eliminar(element._links.self.href),
         console.log('Borrado');
       }
       },{ 
          text: 'Cancelar',
           handler: () => {
               console.log('Cancelado');
             }
         }]
    });
    miAlerta.present();
    
   }

  async  modificar(element: any){  
    let miAlerta= await this.alerta.create({   
         header: 'Seguro de Habilitar a la Persona?' ,
      buttons:[{
        text: 'Aceptar' ,
        handler: () => {
          if(element.estado==1){
            element.estado=0;
          }else
          element.estado=1;
         console.log(element.estado);
       }
       },{ 
          text: 'Cancelar',
           handler: () => {
               console.log('Cancelado');
             }
         }]
    });
    miAlerta.present();
    
   }
}
