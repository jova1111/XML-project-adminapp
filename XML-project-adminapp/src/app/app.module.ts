import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { TypeService } from './services/type.service';
import { ChangeCategoryComponent } from './components/change-category/change-category.component';
import { RegisterAgentComponent } from './components/register-agent/register-agent.component';
import { ChangeTypeComponent } from './components/change-type/change-type.component';
import { FavoursComponent } from './components/favours/favours.component';
import { UsersComponent } from './components/users/users.component';
import { ApproveCommentComponent } from './components/approve-comment/approve-comment.component';
import { ApprovedCommentService } from './services/approved-comment.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'changeCategory', component: ChangeCategoryComponent },
  { path: 'changeType', component: ChangeTypeComponent },
  { path: 'favour', component: FavoursComponent },
  { path: 'users', component: UsersComponent },
  { path: 'registerAgent', component: RegisterAgentComponent },
  { path: 'approvedComment', component: ApproveCommentComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChangeCategoryComponent,
    RegisterAgentComponent,
    ChangeTypeComponent,
    FavoursComponent,
    UsersComponent,
    ApproveCommentComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ HttpClientModule, AuthService, CategoryService, TypeService, ApprovedCommentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
