import { ChangeDetectionStrategy, Component, computed, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { MenuComponent } from '../../shared/menu/menu';
import { DadosProduto, Produto } from '../../models/produto.model';
import { EditarProduto } from './editar-produto/editar-produto'; 
// IMPORTANTE: Importa a classe do modal de exclusão corrigida
import { ModalExcluirProdutoComponent } from './modal-excluir-produto/modal-excluir-produto';

type ModalProduto = 'adicionar' | 'editar' | 'excluir';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    SidebarComponent,
    MenuComponent,
    EditarProduto,
    ModalExcluirProdutoComponent // <-- Registrado aqui para o HTML reconhecer a tag
  ],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Produtos {
  private router = inject(Router); 

  readonly produtos = signal<Produto[]>([
    { id: 1, nome: 'Sofá 2 Lugares Retrátil Reclinável Aramis', sku: 'SOF-290', categoria: 'Sofás & Poltronas', preco: 5900, estoque: 12, status: 'Ativo', imagem: '/assets/images/sofa2lugares.jpeg' },
    { id: 2, nome: 'Cama de Casal Minimalista Nogueira', sku: 'CAM-148', categoria: 'Quartos & Camas', preco: 4400, estoque: 2, status: 'Ativo', imagem: '/assets/images/camaNogueira.jpg' },
    { id: 3, nome: 'Cama Box Casal 138 Molas Ensacadas', sku: 'BOX-ENS-138', categoria: 'Quartos & Camas', preco: 1500, estoque: 28, status: 'Ativo', imagem: '/assets/images/camaBox.jpeg' },
    { id: 4, nome: 'Sofá Retrátil 4 Lugares', sku: 'SOF-CAC-348', categoria: 'Sofás & Poltronas', preco: 5450, estoque: 1, status: 'Ativo', imagem: '/assets/images/sofa4lugares.jpeg' },
    { id: 5, nome: 'Mesa Redonda de Jantar Freijó Centenário', sku: 'MES-FRJ-160', categoria: 'Jantar & Cadeiras', preco: 7820, estoque: 0, status: 'Inativo', imagem: '/assets/images/mesa.jpg' },
  ]);
  
  readonly modalAberto = signal<ModalProduto | null>(null);
  readonly produtoSelecionado = signal<Produto | null>(null);
  readonly totalProdutos = computed(() => this.produtos().length);
  readonly produtosComEstoqueBaixo = computed(() => this.produtos().filter((produto) => produto.estoque <= 2).length);
  readonly produtosAtivos = computed(() => this.produtos().filter((produto) => produto.status === 'Ativo').length);

  abrirAdicao(): void {
    this.produtoSelecionado.set(null);
    this.router.navigate(['/editar-produto']); 
  }

  abrirEdicao(produto: Produto): void {
    this.produtoSelecionado.set(produto);
    this.router.navigate(['/editar-produto'], { state: { produto } }); 
  }

  abrirConsulta(produto: Produto): void {
    this.router.navigate(['/produtos/consulta'], { state: { produto } });
  }

  abrirExclusao(produto: Produto): void {
    this.produtoSelecionado.set(produto);
    this.modalAberto.set('excluir');
  }

  fecharModal(): void {
    this.modalAberto.set(null);
    this.produtoSelecionado.set(null);
  }

  salvarProduto(dados: DadosProduto): void {
    if (this.modalAberto() === 'editar') {
      this.atualizarProduto(dados);
      return;
    }

    const id = Math.max(0, ...this.produtos().map((produto) => produto.id)) + 1;
    this.produtos.update((produtos) => [{ id, ...dados }, ...produtos]);
    this.fecharModal();
  }

  excluirProduto(): void {
    const produtoAtual = this.produtoSelecionado();
    if (!produtoAtual) return;

    this.produtos.update((produtos) => produtos.filter((produto) => produto.id !== produtoAtual.id));
    this.fecharModal();
  }

  faixaEstoque(estoque: number): 'Normal' | 'Baixo' | 'Esgotado' {
    if (estoque === 0) return 'Esgotado';
    return estoque <= 2 ? 'Baixo' : 'Normal';
  }

  private atualizarProduto(dados: DadosProduto): void {
    const produtoAtual = this.produtoSelecionado();
    if (!produtoAtual) return;

    this.produtos.update((produtos) =>
      produtos.map((produto) => produto.id === produtoAtual.id ? { ...produto, ...dados } : produto),
    );
    this.fecharModal();
  }
}
