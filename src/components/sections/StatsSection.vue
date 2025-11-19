<template>
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="stat-item"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  props: {
    stats: {
      type: Array,
      default: () => [
        { value: '10K+', label: 'Empresas Ativas' },
        { value: 'R$ 1B+', label: 'Processados' },
        { value: '99.9%', label: 'Uptime' },
        { value: '24/7', label: 'Suporte' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-section {
  padding: $spacing-3xl 0;
  background-color: $color-background-light;
  
  @include mobile {
    padding: $spacing-xl 0;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-xl;
  
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
  }
}

.stat-item {
  text-align: center;
  padding: $spacing-lg;
  
  @include mobile {
    padding: $spacing-md;
  }
}

.stat-value {
  font-size: $font-size-5xl;
  font-weight: $font-weight-bold;
  color: $color-primary;
  margin-bottom: $spacing-sm;
  line-height: 1;
  
  @include mobile {
    font-size: $font-size-3xl;
  }
}

.stat-label {
  font-size: $font-size-lg;
  color: $color-text-secondary;
  font-weight: $font-weight-medium;
  
  @include mobile {
    font-size: $font-size-base;
  }
}
</style>

