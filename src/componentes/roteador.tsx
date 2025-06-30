import { useState, useEffect } from 'react';
import SearchBar from '../componentes/SearchBar/SearchBar';
import ListaCliente from './listaCliente';
import FormularioCadastroCliente from './formularioCadastroCliente';
import ListaProdutos from './listaProdutos';
import FormularioCadastroProduto from './formularioCadastroProduto';
import ListaServicos from './listaServicos';
import FormularioCadastroServico from './formularioCadastroServico';
import { ICliente, IProduto, IServico } from '../types';
import { ClienteService } from '../services/cliente-service';

const Roteador = () => {
    const [tela, setTela] = useState<string>("Clientes");
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [produtos, setProdutos] = useState<IProduto[]>([]);
    const [servicos, setServicos] = useState<IServico[]>([]);
    const [clienteEditando, setClienteEditando] = useState<ICliente | null>(null);
    const [produtoEditando, setProdutoEditando] = useState<IProduto | null>(null);
    const [servicoEditando, setServicoEditando] = useState<IServico | null>(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const dadosClientes = await ClienteService.listarClientes();
                setClientes(dadosClientes);
                setCarregando(false);
            } catch (erro) {
                console.error('Erro ao carregar clientes:', erro);
                setCarregando(false);
            }
        };
        carregarDados();
    }, []);

    const selecionarView = (novaTela: string, e: React.MouseEvent) => {
        e.preventDefault();
        setTela(novaTela);
    };


    const adicionarCliente = async (cliente: ICliente) => {
        try {
            if (cliente.id === 0) {
                const novoId = await ClienteService.cadastrarCliente(cliente);
                const clienteAtualizado = await ClienteService.obterCliente(novoId);
                setClientes([...clientes, clienteAtualizado]);
            } else {
                await ClienteService.atualizarCliente(cliente);
                const clienteAtualizado = await ClienteService.obterCliente(cliente.id);
                setClientes(clientes.map(c => c.id === cliente.id ? clienteAtualizado : c));
            }
            setTela('Clientes');
        } catch (erro) {
            console.error('Erro ao salvar cliente:', erro);
            alert('Erro ao salvar cliente: ' + (erro instanceof Error ? erro.message : 'Erro desconhecido'));
        }
    };

    const excluirCliente = async (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            try {
                await ClienteService.excluirCliente(id);
                setClientes(clientes.filter(c => c.id !== id));
            } catch (erro) {
                console.error('Erro ao excluir cliente:', erro);
                alert('Erro ao excluir cliente: ' + (erro instanceof Error ? erro.message : 'Erro desconhecido'));
            }
        }
    };

    const adicionarProduto = (produto: IProduto) => {
        if (produto.id === 0) {
            const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
            setProdutos([...produtos, { ...produto, id: novoId }]);
        } else {
            setProdutos(produtos.map(p => p.id === produto.id ? produto : p));
        }
        setTela('Produtos');
    };

    const excluirProduto = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este produto?')) {
            setProdutos(produtos.filter(p => p.id !== id));
        }
    };

    const adicionarServico = (servico: IServico) => {
        if (servico.id === 0) {
            const novoId = servicos.length > 0 ? Math.max(...servicos.map(s => s.id)) + 1 : 1;
            setServicos([...servicos, { ...servico, id: novoId }]);
        } else {
            setServicos(servicos.map(s => s.id === servico.id ? servico : s));
        }
        setTela('Serviços');
    };

    const excluirServico = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            setServicos(servicos.filter(s => s.id !== id));
        }
    };

    return (
        <>
            {tela === 'Clientes' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastro de Clientes', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    {carregando ? (
                        <div className="center-align" style={{ marginTop: '50px' }}>
                            <div className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div>
                                    <div className="gap-patch">
                                        <div className="circle"></div>
                                    </div>
                                    <div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <p>Carregando clientes...</p>
                        </div>
                    ) : (
                        <ListaCliente
                            tema="pink lighten-4"
                            clientes={clientes}
                            onEdit={(id) => {
                                const cliente = clientes.find(c => c.id === id);
                                if (cliente) {
                                    setClienteEditando(cliente);
                                    setTela('Cadastro de Clientes');
                                }
                            }}
                            onDelete={excluirCliente}
                        />
                    )}
                </>
            )}

            {tela === 'Cadastro de Clientes' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastro de Clientes', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    <FormularioCadastroCliente
                        tema="pink lighten-4"
                        cliente={clienteEditando}
                        onSubmit={adicionarCliente}
                        onCancel={() => {
                            setClienteEditando(null);
                            setTela('Clientes');
                        }}
                    />
                </>
            )}

            {tela === 'Produtos' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastro de Clientes', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    <ListaProdutos
                        tema="pink lighten-4"
                        produtos={produtos}
                        onEdit={(id) => {
                            setProdutoEditando(produtos.find(p => p.id === id) || null);
                            setTela('CadastrosProdutos');
                        }}
                        onDelete={excluirProduto}
                        onAddNew={() => {
                            setProdutoEditando(null);
                            setTela('CadastrosProdutos');
                        }}
                    />
                </>
            )}

            {tela === 'CadastrosProdutos' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastro de Clientes', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    <FormularioCadastroProduto
                        tema="pink lighten-4"
                        produto={produtoEditando}
                        onSubmit={adicionarProduto}
                        onCancel={() => setTela('Produtos')}
                    />
                </>
            )}

            {tela === 'Serviços' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    <ListaServicos
                        tema="pink lighten-4"
                        servicos={servicos}
                        onEdit={(id) => {
                            setServicoEditando(servicos.find(s => s.id === id) || null);
                            setTela('CadastrosServicos');
                        }}
                        onDelete={excluirServico}
                        onAddNew={() => {
                            setServicoEditando(null);
                            setTela('CadastrosServicos');
                        }}
                    />
                </>
            )}

            {tela === 'CadastrosServicos' && (
                <>
                    <SearchBar
                        tema="pink lighten-4"
                        botoes={['Clientes', 'Cadastro de Clientes', 'Produtos', 'Serviços']}
                        seletorView={selecionarView}
                    />
                    <FormularioCadastroServico
                        tema="pink lighten-4"
                        servico={servicoEditando}
                        onSubmit={adicionarServico}
                        onCancel={() => setTela('Serviços')}
                    />
                </>
            )}
        </>
    );
};

export default Roteador;