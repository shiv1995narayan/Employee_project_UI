import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HighchartsChartModule} from 'highcharts-angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';

const material = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  FormsModule,
  MatSidenavModule,
  MatDividerModule,
  MatCardModule,
  FlexLayoutModule,
  HighchartsChartModule,
  MatInputModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatGridListModule

]



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    material

  ]
})
export class SharedModule { }
