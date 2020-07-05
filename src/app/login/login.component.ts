import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
              private fb:FormBuilder,
              private router: Router,
              ) { 

                this.form = this.fb.group({
                  user: ['', Validators.required],
                  password: ['', Validators.required]
                })
              }

  loginadm() {
    const val = this.form.value

    if (val.user == 'admin' && val.password == 'admin') {
      this.router.navigateByUrl('/home')
    }
    else {
      this.router.navigateByUrl('/')
    }
  }

  loginop() {
    const val = this.form.value

    if (val.user == 'operador' && val.password == 'operador') {
      this.router.navigateByUrl('/home-operador')
    }
    else {
      this.router.navigateByUrl('/')
    }
  }

  loginag() {
    const val = this.form.value

    if (val.user == 'agencia' && val.password == 'agencia') {
      this.router.navigateByUrl('/home-agenciero')
    }
    else {
      this.router.navigateByUrl('/')
    }
  }

  ngOnInit(): void {
  }

}
