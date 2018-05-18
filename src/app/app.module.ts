import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

//services
import { ComercioService } from './services/comercio.service';

//routing
import { routing,appRoutingProviders } from './app.routing';

//components
import { HomeComponent } from './components/home.component';
import { ComercioComponent } from './components/comercio.component';
import { GraficoComponent } from './components/grafico.component';
import { ErrorComponent } from './components/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComercioComponent,
  	GraficoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ComercioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
