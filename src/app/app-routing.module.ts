import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuGuard } from './menu.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'area',
    loadChildren: () => import('./area/area.module').then( m => m.AreaPageModule)
  
  },
  {
    path: 'editorial',
    loadChildren: () => import('./editorial/editorial.module').then( m => m.EditorialPageModule)
  
  },
  {
    path: 'texto',
    loadChildren: () => import('./texto/texto.module').then( m => m.TextoPageModule)
  },
  {
    path: 'autor',
    loadChildren: () => import('./autor/autor.module').then( m => m.AutorPageModule)
   /* canActivate: [MenuGuard]*/
  },
  {
    path: 'devolucion',
    loadChildren: () => import('./devolucion/devolucion.module').then( m => m.DevolucionPageModule)
  },
  {
    path: 'ejemplar',
    loadChildren: () => import('./ejemplar/ejemplar.module').then( m => m.EjemplarPageModule)
 
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'pres-ejemplar',
    loadChildren: () => import('./pres-ejemplar/pres-ejemplar.module').then( m => m.PresEjemplarPageModule)
  },
  {
    path: 'menu-rol',
    loadChildren: () => import('./menu-rol/menu-rol.module').then( m => m.MenuRolPageModule)
  },
  {
    path: 'tipo',
    loadChildren: () => import('./tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'anulacion-devo',
    loadChildren: () => import('./anulacion-devo/anulacion-devo.module').then( m => m.AnulacionDevoPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'roles-usu',
    loadChildren: () => import('./roles-usu/roles-usu.module').then( m => m.RolesUsuPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'add-area',
    loadChildren: () => import('./add-area/add-area.module').then( m => m.AddAreaPageModule)
  },
  {
    path: 'add-editorial',
    loadChildren: () => import('./add-editorial/add-editorial.module').then( m => m.AddEditorialPageModule)
  },
  {
    path: 'add-tipo',
    loadChildren: () => import('./add-tipo/add-tipo.module').then( m => m.AddTipoPageModule)
  },
  {
    path: 'add-autor',
    loadChildren: () => import('./add-autor/add-autor.module').then( m => m.AddAutorPageModule)
  },
  {
    path: 'add-texto',
    loadChildren: () => import('./add-texto/add-texto.module').then( m => m.AddTextoPageModule)
  },
  {
    path: 'add-ejemplar',
    loadChildren: () => import('./add-ejemplar/add-ejemplar.module').then( m => m.AddEjemplarPageModule)
  },
  {
    path: 'add-presejem',
    loadChildren: () => import('./add-presejem/add-presejem.module').then( m => m.AddPresejemPageModule)
  },
  {
    path: 'add-rol',
    loadChildren: () => import('./add-rol/add-rol.module').then( m => m.AddRolPageModule)
  },
  {
    path: 'add-menu',
    loadChildren: () => import('./add-menu/add-menu.module').then( m => m.AddMenuPageModule)
  },
  {
    path: 'me-pro',
    loadChildren: () => import('./me-pro/me-pro.module').then( m => m.MeProPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'folder/id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
    
  },
  {
    path: 'asignar',
    loadChildren: () => import('./asignar/asignar.module').then( m => m.AsignarPageModule)
  },
  {
    path: 'escriben',
    loadChildren: () => import('./escriben/escriben.module').then( m => m.EscribenPageModule)
  },
  {
    path: 'dprestamo',
    loadChildren: () => import('./dprestamo/dprestamo.module').then( m => m.DprestamoPageModule)
  },
  {
    path: 'telefono',
    loadChildren: () => import('./telefono/telefono.module').then( m => m.TelefonoPageModule)
  },
  {
    path: 'mdevol',
    loadChildren: () => import('./mdevol/mdevol.module').then( m => m.MdevolPageModule)
  },
  {
    path: 'ddevol',
    loadChildren: () => import('./ddevol/ddevol.module').then( m => m.DdevolPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
