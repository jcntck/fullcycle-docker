# Desafios do módulo de Docker do curso Full Cycle 3.0

Este repositório contém os dois desafios propostos no módulo de `Docker` no curso Full Cycle 3.0.
1. [Go](#go)
2. [Nginx com Node](#nginx-com-node)

## Go

### Descrição do desafio

1. Criar imagem utilizando `Go Lang` que imprima no terminal a frase `Full Cycle Rocks!!`
2. A imagem precisa ter menos de **`2MB`**
3. A imagem deve ser disponibilizada no `Docker Hub`

### Execução

* A imagem pode ser encontrada no `Docker Hub` com o nome de `jcntck/fullcycle`. Link: [jcntck/fullcycle](https://hub.docker.com/repository/docker/jcntck/fullcycle/general)

```
docker run --rm jcntck/fullcycle
```

## Nginx com Node

### Descrição do desafio

1. Aplicação Web desenvolvida com `Node.js` e `Express`
2. Proxy reverso com `Nginx` disponibilizando a aplicação na porta `8080`
3. Integração com `MySQL` utilizando o recurso `healthcheck` para manter a precedência de criação de containers.
   
Retorno esperado da aplicação na rota `/`
```html
<h1>Full Cycle Rocks!</h1>
<ul>
  ... Lista de nomes
</ul>
```

### Execução

```
docker compose up -d
```