import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InspectionComponent } from './components/inspection/inspection/inspection.component';
import { ShowInspectionComponent } from './components/inspection/show-inspection/show-inspection.component';
import { AddEditComponent } from './components/inspection/add-edit-inspeccion/add-edit-inspeccion.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
