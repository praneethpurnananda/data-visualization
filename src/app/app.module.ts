import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

//components
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { AreaComponent } from './area/area.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

//charts modules
import { HighchartsChartModule } from 'highcharts-angular';


//ng material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SecondchartComponent } from './secondchart/secondchart.component';
import { FiltersComponent } from './filters/filters.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule} from '@angular/material/icon';
import { FormlyComponent } from './formly/formly.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { BackupComponent } from './backup/backup.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    AreaComponent,
    HighchartsComponent,
    SecondchartComponent,
    FiltersComponent,
    FormlyComponent,
    NavbarComponent,
    HeaderComponent,
    BackupComponent,
    SideBarComponent,
    MainBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatIconModule,
    FormlyModule.forRoot({
      validationMessages: [
        {name:'required' , message:'This field is required'}
      ]
    }),
    FormlyMaterialModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
