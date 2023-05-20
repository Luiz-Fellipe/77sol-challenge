export interface SimulationData {
  irradiancia: number;
  irradiancia_minima: number;
  irradiancia_maxima: number;
  integradores_regiao: number;
  integradores_minimo: number;
  integradores_maximo: number;
  economia: number;
  potencial: string;
  valor_instalacao: number;
  parcelamento: Installment[];
  co2: number;
  kit: Kit[];
  potencyCC: number;
  performance: number;
  qtdeInversores: number;
  indiceUnico: number;
  potenciaSistema: number;
}

export interface Kit {
  id: number;
  qtde: number;
  valor: number;
  categoria: number;
  potenciaModulo?: number;
  valueTotal: number;
  descricao: string;
  datasheet: string;
  url: string;
  titulo: string;
  custo: number;
  estimativaEntrega: number | null;
  fornecedor: number;
  garantia: number | null | string;
  potenciaInversor?: number;
}

export interface Installment {
  parcelas: number;
  taxa_minina: number;
  taxa_maxima: number;
  valor_minimo: number;
  valor_maximo: number;
}
