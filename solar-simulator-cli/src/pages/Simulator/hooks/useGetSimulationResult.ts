import { useCallback, useState } from 'react';

//SERVICES
import { getSimulationResult } from '../../../services/endpoints/simulator';

//TYPES
import { SimulatorForm } from '../components/Form/schema';
import { SimulationData } from '../../../types/simulator';

export function useGetSimulationResult() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState<SimulationData | null>(null);

  const handleGetSimulationResult = useCallback(async (data: SimulatorForm) => {
    try {
      setError(false);
      setLoading(true);
      const response = await getSimulationResult({
        cep: data.cep,
        estrutura: data.estrutura.value,
        valor_conta: data.valor_conta,
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return { handleGetSimulationResult, isError, isLoading, data };
}
