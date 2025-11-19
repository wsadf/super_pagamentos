<template>
  <div class="controls-bar">
    <button class="btn-new-charge">
      Nova cobrança
      <div class="btn-icon-wrapper">
        <span class="btn-icon">+</span>
      </div>
    </button>
    
    <div class="controls-filters">
      <button class="filter-btn">
        <img src="@/assets/icons/calendar.svg" alt="Calendar" class="filter-icon" />
        Período: Específico
      </button>
      
      <DateRangePicker 
        :start-date="startDate"
        :end-date="endDate"
        @update:start-date="startDate = $event"
        @update:end-date="endDate = $event"
      />
    </div>
    
    <div class="controls-right">
      <button class="filter-btn">
        <img src="@/assets/icons/card-trasnfer.svg" alt="Card transfer" class="filter-icon" />
        <span class="filter-text">Tipo de cobrança</span>
        <img src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="filter-arrow-icon" />
      </button>
      
      <button class="download-btn">
        <img src="@/assets/icons/download-icon.svg" alt="Download" class="download-icon" />
      </button>
    </div>
  </div>
</template>

<script>
import DateRangePicker from './DateRangePicker.vue'

export default {
  name: 'ControlsBar',
  components: {
    DateRangePicker
  },
  data() {
    return {
      startDate: '10-06-2020',
      endDate: '30-01-2025'
    }
  }
}
</script>

<style lang="scss" scoped>
.controls-bar {
  display: flex;
  gap: $spacing-md;
  margin-bottom: $spacing-xl;
  flex-wrap: wrap;
  align-items: center;
  
  @include mobile {
    flex-direction: column;
    align-items: stretch;
  }
}

.btn-new-charge {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-lg;
  background-color: #0641FC;
  color: #fff;
  border: none;
  border-radius: 250px;
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  cursor: pointer;
  transition: all $transition-fast;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
  
}

.btn-icon-wrapper {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-icon {
  font-size: $font-size-base;
  font-weight: $font-weight-bold;
  line-height: 1;
  color: #0641FC;
}

.controls-filters {
  display: flex;
  gap: $spacing-sm;
  flex: 1;
  flex-wrap: wrap;
  
  @include mobile {
    width: 100%;
  }
}

.controls-right {
  display: flex;
  gap: $spacing-sm;
  align-items: center;
  
  @include mobile {
    width: 100%;
    justify-content: flex-end;
  }
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-lg;
  background-color: #fff;
  color: $color-text-primary;
  border: 1px solid $color-border;
  border-radius: 250px;
  font-size: $font-size-sm;
  cursor: pointer;
  transition: all $transition-fast;
  white-space: nowrap;
  
  &:hover,
  &:active,
  &.active {
    background-color: #0641FC;
    color: #fff;
    border-color: #0641FC;
  }
  
  .filter-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    transition: filter $transition-fast;
    flex-shrink: 0;
  }
  
  .filter-text {
    flex: 1;
    text-align: left;
  }
  
  .filter-arrow-icon {
    width: 9px;
    height: 6px;
    object-fit: contain;
    transition: filter $transition-fast;
    flex-shrink: 0;
  }
  
  &:hover .filter-icon,
  &:active .filter-icon,
  &.active .filter-icon,
  &:hover .filter-arrow-icon,
  &:active .filter-arrow-icon,
  &.active .filter-arrow-icon {
    filter: brightness(0) invert(1);
  }
}

.download-btn {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid $color-border;
  border-radius: 250px;
  cursor: pointer;
  transition: all $transition-fast;
  
  &:hover,
  &:active {
    background-color: #0641FC;
    border-color: #0641FC;
    
    .download-icon {
      filter: brightness(0) invert(1);
    }
  }
  
  .download-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    transition: filter $transition-fast;
  }
}
</style>

