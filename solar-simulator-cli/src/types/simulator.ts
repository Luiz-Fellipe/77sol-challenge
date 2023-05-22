export interface SimulationData {
  economia: number;
  potencial: string;
  valor_instalacao: number;
  parcelamento: Installment[];
}

export interface Installment {
  parcelas: number;
  taxa_minina: number;
  taxa_maxima: number;
  valor_minimo: number;
  valor_maximo: number;
}
