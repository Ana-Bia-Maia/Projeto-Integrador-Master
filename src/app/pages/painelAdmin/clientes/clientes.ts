import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MenuComponent } from '../../../shared/menu/menu';
import { FooterComponent } from '../../../shared/footer/footer';
import { SidebarComponent } from '../../../shared/sidebar/sidebar';
import { Cliente, DadosCliente } from '../../../models/cliente.model';
import { ClienteService } from '../../../services/cliente.service';
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
  private readonly clienteService = inject(ClienteService);
  readonly clientes = this.clienteService.clientes;
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
    this.clienteService.adicionar(cliente);
    this.fecharModal();
  }

  atualizarCliente(dados: DadosCliente): void {
    const clienteAtual = this.clienteSelecionado();
    if (!clienteAtual) return;

    this.clienteService.atualizar(clienteAtual.id, dados);
    this.fecharModal();
  }

  excluirCliente(): void {
    const clienteAtual = this.clienteSelecionado();
    if (!clienteAtual) return;

    this.clienteService.excluir(clienteAtual.id);
    this.fecharModal();
  }
}
