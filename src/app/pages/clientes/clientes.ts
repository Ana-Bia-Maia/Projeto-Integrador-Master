import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu';
import { FooterComponent } from '../../shared/footer/footer';
import { SidebarComponent } from '../../shared/sidebar/sidebar';
import { Cliente, DadosCliente } from '../../models/cliente.model';
import { ModalAdicionarClienteComponent } from './modal-adicionar-cliente/modal-adicionar-cliente';
import { ModalEditarClienteComponent } from './modal-editar-cliente/modal-editar-cliente';
import { ModalExcluirClienteComponent } from './modal-excluir-cliente/modal-excluir-cliente';

type ModalCliente = 'adicionar' | 'editar' | 'excluir';

@Component({
  selector: 'app-clientes',
  imports: [
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ModalAdicionarClienteComponent,
    ModalEditarClienteComponent,
    ModalExcluirClienteComponent,
  ],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientesComponent {
  readonly clientes = signal<Cliente[]>([
    { id: 1, nome: 'Mariana Costa', email: 'mariana.costa@email.com', telefone: '(11) 99876-5432', cadastro: '12/08/2026', status: 'Ativo' },
    { id: 2, nome: 'Rafael Mendes', email: 'rafael.mendes@email.com', telefone: '(21) 98765-4321', cadastro: '08/08/2026', status: 'Ativo' },
    { id: 3, nome: 'Camila Oliveira', email: 'camila.oliveira@email.com', telefone: '(31) 97654-3210', cadastro: '02/08/2026', status: 'Inativo' },
    { id: 4, nome: 'Pedro Almeida', email: 'pedro.almeida@email.com', telefone: '(41) 96543-2109', cadastro: '28/07/2026', status: 'Ativo' },
  ]);
  readonly modalAberto = signal<ModalCliente | null>(null);
  readonly clienteSelecionado = signal<Cliente | null>(null);

  abrirAdicao(): void {
    this.clienteSelecionado.set(null);
    this.modalAberto.set('adicionar');
  }

  abrirEdicao(cliente: Cliente): void {
    this.clienteSelecionado.set(cliente);
    this.modalAberto.set('editar');
  }

  abrirExclusao(cliente: Cliente): void {
    this.clienteSelecionado.set(cliente);
    this.modalAberto.set('excluir');
  }

  fecharModal(): void {
    this.modalAberto.set(null);
    this.clienteSelecionado.set(null);
  }

  salvarCliente(dados: DadosCliente): void {
    const cliente: Cliente = {
      id: Date.now(),
      ...dados,
      cadastro: new Intl.DateTimeFormat('pt-BR').format(new Date()),
    };
    this.clientes.update((clientes) => [cliente, ...clientes]);
    this.fecharModal();
  }

  atualizarCliente(dados: DadosCliente): void {
    const clienteAtual = this.clienteSelecionado();
    if (!clienteAtual) return;

    this.clientes.update((clientes) =>
      clientes.map((cliente) => cliente.id === clienteAtual.id ? { ...cliente, ...dados } : cliente),
    );
    this.fecharModal();
  }

  excluirCliente(): void {
    const clienteAtual = this.clienteSelecionado();
    if (!clienteAtual) return;

    this.clientes.update((clientes) => clientes.filter((cliente) => cliente.id !== clienteAtual.id));
    this.fecharModal();
  }
}
