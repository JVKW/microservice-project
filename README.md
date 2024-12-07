# 🚀 Microservices Projects with Node.js and Express

## Visão Geral

Este projeto é uma implementação de microserviços usando **Node.js** e **Express**. Ele é dividido em três serviços principais, cada um responsável por uma parte do sistema:

- **🧑‍🤝‍🧑 Customer Service**: Gerencia os dados dos clientes, como informações de cadastro e atualizações.
- **📦 Product Service**: Gerencia os produtos cadastrados no sistema, com rotas para adicionar, listar e buscar produtos.
- **🛒 Order Service**: Cuida dos pedidos feitos pelos clientes, registrando e gerenciando as informações de cada pedido.

Cada um desses serviços funciona de forma independente e pode ser executado separadamente. A comunicação entre os serviços acontece por meio de **APIs RESTful**.

### 🗂️ Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```bash
├── customer-service
│   ├── customers.json       # Armazenamento simples de dados de clientes
│   ├── index.js             # Ponto de entrada do serviço de clientes
│   ├── routes.js            # Define as rotas para o serviço de clientes
├── order-service
│   ├── orders.json          # Armazenamento simples de dados de pedidos
│   ├── index.js             # Ponto de entrada do serviço de pedidos
│   ├── routes.js            # Define as rotas para o serviço de pedidos
├── product-service
│   ├── index.js             # Ponto de entrada do serviço de produtos
│   ├── routes.js            # Define as rotas para o serviço de produtos
├── gateway
│   ├── index.js             # Gateway que gerencia e redireciona as requisições
├── start-services.js        # Script para iniciar todos os serviços automaticamente
├── README.md                # Este arquivo de documentação
└── package.json             # Gerenciador de dependências
```

Cada serviço tem sua própria estrutura, com um arquivo **index.js** para iniciar o serviço e um **routes.js** para configurar as rotas e interações com os dados. O **API Gateway**, localizado em `./gateway`, gerencia a comunicação entre os serviços e atua como ponto de entrada para as requisições externas, centralizando a lógica de roteamento e mantendo o sistema mais organizado.

### 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de execução para o JavaScript no lado do servidor.
- **Express**: Framework leve e poderoso para criar APIs RESTful.
- **JSON**: Formato simples para armazenamento de dados (não recomendado para produção, mas útil para fins de prototipagem).

## ⚙️ Como Instalar o Projeto

### 1. Clonar o Repositório

Primeiro, você precisa clonar o repositório para sua máquina:

```bash
git clone https://github.com/JVKW/microservice-project.git
cd microservice-project/
```

### 2. Instalar as Dependências

Cada serviço tem suas dependências próprias. Para instalar todas as dependências, siga os passos abaixo para cada serviço:

- **Customer Service**:

  ```bash
  cd customer-service/
  npm install
  ```

- **Order Service**:

  ```bash
  cd order-service/
  npm install
  ```

- **Product Service**:

  ```bash
  cd product-service/
  npm install
  ```

## ▶️ Como Executar o Projeto

### 1. Garantir que todas as dependências estão instaladas

Antes de rodar os microserviços, verifique se as dependências estão corretamente instaladas em cada serviço:

```bash
npm install
```

### 2. Executando os Serviços

Você pode rodar cada serviço separadamente ou, para facilitar, pode usar o script `start-services.js` para rodar todos ao mesmo tempo.

#### Executando os serviços individualmente

- **Customer Service**:

  ```bash
  cd customer-service/
  node index.js
  ```

- **Order Service**:

  ```bash
  cd order-service/
  node index.js
  ```

- **Product Service**:

  ```bash
  cd product-service/
  node index.js
  ```

#### Executando o API Gateway

O **API Gateway** redireciona todas as requisições para os microserviços adequados. Para executá-lo:

```bash
cd gateway/
node index.js
```

#### Executando todos os serviços automaticamente

Se você preferir rodar todos os serviços de uma vez, pode executar o seguinte comando na raiz do projeto:

```bash
npm start
```

Isso irá iniciar todos os microserviços e o API Gateway automaticamente.

### 🌐 Portas dos Serviços

- **Customer Service**: `http://localhost:3000`
- **Order Service**: `http://localhost:4000`
- **Product Service**: `http://localhost:5000`
- **API Gateway**: `http://localhost:6000`

## 🔌 Endpoints Futuros

### Customer Service

- **GET** `/api/customers`: Retorna todos os clientes cadastrados.
- **GET** `/api/customers/:id`: Retorna os dados do cliente com o ID especificado.
- **POST** `/api/customers/add`: Adiciona um novo cliente.

### Order Service

- **GET** `/api/orders`: Retorna todos os pedidos.
- **GET** `/api/orders/:id`: Retorna o pedido com o ID especificado.
- **POST** `/api/orders/add`: Cria um novo pedido.

### Product Service

- **GET** `/api/products`: Retorna todos os produtos cadastrados.
- **GET** `/api/products/:id`: Retorna o produto com o ID especificado.
- **POST** `/api/products/add`: Adiciona um novo produto.

### API Gateway

O **API Gateway** redireciona as requisições para os microserviços apropriados. Aqui estão os endpoints disponíveis:

- **GET** `/customers`: Redireciona para o **Customer Service**.
- **GET** `/orders`: Redireciona para o **Order Service**.
- **GET** `/products`: Redireciona para o **Product Service**.

## 📝 Função dos Arquivos

### **index.js** (de cada serviço)

Este é o arquivo principal de cada microserviço. Ele inicia o servidor, configura as rotas e as interações com o banco de dados ou arquivos JSON.

### **routes.js** (de cada serviço)

Este arquivo define as rotas de cada serviço, contendo a lógica para processar as requisições, como a leitura e escrita nos arquivos JSON.

### **gateway/index.js**

O **API Gateway** atua como a entrada unificada para as requisições. Ele recebe as requisições do usuário e as encaminha para o serviço correto. Esse arquivo também pode ser expandido para incluir autenticação, autorização ou outras funcionalidades de segurança.

### **test.http**

Este arquivo contém as rotas para teste de requisição de cada serviço.

> **OBS.:** É necessário usar a extensão **REST Client**, caso estiver usando o VSCode.

### **start-services.js**

Este script facilita o processo de inicializar todos os serviços ao mesmo tempo, rodando-os em terminais separados.

---

## 🌱 Possíveis Melhorias e Expansões

1. **Substituição do JSON por Banco de Dados**: Para produção, os dados podem ser movidos para um banco de dados relacional (ex.: PostgreSQL) ou NoSQL (ex.: MongoDB), em vez de arquivos JSON.

2. **Autenticação e Autorização**: Adicionar um sistema de autenticação, como **JWT**, para garantir que apenas usuários autenticados possam acessar certos recursos.

3. **Rate Limiting**: Implementar um sistema de limitação de taxa para evitar abusos na API.

4. **Monitoramento e Logging**: Adicionar monitoramento e logs centralizados (ex.: usando **Winston** ou **Loggly**) para acompanhar o desempenho dos serviços.

5. **Testes Automatizados**: Implementar testes unitários e de integração com ferramentas como **Mocha**, **Jest** ou **Chai**.

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo `LICENSE` para mais informações.
