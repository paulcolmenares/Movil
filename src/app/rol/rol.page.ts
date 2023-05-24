import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RolService } from '../servicios/rol.service';
import { RolesService } from '../servicios/roles.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.page.html',
  styleUrls: ['./rol.page.scss'],
})
export class RolPage implements OnInit {
  lista: any=[];
  filterPost='';
  constructor(private serv: RolService,private router:Router,
    public alerta: AlertController, private datos: RolesService) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.rols);
  }
  
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-rol'])
  }
  public eliminar(area:string){
    this.serv.borrar(area).subscribe(data => this.ngOnInit() );
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar el Rol?',
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
         header: 'Seguro de Habilitar el Rol?' ,
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
