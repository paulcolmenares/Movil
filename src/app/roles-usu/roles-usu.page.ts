import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { RolService } from '../servicios/rol.service';
import { UserService } from '../servicios/user.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-roles-usu',
  templateUrl: './roles-usu.page.html',
  styleUrls: ['./roles-usu.page.scss'],
})
export class RolesUsuPage implements OnInit {
  lista: any=[];
  listas: any=[];

  rol_usu = new FormGroup({
    usu: new FormControl ('',[]),
    rol: new FormControl('', [])
  })
  constructor(public load: LoadingController, private serv : UserService, private serv1 : RolService) { }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.usuarios);
    this.serv1.list().subscribe(data => this.listas=data._embedded.rols);
  }


  Agregar(){
    console.log(this.rol_usu.value);
    this.serv.grabaremos(this.rol_usu.value).subscribe();
    this.cargar();
      }
      Eliminar(){
        console.log(this.rol_usu.value);
    this.serv.eliminar(this.rol_usu.value).subscribe();
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
