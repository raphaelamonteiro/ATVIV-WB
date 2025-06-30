export interface ICliente {
    id: number;
    nome: string;
    sobrenome: string;
    telefone: string;
    email: string;
    endereco: string;
    cpf?: string;
}

export interface IProduto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
}

export interface IServico {
    id: number;
    nome: string;
    preco: number;
    duracao: string;
}