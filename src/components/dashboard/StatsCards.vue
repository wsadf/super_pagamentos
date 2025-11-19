<template>
  <div class="stats-cards">
    <div 
      v-for="(stat, index) in stats" 
      :key="index"
      class="stat-card"
    >
      <img src="@/assets/icons/icone-percentage.svg" alt="Percentage" class="percentage-icon" />
      <div class="stat-header">
        <h3 class="stat-title">{{ stat.title }}</h3>
        <img v-if="stat.info" src="@/assets/icons/icone-exclamacao.svg" alt="Info" class="stat-info" />
      </div>
      <div class="stat-amount">{{ stat.amount }}</div>
      <div class="stat-footer">
        <span class="stat-count">{{ stat.count }} cobranças</span>
        <span class="stat-percentage">{{ stat.percentage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCards',
  data() {
    return {
      stats: [
        {
          title: 'Reembolsos',
          amount: 'R$ 8.260,10',
          count: '233',
          percentage: '4,5%',
          info: false
        },
        {
          title: 'Chargebacks',
          amount: 'R$ 1.260,10',
          count: '5',
          percentage: '0,3%',
          info: true
        },
        {
          title: 'Cancelados',
          amount: 'R$ 3.120,60',
          count: '32',
          percentage: '1,5%',
          info: false
        },
        {
          title: 'Não autorizado',
          amount: 'R$ 6.120,60',
          count: '122',
          percentage: '3,1%',
          info: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
  padding-left: 16px;
  padding-right: 16px;
  
  @include mobile {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
    padding-left: 0;
    padding-right: 0;
  }
}

.stat-card {
  background-color: $color-background;
  width: 305px;
  height: 155px;
  border-radius: 12px;
  padding: $spacing-xl;
  box-shadow: $shadow-sm;
  box-sizing: border-box;
  position: relative;
  
  @include mobile {
    width: 100%;
    height: auto;
    min-height: 120px;
    padding: $spacing-md;
  }
}

.percentage-icon {
  position: absolute;
  top: $spacing-md;
  right: $spacing-md;
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.stat-header {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  margin-bottom: $spacing-md;
}

.stat-title {
  font-size: 16px;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin: 0;
}

.stat-info {
  width: 19px;
  height: 19px;
  object-fit: contain;
  cursor: pointer;
}

.stat-amount {
  font-size: 20px;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin-bottom: $spacing-xs;
}

.stat-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid $color-border-lightest;
  padding-top: $spacing-sm;
  margin-top: $spacing-sm;
  margin-left: -$spacing-xl;
  margin-right: -$spacing-xl;
  padding-left: $spacing-xl;
  padding-right: $spacing-xl;
}

.stat-count {
  font-size: $font-size-sm;
  font-weight: 500;
  color: $color-text-secondary;
}

.stat-percentage {
  font-size: $font-size-sm;
  font-weight: 700;
  color: $color-text-secondary;
}
</style>

