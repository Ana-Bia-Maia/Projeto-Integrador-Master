export type StatusProduto = 'Ativo' | 'Inativo';

export interface Produto {
  id: number;
  nome: string;
  sku: string;
  categoria: string;
  preco: number;
  estoque: number;
  status: StatusProduto;
  imagem: string;
}

export type DadosProduto = Omit<Produto, 'id'>;
