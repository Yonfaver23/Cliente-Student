import { Component, OnInit } from "@angular/core";
import { EstudianteService } from "src/app/services/estudiante/estudiante.service";
import { TipoDocumentoService } from "../../../services/tipoDocumento/tipoDocumento.service";
import { Estudiante, Persona, TipoDocumento } from "../../models/estudiante";

@Component({
  selector: "app-panel-admin",
  templateUrl: "./panel-admin.component.html",
  styleUrls: ["./panel-admin.component.css"],
})
export class PanelAdminComponent implements OnInit {
  tipoDocumentos: any = [];

  // estudiante: Estudiante = {
  //   idEstudiante: "",
  //   grado: "",
  //   director: "",
  //   nombreAcudiente: "",
  //   unaPersona: {
  //     unTipoDocumento: {
  //       idTipoDocumento : 1,
  //     },
  //     numeroDocumento: "",
  //     nombre: "",
  //     apellido: "",
  //     fechaNacimiento: "",
  //     telefono: "",
  //     direccion: "",
  //     barrio: "",
  //     fechaCreacion: "",
  //     fechaModificacion: "",
  //     estado?: string;

  //   }

  // };

  // tipoDocumento: "",
  // numeroDocumento: undefined,
  // nombreCompleto: "",
  // apellidoCompleto: "",
  // grado: "",
  // fechaNacimiento: "",
  // fechaRegistro: "",
  // nombreAcudiente: "",
  // parentesco: "",
  // telefono: "",
  // director: "",
  // barrio: "",

  constructor(
    private tipoDocumentoService: TipoDocumentoService,
    private estudianteService: EstudianteService
  ) {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.getTipoDocumento();
  }
  estudiante: Estudiante = new Estudiante();

  save(estudiante: Estudiante) {
    // console.log(this.estudiante);
    this.estudianteService.saveEstudiantes(estudiante).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTipoDocumento() {
    this.tipoDocumentoService.getTipoDocumento().subscribe(
      (res: any) => {
        console.log(res);

        this.tipoDocumentos = res;
      },
      (err: any) => console.log(err)
    );
  }
}
