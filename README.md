# Projeto GrowTwitter

Este projeto consiste em uma aplicação desenvolvida em Node.js com o uso de TypeScript e Programação Orientada a Objetos, na qual simula comandos básicos da rede social Twitter, sendo possível registrar usuários e tweets, assim como seguir outros usuários, curtir outros tweets e também vizualizar o feed de tweets. 

Este trabalho foi desenvolvido para a conclusão do módulo Back-end II do Programa Starter Web Full Stack Developer - Growdev.

# Detalhamento das funcionalidades/features

## Feature #1 Cadastro de Usuários
- É possível cadastrar usuários com um id único gerado automaticamente;
- Os campos obrigatórios para o cadastro são: name, username, email e password.

## Feature #2 Cadastro de Tweets
- É possível criar tweets com um id único gerado automaticamente;
- Os campos obrigatórios para criação são: content e type (normal ou reply).

## Feature #3 Exibição de Tweets
- Os tweets são mostrados no console no seguinte formato, podendo ter likes e replys: `@<username>: <conteúdo>\n<likes> *\n<replies> *`;
- Nas Features #7 e #8 há informações mais detalhadas sobre likes e replies.

## Feature #4 Followers
- Após criar um usuário, é possível seguir outros usuários, exceto a si próprio;
- Além disso, os usuários possuem acesso à lista de quem eles seguem.

## Feature #5 Like em Tweets
- Os usuários podem curtir os tweets de outros usuários.

## Feature #6 Reply em Tweets
- Os usuários podem responder aos tweets de outros usuários, onde se tem um novo tweet do tipo "reply".

## Feature #7 Exibição de Tweets com Like
- Os tweets são exibidos com as informações dos likes recebidos, de acordo com a quantidade de likes.

## Feature #8 Exibição de Tweets com Reply
- Os tweets são exibidos com as informações dos replies recebidos, onde cada reply é sinalizado com o caractere ">".

## Feature #9 Feed de Tweets
- Nessa feature é possível que os usuários vizualizem seu feed de tweets, o qual inclui seus próprios tweets e os tweets dos usuários que segue;
- Cada tweet é exibido conforme as Features anteriores.

# Configuração do Projeto

## Instalação
1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.

## Execução
- Execute `npm run dev` para iniciar o servidor.
