import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const appRoutes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: '', component: DashboardComponent, canActivate: [AuthGuard] },

   // otherwise redirect to home
   { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
