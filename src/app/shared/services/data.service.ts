import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import coursesdata from 'src/app/data/coursesdata';
import data from 'src/app/data/data';
import { Alums, Course } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDataObservable(): Observable<Alums[]> {
    return new Observable<Alums[]>((observer) => {
      setTimeout(() => {
        observer.next(data);
        observer.complete();
      }, 2000);
    });
  }
  getCourseObservable():Observable<Course[]>{
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next(coursesdata);
        observer.complete();
      }, 2000);
    });
  }
  getCourseById(courseId:number):Observable<Course>{
    return new Observable<Course>((observe)=>{
      setTimeout(() => {
        const course = coursesdata.find((course) => course.id == courseId);
        if (course) {
          observe.next(course);
        } else {
          observe.error({ type: 'CourseNotFound', message: 'Curso no encontrado' });
        }
        observe.complete();
      }, 2000);
    })
  }
  getCoursesByIds(cursesIds:number[]):Observable<Course[]>{
    return new Observable<Course[]>((observe)=>{
      setTimeout(() => {
        const courses:Course[]=coursesdata.filter((course)=>cursesIds.includes(course.id))
        if (courses) {
          observe.next(courses);
        } else {
          observe.error({ type: 'CourseNotFound', message: 'Curso no encontrado' });
        }
        observe.complete();
      }, 2000);
    })
  }
  getAlumById(alumId:number):Observable<Alums>{
    return new Observable<Alums>((observe)=>{
      setTimeout(() => {
        const alum = data.find((alum) => alum.id == alumId);
        if (alum) {
          observe.next(alum);
        } else {
          observe.error({ type: 'AlumNotFound', message: 'Alumno no encontrado' });
        }
        observe.complete();
      }, 2000);
    })
  }
  getAlumsByIds(alumsIds:number[]):Observable<Alums[]>{
    return new Observable<Alums[]>((observe)=>{
      setTimeout(() => {
        const alums:Alums[]=data.filter((alums)=>alumsIds.includes(alums.id))
        if (alums) {
          observe.next(alums);
        } else {
          observe.error({ type: 'AlumNotFound', message: 'Alumno no encontrado' });
        }
        observe.complete();
      }, 2000);
    })
  }
}
