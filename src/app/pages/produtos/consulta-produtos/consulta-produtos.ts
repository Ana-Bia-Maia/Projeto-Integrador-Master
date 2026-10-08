import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router'; // <-- IMPORTANTE para fazer a navegação funcionar

@Component({
  selector: 'app-bloco-consulta-de-produtos',
  standalone: true,
  imports: [], // Mantido limpo sem CommonModule e sem FormsModule
  templateUrl: './consulta-produtos.html', // <-- CORRIGIDO: Aponta para o seu arquivo no singular
  styleUrls: ['./consulta-produtos.css'],  // <-- CORRIGIDO: Aponta para o seu arquivo no singular
})
export class ConsultaProdutos implements OnInit {
  private router = inject(Router); // <-- Ativa o serviço de troca de página

  // Variável que o HTML vai ler de forma dinâmica
  produto: any = null;

  constructor() {
    // Captura os dados e a imagem enviados pela tabela do Painel de ADM
    const navegacao = this.router.getCurrentNavigation();
    const estado = navegacao?.extras.state as { produto: any };
    
    if (estado && estado.produto) {
      this.produto = estado.produto;
    }
  }

  ngOnInit(): void {
    // Inicialização da página limpa
  }

  // CORRIGIDO: Agora volta de verdade para a sua tabela de produtos do grupo
  voltar(): void {
    this.router.navigate(['/produtos']);
  }

  // CORRIGIDO: Agora leva de verdade para o seu formulário de edição de produtos
  editarProduto(): void {
    if (this.produto) {
      this.router.navigate(['/editar-produto'], { state: { produto: this.produto } });
    }
  }
}
