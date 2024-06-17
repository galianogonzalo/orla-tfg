import { Component, OnInit, inject } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';
import { TestDBService } from '../../services/test-db.service';

@Component({
  selector: 'app-lista-profesores',
  standalone: true,
  imports: [],
  templateUrl: './lista-profesores.component.html',
  styles: `
    #profesores{
      height: 250px;
      max-height: 250px;
      overflow-y: auto; 
   }
  `
})
export class ListaProfesoresComponent implements OnInit {
  profesores: any[] = [];
  private testDb = inject(TestDBService);
  
  ngOnInit(): void {
    this.profesores = this.testDb.getProfesoresByUsuarioId();
    console.log(this.profesores)
  }
}
