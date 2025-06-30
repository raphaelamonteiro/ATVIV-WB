# 🧾 Atividade prática ATVIV – Integração Front-end e Back-end (RESTful)

**Professor:** [Gerson da Penha Neto](https://github.com/gerson-pn)

---

## 🚀 Tecnologias utilizadas

<div style="display: flex; gap: 10px;">
<img align="center" alt="TypeScript" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/>

<img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/>

<img align="center" alt="Java" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"/>

<img align="center" alt="VSCode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"/>
</div>

---

## ☕ Contextualização

Nesta etapa, o objetivo é integrar **front-end e back-end** usando os princípios da **arquitetura REST**.

Você já desenvolveu interfaces gráficas no front-end e agora irá utilizar esse conhecimento para criar uma aplicação que se comunica com um **micro-serviço back-end** RESTful desenvolvido em Java.

A comunicação entre as camadas ocorre por meio de **requisições HTTP** e **troca de dados em formato JSON**, permitindo a manipulação (listar, cadastrar, editar, excluir) de **clientes** de forma dinâmica e independente entre front e back.

---

## 💡 Atividade proposta

Criar uma **interface web** que consuma um micro-serviço RESTful existente (fornecido via arquivo `wbbackend.jar`) e permita ao usuário realizar as operações básicas de gerenciamento de clientes através de uma GUI moderna feita com React.

### 🎯 Objetivo:

Desenvolver uma aplicação front-end capaz de:

* Listar todos os clientes
* Cadastrar novos clientes
* Editar informações de clientes
* Excluir clientes

Tudo isso consumindo as **rotas REST** disponibilizadas pelo micro-serviço.

---

## 🛠️ Funcionalidades obrigatórias

* Integração completa com os endpoints REST:

  * `GET /clientes`
  * `GET /cliente/{id}`
  * `POST /cliente/cadastrar`
  * `PUT /cliente/atualizar`
  * `DELETE /cliente/excluir`
* Formulários de cadastro e edição
* Listagem de clientes
* Exclusão de clientes
* Interface com feedback visual para o usuário

---

## ✅ Pré-requisitos

Antes de rodar o sistema, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* [Java JDK](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (versão 17 ou superior)
* npm (vem com o Node.js)

Verifique com:

```bash
node -v
npm -v
java -version
```

---

## ▶️ Como executar o projeto

### 🧪 1. Iniciar o back-end

1. Baixe o `wbbackend.jar` no repositório:
   [`https://github.com/gerson-pn/atviv-wb-typescript`](https://github.com/gerson-pn/atviv-wb-typescript)

2. Execute no terminal:

```bash
java -jar wbbackend.jar
```

O back-end estará disponível em:

```bash
http://localhost:32832
```

---

### 💻 2. Iniciar o front-end

1. **Clone este repositório:**

```bash
git clone https://github.com/raphaelamonteiro/ATVIV-REST-WB.git
cd ATVIV-REST-WB
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie a aplicação:**

```bash
npm run dev
```

4. Acesse no navegador:

```bash
http://localhost:3000
```

---

### 🧩 Materiais de apoio

* 🔗 Repositório de apoio: [atviv-wb-typescript](https://github.com/gerson-pn/atviv-wb-typescript)
* 📘 [Documentação do React](https://reactjs.org)
* 🧪 [Arquitetura REST explicada](https://restfulapi.net/)
* ☕ [Como executar um arquivo .jar](https://www.baeldung.com/java-run-jar)

---

> Por [Raphaela Monteiro](https://github.com/raphaelamonteiro)

