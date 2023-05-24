import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../servicios/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  f_user = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    pass: new FormControl('', [Validators.required, Validators.maxLength(10)])
  });

  constructor(private serv: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.serv.verif(this.f_user.value['user'], this.f_user.value['pass']);
  }
}
