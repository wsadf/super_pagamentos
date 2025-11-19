<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            {{ title }}
          </h1>
          <p class="hero-description">
            {{ description }}
          </p>
          <div class="hero-actions">
            <Button 
              variant="primary" 
              size="lg"
              @click="$emit('cta-click')"
            >
              {{ ctaText }}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              @click="$emit('secondary-click')"
            >
              {{ secondaryText }}
            </Button>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-placeholder">
            <!-- TODO: Adicionar imagem do Figma aqui -->
            <div class="placeholder-content">
              <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" rx="16" fill="url(#gradient)"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6366f1"/>
                    <stop offset="1" stop-color="#8b5cf6"/>
                  </linearGradient>
                </defs>
                <path d="M200 150L150 120L200 90L250 120L200 150Z" fill="white" opacity="0.3"/>
                <circle cx="200" cy="150" r="40" fill="white" opacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/common/Button.vue'

export default {
  name: 'HeroSection',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: 'Soluções de Pagamento para o Seu Negócio'
    },
    description: {
      type: String,
      default: 'Receba pagamentos de forma rápida, segura e simples. A melhor plataforma de pagamentos para empresas de todos os tamanhos.'
    },
    ctaText: {
      type: String,
      default: 'Começar Agora'
    },
    secondaryText: {
      type: String,
      default: 'Saiba Mais'
    }
  },
  emits: ['cta-click', 'secondary-click']
}
</script>

<style lang="scss" scoped>
.hero-section {
  padding: $spacing-3xl 0;
  background: linear-gradient(135deg, $color-primary-lighter 0%, rgba(255, 255, 255, 0) 100%);
  position: relative;
  overflow: hidden;
  
  @include mobile {
    padding: $spacing-xl 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-3xl;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @include mobile-and-tablet {
    grid-template-columns: 1fr;
    gap: $spacing-xl;
    text-align: center;
  }
}

.hero-text {
  @include desktop {
    max-width: 600px;
  }
}

.hero-title {
  font-size: $font-size-5xl;
  font-weight: $font-weight-bold;
  line-height: 1.1;
  color: $color-text-primary;
  margin-bottom: $spacing-lg;
  
  @include mobile {
    font-size: $font-size-3xl;
    margin-bottom: $spacing-md;
  }
  
  @include tablet {
    font-size: $font-size-4xl;
  }
}

.hero-description {
  font-size: $font-size-xl;
  color: $color-text-secondary;
  line-height: 1.6;
  margin-bottom: $spacing-xl;
  
  @include mobile {
    font-size: $font-size-base;
    margin-bottom: $spacing-lg;
  }
}

.hero-actions {
  display: flex;
  gap: $spacing-md;
  flex-wrap: wrap;
  
  @include mobile {
    flex-direction: column;
    width: 100%;
    
    :deep(.btn) {
      width: 100%;
    }
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  
  @include mobile-and-tablet {
    order: -1;
  }
}

.hero-placeholder {
  width: 100%;
  max-width: 500px;
  border-radius: $border-radius-xl;
  overflow: hidden;
  box-shadow: $shadow-xl;
  
  @include mobile {
    max-width: 100%;
  }
}

.placeholder-content {
  width: 100%;
  height: auto;
  
  svg {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>

