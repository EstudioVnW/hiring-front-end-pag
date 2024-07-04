## Objetivo
Construir uma aplicação web em NextJS que tenha o comportamento de uma locadora de carros, contendo a página Home, Favoritos, Single page do carro e formulário de reserva com o carro escolhido.

## Como começar
Dar um fork no projeto, clonar o repositório em sua máquina local e criar um branch novo para o seu código.


## Regras de negócio
•	Ao acessar a home, trazer a listagem de carros, no estilo carrosel, separadas por pelo menos 3 categorias de marcas (ex: audi, toyota, bmw).

•	Na listagem do carro, deverá ter uma opção para adicionar aos favoritos e um botão para saber mais (Single Page).

•	Na Single Page, deverá conter as informações do carro escolhido, opção para favoritar e botão para reservar (Formulário de reserva).

•	Na página de formulário de reserva, deverá conter as informações do carro escolhido e um formulário com dados básicos de contato (Não precisa enviar o e-mail).

•	O formulário deverá ter suas devidas mascaras de input (telefone, cpf, data de nascimento).

•	O formulário deverá ter suas devidas validações (não pode enviar vazio, telefone com 11 dígitos, cpf com 11 dígitos, data de nascimento com 10 dígitos).

•	Ao acessar a página de favoritos, deverá listar os carros favoritados e ter a opção de remover dos favoritos.


## Referências
•	API de carros: https://api-ninjas.com/api/cars


## Observações
1. Não é necessário se preocupar com CORS ou implementar um backend para fazer as requisições. A API de carros permite chamadas diretas do navegador.

2. Design de livre escolha.


## Requisitos Técnicos para a entrega do teste

•	Utilizar SASS

•	O projeto deve ter uma documentação em readme ensinando a: 
1. instalar o projeto na máquina (engines, versão de node, qual gerenciador de pacote usar)
2. instalar as dependências do projeto
3. rodar o ambiente de desenvolvimento
4. rodar a build de deploy da aplicação.

•	Pode utilizar tanto o Axios quanto o Fetch para requisições.

•	Hospedar o projeto em um servidor (Heroku, Vercel, Netlify)

## Diferenciais técnicos

•	Utilização de typescript

•	Bom uso de context api ou outro gerenciamento de estados

Boa sorte!
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
