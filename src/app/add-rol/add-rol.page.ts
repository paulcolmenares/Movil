import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { RolService } from '../servicios/rol.service';
import { RolesService } from '../servicios/roles.service';

@Component({
  selector: 'app-add-rol',
  templateUrl: './add-rol.page.html',
  styleUrls: ['./add-rol.page.scss'],
})
export class AddRolPage implements OnInit {
  @ViewChild('form_rol') form_r?: NgForm;
  rol:any;
  constructor(private serv: RolService, public load: LoadingController,
    private datos: RolesService) { }

  ngOnInit() {
    this.serv.grabar(this.form_r?.value).subscribe();
    console.log(this.form_r?.value);
    this.rol=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_r?.value).subscribe();
    console.log(this.form_r?.value);
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
