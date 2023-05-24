import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, NavParams, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { AreaService } from '../servicios/area.service';
import { AreasService } from '../servicios/areas.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  lista: any=[];
  estado:any;
id: any;
filterPost='';
  constructor(private serv: AreaService, 
    private datos: AreasService, private router:Router,public alerta: AlertController ,
    private navCtrl: NavController, private msg : ToastController) {
     
     }
  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.areas);
  }
  ionViewWillEnter(){
    this.ngOnInit();
  }
 
  pdf2(element: any){
    var usu=new jsPDF('p', 'mm', 'letter') ;
    usu.setFont('times');
    usu.setFontSize(18);
     usu.setTextColor('blue');
    usu.text("Datos del Area",80,20);
     usu.setFontSize(12);
    usu.line(15,25,200,25);usu.line(15,25,15,80);
    usu.line(200,25,200,80 );usu.line(15,80,200,80);
   
    usu.text("Nombres: ", 20,30); 
    usu.text("Estado: ",20,50); 
    usu.setTextColor('black'); 
         usu.text(element.nombre,40,30); 
        // usu. (element.estado,50,60); 

    usu.save("Areas");
  }
  async Accion(){
    const toast=await this.msg.create({
      color: 'dark',duration:200,
      message: 'Añadir'
    });
    toast.present();
    this.navCtrl.navigateForward('/add-area');
  }
 
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-area'])
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar el Area?',
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
         header: 'Seguro de Habilitar al Area?' ,
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
  public eliminar(area:string){
    this.serv.borrar(area).subscribe(data => this.ngOnInit() );

  }
  getID(x:String) {
    return x.slice(x.lastIndexOf('/')+1);
  }
}