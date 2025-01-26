# API de Cadastro de Carros 🚗

Uma API simples para gerenciar o cadastro de carros. Este projeto permite realizar operações CRUD (Create, Read, Update, Delete) utilizando **SQLite** como banco de dados local.

---

## 📋 Funcionalidades

- **Cadastrar Carros**: Adicione novos veículos ao sistema.
- **Listar Carros**: Obtenha uma lista de todos os carros cadastrados.
- **Atualizar Cadastro de Carro**: Edite as informações de um veículo já existente. (Implementando)
- **Excluir Carro**: Remova um carro do sistema. (Implementando)

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework para criação da API.
- **SQLite**: Banco de dados leve e simples. (Implementando)
- **Sequelize**: ORM para interação com o banco de dados SQLite. (Implementando)


## 🚀 Como Executar o Projeto

Para executar este projeto, siga os passos abaixo:

1. **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

2. **Clonar o Repositório**:  
   Clone o repositório em sua máquina com o comando:  
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
3. **Instalar Dependências**:
    npm install

4. **Executar API**:
   yarn dev

📚 Endpoints
1. Cadastrar Categoria de Carro

    POST /categories
    Body:
       {
        "name": "SUV",
        "description": "Categoria de carro SUV"
        }

2. Listar todas as categorias de Carros
   GET /categories

🧪 Testes
    Use o Postman ou o Insomnia para testar os endpoints.
