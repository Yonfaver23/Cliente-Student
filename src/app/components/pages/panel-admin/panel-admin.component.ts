import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from "@angular/forms";
import { min } from "rxjs";
// import { Estudiante } from "../../models/estudiante";

@Component({
  selector: "app-panel-admin",
  templateUrl: "./panel-admin.component.html",
  styleUrls: ["./panel-admin.component.css"],
})
export class PanelAdminComponent implements OnInit {
  Estudiante: FormGroup;
  constructor() {
    this.Estudiante = new FormGroup({
      tipoDocumento: new FormControl("", [Validators.required]),
      numeroDocumento: new FormControl("", [Validators.required]),
      nombreCompleto: new FormControl(""),
      apellidoCompleto: new FormControl(""),
      grado: new FormControl(""),
      fechaNacimiento: new FormControl(""),
      fechaRegistro: new FormControl(""),
      nombreAcudiente: new FormControl(""),
      parentesco: new FormControl(""),
      telefono: new FormControl(""),
      director: new FormControl(""),
      barrio: new FormControl(""),
    });
  }

  ngAfterViewInit() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.Estudiante.value);
    console.log("hola mundo");
    var f = new Date();
    var _fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    this.Estudiante.value.fechaRegistro = _fecha;
    // if (
    //   this.estudiante.tipoDocumento == "" ||
    //   this.estudiante.numeroDocumento == "" ||
    //   this.estudiante.nombreCompleto == "" ||
    //   this.estudiante.apellidoCompleto == ""
    // ) {
    //   console.log("llenar datos");
    // }
  }
}
