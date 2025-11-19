<template>
  <section id="features" class="features-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ title }}</h2>
        <p class="section-description">{{ description }}</p>
      </div>
      
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon">
            <div class="icon-wrapper" :style="{ backgroundColor: feature.color + '20' }">
              <span class="icon-emoji">{{ feature.icon }}</span>
            </div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  props: {
    title: {
      type: String,
      default: 'Por que escolher o Super Pagamentos?'
    },
    description: {
      type: String,
      default: 'Oferecemos as melhores soluções para o seu negócio crescer'
    },
    features: {
      type: Array,
      default: () => [
        {
          icon: '💳',
          title: 'Pagamentos Rápidos',
          description: 'Processe pagamentos em segundos com nossa tecnologia avançada',
          color: '#6366f1'
        },
        {
          icon: '🔒',
          title: '100% Seguro',
          description: 'Seus dados protegidos com criptografia de nível bancário',
          color: '#10b981'
        },
        {
          icon: '📊',
          title: 'Relatórios Detalhados',
          description: 'Acompanhe todas as transações com relatórios em tempo real',
          color: '#3b82f6'
        },
        {
          icon: '🌐',
          title: 'Multi-plataforma',
          description: 'Funciona em qualquer dispositivo, desktop ou mobile',
          color: '#8b5cf6'
        },
        {
          icon: '⚡',
          title: 'Integração Fácil',
          description: 'API simples e documentação completa para desenvolvedores',
          color: '#f59e0b'
        },
        {
          icon: '💬',
          title: 'Suporte 24/7',
          description: 'Nossa equipe está sempre disponível para ajudar você',
          color: '#ec4899'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.features-section {
  padding: $spacing-3xl 0;
  background-color: $color-background;
  
  @include mobile {
    padding: $spacing-xl 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: $spacing-3xl;
  
  @include mobile {
    margin-bottom: $spacing-xl;
  }
}

.section-title {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin-bottom: $spacing-md;
  
  @include mobile {
    font-size: $font-size-2xl;
  }
}

.section-description {
  font-size: $font-size-lg;
  color: $color-text-secondary;
  max-width: 600px;
  margin: 0 auto;
  
  @include mobile {
    font-size: $font-size-base;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: $spacing-xl;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
  
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.feature-card {
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  background-color: $color-background;
  border: 1px solid $color-border-light;
  transition: all $transition-base;
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-lg;
    border-color: $color-primary;
  }
  
  @include mobile {
    padding: $spacing-lg;
  }
}

.feature-icon {
  margin-bottom: $spacing-lg;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: $border-radius-full;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: transform $transition-base;
  
  .feature-card:hover & {
    transform: scale(1.1);
  }
  
  @include mobile {
    width: 60px;
    height: 60px;
  }
}

.icon-emoji {
  font-size: 2.5rem;
  
  @include mobile {
    font-size: 2rem;
  }
}

.feature-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin-bottom: $spacing-sm;
  
  @include mobile {
    font-size: $font-size-lg;
  }
}

.feature-description {
  font-size: $font-size-base;
  color: $color-text-secondary;
  line-height: 1.6;
  
  @include mobile {
    font-size: $font-size-sm;
  }
}
</style>

