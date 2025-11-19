<template>
  <div class="example-page">
    <AppHeader />
    <main class="main-content">
      <div class="container">
        <section class="example-section">
          <h1>Exemplo de Uso dos Componentes</h1>
          <p>Esta página demonstra como usar os componentes comuns do projeto.</p>

          <!-- Exemplo de Card com Button -->
          <div class="cards-grid">
            <Card variant="elevated" padding="lg">
              <template #header>
                <h3>Card com Botão</h3>
              </template>
              <p>Este é um exemplo de card com conteúdo e botão no footer.</p>
              <template #footer>
                <Button variant="primary" @click="handleClick">
                  Ação Principal
                </Button>
              </template>
            </Card>

            <Card variant="outlined" padding="lg">
              <template #header>
                <h3>Card com Input</h3>
              </template>
              <Input
                v-model="email"
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                :required="true"
                hint="Digite seu e-mail válido"
              />
              <template #footer>
                <Button variant="outline" full-width>
                  Enviar
                </Button>
              </template>
            </Card>
          </div>

          <!-- Exemplo de Botões -->
          <section class="buttons-section">
            <h2>Variantes de Botões</h2>
            <div class="buttons-grid">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>

            <h3>Tamanhos</h3>
            <div class="buttons-row">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>

          <!-- Exemplo de Inputs -->
          <section class="inputs-section">
            <h2>Exemplos de Inputs</h2>
            <div class="inputs-grid">
              <Input
                v-model="name"
                label="Nome"
                placeholder="Digite seu nome"
                :required="true"
              />
              <Input
                v-model="email"
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                :error="emailError"
              />
              <Input
                v-model="password"
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                :required="true"
                hint="Mínimo de 8 caracteres"
              />
            </div>
          </section>
        </section>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Card from '@/components/common/Card.vue'
import Button from '@/components/common/Button.vue'
import Input from '@/components/common/Input.vue'

export default {
  name: 'Example',
  components: {
    AppHeader,
    AppFooter,
    Card,
    Button,
    Input
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      emailError: ''
    }
  },
  methods: {
    handleClick() {
      alert('Botão clicado!')
    }
  },
  watch: {
    email(newValue) {
      if (newValue && !newValue.includes('@')) {
        this.emailError = 'E-mail inválido'
      } else {
        this.emailError = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.example-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: $spacing-3xl 0;
  
  @include mobile {
    padding: $spacing-xl 0;
  }
}

.example-section {
  h1 {
    margin-bottom: $spacing-md;
  }
  
  p {
    margin-bottom: $spacing-xl;
    color: $color-text-secondary;
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  margin-bottom: $spacing-3xl;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    margin-bottom: $spacing-xl;
  }
}

.buttons-section {
  margin-bottom: $spacing-3xl;
  
  @include mobile {
    margin-bottom: $spacing-xl;
  }
  
  h2, h3 {
    margin-bottom: $spacing-lg;
  }
}

.buttons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-md;
  margin-bottom: $spacing-xl;
  
  @include mobile {
    gap: $spacing-sm;
  }
}

.buttons-row {
  display: flex;
  gap: $spacing-md;
  align-items: center;
  
  @include mobile {
    flex-direction: column;
    align-items: stretch;
  }
}

.inputs-section {
  margin-bottom: $spacing-3xl;
  
  @include mobile {
    margin-bottom: $spacing-xl;
  }
  
  h2 {
    margin-bottom: $spacing-lg;
  }
}

.inputs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-lg;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}
</style>

