import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selector } from 'rxjs/operator/publish';

import { AuthService } from '../../services/auth/auth.service';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'vs-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
})



export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
      private router: Router,
      private authService: AuthService) { }

  ngOnInit() {
      // reset login status
      this.authService.logout();
  }

  login() {
    if (this.loginForm.get('username').valid && this.loginForm.get('password').valid)
    {
      this.loading = true;
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
          .subscribe(result => {
              if (result === true) {
                  // login successful
                  this.router.navigate(['/']);
              } else {
                  // login failed
                  this.error = 'Username or password is incorrect';
              }
          }, () => this.loading = false);
    }
  }
}
