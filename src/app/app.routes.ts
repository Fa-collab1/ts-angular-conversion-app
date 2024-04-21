import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversionComponent } from './pages/conversion/conversion.component';
import { SecretAreaComponent } from './pages/secret-area/secret-area.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
  { path: 'conversion', component: ConversionComponent },
  { path: 'error-404', component: SecretAreaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error-404' }
  
];
