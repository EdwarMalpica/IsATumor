import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analice-image',
  templateUrl: './analice-image.component.html',
  styleUrls: ['./analice-image.component.css'],
})
export class AnaliceImageComponent {
  constructor(private http: HttpClient) {}
  uploadedFiles: any[] = [];
  isLoaded: boolean = false;
  url: string = '';
  resultado: string = '';
  probabilidad: string = '';
  @ViewChild('imgRest') imgRest: ElementRef<HTMLImageElement>;
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles[0]=file;
    }
  }

  analiceImage() {
    this.isLoaded = true;
    const formData = new FormData();
    if (this.uploadedFiles.length === 0) {
      return;
    } else {
      this.url = URL.createObjectURL(this.uploadedFiles[0]);
      formData.append('file', this.uploadedFiles[0]);
      this.http.post('http://127.0.0.1:5000/predict', formData).subscribe({
        next: (data: any) => {
          this.isLoaded = false;
          this.resultado = data.conclusion;
          this.probabilidad = data.probability;
        },
        error: (error: any) => {
         alert('Error al analizar la imagen');
          this.isLoaded = false;
        },
      });
      this.isLoaded = false;
    }
  }


  formatResultadoTitle(resultado: string) {
    switch (resultado) {
      case 'glioma':
        return 'Se ha detectado un tumo de tipo:Glioma';
      case 'meningioma':
        return 'Se ha detectado un tumo de tipo:Meningioma';
      case 'notumor':
        return 'No se ha detectado un tumor';
      case 'pituitary':
        return 'Se ha detectado un tumo de tipo:Pituitary';
      default:
        return 'No se reconoce la imagen';
    }
  }
  formatResultado(resultado: string) {
    switch (resultado) {
      case 'glioma':
        return 'Un glioma es un tipo de tumor cerebral que puede afectar diferentes áreas del cerebro. Dependiendo de su ubicación y tamaño, los gliomas pueden causar síntomas como dolores de cabeza persistentes, cambios en la visión o convulsiones. El tratamiento puede involucrar cirugía, radioterapia y quimioterapia, y es importante buscar atención médica especializada para evaluar las opciones disponibles y el seguimiento necesario.';
      case 'meningioma':
        return 'Los meningiomas son tumores que se desarrollan en las capas protectoras que cubren el cerebro y la médula espinal. A menudo son benignos, pero pueden causar síntomas dependiendo de su tamaño y ubicación. Estos síntomas pueden incluir dolores de cabeza, cambios en la visión o convulsiones. La evaluación médica es esencial para determinar el curso adecuado del tratamiento, que puede incluir observación, cirugía o radioterapia';
      case 'notumor':
        return 'No se ha detectado la presencia de un tumor en el cerebro. Es importante seguir monitoreando la salud cerebral mediante exámenes regulares y prestar atención a cualquier cambio en los síntomas que puedan surgir. Mantener un estilo de vida saludable y realizar chequeos médicos regulares puede ser beneficioso para mantener la salud general';
      case 'pituitary':
        return 'Los tumores pituitarios son crecimientos anormales en la glándula pituitaria. Estos tumores pueden causar una amplia gama de síntomas, incluyendo cambios hormonales, dolores de cabeza, problemas de visión y fatiga. El tratamiento puede involucrar medicación, cirugía o radioterapia, dependiendo del tamaño y la actividad hormonal del tumor. Es crucial buscar atención médica especializada para un diagnóstico preciso y considerar las opciones de tratamiento disponibles';
      default:
        return 'No se reconoce la imagen';
    }
  }
}
