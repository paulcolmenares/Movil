import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AreaService } from '../servicios/area.service';
import { AreasService } from '../servicios/areas.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.page.html',
  styleUrls: ['./add-area.page.scss'],
})
export class AddAreaPage implements OnInit {
  @ViewChild('form_area') form_are?: NgForm;

  area:any;
  constructor(private serv : AreaService, private datos:AreasService,
    public load: LoadingController) { }

  ngOnInit() {
   this.area=this.datos.get();
  
  }
  Enviar(){
    this.serv.grabar(this.form_are?.value).subscribe();
    console.log(this.form_are?.value);
    this.Loading();
  }
  async Loading() {
    const loading = await this.load.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor...',
      duration: 600
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
