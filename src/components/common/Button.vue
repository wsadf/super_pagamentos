<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'danger', 'outline', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    fullWidth: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    buttonClasses() {
      return [
        'btn',
        `btn-${this.variant}`,
        `btn-${this.size}`,
        {
          'btn-disabled': this.disabled,
          'btn-full-width': this.fullWidth
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $font-family-primary;
  font-weight: $font-weight-medium;
  text-align: center;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: all $transition-base;
  white-space: nowrap;
  user-select: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($color-primary, 0.25);
  }
  
  &:disabled,
  &.btn-disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  // Tamanhos
  &.btn-sm {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-sm;
    min-height: 32px;
  }
  
  &.btn-md {
    padding: $spacing-md $spacing-lg;
    font-size: $font-size-base;
    min-height: 40px;
    
    @include mobile {
      padding: $spacing-sm $spacing-md;
      font-size: $font-size-sm;
      min-height: 36px;
    }
  }
  
  &.btn-lg {
    padding: $spacing-lg $spacing-xl;
    font-size: $font-size-lg;
    min-height: 48px;
    
    @include mobile {
      padding: $spacing-md $spacing-lg;
      font-size: $font-size-base;
      min-height: 44px;
    }
  }
  
  // Variantes
  &.btn-primary {
    background-color: $color-primary;
    color: $color-text-light;
    
    &:hover:not(:disabled) {
      background-color: $color-primary-dark;
    }
  }
  
  &.btn-secondary {
    background-color: $color-secondary;
    color: $color-text-light;
    
    &:hover:not(:disabled) {
      background-color: darken($color-secondary, 10%);
    }
  }
  
  &.btn-success {
    background-color: $color-success;
    color: $color-text-light;
    
    &:hover:not(:disabled) {
      background-color: darken($color-success, 10%);
    }
  }
  
  &.btn-danger {
    background-color: $color-danger;
    color: $color-text-light;
    
    &:hover:not(:disabled) {
      background-color: darken($color-danger, 10%);
    }
  }
  
  &.btn-outline {
    background-color: transparent;
    border-color: $color-primary;
    color: $color-primary;
    
    &:hover:not(:disabled) {
      background-color: $color-primary;
      color: $color-text-light;
    }
  }
  
  &.btn-ghost {
    background-color: transparent;
    color: $color-primary;
    
    &:hover:not(:disabled) {
      background-color: $color-background-light;
    }
  }
  
  // Largura total
  &.btn-full-width {
    width: 100%;
  }
}
</style>

