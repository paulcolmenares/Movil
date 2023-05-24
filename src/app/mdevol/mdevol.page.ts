import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { MdevolService } from '../servicios/mdevol.service';
import { PresEjemplarService } from '../servicios/pres-ejemplar.service';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-mdevol',
  templateUrl: './mdevol.page.html',
  styleUrls: ['./mdevol.page.scss'],
})
export class MdevolPage implements OnInit {
  @ViewChild('form_devol') form_dev?: NgForm;
  mv: any=[];
  usu: any=[];

  constructor(private serv1 : PresEjemplarService,private serv2 : MdevolService,
    private serv3: UserService, public load: LoadingController ) { }

  ngOnInit() {
    this.serv1.list().subscribe(data =>{ console.info(data); this.mv=data._embedded.mPrestamoes;})
    this.serv3.list().subscribe(data =>{ console.info(data); this.usu=data._embedded.usuarios;})
  }
  Enviar(){
    this.serv2.grabar(this.form_dev?.value).subscribe();
     console.log(this.form_dev?.value);
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
