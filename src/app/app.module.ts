import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { MyServiceService } from './my-service.service';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';


import { MainComponent } from './components/main/main.component';
import { ControlLeaderComponent } from './components/control-leader/control-leader.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddPrjComponent } from './components/projects/add-prj/add-prj.component';
import { FixPrjComponent } from './components/projects/fix-prj/fix-prj.component';

import { ControlEmloyerComponent } from './components/control-emloyer/control-emloyer.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/task/add-task/add-task.component';
import { FixTaskComponent } from './components/task/fix-task/fix-task.component';

import { LoginComponent } from './components/login/login.component';

const appRouter: Routes = [
  
  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'',
    component: MainComponent
  },
  {
    path:'bang-dieu-khien',
    component:ControlLeaderComponent
  },
  {
    path:'danh-sach-du-an',
    component:ProjectsComponent
  },
  {
    path:'them-du-an',
    component:AddPrjComponent
  },

  {
    path:'sua-du-an/:id',
    component:FixPrjComponent
  },

  {
    path:'bang-diieu-khien',
    component:ControlEmloyerComponent
  },
  {
    path:'danh-sach-task',
    component:TaskComponent
  },
  {
    path:'them-task',
    component:AddTaskComponent
  },
  {
    path:'sua-task/:id',
    component:FixTaskComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    
    MainComponent,

    ControlLeaderComponent,
    ProjectsComponent,
    AddPrjComponent,
    FixPrjComponent,

    ControlEmloyerComponent,
    TaskComponent,
    AddTaskComponent,
    FixTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [
    MyServiceService
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
