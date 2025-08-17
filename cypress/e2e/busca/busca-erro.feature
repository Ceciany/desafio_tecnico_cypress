#utf-8
#language: pt

Funcionalidade: Validação do campo busca de dados

    Cenário: Tentar fazer a busca por um usuário inexistente
        Dado que acesso a página Web Tables
        Quando clico na barra de busca 
        E digito um nome de usuário que não existe
        Então a tabela exibe a mensagem 'No rows found'