Modelagem de dados do sistema de notificações AvisaETEC (Grupo 4 — TCC ETEC Zona Leste).

## Diagrama

```mermaid

    FUNCIONARIO ||--o{ NOTIFICACAO : envia
    MODULO ||--o{ ALUNO : possui
    MODULO ||--o{ NOTIFICACAO : "destino (opcional)"
    ALUNO ||--o{ NOTIFICACAO : "destino (opcional)"

    FUNCIONARIO {
        int id_funcionario PK
        string nome
        string perfil
    }
    MODULO {
        int id_modulo PK
        string nome
    }
    ALUNO {
        int id_aluno PK
        string nome
        int id_modulo FK
    }
    NOTIFICACAO {
        int id_notificacao PK
        int id_modulo_destino FK
        int id_aluno_destino FK
        string titulo
        text mensagem
        int id_funcionario FK
        boolean status
        timestamp data
    }
```
=================================================================================
## Código-fonte (DBML)

Cole este código em [dbdiagram.io](https://dbdiagram.io) para editar visualmente.

```dbml
Table Funcionario {
  id_funcionario integer [primary key, increment]
  nome varchar
  perfil varchar
}

Table Modulo {
  id_modulo integer [primary key, increment]
  nome varchar
}

Table Aluno {
  id_aluno integer [primary key, increment]
  nome varchar
  id_modulo integer
}

Table Notificacao {
  id_notificacao integer [primary key, increment]
  id_modulo_destino integer
  id_aluno_destino integer
  titulo varchar
  mensagem text
  id_funcionario integer [not null]
  status boolean
  data timestamp
}

Ref: Notificacao.id_modulo_destino > Modulo.id_modulo
Ref: Notificacao.id_aluno_destino > Aluno.id_aluno
Ref: Aluno.id_modulo > Modulo.id_modulo
Ref: Notificacao.id_funcionario > Funcionario.id_funcionario
```

## Decisões de modelagem

- `Notificacao` tem duas colunas de destino (`id_modulo_destino` e `id_aluno_destino`), nenhuma delas obrigatória — cada notificação preenche só uma, dependendo se o envio é para uma turma inteira ou para um aluno específico.
- `Funcionario` usa um único campo `perfil` para diferenciar professor de coordenador, em vez de duas tabelas separadas.
- `Modulo` foi modelado separado de "turma" (que existe na escola, mas foi deixada fora do escopo deste projeto para simplificar).
