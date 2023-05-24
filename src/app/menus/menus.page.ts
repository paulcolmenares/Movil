import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuesService } from '../servicios/menues.service';
import { MenusService } from '../servicios/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.page.html',
  styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {
  lista: any=[];
  filterPost='';
  constructor(private serv:MenusService,public alerta: AlertController,
    private datos: MenuesService, private router:Router) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.menus);
  }
  public eliminar(area:string){
    this.serv.borrar(area).subscribe(data => this.ngOnInit() );

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
   editar(data:any){
    this.datos.set(data);
    this.router.navigate(['/add-menu'])
  
}

}
