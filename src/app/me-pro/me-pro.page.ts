import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { MenusService } from '../servicios/menus.service';
import { ProcesoService } from '../servicios/proceso.service';

@Component({
  selector: 'app-me-pro',
  templateUrl: './me-pro.page.html',
  styleUrls: ['./me-pro.page.scss'],
})
export class MeProPage implements OnInit {
  lista: any=[];
  listas: any=[];
  menu_pro= new FormGroup({
    menu: new FormControl ('',[]),
    pro: new FormControl('', [])
  })
  constructor(private serv: MenusService, private serv1:ProcesoService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.menus);
    this.serv1.list().subscribe(data => this.listas=data._embedded.procesoes);
   }
   Agregar(){
    console.log(this.menu_pro.value);
    this.serv1.grabaremos(this.menu_pro.value).subscribe();
    this.cargar();
    }
      Eliminar(){
        console.log(this.menu_pro.value);
    this.serv1.eliminar(this.menu_pro.value).subscribe();
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
