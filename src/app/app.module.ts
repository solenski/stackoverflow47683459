import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SchemaExploitationComponent } from './schema-exploitation-component/schema-exploitation-component.component';
import { RegroupementAlarmeComponent } from './regroupement-alarme-component/regroupement-alarme-component.component';



@NgModule({
  declarations: [
    AppComponent,
    SchemaExploitationComponent,
    RegroupementAlarmeComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [RegroupementAlarmeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
