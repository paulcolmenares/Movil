import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { EjemplarService } from '../servicios/ejemplar.service';
import { MdevolService } from '../servicios/mdevol.service';

@Component({
  selector: 'app-ddevol',
  templateUrl: './ddevol.page.html',
  styleUrls: ['./ddevol.page.scss'],
})
export class DdevolPage implements OnInit {
  ddvol= new FormGroup({
    dvol: new FormControl ('',[]),
    ejem: new FormControl('', [])
  })
  datos: any=[];
  listas: any=[];
  constructor(private serv : MdevolService, private serv1 : EjemplarService,
    public load: LoadingController) { }

  ngOnInit() {
    this.serv.list().subscribe(data => { console.info(data);
      this.datos=data._embedded.mDevols;
      })
      this.serv1.list().subscribe(data => { console.info(data);
        this.listas=data._embedded.ejemplars;
        })
  }
  
  Agregar(){
    console.log(this.ddvol.value);
    this.serv.grabaremos(this.ddvol.value).subscribe();
  this.cargar();
      }
      Eliminaremos(){
        console.log(this.ddvol.value);
    this.serv.eliminar(this.ddvol.value).subscribe();
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
