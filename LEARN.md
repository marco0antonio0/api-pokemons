## Exemplo acesse o projeto nas rotas

- busca os dados por **id**
  - https://api-pokemon.nova-work.cloud/api/get-one?id=5
- busca os todos os dados
  - https://api-pokemon.nova-work.cloud/api/get-all
- sortea um int e busca esse dados
  - https://api-pokemon.nova-work.cloud/api/get-one?id=5

## Visão Geral

A API-Pokemon fornece três rotas distintas, cada uma com funcionalidades:

### 1. `GET /api/get-all`

- Descrição: Esta rota permite buscar todos os dados fornecidos pela API
- Uso: `GET /api/get-all`

### 2. `GET /api/get-one`

- Descrição: Esta rota permite recuperar dados especificando um ID.
- Uso: `GET /api/get-one`

### 3. `GET /api/sort?id=<set_int>`

- Descrição: Esta rota permite realizar uma ordenação aleatória e recuperar os dados na posição especificada.
- Uso: `GET /api/sort?id=5`

## Começando

Para começar a usar esta API, siga estas etapas:

1. Clone o repositório para sua máquina local:

```bash
  git clone https://github.com/marco0antonio0/api-pokemons
```

2. Instale as dependências necessárias:

```bash
  npm install
```

3. Inicie o servidor:

```bash
  npm run dev
```

4. Acesse a API por meio das rotas definidas, conforme descrito na seção "Visão Geral".
