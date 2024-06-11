import { Component } from '@angular/core';
import { ListaAlumnosService } from '../../services/lista-alumnos.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-crear-orla',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './crear-orla.component.html',
  styleUrl: 'crear-orla.component.css'
})
export class CrearOrlaComponent {

  cursos: any[] = [];
  alumnos: any[] = [];
  profesores: any[] = [];
  seleccionados: any[] = [];
  fondoSeleccionado: any = null;
  cursoSeleccionado: any = null;
  previsualizacionVisible: boolean = false;
  alumnosPorFila: any[] = [];
  nombreInstituto: string = 'IES José Planes';

  fondos = [
    { id: 1, nombre: 'Fondo A', url: '../../assets/fondo1.jpg' },
    { id: 2, nombre: 'Fondo B', url: '../../assets/fondo2.jpg' }
  ];
  

  constructor(
    private listaAlumnosService: ListaAlumnosService,
  ) {}

  ngOnInit(): void {
    this.cursos = this.listaAlumnosService.getCursos();
    this.profesores = this.listaAlumnosService.getProfesores();
  }

  seleccionarCurso(curso: string): void {
    this.cursoSeleccionado = curso;
    this.alumnos = this.listaAlumnosService.getAlumnosByCurso(curso);
  }

  toggleSeleccion(persona: any): void {
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

  togglePrevisualizacion(): void {
    this.previsualizacionVisible = !this.previsualizacionVisible;
  }

  generarPDF(): void {
    const orlaElement = document.getElementById('orla')!;
    html2canvas(orlaElement, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 297; // Width of A4 in mm (landscape)
      const pageHeight = 210; // Height of A4 in mm (landscape)
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      
      const pdf = new jsPDF('l', 'mm', 'a4');
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('orla.pdf');
    });
  }
}
