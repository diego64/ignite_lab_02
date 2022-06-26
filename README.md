![App Screenshot](.github/cover.png)

# Ignite Lab React.JS (Edição 02)

A aplicação consiste em ser uma plataforma do evento Ignite Lab onde centraliza os videos das aulas e links de materias complementares uilizando React.JS.

## Stack utilizada

- [React.JS](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/guide/#trying-vite-online)
- [GraphQL](https://graphql.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Apollo](https://www.apollographql.com/)
- [Graphcms](https://graphcms.com/)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)


## Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1120711251998877938). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env (É preciso criar uma conta na Graphcms)

`VITE_API_URL`

`VITE_API_ACCESS_TOKEN`

## Clone do CMS

Antes de começar a clonar o projeto, crie uma conta no Graphcms e clone o modelo do banco através [desse link](https://app.graphcms.com/clone/9812efed7be44d28a4e52577a566eb32?name=Ignite%20Lab)

## Rodando localmente

Com o clone do CMS feito lembre-se de colocar as informações do projeto dentro das variáveis de ambiente. Feito isso é so seguir os passos a baixo:

```bash
  git clone https://github.com/diego64/ignite_lab_02
```

Entre no diretório do projeto

```bash
  cd ignite_lab_02
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Deploy

A aplicação utilizou [Vercel](https://vercel.com/) para hospedar a aplição no qual você pode encontrar nesse endereço https://ignite-lab-02-opal.vercel.app/

## Melhorias

Segue abaixo algumas Melhorias futuras para melhorar a aplicação:

-  [ ]  Responsividade
-  [ ]  Validações de usuários nas páginas