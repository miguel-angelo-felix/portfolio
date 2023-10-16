import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { AuthRequest } from 'src/app/models/interfaces/auth/AuthRequest';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginCard = true;

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  singUpForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private messageService: MessageService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSubmitLoginForm() {
    if ( this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest)
        .subscribe({
          next: (response) => {
            if (response) {
              this.cookieService.set('USER_INFO', response?.token);
              this.loginForm.reset();
              this.router.navigate(['/dashboard'])
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: `Bem vindo de volta ${response?.name}`,
                life: 2000
              });
            }
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${err.error.error}`,
              life: 2000
            });
          }
        })
    }
  }

  onSubmitSingUpForm() {
    if (this.singUpForm.value && this.singUpForm.valid) {
      this.userService.signupUser(this.singUpForm.value as SignupUserRequest)
        .subscribe({
          next: (response) => {
            this.singUpForm.reset();
            this.loginCard = true;
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: `Usuário ${response?.name} criado com sucesso!`,
              life: 2000
            });
          },
          error: (err) => {
            console.log(err)
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${err.error.error}`,
              life: 2000
            });
          }
        });
    }
  }
}
