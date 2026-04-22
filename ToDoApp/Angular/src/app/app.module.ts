import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDOServiceService } from './core/Service/todoService/to-doservice.service';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ToDOServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
