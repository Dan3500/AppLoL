import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule, Router } from  '@angular/router';

//IMPORTAR COMPONENTES
import { HomeComponent } from "./components/home/home.component";
import { SummonerComponent } from "./components/summoner/summoner.component";
import { ChampionComponent } from "./components/champion/champion.component";
//import { IdentityGuard } from './services/identity.guard';  

//DEFINIR LAS RUTAS
const appRoutes: Routes=[
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'summoner/:name', component:SummonerComponent},
    {path:'champion/:champName', component:ChampionComponent},
    /*{path:'logout/:sure', component:LoginComponent},
    {path:'ajustes', component:UserEditComponent, canActivate: [IdentityGuard]},
    {path:'crear-categoria', component:CategoryNewComponent, canActivate: [IdentityGuard]},
    {path:'crear-entrada', component:PostNewComponent, canActivate: [IdentityGuard]},
    {path:'entrada/:id', component:PostDetailComponent},
    {path:'editar-entrada/:id', component:PostEditComponent, canActivate: [IdentityGuard]},
    {path:'categoria/:id', component:CategoryDetailComponent},
    {path:'perfil/:id', component:ProfileComponent},

    {path:'**', component:ErrorComponent}*/
];

//Exportar configuracion para que funcione
export const appRoutingProviders: any[]=[];//Ruter como servicio
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);//Modulo del ruter