<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outlined', 'elevated'].includes(value)
    },
    padding: {
      type: String,
      default: 'md',
      validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
    }
  },
  computed: {
    cardClasses() {
      return [
        'card',
        `card-${this.variant}`,
        `card-padding-${this.padding}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $color-background;
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: all $transition-base;
  
  &.card-default {
    border: 1px solid $color-border;
  }
  
  &.card-outlined {
    border: 2px solid $color-border;
  }
  
  &.card-elevated {
    border: none;
    box-shadow: $shadow-md;
    
    &:hover {
      box-shadow: $shadow-lg;
    }
  }
}

.card-header {
  border-bottom: 1px solid $color-border-light;
  
  .card-padding-none & {
    padding: 0;
  }
  
  .card-padding-sm & {
    padding: $spacing-sm $spacing-md;
  }
  
  .card-padding-md & {
    padding: $spacing-md $spacing-lg;
  }
  
  .card-padding-lg & {
    padding: $spacing-lg $spacing-xl;
  }
}

.card-body {
  .card-padding-none & {
    padding: 0;
  }
  
  .card-padding-sm & {
    padding: $spacing-sm $spacing-md;
  }
  
  .card-padding-md & {
    padding: $spacing-md $spacing-lg;
    
    @include mobile {
      padding: $spacing-sm $spacing-md;
    }
  }
  
  .card-padding-lg & {
    padding: $spacing-lg $spacing-xl;
    
    @include mobile {
      padding: $spacing-md $spacing-lg;
    }
  }
}

.card-footer {
  border-top: 1px solid $color-border-light;
  
  .card-padding-none & {
    padding: 0;
  }
  
  .card-padding-sm & {
    padding: $spacing-sm $spacing-md;
  }
  
  .card-padding-md & {
    padding: $spacing-md $spacing-lg;
  }
  
  .card-padding-lg & {
    padding: $spacing-lg $spacing-xl;
  }
}
</style>

