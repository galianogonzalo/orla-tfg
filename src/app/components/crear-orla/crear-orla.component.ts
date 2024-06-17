import { Component } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CommonModule, NgStyle } from '@angular/common';
import { ListaCursosService } from '../../services/lista-cursos.service';
import { CursoAlumnoService } from '../../services/curso-alumno.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-orla',
  standalone: true,
  imports: [CommonModule, NgStyle, FormsModule],
  templateUrl: './crear-orla.component.html',
  styleUrl: 'crear-orla.component.css'
})
export class CrearOrlaComponent {

  cursos: any[] = []
  alumnos: any[] = []
  profesores: any[] = []
  seleccionados: any[] = []
  fondoSeleccionado: any = null
  cursoSeleccionado: any = null
  previsualizacionVisible: boolean = false
  alumnosPorFila: any[] = []
  nombreInstituto: string = 'IES José Planes'

  selectedCursoId: number | null = null

  fondos = [
    { id: 1, nombre: 'Fondo A', url: '../../assets/img/fondo1.jpg' },
    { id: 2, nombre: 'Fondo B', url: '../../assets/img/fondo2.jpg' }
  ];
  

  constructor(
    private listaAlumnosService: ListaAlumnosService,
    private listaCursosService: ListaCursosService,
    private CursoAlumnoService: CursoAlumnoService,
  ) {}

  ngOnInit(): void {
    this.cursos = this.listaAlumnosService.getCursos();
    this.profesores = this.listaAlumnosService.getProfesores();

    this.CursoAlumnoService.selectedCursoId$.subscribe(id => {
      this.selectedCursoId = id
      if(id !== null){
        this.getAlumnosByCurso(id)
      }
    })

  }

  seleccionarCurso(curso: string): void {
    this.cursoSeleccionado = curso;
    this.alumnos = this.listaAlumnosService.getAlumnosByCurso(curso);
  }

  seleccionarPersona(persona: any): void {
    const index = this.seleccionados.indexOf(persona);
    if (index >= 0) {
      this.seleccionados.splice(index, 1);
    } else {
      this.seleccionados.push(persona);
    }
  }

  seleccionarFondo(fondo: any): void {
    this.fondoSeleccionado = fondo;
  }

  limpiarOrla(): void {
    this.seleccionados = [];
  }

  generarPDF(): void {
    const orlaElement = document.getElementById('orla')!;
    html2canvas(orlaElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 297; // Anchura de A4 en mm (landscape)
      const pageHeight = 210; // Altura de A4 en mm (landscape)
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      
      const pdf = new jsPDF('l', 'mm', 'a4');
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      pdf.save('orla.pdf');
    });
  }

  setNombreInstituto(nombre:string){
    this.nombreInstituto = nombre.trim()
  }

  getCursos(){
    return this.listaCursosService.getCursos()
  }

  selectCurso(cursoId:any){
    this.CursoAlumnoService.selectCurso(cursoId)
    this.cursoSeleccionado = cursoId;
    this.alumnos = this.listaAlumnosService.getAlumnosByCurso(cursoId);
  }

  unselectCurso(){
    this.cursoSeleccionado = null
    this.limpiarOrla()
  }

  getProfesores(){
    return this.listaAlumnosService.getProfesores()
  }

  getAlumnosByCurso(id:any){
    return this.listaAlumnosService.getAlumnosByCurso(id)
  }


}
