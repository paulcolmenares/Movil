import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { EjemplarService } from '../servicios/ejemplar.service';
import { EjemplaresService } from '../servicios/ejemplares.service';

@Component({
  selector: 'app-add-ejemplar',
  templateUrl: './add-ejemplar.page.html',
  styleUrls: ['./add-ejemplar.page.scss'],
})
export class AddEjemplarPage implements OnInit {
  @ViewChild('form_ejemplar') form_ejem?: NgForm;

  ejem:any;
  constructor(private serv: EjemplarService, public load: LoadingController,
    private datos: EjemplaresService ) { }

  ngOnInit() {
    this.ejem=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_ejem?.value).subscribe();
    console.log(this.form_ejem?.value);
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
