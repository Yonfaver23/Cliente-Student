import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { loginComponent } from './components/pages/login/login.component';
import { AdminForumComponent } from './components/pages/admin-forum/admin-forum.component';
import { StudentForumComponent } from './components/pages/student-forum/student-forum.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    loginComponent,
    AdminForumComponent,
    StudentForumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
