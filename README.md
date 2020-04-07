<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="assets/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 9: FastFeet, front-end web
</h3>

<h3 align="center">
  :warning: Etapa 3/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack!</p>

<blockquote align="center">“Mude você e todo o resto mudará naturalmente”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-09?color=%2304D361" />

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361" />
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-09/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-09?style=social" />
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Sobre o desafio

Durante esse desafio será construido front-end da aplicação FastFeet cujo o back-end foi criado durante os desafios dos módulos 02 e 03 de Node.js.

A versão web do projeto FastFeet representa a visão da distribuidora, ou seja, todas funcionalidades presentes na versão web são para administradores. As funcionalidades para o entregador serão dispostas no aplicativo mobile.

### Novas funcionalidades

Antes de iniciar a parte web, **foram adicionadas as seguintes funcionalidades no back-end** da aplicação:

1. Permitir que a listagem de encomendas seja filtrada pelo nome do produto, recebendo um Query Parameter, por exemplo: `?q=Piano`.Caso o parâmetro não seja passado, retorna todas as encomendas;

2. Permitir que a listagem de entregadores seja filtrada pelo nome do entregador, recebendo um Query Parameter, por exemplo: `?q=John`. Caso o parâmetro não seja passado, retorna todos os entregadores;

3. Permitir que a listagem de destinatários seja filtrada pelo nome do destinatário, recebendo um Query Parameter, por exemplo: `?q=Ludwig`. Caso o parâmetro não seja passado, retorna todos os destinatários;

### Informações importantes

1. Ao cancelar encomendas ou deletar qualquer registro do banco foi criada uma verificação adicinal usando a função `confirm` do JavaScript;
2. Para formatação de datas foi utilizado a biblioteca `date-fns`;
3. No cadastro/edição de encomendas é possível buscar o entregador e o destinatário pelo nome. Usando `async` da biblioteca [React Select](https://react-select.com/home#async). As encomendas são buscadas da API assim que a página carrega e não possuem filtro.

### Opcionais

1. Paginação no front-end e back-end para todas listagens;
2. Máscaras para o input de CEP;
3. Filtro para visualizar apenas as entregas com problemas na listagem de encomendas.

## 🎨 Layout

Pode-se utilizar a seguinte URL para visualizar todas as telas prototipadas/sugeridas: [Visualizar](https://xd.adobe.com/view/62e829fc-4f10-4ac8-70d2-d39b429d43ee-14d9/grid/)

## 📅 Entrega

Esse desafio **não foi entregue** e não receberá correção por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp.

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Marcelo Silva

Inspirado nos desafios propostos com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
