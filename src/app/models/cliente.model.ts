export type StatusCliente = 'Ativo' | 'Inativo';

export interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
}

export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cadastro: string;
  status: StatusCliente;
  tipo?: 'PF' | 'PJ';
  documento?: string;
  nascimento?: string;
  endereco?: Endereco;
}

export type DadosCliente = Pick<Cliente, 'nome' | 'email' | 'telefone' | 'status'>;
