import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'lock-closed'},
    { title: 'Usuarios', url: '/usuarios', icon: 'person'},
    { title: 'Area', url: '/area', icon: 'paper-plane'},
    { title: 'Editorial', url: '/editorial', icon: 'book' },
    { title: 'Tipo', url: '/tipo', icon: 'archive'},
    { title: 'Autor', url: '/autor', icon: 'person'},
    { title: 'Texto', url: '/texto', icon: 'book'},
    { title: 'Ejemplar', url: '/ejemplar', icon: 'book' },
    { title: 'Prestamo de Ejemplar', url: '/pres-ejemplar', icon: 'clipboard' },
    { title: 'Devoluciones', url: '/devolucion', icon: 'repeat'},
    { title: 'Anulaciones de Devoluciones', url: '/anulacion-devo', icon: 'close' },
    { title: 'Rol', url: '/rol', icon: 'cog' },
    { title: 'Menu', url: '/menus', icon: 'menu'},
    { title: 'Asignacion Proceso a Menu', url: '/me-pro', icon: 'checkbox'},
    { title: 'Asignacion Menus a Rol', url: '/menu-rol', icon: 'checkbox' },
    { title: 'Asignacion Roles a Usuario', url: '/roles-usu', icon: 'checkbox' },
    { title: 'Salir', url: '/folder/Salir', icon: 'checkbox' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
