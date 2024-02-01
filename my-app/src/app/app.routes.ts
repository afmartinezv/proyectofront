import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ServicesComponent} from './components/services/services.component';
import {NoEncontradoComponent} from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent, title:'Inicio'}, 
    {path:'services', component: ServicesComponent, title:'Servicios'},
    {path: "", redirectTo: "home", pathMatch:"full"},
    {path: '**', component: NoEncontradoComponent, title: '404'},

];
