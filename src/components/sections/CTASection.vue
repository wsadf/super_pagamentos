<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">{{ title }}</h2>
        <p class="cta-description">{{ description }}</p>
        <div class="cta-actions">
          <Button 
            variant="primary" 
            size="lg"
            @click="$emit('cta-click')"
          >
            {{ ctaText }}
          </Button>
          <Button 
            v-if="secondaryText"
            variant="outline" 
            size="lg"
            :style="{ color: 'white', borderColor: 'white' }"
            @click="$emit('secondary-click')"
          >
            {{ secondaryText }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/common/Button.vue'

export default {
  name: 'CTASection',
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: 'Pronto para começar?'
    },
    description: {
      type: String,
      default: 'Junte-se a milhares de empresas que já confiam no Super Pagamentos'
    },
    ctaText: {
      type: String,
      default: 'Criar Conta Grátis'
    },
    secondaryText: {
      type: String,
      default: 'Falar com Vendas'
    }
  },
  emits: ['cta-click', 'secondary-click']
}
</script>

<style lang="scss" scoped>
.cta-section {
  padding: $spacing-3xl 0;
  background: linear-gradient(135deg, $color-primary 0%, $color-secondary 100%);
  color: $color-text-light;
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
    background: radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: $font-size-4xl;
  font-weight: $font-weight-bold;
  color: $color-text-light;
  margin-bottom: $spacing-md;
  
  @include mobile {
    font-size: $font-size-2xl;
  }
}

.cta-description {
  font-size: $font-size-xl;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: $spacing-xl;
  line-height: 1.6;
  
  @include mobile {
    font-size: $font-size-base;
    margin-bottom: $spacing-lg;
  }
}

.cta-actions {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  flex-wrap: wrap;
  
  @include mobile {
    flex-direction: column;
    width: 100%;
    
    :deep(.btn) {
      width: 100%;
    }
  }
}
</style>

