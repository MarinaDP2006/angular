import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Plan {
  id: number;
  title: string;
  description: string;
  category: string;
  isOnline: boolean;
}

// Componente para mostrar los detalles de un plan
@Component({
  selector: 'app-plan-detail',
  template: `
    <div class="container my-4">
      <button class="btn btn-secondary mb-3" (click)= "goBack()" >← Volver</button>

      <div class="card p-4 shadow" *ngIf="plan">
        <h2 class="display-5">{{ plan.title }}</h2>
        <span class="category-badge category-{{plan.category}} mb-3">
          {{ plan.category }}
        </span>
        <p class="lead">{{ plan.description }}</p>
      <p class="plan-online" [class.plan-online-true]="plan.isOnline" [class.plan-online-false]="!plan.isOnline">
        {{ plan.isOnline ? 'Online' : 'Presencial' }}
      </p>
      </div>

      <div *ngIf="!plan" class="alert alert-warning"> Plan no encontrado </div>
    </div>
  `,
  styles: [`
    .card { border-radius: 16px; }
    .display-5 { color: #07204a; }
  `],
  standalone: false
})
export class PlanDetailComponent implements OnInit {
  // Plan seleccionado para mostrar detalles
  plan: Plan | null = null;

  // Lista de planes disponibles
  plans = [
    { id: 1, title: 'Maratón de pelis', description: "Escoger saga, lugar, comida...", category: "Ocio", isOnline: false },
    { id: 2, title: 'Salir a pasear', description: "Quedada en el parque Maria Luisa...", category: "Deporte", isOnline: false },
    { id: 3, title: 'Torneo de F1', description: "Competición amistosa de F1...", category: "Videojuegos", isOnline: true },
    { id: 4, title: 'Repasar programación', description: "Videollamada grupal...", category: "Estudio", isOnline: true },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plan = this.plans.find(p => p.id === id) || null;
  }

  // Método para regresar a la página principal
  goBack() {
    this.router.navigate(['/']);
  }
}
