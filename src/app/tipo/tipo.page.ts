import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { TipoService } from '../servicios/tipo.service';
import { TiposService } from '../servicios/tipos.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss'],
})
export class TipoPage implements OnInit {
  lista: any = [];
  filterPost='';
  constructor(private serv: TipoService,public alerta: AlertController,
    private router:Router, private datos: TiposService) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista = data._embedded.tipoes);
    
  }
  public eliminar(tipo: string) {
    this.serv.borrar(tipo).subscribe(data => this.ngOnInit());

  }
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-tipo'])
  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos del Tipo del Texto", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);

    usu.text("Nombres: ", 20, 30);
    usu.text("Estado: ", 20, 50);
    usu.setTextColor('black');
    usu.text(element.nombre, 40, 30);
    // usu. (element.estado,50,60); 

    usu.save("Tipo");
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar Datos del Tipo ?',
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
         header: 'Seguro de Habilitar el Tipo?' ,
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
