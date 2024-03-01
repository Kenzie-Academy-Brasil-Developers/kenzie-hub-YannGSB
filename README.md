# KenzieHub

## Descrição do Projeto

O projeto KenzieHub consiste em uma aplicação que oferece funcionalidades de cadastro, login, autenticação, e um CRUD para gerenciamento de tecnologias do usuário.

### Funcionalidades Implementadas

1. **Cadastro e Login:**
   - Criação da estrutura de páginas: Login, Register e Dashboard.
   - Implementação de formulários utilizando React Hook Form.
   - Configuração de rotas usando React Router Dom.
   - Validações nos formulários de registro e login.
   - Funcionalidades de registro, login e logout.
   - Utilização da API Kenzie Hub para interação com usuários.

2. **CRUD:**
   - Componentização de TechList e TechCard.
   - Criação de modais CreateTechModal e EditTechModal.
   - Estilização dos novos componentes com SASS.
   - Implementação do contexto TechContext para o CRUD.
   - Integração do estado de tecnologias com o contexto de usuário.
   - Funcionalidades de criação, exclusão e atualização de tecnologias.
   - Utilização das rotas POST, DELETE e PUT da API Kenzie Hub.

3. **Autenticação Completa:**
   - Refatoração da lógica para arquitetura de contexto.
   - Centralização das rotinas de usuário em um contexto.
   - Estados e funcionalidades movidos para o contexto de usuário.
   - Utilização do hook useContext nos componentes.
   - Implementação da função de autologin com requisição GET para /profile.
   - Proteção de rotas usando React Router Dom (Outlet / Navigate).

### Informações Adicionais

- **Deploy no Vercel:**
  - [Link do Projeto](https://kenzie-hub-yann-gsb.vercel.app/)
