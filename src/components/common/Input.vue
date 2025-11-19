<template>
  <div class="input-wrapper">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <span v-if="error" class="input-error">{{ error }}</span>
    <span v-if="hint && !error" class="input-hint">{{ hint }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  computed: {
    inputId() {
      return `input-${Math.random().toString(36).substr(2, 9)}`
    },
    inputClasses() {
      return [
        'input',
        `input-${this.size}`,
        {
          'input-error': this.error,
          'input-disabled': this.disabled
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: $spacing-xs;
  width: 100%;
}

.input-label {
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  color: $color-text-primary;
  margin-bottom: $spacing-xs;
  
  .required-mark {
    color: $color-danger;
    margin-left: $spacing-xs;
  }
}

.input {
  width: 100%;
  font-family: $font-family-primary;
  font-size: $font-size-base;
  color: $color-text-primary;
  background-color: $color-background;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  padding: $spacing-md;
  transition: all $transition-fast;
  
  &:focus {
    outline: none;
    border-color: $color-primary;
    box-shadow: 0 0 0 3px rgba($color-primary, 0.1);
  }
  
  &::placeholder {
    color: $color-text-muted;
  }
  
  &.input-error {
    border-color: $color-danger;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba($color-danger, 0.1);
    }
  }
  
  &.input-disabled {
    background-color: $color-background-light;
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  // Tamanhos
  &.input-sm {
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-sm;
    min-height: 32px;
  }
  
  &.input-md {
    padding: $spacing-md;
    font-size: $font-size-base;
    min-height: 40px;
    
    @include mobile {
      padding: $spacing-sm $spacing-md;
      font-size: $font-size-sm;
      min-height: 36px;
    }
  }
  
  &.input-lg {
    padding: $spacing-lg;
    font-size: $font-size-lg;
    min-height: 48px;
    
    @include mobile {
      padding: $spacing-md;
      font-size: $font-size-base;
      min-height: 44px;
    }
  }
}

.input-error {
  font-size: $font-size-xs;
  color: $color-danger;
  margin-top: $spacing-xs;
}

.input-hint {
  font-size: $font-size-xs;
  color: $color-text-muted;
  margin-top: $spacing-xs;
}
</style>

