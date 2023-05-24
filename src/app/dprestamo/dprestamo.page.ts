import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { EjemplarService } from '../servicios/ejemplar.service';
import { PresEjemplarService } from '../servicios/pres-ejemplar.service';

@Component({
  selector: 'app-dprestamo',
  templateUrl: './dprestamo.page.html',
  styleUrls: ['./dprestamo.page.scss'],
})
export class DprestamoPage implements OnInit {
  lista: any=[];
  listas: any=[];
  dprestamo = new FormGroup({
    pres: new FormControl ('',[]),
    ejem: new FormControl('', [])
  })
  constructor(private serv4: EjemplarService, private serv5: PresEjemplarService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv4.list().subscribe(data =>{ this.listas=data._embedded.ejemplars;})
    this.serv5.list().subscribe(data => this.lista=data._embedded.mPrestamoes);
  }
  Agregar(){
    console.log(this.dprestamo.value);
    this.serv4.grabaremos(this.dprestamo.value).subscribe();
    this.cargar();
   
      }
  Eliminaron(){
        console.log(this.dprestamo.value);
    this.serv4.eliminar(this.dprestamo.value).subscribe();
    this.cargar1();
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
      async cargar1() {
        const loading = await this.load.create({
          cssClass: 'my-custom-class',
          message: 'Eliminando...',
          duration: 300
        });
        await loading.present();
      
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
}
