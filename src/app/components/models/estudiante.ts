// export class Estudiante{
//   tipoDocumento?: string;
//   numeroDocumento?: any;
//   nombreCompleto?: string;
//   apellidoCompleto?: string;
//   grado?: string;
//   director?: string;
//   barrio?: string;
//   fechaNacimiento?: string;
//   nombreAcudiente?: string;
//   parentesco?: string;
//   telefono?: string;
//   fechaRegistro?: string;
// }

export class Persona {
  public idPersona?: number;
  unTipoDocumento?: TipoDocumento;
  numeroDocumento?: string;
  nombre?: string;
  apellido?: string;
  fechaNacimiento?: string;
  telefono?: string;
  direccion?: string;
  barrio?: string;
  fechaCreacion?: string;
  fechaModificacion?: string;
  estado?: string;
}

export class TipoDocumento {
  idTipoDocumento?: number;
  nombre?: string;
}
export class Estudiante extends Persona {
  idEstudiante?: string;
  grado?: string;
  director?: string;
  nombreAcudiente?: string;
  unaPersona?: Persona;
}
