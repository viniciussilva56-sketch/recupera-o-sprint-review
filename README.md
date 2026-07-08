# Projeto Indústria - Backend

API REST desenvolvida com Node.js, Express, Prisma ORM e PostgreSQL para o gerenciamento de produtos.

## Tecnologias

- Node.js
- Express
- Prisma ORM
- PostgreSQL

## Instalação

```bash
npm install
npx prisma generate
npx prisma db push
```

## Executar

```bash
node src/server.js
```

## Rotas

| Método | Rota | Função |
|---------|------|--------|
| GET | /produtos | Listar produtos |
| GET | /produtos/:id | Buscar produto por ID |
| POST | /produtos | Cadastrar produto |
| PUT | /produtos/:id | Atualizar produto |
| DELETE | /produtos/:id | Excluir produto |

## Autor

Vinicius Moreira