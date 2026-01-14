// src/app/components/plan-list/plan-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from '../cartasInfo/plan-card.component';

// Componente para mostrar la lista de planes
@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.html',
  styleUrls: ['./plan-list.css'],
  standalone: false
})
export class PlanListComponent implements OnInit {
  // Lista de planes disponibles
  plans: (Plan & { id: number })[] = [
    { id: 1, title: 'Maratón de pelis', description: "Escoger saga, lugar, comida...", category: "Ocio", isOnline: false },
    { id: 2, title: 'Salir a pasear', description: "Quedada en el parque Maria Luisa...", category: "Deporte", isOnline: false },
    { id: 3, title: 'Torneo de F1', description: "Competición amistosa de F1...", category: "Videojuegos", isOnline: true },
    { id: 4, title: 'Repasar programación', description: "Videollamada grupal...", category: "Estudio", isOnline: true },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  // Método para obtener detalles de un plan
  goToDetail(id: number) {
    this.router.navigate(['/plan', id]);
  }

  // Método para editar un plan
  editPlan(id: number) {
    // Aquí podrías navegar a un formulario de edición o mostrar un modal
    // Por ahora, vamos a hacer una edición simple en el lugar
    const newTitle = prompt('Nuevo título del plan:');
    if (newTitle && newTitle.trim()) {
      const plan = this.plans.find(p => p.id === id);
      if (plan) {
        plan.title = newTitle.trim();
      }
    }
  }

  // Método para eliminar un plan
  deletePlan(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este plan?')) {
      this.plans = this.plans.filter(p => p.id !== id);
    }
  }
}
