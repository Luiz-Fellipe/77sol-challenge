import { AxiosResponse, GenericAbortSignal } from 'axios';

//SERVICES
import api from '../api';

//TYPES
import { SimulationData } from '../../types/simulator';

export function getSimulationResult(
  {
    cep,
    estrutura,
    valor_conta,
  }: { cep: string; estrutura: string; valor_conta: string },
  signal?: GenericAbortSignal
): Promise<AxiosResponse<SimulationData>> {
  return api.get(
    `/busca-cep?estrutura=${estrutura}&valor_conta=${valor_conta}&cep=${cep}`,
    {
      signal,
    }
  );
}
