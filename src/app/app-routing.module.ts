import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "./components/pages/login/login.component";
import { AdminForumComponent } from "./components/pages/admin-forum/admin-forum.component";
import { StudentForumComponent } from "./components/pages/student-forum/student-forum.component";
import { PanelAdminComponent } from "./components/pages/panel-admin/panel-admin.component";
import { GenerarReporteComponent } from "./components/pages/generar-reporte/generar-reporte.component";

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

    component: PanelAdminComponent,
  },
  {
    path: "admin/panel/generar-reportes",
    pathMatch: "full",
    component: GenerarReporteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
