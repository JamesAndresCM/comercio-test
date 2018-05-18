import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ComercioComponent } from './components/comercio.component';
import { GraficoComponent } from './components/grafico.component';
import { ErrorComponent } from './components/error.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'comercio', component: ComercioComponent},
	{path: 'grafico', component: GraficoComponent},
	{path: '**',component: ErrorComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);