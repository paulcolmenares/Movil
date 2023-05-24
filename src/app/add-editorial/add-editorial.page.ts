import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { EditorialService } from '../servicios/editorial.service';
import { EditorialesService } from '../servicios/editoriales.service';

@Component({
  selector: 'app-add-editorial',
  templateUrl: './add-editorial.page.html',
  styleUrls: ['./add-editorial.page.scss'],
})
export class AddEditorialPage implements OnInit {
  @ViewChild('form_editorial') form_edi?: NgForm;
  edit:any;
  constructor(private serv :EditorialService,public load: LoadingController,
    private datos: EditorialesService ) { 
  }

  ngOnInit() {
    this.edit=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_edi?.value).subscribe();
    console.log(this.form_edi?.value);
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
