import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AreaService } from '../servicios/area.service';
import { EditorialService } from '../servicios/editorial.service';
import { TextoService } from '../servicios/texto.service';
import { TextosService } from '../servicios/textos.service';

@Component({
  selector: 'app-add-texto',
  templateUrl: './add-texto.page.html',
  styleUrls: ['./add-texto.page.scss'],
})
export class AddTextoPage implements OnInit {
  @ViewChild('form_texto') form_text?: NgForm;
  edi: any=[];
  are: any=[];
  text:any;
  constructor(private serv: TextoService, private serv1 : AreaService ,
    private serv2 :EditorialService,private datos: TextosService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv1.list().subscribe(data =>{ console.info(data); this.are=data._embedded.areas;})
    this.serv2.list().subscribe(data =>{ 
      console.info(data); this.edi=data._embedded.editorials;})
      this.text=this.datos.get();
  }
  Enviar(){
    this.serv.grabar(this.form_text?.value).subscribe();
    console.log(this.form_text?.value);
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
