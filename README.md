# ✅ Tasks - Gerenciador de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **Vue 3**, utilizando **TypeScript**, **Pinia** e **Vue Router**.

O projeto foi criado para praticar conceitos modernos do ecossistema Vue, como gerenciamento de estado global, componentes reutilizáveis, autenticação e persistência de dados.

---

## 🚀 Tecnologias utilizadas

- Vue 3
- TypeScript
- Vite
- Pinia
- Vue Router
- Lucide Icons
- CSS puro
- LocalStorage

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Login de usuário
- Persistência do usuário no navegador
- Logout
- Proteção de rotas com Vue Router

### 📝 Gerenciamento de tarefas
- Criar tarefas
- Marcar como concluída
- Excluir tarefas
- Separação de tarefas por usuário
- Salvamento automático no LocalStorage

### 📊 Dashboard
- Total de tarefas
- Quantidade de tarefas concluídas
- Quantidade de tarefas pendentes

---

## 📂 Estrutura do projeto

```
src
│
├── components
│   ├── TaskForm.vue
│   ├── TaskItem.vue
│   └── TaskList.vue
│
├── views
│   ├── HomeView.vue
│   ├── DashboardView.vue
│   └── LoginView.vue
│
├── stores
│   ├── taskStore.ts
│   └── authStore.ts
│
├── router
│   └── index.ts
│
└── App.vue
```

---

## ⚙️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta:

```bash
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## 🧠 Conceitos praticados

Durante o desenvolvimento foram aplicados:

- Composition API
- Componentização
- Props e Emits
- Stores com Pinia
- Computed Properties
- Vue Router
- Router Guards
- Tipagem com TypeScript
- Persistência com LocalStorage

---

## 🎨 Interface

O layout foi inspirado no design do macOS, utilizando:

- Glassmorphism
- Cards com efeito de transparência
- Sidebar estilo Finder
- Responsividade
- Tema adaptável ao sistema

---

## 📌 Próximas melhorias

- Integração com API REST
- Backend com Django REST Framework
- Banco de dados
- Sistema de usuários real
- Sincronização em nuvem

---

Desenvolvido por **Rafael de França**
