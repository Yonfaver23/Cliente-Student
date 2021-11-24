import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header/header.component";
import { loginComponent } from "./components/pages/login/login.component";
import { AdminForumComponent } from "./components/pages/admin-forum/admin-forum.component";
import { StudentForumComponent } from "./components/pages/student-forum/student-forum.component";
import { FormsModule } from "@angular/forms";
import { PanelAdminComponent } from "./components/pages/panel-admin/panel-admin.component";
import { NavBarAdminComponent } from "./components/nav-bar-admin/nav-bar-admin.component";
import { HeaderAdminComponent } from "../app/components/header-admin/header-admin.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CdkAccordionModule } from "@angular/cdk/accordion";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    loginComponent,
    AdminForumComponent,
    StudentForumComponent,
    PanelAdminComponent,
    NavBarAdminComponent,
    HeaderAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
