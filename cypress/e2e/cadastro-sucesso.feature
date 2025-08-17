#utf-8
#language: pt

Funcionalidade: Operações CRUD em Tabela
        
    Contexto: 
        Dado que acesso a página Web Tables
    
    Cenário: Validação de adição, alteração e remoção de um registro
        Quando acesso o formulário de cadastro
        E preencho todos os campos obrigatórios com dados válidos
        E clico em Submit
        E faço a validação do cadastro do usuário
        E edito o cadastro desse usuário
        E valido a alteração
        E excluo o cadastro desse usuário
        Então o usuário cadastrado não está mais presente na tabela

    Cenário: Formulário mantém dados após fechamento
        Quando acesso o formulário de cadastro
        E preencho todos os campos obrigatórios com dados válidos
        E fecho o formulário sem submeter
        E acesso o formulário de cadastro em seguida
        Então os campos estão preenchidos com os dados anteriores

    Cenário: Adicionar múltiplos usuários sequencialmente e validar a paginação da tabela
        Quando preencho e submeto o formulário de cadastro para três novos usuários
        E os novos usuários aparecem na tabela
        E valido que há mais de 5 registros na tabela
        E altero a quantidade de exibição na tela para 5 registros
        E clico no botão Next da paginação
        Então a próxima página de registros é exibida