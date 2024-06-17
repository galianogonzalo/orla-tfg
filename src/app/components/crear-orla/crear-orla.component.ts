import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestDBService } from '../../services/test-db.service';

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

  fechaActual: string;

  fondos = [
    { id: 1, nombre: 'Fondo A', url: '../../assets/img/fondo1.jpg' },
    { id: 2, nombre: 'Fondo B', url: '../../assets/img/fondo2.jpg' }
  ];
  

  constructor(private testDb: TestDBService) {
    const hoy = new Date()
    const dia = hoy.getDate()
    const mes = hoy.getMonth() + 1 // Los meses van de 0 a 11, por eso se suma 1
    const anio = hoy.getFullYear()

    this.fechaActual = `${dia}-${mes}-${anio}`
  }

  ngOnInit(): void {
    this.cursos = this.testDb.getCursosByUsuarioId()
    this.profesores = this.testDb.getProfesoresByUsuarioId()

    this.testDb.selectedCursoId$.subscribe(id => {
      this.selectedCursoId = id
      if(id !== null){
        this.getAlumnosByCurso(id)
      }
    })
  }

  seleccionarPersona(persona: any): void {
    const index = this.seleccionados.indexOf(persona)
    if (index >= 0) {
      this.seleccionados.splice(index, 1)
    } else {
      this.seleccionados.push(persona)
    }
  }

  seleccionarFondo(fondo: any): void {
    this.fondoSeleccionado = fondo;
  }

  limpiarOrla(): void {
    this.seleccionados = []
  }

  generarPDF(): void {
    const orlaElement = document.getElementById('orla')!
    html2canvas(orlaElement).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const imgWidth = 297; // Anchura de A4 en mm (landscape)
      const pageHeight = 210; // Altura de A4 en mm (landscape)
      const imgHeight = canvas.height * imgWidth / canvas.width
      let heightLeft = imgHeight
      
      const pdf = new jsPDF('l', 'mm', 'a4')
      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      pdf.save('orla.pdf')

      const orlaData = {
        fecha: this.fechaActual,
        curso: this.selectedCursoId,
        archivo: pdf.output('blob') 
      }

      this.testDb.crearOrla(orlaData)
    });
  }

  setNombreInstituto(nombre:string){
    this.nombreInstituto = nombre.trim()
  }

  getCursos(){
    return this.testDb.getCursosByUsuarioId()
  }

  selectCurso(cursoId:any){
    this.testDb.seleccionarCurso(cursoId)
    this.cursoSeleccionado = cursoId
    this.alumnos = this.testDb.getAlumnosByCurso(cursoId)
  }

  unselectCurso(){
    this.cursoSeleccionado = null
    this.limpiarOrla()
  }

  getProfesores(){
    return this.testDb.getProfesoresByUsuarioId()
  }

  getAlumnosByCurso(id:any){
    return this.testDb.getAlumnosByCurso(id)
  }


}
