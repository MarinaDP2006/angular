import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.html',
  standalone: false
})
export class PlanCreateComponent {
  planForm: FormGroup;
  // Constructor que inicializa el componente con FormBuilder y Router
  constructor(private fb: FormBuilder, private router: Router) {
    this.planForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      category: ['Ocio', Validators.required],
      isOnline: [false]
    });
  }
  // Método para navegar de vuelta a la lista de planes
  goBack() {
    this.router.navigate(['/planes']);
  }
  // Método para manejar el envío del formulario de creación de plan
  onSubmit(){
    if (this.planForm.invalid) {
      this.planForm.markAllAsTouched(); // Marca todos los campos para mostrar errores de validación
      return;
    }
    console.log('Plan creado:', this.planForm.value);
    this.planForm.reset({ category: 'Ocio', isOnline: false });
    this.router.navigate(['/planes']);
  }}
