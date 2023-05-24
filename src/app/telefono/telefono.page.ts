import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { TelefonoService } from '../servicios/telefono.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-telefono',
  templateUrl: './telefono.page.html',
  styleUrls: ['./telefono.page.scss'],
})
export class TelefonoPage implements OnInit {
  lista: any=[];

  @ViewChild('form_telefono') form_tel?: NgForm;
  constructor( private serv: TelefonoService,private serv1: UsuarioService, 
    public load: LoadingController) { }

  ngOnInit() {
    this.serv1.list().subscribe(data => this.lista=data._embedded.personae);
  }
  Enviar(){
    this.serv.grabar(this.form_tel?.value).subscribe(data=> console.log(data));
    this.cargar();
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
}
