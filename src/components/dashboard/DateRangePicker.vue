<template>
  <div class="date-range-picker">
    <img src="@/assets/icons/calendar.svg" alt="Calendar" class="date-range-icon" />
    <div class="date-input-group">
      <input 
        type="date" 
        class="date-range-input"
        :value="formattedStartDate"
        @input="handleStartDateChange"
      />
      <span class="date-display">{{ displayStartDate }}</span>
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="date-arrow-icon" />
    </div>
    <span class="date-separator">|</span>
    <div class="date-input-group">
      <input 
        type="date" 
        class="date-range-input"
        :value="formattedEndDate"
        @input="handleEndDateChange"
      />
      <span class="date-display">{{ displayEndDate }}</span>
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="date-arrow-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateRangePicker',
  props: {
    startDate: {
      type: String,
      default: '10-06-2020'
    },
    endDate: {
      type: String,
      default: '30-01-2025'
    }
  },
  emits: ['update:startDate', 'update:endDate'],
  computed: {
    formattedStartDate() {
      return this.formatDateForInput(this.startDate)
    },
    formattedEndDate() {
      return this.formatDateForInput(this.endDate)
    },
    displayStartDate() {
      return this.formatDateForDisplay(this.startDate)
    },
    displayEndDate() {
      return this.formatDateForDisplay(this.endDate)
    }
  },
  methods: {
    formatDateForInput(dateString) {
      // Converte DD-MM-YYYY para YYYY-MM-DD se necessário
      if (dateString && dateString.includes('-') && dateString.split('-')[0].length === 2) {
        const [day, month, year] = dateString.split('-')
        return `${year}-${month}-${day}`
      }
      return dateString
    },
    formatDateForDisplay(dateString) {
      // Converte YYYY-MM-DD para DD-MM-YYYY para exibição
      if (dateString && dateString.includes('-')) {
        const parts = dateString.split('-')
        if (parts[0].length === 4) {
          // Formato YYYY-MM-DD
          const [year, month, day] = parts
          return `${day}-${month}-${year}`
        } else if (parts[0].length === 2) {
          // Já está em DD-MM-YYYY
          return dateString
        }
      }
      return dateString
    },
    handleStartDateChange(event) {
      // Converte YYYY-MM-DD para DD-MM-YYYY
      const dateValue = event.target.value
      if (dateValue) {
        const [year, month, day] = dateValue.split('-')
        const formattedDate = `${day}-${month}-${year}`
        this.$emit('update:startDate', formattedDate)
      }
    },
    handleEndDateChange(event) {
      // Converte YYYY-MM-DD para DD-MM-YYYY
      const dateValue = event.target.value
      if (dateValue) {
        const [year, month, day] = dateValue.split('-')
        const formattedDate = `${day}-${month}-${year}`
        this.$emit('update:endDate', formattedDate)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.date-range-picker {
  position: relative;
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-lg;
  padding-left: 40px;
  background-color: $color-background;
  border: 1px solid $color-border;
  border-radius: 250px;
  min-width: 280px;
  transition: all $transition-fast;
  
  &:hover,
  &:focus-within {
    background-color: $color-primary;
    border-color: $color-primary;
    
    .date-range-input {
      color: $color-text-light;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    
    .date-separator {
      color: $color-text-light;
    }
    
    .date-range-icon {
      filter: brightness(0) invert(1);
    }
  }
  
  @include mobile {
    min-width: auto;
    flex: 1;
  }
}

.date-range-icon {
  position: absolute;
  left: $spacing-md;
  width: 20px;
  height: 20px;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
  transition: filter $transition-fast;
}

.date-input-group {
  position: relative;
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  flex: 1;
  min-width: 0;
}

.date-range-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
}

.date-display {
  font-size: $font-size-sm;
  color: $color-text-primary;
  white-space: nowrap;
  pointer-events: none;
  transition: color $transition-fast;
  
  @include mobile {
    font-size: $font-size-xs;
  }
}

.date-arrow-icon {
  width: 6px;
  height: 3px;
  object-fit: contain;
  flex-shrink: 0;
  pointer-events: none;
  transition: filter $transition-fast;
}

.date-range-picker:hover .date-display,
.date-range-picker:focus-within .date-display {
  color: #fff;
}

.date-range-picker:hover .date-arrow-icon,
.date-range-picker:focus-within .date-arrow-icon {
  filter: brightness(0) invert(1);
}

.date-separator {
  color: $color-text-secondary;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  flex-shrink: 0;
  margin: 0 $spacing-xs;
  transition: color $transition-fast;
}

.date-range-picker:hover .date-separator,
.date-range-picker:focus-within .date-separator {
  color: #fff;
}
</style>

