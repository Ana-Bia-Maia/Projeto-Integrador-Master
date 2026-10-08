import { Injectable, signal } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private readonly lista = signal<Cliente[]>([
    { id: 1, nome: 'Mariana Costa', email: 'mariana.costa@email.com', telefone: '(11) 99876-5432', cadastro: '12/08/2026', status: 'Ativo' },
    { id: 2, nome: 'Rafael Mendes', email: 'rafael.mendes@email.com', telefone: '(21) 98765-4321', cadastro: '08/08/2026', status: 'Ativo' },
  ]);

  readonly clientes = this.lista.asReadonly();

  adicionar(cliente: Cliente): void {
    this.lista.update((atuais) => [cliente, ...atuais]);
  }

  atualizar(id: number, dados: Partial<Cliente>): void {
    this.lista.update((atuais) =>
      atuais.map((cliente) => (cliente.id === id ? { ...cliente, ...dados } : cliente)),
    );
  }

  excluir(id: number): void {
    this.lista.update((atuais) => atuais.filter((cliente) => cliente.id !== id));
  }
}