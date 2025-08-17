# 💻 Projeto de Automação de Testes com Cypress

Este projeto de automação de testes foi desenvolvido como parte da **Academia QE da Accenture - 2025**. O objetivo é validar as funcionalidades de cadastro, busca, e manipulação de dados na página de Web Tables do DemoQA, garantindo a qualidade e a estabilidade da aplicação através de testes automatizados.

-----

### 🚀 Tecnologias Utilizadas

  * **Cypress**: Framework de automação de testes.
  * **Cypress-Cucumber-Preprocessor**: Plugin que permite a escrita de testes em formato BDD (Behavior-Driven Development) usando o Gherkin.
  * **@faker-js/faker**: Biblioteca para a geração de dados de teste aleatórios, como nomes, e-mails e departamentos.
  * **cypress-real-events**: Biblioteca para simular eventos de usuário de forma mais realista.
  * **Node.js**: Ambiente de execução para o JavaScript.
  * **npm**: Gerenciador de pacotes para a instalação de dependências.

-----

### 📦 Instalação e Execução

Para configurar e rodar o projeto em sua máquina local, siga os passos abaixo.

1.  **Clone o Repositório**

    ```bash
    git clone https://github.com/Ceciany/desafio_tecnico_cypress.git
    cd desafio_tecnico_cypress
    ```

2.  **Instale as Dependências**

    ```bash
    npm install
    ```

3.  **Execute os Testes**

    Para abrir a interface gráfica do Cypress e rodar os testes interativamente:

    ```bash
    npx cypress open
    ```

    Para rodar os testes em modo *headless* (terminal) e gerar vídeos:

    ```bash
    npx cypress run
    ```

-----

### 📂 Estrutura do Projeto

O projeto segue uma estrutura de pastas organizada para facilitar a manutenção e escalabilidade dos testes.

  * `cypress/e2e/`: Contém os arquivos `.feature`, que definem os cenários de teste em linguagem Gherkin.

      * `busca-erro.feature`: Cenários de teste para busca de dados inexistentes.
      * `cadastro-erro.feature`: Cenários de teste para validação de formulário (e-mail inválido, campos em branco, formulário vazio).
      * `cadastro-sucesso.feature`: Cenários de teste para operações CRUD completas (criação, leitura, atualização e exclusão) e validação da paginação.

  * `cypress/support/`: Contém arquivos de suporte para os testes.

      * `commands.js`: Comandos Cypress personalizados que estendem a funcionalidade da ferramenta.
      * `e2e.js`: Arquivo que importa os comandos personalizados e outras configurações globais, como tratamento de exceções.
      * `step-definitions/`: Contém a implementação dos passos Gherkin definidos nos arquivos `.feature`.
          * `busca-erro.cy.js`: Mapeamento dos passos do cenário de busca.
          * `cadastro-erro.cy.js`: Mapeamento dos passos do cenário de erros de cadastro.
          * `cadastro-sucesso.cy.js`: Mapeamento dos passos dos cenários de cadastro bem-sucedido e paginação.

  * `cypress/support/pages/`: Contém as "Page Objects", que centralizam os seletores de elementos e a lógica de interação com a página.

      * `busca/busca-erro.page.js`: Comandos específicos para os testes de busca com erro.
      * `cadastro/cadastro-erro.page.js`: Comandos específicos para os testes de cadastro com erro.
      * `cadastro/cadastro-sucesso.page.js`: Centraliza os seletores e comandos para todas as operações de sucesso, sendo reutilizados em outros arquivos.

  * `cypress.config.js`: Arquivo de configuração principal do Cypress, definindo o `baseUrl`, o `viewport` e o pré-processador do Cucumber.

  * `cypress.env.json`: Arquivo que armazena variáveis de ambiente e dados de teste, como nomes, e-mails e dados de usuários de teste.

-----

### 📝 Cenários de Teste

O projeto automatiza as seguintes funcionalidades:

  * **Validação de Formulário**: Garante que o usuário não pode submeter o formulário com dados inválidos (e-mail incorreto, campos obrigatórios vazios ou formulário totalmente em branco).
  * **Operações CRUD**: Valida o fluxo completo de criação, leitura, atualização e exclusão de um registro na tabela.
  * **Adição Múltipla**: Testa a capacidade de adicionar múltiplos registros de forma sequencial, usando dados aleatórios.
  * **Paginação**: Verifica se a paginação da tabela funciona corretamente, permitindo a navegação entre as páginas.
  * **Busca de Dados**: Confirma que o sistema exibe a mensagem correta quando um usuário busca por um registro que não existe na tabela.

