import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { AreaService } from '../servicios/area.service';
import { EditorialService } from '../servicios/editorial.service';
import { TextoService } from '../servicios/texto.service';
import { TextosService } from '../servicios/textos.service';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.page.html',
  styleUrls: ['./texto.page.scss'],
})
export class TextoPage implements OnInit {
  lista: any = [];
  edi: any=[];
  are: any=[];
  constructor(private serv: TextoService,private router:Router,
     private serv1: AreaService, private serv2 : EditorialService,
     public alerta: AlertController, private datos: TextosService) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista = data._embedded.textoes);
    this.serv1.list().subscribe(data =>{ console.info(data); this.are=data._embedded.areas;})
    this.serv2.list().subscribe(data =>{ 
      console.info(data); this.edi=data._embedded.editorials;})
  }
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-texto'])
  }
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos de la Texto", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);
    usu.text("Titulo: ", 20, 30);
    usu.text("Area: ", 20, 40);
    usu.text("Editorial: ", 20, 50);
    usu.text("Tipos: ", 20, 60);
    // usu.text("Estado: ", 20, 70);
    usu.setTextColor('black');
    usu.text(element.titulo, 40, 30);
    // usu. (element.estado,50,60); 
    usu.save("Texto");
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar Datos del Texto',
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
         header: 'Seguro de Habilitar el Texto?' ,
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
