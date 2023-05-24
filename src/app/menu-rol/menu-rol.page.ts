import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { MenusService } from '../servicios/menus.service';
import { RolService } from '../servicios/rol.service';

@Component({
  selector: 'app-menu-rol',
  templateUrl: './menu-rol.page.html',
  styleUrls: ['./menu-rol.page.scss'],
})
export class MenuRolPage implements OnInit {
  lista: any=[];
  listas: any=[];

  menu_rol= new FormGroup({
    rol: new FormControl ('',[]),
    menu: new FormControl('', [])
  })
  constructor(private serv : RolService,private serv1 : MenusService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.rols);
    this.serv1.list().subscribe(data => this.listas=data._embedded.menus);
  }
  Agregar(){
    console.log(this.menu_rol.value);
    this.serv.grabaremos(this.menu_rol.value).subscribe();
   this.cargar();
      }
      Eliminar(){
        console.log(this.menu_rol.value);
    this.serv.eliminar(this.menu_rol.value).subscribe();
   this.cargar1();
      }
      async cargar() {
        const loading = await this.load.create({
          cssClass: 'my-custom-class',
          message: 'Guardando...',
          duration: 300
        });
        await loading.present();
      
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
      async cargar1() {
        const loading = await this.load.create({
          cssClass: 'my-custom-class',
          message: 'Eliminando...',
          duration: 300
        });
        await loading.present();
      
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
}
