import { Component } from '@angular/core';

// Componente para la barra de navegación
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: false,
})
export class NavbarComponent {
  // Método para manejar la navegación (si es necesario)
  navigateTo(route: string) {
    console.log('Navegando a:', route);
  }
}
