import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutorService } from '../servicios/autor.service';
import { TextoService } from '../servicios/texto.service';

@Component({
  selector: 'app-escriben',
  templateUrl: './escriben.page.html',
  styleUrls: ['./escriben.page.scss'],
})
export class EscribenPage implements OnInit {
  lista: any=[];
  listas: any=[];

  escriben = new FormGroup({
    aut: new FormControl ('',[]),
    te: new FormControl('', [])
  })
  constructor(private serv : TextoService, private serv1: AutorService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv1.list().subscribe(data => this.lista=data._embedded.autors);
    this.serv.list().subscribe(data => this.listas=data._embedded.textoes);
  }
  Agregar(){
    console.log(this.escriben.value);
    this.serv.grabaremos(this.escriben.value).subscribe();
    this.Loading();
      }
      Eliminar(){
        console.log(this.escriben.value);
    this.serv.eliminar(this.escriben.value).subscribe();
    this.Loading1();
      }
      async Loading() {
        const loading = await this.load.create({
          cssClass: 'my-custom-class',
          message: 'Guardando...',
          duration: 300
        });
        await loading.present();
      
        const { role, data } = await loading.onDidDismiss();
        console.log('Loading dismissed!');
      }
      async Loading1() {
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
