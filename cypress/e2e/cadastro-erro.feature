#utf-8
#language: pt

Funcionalidade: Tratamento de entradas inválidas no formulário de registro
        
    Contexto: 
        Dado que acesso o formulário de cadastro da página Web Tables
    
    Cenário: Tentar adicionar usuário com e-mail inválido
        Quando preencho o campo Email com um formato inválido
        E clico em Submit
        Então o formulário não é submetido e o usuário permanece na mesma tela

    Cenário: Tentar adicionar usuário com campos obrigatórios em branco
        Quando deixo o campo First Name em branco
        E clico em Submit
        Então o formulário não é submetido e o usuário permanece na mesma tela

    Cenário: Tentar submeter um formulário vazio
        Quando clico em Submit com o formulário vazio
        Então o formulário não é submetido e o usuário permanece na mesma tela

    