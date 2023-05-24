import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { EditorialService } from '../servicios/editorial.service';
import { EditorialesService } from '../servicios/editoriales.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.page.html',
  styleUrls: ['./editorial.page.scss'],
})
export class EditorialPage implements OnInit {
 
public lista: any=[];
public loadedGoalList: any[];
filterPost='';
  constructor(private serv: EditorialService,private router:Router,
    public alerta: AlertController, private datos: EditorialesService,
    private msg : ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista = data._embedded.editorials);
   
  }
  async Accion(){
    const toast=await this.msg.create({
      color: 'dark',duration:200,
      message: 'Añadir'
    });
    toast.present();
    this.navCtrl.navigateForward('/add-editorial');
  }
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-editorial'])
  }
  initializaItems(): void{
    this.lista=this.loadedGoalList;
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar Datos de la Editorial?',
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
         header: 'Seguro de Habilitar la Editorial?' ,
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
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos de la Editorial", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);
    usu.text("Nombres: ", 20, 30);
    usu.text("Estado: ", 20, 50);
    usu.setTextColor('black');
    usu.text(element.nombre, 40, 30);
    // usu. (element.estado,50,60); 
    usu.save("Editoriales");
  }
}
