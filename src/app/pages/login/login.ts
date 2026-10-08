import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../shared/menu/menu';
import { FooterComponent } from '../../shared/footer/footer';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, MenuComponent, FooterComponent],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  emailOuCpf: string = '';
  senha: string = '';

  constructor(private router: Router) { }

  fazerLogin() {
    if (this.emailOuCpf === 'admin' && this.senha === 'admin') {
      alert('Bem-vindo, Administrador!');
      this.router.navigate(['/admin-cadastro-produtos']);
    } else if (this.emailOuCpf !== '' && this.senha !== '') {
      alert('Bem-vindo, Cliente!');
      this.router.navigate(['/']);
    } else {
      alert('Por favor, preencha os dados.');
    }
  }
}
