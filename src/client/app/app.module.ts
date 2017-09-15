import { AuthGuard } from './guards/auth/auth.guard';
import { routing } from './routes/app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/data/user.service';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
//import { MDBBootstrapModule } from '../../../node_modules/angular-bootstrap-md/scss/mdb/free';
// import { routing } from './routes/app.routing';

import { AppComponent } from './app.component';
import {webService} from './web.service';
import { RegisterComponent } from './components/login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: init
    // },
    AuthGuard,
    AuthService,
    UserService,
    webService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
