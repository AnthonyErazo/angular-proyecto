import { Component } from '@angular/core';
import data from 'src/app/data/data';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  alumnos=data;
  condicion:string='Regular';
  formRegistro=false;
  alumnoRetirado(valor:string):string{
    return valor=='Retirado'?'retirado':'';
  }
  cambiarCondicionAlumno(identificador:number){
    this.alumnos.forEach(alumno=>{
        if(alumno.id==identificador){
          alumno.condicion=alumno.condicion=='Regular'?'Retirado':'Regular';
        }
      }
    )
  }
  registrarAlumno(nuevoAlumno: any): void {
    const ultimoId = this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id : 0;
    const nuevoId = ultimoId + 1;
    this.alumnos.push({id:nuevoId,...nuevoAlumno});
  }
  eliminarAlumno(identificador:number){
    const index = this.alumnos.findIndex(alumno => alumno.id === identificador);
    if (index !== -1) {
      this.alumnos.splice(index, 1);
    }
  }
  abrirFormRegistro():void{
    this.formRegistro=!this.formRegistro;
  }
}
