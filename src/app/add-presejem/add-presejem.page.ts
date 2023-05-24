import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { DatosService } from '../servicios/datos.service';
import { MprestamoService } from '../servicios/mprestamo.service';



@Component({
  selector: 'app-add-presejem',
  templateUrl: './add-presejem.page.html',
  styleUrls: ['./add-presejem.page.scss'],
})
export class AddPresejemPage implements OnInit {
  @ViewChild('form_prestamo') form_prest?: NgForm;
  dat: any=[];
  constructor(private serv: MprestamoService,private serv1: DatosService,
    public load: LoadingController ) { }

  ngOnInit() {
    this.serv1.list().subscribe(data =>{ console.info(data); this.dat=data._embedded.datoes;})
  }
Enviar(){
    this.serv.grabar(this.form_prest?.value).subscribe();
    console.log(this.form_prest?.value);
    this.Loading();
  }
  getID(x:string):string {
    return x.substr(x.lastIndexOf("/")+1,x.length);
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
