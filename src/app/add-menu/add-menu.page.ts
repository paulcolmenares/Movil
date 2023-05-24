import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { MenuesService } from '../servicios/menues.service';
import { MenusService } from '../servicios/menus.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.page.html',
  styleUrls: ['./add-menu.page.scss'],
})
export class AddMenuPage implements OnInit {
  @ViewChild('form_menu') form_me?: NgForm;
  menu:any;
  constructor(private serv : MenusService, public load: LoadingController,
     private datos : MenuesService) { }

  ngOnInit() {
    this.menu=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_me?.value).subscribe();
    console.log(this.form_me?.value);
    this.Loading();
  }
  async Loading() {
    const loading = await this.load.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor...',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
