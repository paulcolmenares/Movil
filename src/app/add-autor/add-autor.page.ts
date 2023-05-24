import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutorService } from '../servicios/autor.service';
import { AutoresService } from '../servicios/autores.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.page.html',
  styleUrls: ['./add-autor.page.scss'],
})
export class AddAutorPage implements OnInit {
  @ViewChild('form_autor') form_aut?: NgForm;
  autor:any;
  constructor(private serv: AutorService, public load: LoadingController,
    private datos: AutoresService) { }

  ngOnInit() {
    this.autor=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_aut?.value).subscribe();
    console.log(this.form_aut?.value);
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
