import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ServicegestioncentreinteretService} from 'app/services/servicegestioncentreinteret.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthentificationComponent } from './authentification/authentification/authentification.component';
import { AuthentificationService } from './services/authentification.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
   
  ],
 
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthentificationComponent
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
