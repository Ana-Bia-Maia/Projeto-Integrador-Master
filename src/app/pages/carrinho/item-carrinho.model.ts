import { Produto } from '../../models/produto.model';

export type ItemCarrinho = Produto & {
  quantidade: number;
};
