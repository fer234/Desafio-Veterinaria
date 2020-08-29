import { Component } from '@angular/core';

import { Paciente } from './models/paciente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pacienteArray : Paciente[]=[{id: 1, name: "Fernando", dui: "0092133-1", nameM: "Galleta", tratamiento: "Para pulgas", medicamento: "Capstar", visita:1, costo: 12}
];

  selectedPaciente : Paciente = new Paciente();

  openEdit(paciente: Paciente){
    this.selectedPaciente = paciente;
  }

  addOrEdit(){
    if(this.selectedPaciente.id == 0){
      switch(this.selectedPaciente.visita) { 
        case 1: { 
           //No se hace descuento 
          this.selectedPaciente.id = this.pacienteArray.length + 1;
          this.pacienteArray.push(this.selectedPaciente);
           break; 
        } 
        case 2: { 
           //Aqui se da el 2% de descuento 
          this.selectedPaciente.id = this.pacienteArray.length + 1;
          this.selectedPaciente.costo = this.selectedPaciente.costo - 0.05;
          this.pacienteArray.push(this.selectedPaciente);
           break; 
        }
        case 3: { 
          //No se hace descuento 
         this.selectedPaciente.id = this.pacienteArray.length + 1;
         this.pacienteArray.push(this.selectedPaciente);
          break; 
       } 
        default: { 
           //Aqui se da el 10% de descuento
          this.selectedPaciente.id = this.pacienteArray.length + 1;
          this.selectedPaciente.costo = this.selectedPaciente.costo - 0.1;
          this.pacienteArray.push(this.selectedPaciente); 
        } 
     } 
  }
    this.selectedPaciente = new Paciente();
  }
}
