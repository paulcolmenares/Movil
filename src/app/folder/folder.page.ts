import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  f_user = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    pass: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });

  constructor(private activatedRoute: ActivatedRoute, private serv: UserService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.folder==="Salir") this.serv.logout();
  }

  onSubmit() {
    this.serv.verif(this.f_user.value['user'], this.f_user.value['pass']);
  }

}
