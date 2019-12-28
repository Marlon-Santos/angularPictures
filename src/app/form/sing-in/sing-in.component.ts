import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { PlataformService } from 'src/app/core/plataform/plataform.service';

@Component({
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  @ViewChild('autoFocus', { static: false })
  autoFocus: ElementRef<HTMLInputElement>;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private plataformService: PlataformService
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
        // tslint:disable-next-line: no-unused-expression
        this.plataformService.isPlataformBrowser() &&
          this.autoFocus.nativeElement.focus();
      }
    );
  }
}
