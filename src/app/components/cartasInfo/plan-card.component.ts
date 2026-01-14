import { Component, Input, Output, EventEmitter} from '@angular/core';

export interface Plan {
  title: string;
  category: string;
  description: string;
  isOnline: boolean;
}

// Muestra cada tarjeta individual
@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.html',
  styleUrls: ['./plan-card.css'],
  standalone: false
})
export class PlanCardComponent { // Componente - PADRE
  @Input() plan!: Plan;
  @Input() index!: number;
  @Output() selectPlan = new EventEmitter<Plan>();
  onSelect() {
    this.selectPlan.emit(this.plan);
  }
}
