import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { TipoService } from '../servicios/tipo.service';
import { TiposService } from '../servicios/tipos.service';

@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.page.html',
  styleUrls: ['./add-tipo.page.scss'],
})
export class AddTipoPage implements OnInit {
  @ViewChild('form_tipo') form_tip?: NgForm;
  tipo:any;


  constructor(private serv : TipoService, public load: LoadingController,
    private datos: TiposService) { }

  ngOnInit() {
    this.tipo=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_tip?.value).subscribe();
    console.log(this.form_tip?.value);
    this.Loading();
    
  }
  async Loading(): Promise<void> {
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
