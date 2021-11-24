import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "./components/pages/login/login.component";
import { AdminForumComponent } from "./components/pages/admin-forum/admin-forum.component";
import { StudentForumComponent } from "./components/pages/student-forum/student-forum.component";
import { PanelAdminComponent } from "./components/pages/panel-admin/panel-admin.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: loginComponent,
  },
  {
    path: "admin",
    pathMatch: "full",
    component: AdminForumComponent,
  },
  {
    path: "studen",
    pathMatch: "full",
    component: StudentForumComponent,
  },
  {
    path: "admin/panel",
    pathMatch: "full",
    component: PanelAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
