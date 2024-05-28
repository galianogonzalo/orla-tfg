import { Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { ListaOrlasComponent } from './components/lista-orlas/lista-orlas.component';
import { CrearOrlaComponent } from './components/crear-orla/crear-orla.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

export const routes: Routes = [
    {path: "inicio", component: HomeComponent, title: "Inicio"},
    {path: "login", component: LoginComponentComponent, title: "Login"}, 
    {path: "mis_orlas", component: ListaOrlasComponent, title: "Mis orlas"},
    {path: "crear_orla", component: CrearOrlaComponent, title: "Crear orla"},
    {path: "crear_persona", component: CrearPersonaComponent, title: "Crear persona"},
    {path: "", redirectTo: "inicio", pathMatch:"full"},
    {path: "**", component: Page404Component, title: "Error 404"}
];
