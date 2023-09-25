import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  alumnos=[
    {
      id:1,
      nombre:"Nombre1 Nombre1",
      apellido:"Apellido1 Apellido1",
      condicion:"Regular",
      semestre:1,
      edad:18
    },
    {
      id:2,
      nombre:"Nombre2 Nombre2",
      apellido:"Apellido2 Apellido2",
      condicion:"Retirado",
      semestre:2,
      edad:19
    },
    {
      id:3,
      nombre:"Nombre3 Nombre3",
      apellido:"Apellido3 Apellido3",
      condicion:"Regular",
      semestre:3,
      edad:20
    },
    {
      id:4,
      nombre:"Nombre4 Nombre4",
      apellido:"Apellido4 Apellido4",
      condicion:"Regular",
      semestre:1,
      edad:18
    },
    {
      id:5,
      nombre:"Nombre5 Nombre5",
      apellido:"Apellido5 Apellido5",
      condicion:"Retirado",
      semestre:4,
      edad:20
    },
  ];
  nombre:string='';
  apellido:string='';
  edad:number=16;
  condicion:string='Regular';
  semestre:number=1;
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
  ingresarNuevoAlumno(){
    if(this.nombre!=''&&this.apellido!=''&&this.edad<=30&&this.semestre<=10&&this.edad>=16){
      const ultimoId = this.alumnos.length > 0 ? this.alumnos[this.alumnos.length - 1].id : 0;
      const nuevoId = ultimoId + 1;
      this.alumnos.push({
        id:nuevoId,
        nombre:this.nombre,
        apellido:this.apellido,
        condicion:this.condicion,
        semestre:this.semestre,
        edad:this.edad
      })
    }else{

    }
  }
  eliminarAlumno(identificador:number){
    const index = this.alumnos.findIndex(alumno => alumno.id === identificador);
    if (index !== -1) {
      this.alumnos.splice(index, 1);
    }
  }
}
