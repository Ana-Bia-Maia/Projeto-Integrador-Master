import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- IMPORTANTE

@Component({
  selector: 'app-root', // <-- O app-root do seu index.html chama este cara!
  standalone: true,
  imports: [RouterOutlet], // <-- Libera o uso da tag router-outlet no HTML
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Código padrão do seu grupo
}
