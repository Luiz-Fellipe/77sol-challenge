import { SimulatorForm } from '../../components/forms/SimulationForm/schema';
import { SimulationData } from '../../types/simulator';
import * as hooks from '../../pages/Simulator/hooks/useGetSimulationResult';

export type useGetSimulationResultData = {
  handleGetSimulationResult: (data: SimulatorForm) => Promise<void>;
  isError: boolean;
  isLoading: boolean;
  data: SimulationData | null;
};

jest.mock('../../pages/Simulator/hooks/useGetSimulationResult', () => ({
  useGetSimulationResult: jest.fn(() => ({
    handleGetSimulationResult: jest.fn(),
    data: null,
    isError: false,
    isLoading: false,
  })),
}));

const mockResponseData = {
  irradiancia: 5448,
  irradiancia_minima: 4988,
  irradiancia_maxima: 6367,
  integradores_regiao: 140,
  integradores_minimo: 1,
  integradores_maximo: 852,
  economia: 24000,
  potencial: 'MARAVILHOSO',
  valor_instalacao: 6060.260460207355,
  parcelamento: [
    {
      parcelas: 1,
      taxa_minina: 0,
      taxa_maxima: 3.5,
      valor_minimo: 6060.260460207355,
      valor_maximo: 6666.286506228092,
    },
    {
      parcelas: 24,
      taxa_minina: 0.79,
      taxa_maxima: 3.5,
      valor_minimo: 278.19801298836427,
      valor_maximo: 377.38957097165536,
    },
    {
      parcelas: 36,
      taxa_minina: 0.99,
      taxa_maxima: 3.5,
      valor_minimo: 200.9402052113021,
      valor_maximo: 298.67486303391325,
    },
    {
      parcelas: 48,
      taxa_minina: 0.99,
      taxa_maxima: 3.5,
      valor_minimo: 159.23307094950505,
      valor_maximo: 262.44841523861436,
    },
    {
      parcelas: 60,
      taxa_minina: 1.08,
      taxa_maxima: 3.5,
      valor_minimo: 137.76548840636212,
      valor_maximo: 242.94748669114617,
    },
  ],
  co2: 1.7903232000000002,
  kit: [
    {
      id: 59060,
      qtde: 2,
      valor: 1755.38,
      categoria: 62,
      potenciaModulo: 550,
      valueTotal: 3510.76,
      descricao:
        '<p>Tens\u00e3o M\u00e1xima de Pot\u00eancia:&nbsp;41.8V</p><p>Corrente de Opera\u00e7\u00e3o: 13.16A</p><p>Tens\u00e3o de Curto Circuito: 50.30V</p><p>Efici\u00eancia:&nbsp;21.3%</p><p><br></p><p>Coeficiente de Temperatura:</p><p>Corrente:&nbsp;<span>+0.05</span><span>%/ \u00ba</span><span>C</span></p><p>Tens\u00e3o&nbsp;&nbsp;-0.29<span>%/ \u00ba</span><span>C</span></p><p>Potencia:&nbsp;<span><span>-0.35%/ \u00baC</span></span></p><p><br>\n</p><p>Dimens\u00f5es:&nbsp;2278x1134x30mm</p><p>Peso: 31.5kg</p>',
      datasheet:
        'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/datasheet/59060_16827123071209129651.pdf',
      url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/59060_16827123071999375388.png',
      titulo: 'M\u00f3dulo solar',
      custo: 869,
      estimativaEntrega: 20,
      fornecedor: 40,
      garantia: '25',
    },
    {
      id: 35771,
      qtde: 1,
      valor: 1080.69,
      categoria: 63,
      valueTotal: 1080.69,
      descricao:
        '<p>Itens:</p>\n<p>- PERFIL DE ALUM\u00cdNIO CIS 037 (x2)</p>\n<p>- PERFIL DE ALUM\u00cdNIO 036 (x2)</p>\n<p>- PERFIL DE ALUM\u00cdNIO 034 (x2)</p>\n<p>- PERFIL DE ALUM\u00cdNIO CIS 032 (x2)</p>\n<p>- PARAFUSO 8 X 60 (x6)</p>\n<p>- ARRUELA 5/16 INOX (x14)</p>\n<p>- PORCA SEXTAVADA INOX MA8 - NOVO\t(x6)</p>\n<p>- PARAFUSO CL SI INOX 304 MA 8X25 RI POL\t(x2)</p>\n<p>- PORCA PARA ESTRUTURA LAJE PLANA (x2)</p>\n<p>- PERFIL CANTONEIRA 3 MTS (x1)</p>\n<p>- CABO DE A\u00c7O\t(x10)</p>\n<p>- CLIPS PARA CABO DE A\u00c7O (x2)</p>\n<p>- ESTICADO (x2)</p>\n',
      datasheet: '',
      url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35771/imagens/1618952232.png',
      titulo: 'Estrutura para instala\u00e7\u00e3o',
      custo: 534.99,
      estimativaEntrega: 20,
      fornecedor: 40,
      garantia: '12',
    },
    {
      id: 35481,
      qtde: 1,
      valor: 2020,
      categoria: 61,
      potenciaInversor: 1200,
      valueTotal: 2020,
      descricao:
        '<p><span>HOYMILES MI1200</span><br><span>ENTRADA DC:</span><br><span>MAX. POT\u00caNCIA DC DE ENTRADA (W): 380</span><br><span>MAX. TENS\u00c3O DC DE ENTRADA (V): 60</span><br><span>TENS\u00c3O DE START (V): 22</span><br><span>TENS\u00c3O DE MPPT RANGE (V): 16-60</span><br><span>MAX. CORRENTE DE ENTRADA (A): 10,5X4</span><br><br><span>SA\u00cdDA AC:</span><br><span>POT\u00caNCIA DE SA\u00cdDA (W): 1200</span><br><span>TENS\u00c3O NOMINAL DA REDE (V): 220</span><br><span>FREQU\u00caNCIA NOMINAL DA REDE (HZ): 50/60</span><br><span>FASES: MONOF\u00c1SICO 220V</span><br><span>CORRENTE NOMINAL DE SA\u00cdDA (A): 5A</span><br><span>MAX. CORRENTE DE SA\u00cdDA (A): 5.76A</span><br><span>QUANTIDADE M\u00c1XIMA POR BARRAMENTO: 4</span><br><span>THDI: &lt;3%</span><br><br><span>EFICI\u00caNCIA:</span><br><span>MAX. EFICI\u00caNCIA: 96,60%</span><br><span>MPPT EFICI\u00caNCIA: &gt;99,80%</span><br><br><span>DADOS GERAIS:</span><br><span>DIMENS\u00c3O (MM): 280MM*176MM*33MM</span><br><span>PESO (KG): 3,75</span><br><span>TOPOLOGIA: SEM TRANSFORMADOR</span><br><span>TEMPERATURA AMBIENTE DE OPERA\u00c7\u00c3O: -40~65\u00b0C</span><br><span>RESFRIAMENTO: NATURAL</span><br><br><span>CARACTER\u00cdSTICAS:</span><br><span>CONEX\u00c3O DC: MC4</span><br><span>CONEX\u00c3O AC: CONECTORES DE TERMINAL</span><br><span>MONITORAMENTO HOYMILES SISTEMA DTUW100</span><br><span>GARANTIA: 12 ANOS</span>?</p>',
      datasheet:
        'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/datasheet/1617887867.pdf',
      url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/imagens/1617887867.png',
      titulo: 'Inversor solar',
      custo: 1000,
      estimativaEntrega: null,
      fornecedor: 40,
      garantia: '5',
    },
    {
      id: 55217,
      qtde: 1,
      valor: 98.98,
      categoria: 69,
      valueTotal: 98.98,
      descricao: '<p>-</p>',
      datasheet: '',
      url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/55217_1639079005712458247.jpeg',
      titulo: 'Cabo Tronco',
      custo: 49,
      estimativaEntrega: null,
      fornecedor: 40,
      garantia: null,
    },
    {
      id: 55218,
      qtde: 1,
      valor: 32.32,
      categoria: 70,
      valueTotal: 32.32,
      descricao: '<p>-</p>',
      datasheet: '',
      url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/55218_16390792701307715806.jpg',
      titulo: 'End Cap',
      custo: 16,
      estimativaEntrega: null,
      fornecedor: 40,
      garantia: null,
    },
    {
      id: 35781,
      qtde: 25,
      valor: 11.21,
      categoria: 65,
      valueTotal: 280.25,
      descricao:
        '<p>Tens\u00e3o nominal: 1,8KV</p><p>Bitola: 6mm\u00b2</p><p>Isola\u00e7\u00e3o: 90\u00baC - composto termofixo extrudado a base de etilenopropileno de alto m\u00f3dulo.</p><p>Cobertura: PVC/ST2 - composto termopl\u00e1stico extrudado \u00e0 base de policloreto de vinila.</p>',
      datasheet: '',
      url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35781_1664477160248128356.jpg',
      titulo: 'Cabo solar C/C preto',
      custo: 5.55,
      estimativaEntrega: 20,
      fornecedor: 40,
      garantia: null,
    },
    {
      id: 35780,
      qtde: 25,
      valor: 11.21,
      categoria: 68,
      valueTotal: 280.25,
      descricao:
        '<p>Tens\u00e3o nominal: 1,8KV</p><p>Bitola: 6mm\u00b2</p><p>Isola\u00e7\u00e3o: 90\u00baC - composto termofixo extrudado a base de etilenopropileno de alto m\u00f3dulo.</p><p>Cobertura: PVC/ST2 - composto termopl\u00e1stico extrudado \u00e0 base de policloreto de vinila.</p>',
      datasheet: '',
      url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35780_1664477267247489300.jpg',
      titulo: 'Cabo solar C/C vermelho',
      custo: 5.55,
      estimativaEntrega: 20,
      fornecedor: 40,
      garantia: null,
    },
    {
      id: 35757,
      qtde: 2,
      valor: 36.36,
      categoria: 64,
      valueTotal: 72.72,
      descricao:
        '<p><span>PAR DE CONECTORES STAUBLI MC4 MACHO/F\u00caMEA</span><br><br><span>DADOS EL\u00c9TRICOS</span><br><span>- TENS\u00c3O NOMINAL: 1500V</span><br><span>- CORRENTE NOMINAL: 39A PARA 4MM\u00b2 / 6MM\u00b2</span><br><span>- GRAU DE PROTE\u00c7\u00c3O: IP68 (CONECTADO)</span><br><br><span>DADOS MEC\u00c2NICOS:</span><br><span>- SE\u00c7\u00c3O DO CONDUTOR: IEC 4MM\u00b2 / 6MM\u00b2</span><br><span>- CONTATO: COBRE ESTANHADO</span><br><span>- TERMINA\u00c7\u00c3O: CRIMPAGEM</span><br>?</p>',
      datasheet: '',
      url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35757/imagens/1618601067.jpeg',
      titulo: 'Par de conector MC4',
      custo: 18,
      estimativaEntrega: 20,
      fornecedor: 40,
      garantia: null,
    },
  ],
  potencyCC: 1.2,
  performance: 65.39999999999999,
  qtdeInversores: 1,
  indiceUnico: 0.6738000000000001,
  potenciaSistema: 1.1591705825315137,
};

const mockUseGetSimulationResult = jest
  .spyOn(hooks, 'useGetSimulationResult')
  .mockReturnValue({
    handleGetSimulationResult: jest.fn(() => Promise.resolve()),
    data: mockResponseData,
    isError: false,
    isLoading: false,
  });

export { mockUseGetSimulationResult, mockResponseData };
