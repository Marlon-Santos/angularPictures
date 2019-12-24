import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  singIn() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.auth.authenticate(userName, password).subscribe(
      sucess => {
        alert('logado com sucesso');
        this.router.navigate(['user', userName]);
      },
      err => {
        alert('usuario não autorizado');
        this.loginForm.reset();
      }
    );
  }
}
