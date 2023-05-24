import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import jsPDF from 'jspdf';
import { PersonaService } from '../servicios/persona.service';
import { TelefonoService } from '../servicios/telefono.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  lista: any =[];
  estado: any = [];
  items: any;
  filterPost='';
  constructor(private serv: PersonaService, public alerta: AlertController,
     private datos: UsuariosService,
     private router: Router,
    private serv2: TelefonoService) {
  }
  Buscar(element: any) {
   this.lista=this.lista.filter(element.nombre="noelia");
   console.log(this.lista)
  }
  ngOnInit() {
    this.serv.list().subscribe(data => {
      console.info(data);
      this.lista = data._embedded.personae });
      this.serv2.list().subscribe(data => {
        console.info(data);
        this.lista = data._embedded.telefonoes });
  }
  ionViewWillEnter(){
    this.ngOnInit();
  }
 
  public eliminar(usu: string) {
    this.serv.borrar(usu).subscribe(data => this.ngOnInit());
  }

  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    var imgData = 'data:image/jpeg;base64,' + element.foto;
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos del Usuario", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);
    usu.text("Nombres: ", 20, 30);
    usu.text("Genero: ", 20, 40);
    usu.text("Estado: ", 20, 50);
    usu.text("Tipo persona: ", 20, 60);
    usu.setTextColor('black');
    usu.text("Foto", 165, 30);
    usu.text(element.ap, 40, 30);
    usu.text(element.am, 55, 30);
    usu.text(element.nombre, 70, 30);
    usu.text(element.genero, 40, 40);
    usu.text(element.tipoper, 50, 60);
    // usu.text(element.estado, 190,10) 
    usu.addImage(imgData, 'JPEG', 150, 35, 40, 0)
    usu.save("Usuario");
  }

  editar(data: any) {
    this.datos.set(data);
    this.router.navigate(['/add-usuario'])
  }
  async delete(element: any) {
    let miAlerta = await this.alerta.create({
      header: 'Seguro de Eliminar Dato de la Persona?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.eliminar(element._links.self.href),
            console.log('Borrado');
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });
    miAlerta.present();

  }

  async modificar(element: any) {
    let miAlerta = await this.alerta.create({
      header: 'Seguro de Habilitar a la Persona?',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          if (element.estado == 1) {
            element.estado = 0;
          } else
            element.estado = 1;
          console.log(element.estado);
        }
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });
    miAlerta.present();

  }
}
