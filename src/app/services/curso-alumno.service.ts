import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoAlumnoService {

  private selectedCursoIdSource = new BehaviorSubject<number | null>(null);
  selectedCursoId$ = this.selectedCursoIdSource.asObservable();

  constructor() { }

  selectCurso(id: number) {
    this.selectedCursoIdSource.next(id);
  }
}
