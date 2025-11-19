# 🚀 Guia Rápido de Início

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: `http://localhost:5173`

## 📋 Checklist para Implementar o Design do Figma

### 1. Configurar Cores e Tipografia
- [ ] Abrir `src/styles/variables.scss`
- [ ] Atualizar variáveis de cor conforme o Figma
- [ ] Configurar fontes (importar fontes em `src/assets/fonts/` se necessário)
- [ ] Ajustar tamanhos de fonte e espaçamentos

### 2. Adicionar Assets
- [ ] Exportar imagens do Figma para `src/assets/images/`
- [ ] Exportar ícones para `src/assets/icons/`
- [ ] Adicionar logo no componente `AppHeader.vue`

### 3. Criar Componentes Específicos
- [ ] Identificar componentes únicos no design Figma
- [ ] Criar novos componentes em `src/components/`
- [ ] Reutilizar componentes comuns (Button, Card, Input) quando possível

### 4. Implementar Views/Páginas
- [ ] Criar views em `src/views/` para cada tela do Figma
- [ ] Adicionar rotas em `src/router/index.js`
- [ ] Implementar layout responsivo (mobile e desktop)

### 5. Ajustar Layout
- [ ] Customizar `AppHeader.vue` conforme o design
- [ ] Customizar `AppFooter.vue` conforme o design
- [ ] Ajustar espaçamentos e alinhamentos

## 🎨 Como Ajustar Cores do Figma

1. No Figma, selecione o elemento
2. Copie o código da cor (hex, rgb, etc)
3. Cole em `src/styles/variables.scss`:

```scss
$color-primary: #SUA_COR_AQUI;
```

## 📱 Testando Responsividade

O projeto já está configurado com breakpoints:
- **Mobile**: até 767px
- **Tablet**: 768px - 991px  
- **Desktop**: 992px+

Use os mixins nos componentes:

```scss
.meu-componente {
  // Estilos mobile (padrão)
  padding: 10px;
  
  // Ajustes desktop
  @include desktop {
    padding: 20px;
  }
}
```

## 🔍 Estrutura de Pastas

```
src/
├── assets/          → Imagens, fontes, ícones
├── components/      → Componentes Vue
│   ├── common/      → Botões, Cards, Inputs (reutilizáveis)
│   └── layout/      → Header, Footer
├── views/           → Páginas da aplicação
├── router/          → Configuração de rotas
└── styles/          → SCSS global e variáveis
```

## 💡 Dicas

- Use componentes comuns (`Button`, `Card`, `Input`) sempre que possível
- Mantenha estilos scoped nos componentes (`<style scoped>`)
- Use variáveis SCSS para cores e espaçamentos
- Teste em mobile e desktop durante o desenvolvimento

## 📚 Documentação Completa

Veja o `README.md` para documentação completa do projeto.

