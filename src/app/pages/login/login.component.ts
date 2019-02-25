import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  moduleId: module.id,
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private _page: Page,
    private _router: Router,
    private fb: FormBuilder
  ) { 
    this._page.actionBarHidden = true;

    this.formInit();
  }

  ngOnInit() {
  }

  formInit() {
    this.myForm = this.fb.group({
      'email': ['', Validators.required],
      'senha': ['', Validators.required]
    });
  }

  lembrarSenha() {
    console.log('Lembrar senha.')
  }

  entrar() {
    if (this.myForm.valid) {
      // Inserir o serviço de API

      this._router.navigateByUrl('/home');
    } else {
      alert('Por favor preencha todos os campos.');
    }
  }

  cadastrar() {
    console.log('Cadastrar.');
  }

}
