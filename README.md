# 
<h1 align="center">
  FAKE API
</h1>

<p align = "center">
Esta é uma API de exemplo usando a biblioteca JSON-Server e JSON-Server-Auth, simulando o acesso a um banco de dados com requisições. 
</p>


## **Endpoints**


### **GET** /help

Retorna este arquivo README.md convertido como HTML.
### **GET** /echo?teste=1&teste2=9
Apenas para teste de parametros enviados por query string e retornados como json.

Result:

```json
{
	"teste": "1",
	"teste2": "9"
}
```
### **POST** /register

Criar um novo usuário

Body:

```json
{
      "email": "n@taniel.com.br",
      "password": "123456",
      "name": "NatanFiuza",
      "age": 45      
}
```

Result:

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5AdGFuaWVsLmNvbS5iciIsImlhdCI6MTY0NzQ0NDI1NywiZXhwIjoxNjQ3NDQ3ODU3LCJzdWIiOiIyIn0.Lx1fVZl1ot2Qhdx9OeGCFhE7hVQYs445vhZiKghAOYs",
	"user": {
		"email": "n@taniel.com.br",
		"name": "NatanFiuza",
		"age": 45,
		"createdAt": "Wed, 16 Mar 2022 15:24:17 GMT",
		"id": 2
	}
}
```

### POST /login

Fazer o login do usuário

Body:

```json
{
	
  "email": "kenzinho@mail.com",
  "password": "123456"

}
```

Result:

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnppbmhvQG1haWwuY29tIiwiaWF0IjoxNjQ3NDQ0MzIzLCJleHAiOjE2NDc0NDc5MjMsInN1YiI6IjEifQ.pWMmKd-JtrUKNWW2C38tDbOTb7aNHdd-3VYOlt09pcE",
	"user": {
		"email": "kenzinho@mail.com",
		"name": "Kenzinho",
		"age": 38,
		"createdAt": "Tue, 15 Mar 2022 20:34:30 GMT",
		"id": 1
	}
}
```

### GET /users/:id

Lista o usuário pelo **:id** , somente os dados do usuário logado

Result:

```json
{
	"email": "kenzinho@mail.com",
	"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
	"name": "Kenzinho",
	"age": 38,
	"createdAt": "Tue, 15 Mar 2022 20:34:30 GMT",
	"id": 1
}

```

Authentication Bearer Token requerido, user o campo accessToken passado no login

### GET /users/:id?_embed=techs

Retorna os dados do usuário passado por **:id** e com a lista de **techs** relacionadas ao mesmo.

Result:

```json
{
	"email": "kenzinho@mail.com",
	"password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
	"name": "Kenzinho",
	"age": 38,
	"createdAt": "Tue, 15 Mar 2022 20:34:30 GMT",
	"id": 1,
	"techs": [
		{
			"id": 1,
			"userId": 1,
			"name": "JavaScript",
			"status": "Avançado"
		},
		{
			"id": 2,
			"userId": 1,
			"name": "React",
			"status": "Iniciante"
		},
		{
			"name": "Pearl",
			"status": "Avançado",
			"userId": 1,
			"id": 5
		},
		{
			"name": "PHP",
			"status": "Avançado",
			"userId": 1,
			"id": 6
		},
		{
			"name": "Kotlin",
			"status": "Avançado",
			"userId": 1,
			"id": 7
		}
	]
}

```
Authentication Bearer Token requerido, user o campo accessToken passado no login

### GET /techs

Retorna a lista de todos as tecnologias

```json
[
	{
		"id": 1,
		"userId": 1,
		"name": "JavaScript",
		"status": "Avançado"
	},
	{
		"id": 2,
		"userId": 1,
		"name": "React",
		"status": "Iniciante"
	},
	{
		"id": 3,
		"userId": 2,
		"name": "Python",
		"status": "Intermediario"
	},
	{
		"name": "PHP",
		"status": "Avançado",
		"userId": 2,
		"id": 4
	},
	{
		"name": "Pearl",
		"status": "Avançado",
		"userId": 1,
		"id": 5
	},
	{
		"name": "PHP",
		"status": "Avançado",
		"userId": 1,
		"id": 6
	},
	{
		"name": "Kotlin",
		"status": "Avançado",
		"userId": 1,
		"id": 7
	}
]
```

### GET /techs?userId=:id

Retornar todas as techs relacionadas ao usuário pelo **:id** informado. 



Result:
```json
[
	{
		"id": 1,
		"userId": 1,
		"name": "JavaScript",
		"status": "Avançado"
	},
	{
		"id": 2,
		"userId": 1,
		"name": "React",
		"status": "Iniciante"
	},
	{
		"name": "Pearl",
		"status": "Avançado",
		"userId": 1,
		"id": 5
	},
	{
		"name": "PHP",
		"status": "Avançado",
		"userId": 1,
		"id": 6
	},
	{
		"name": "Kotlin",
		"status": "Avançado",
		"userId": 1,
		"id": 7
	},
	{
		"name": "PHP",
		"status": "Avançado",
		"userId": "1",
		"id": 8
	},
	{
		"name": "PHP",
		"status": "Avançado",
		"userId": "1",
		"id": 9
	}
]
```
