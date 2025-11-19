<template>
  <div class="conversion-cards">
    <h2 class="conversion-title">Conversão por modalidade</h2>
    <div class="conversion-items">
      <div 
        v-for="(item, index) in conversions" 
        :key="index"
        class="conversion-card"
      >
        <div class="donut-chart-container">
          <canvas 
            :ref="el => { if (el) chartRefs[index] = el }"
            class="donut-chart"
            :data-percentage="item.percentage"
            :data-color="item.color"
          ></canvas>
          <div class="chart-center">
            <span class="chart-percentage">{{ item.percentage }}%</span>
          </div>
        </div>
        <div class="conversion-label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversionCards',
  data() {
    return {
      chartRefs: [],
      conversions: [
        { label: 'Crédito', percentage: 92, color: '#3b82f6' },
        { label: 'Débito', percentage: 95, color: '#8b5cf6' },
        { label: 'Boleto', percentage: 42, color: '#a78bfa' },
        { label: 'Pix', percentage: 98, color: '#93c5fd' }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawCharts()
    })
  },
  methods: {
    drawCharts() {
      this.chartRefs.forEach((canvas, index) => {
        if (!canvas) return
        
        const percentage = this.conversions[index].percentage
        const color = this.conversions[index].color
        const ctx = canvas.getContext('2d')
        const size = 120
        const center = size / 2
        const radius = 50
        const lineWidth = 12
        
        canvas.width = size
        canvas.height = size
        
        // Background circle
        ctx.beginPath()
        ctx.arc(center, center, radius, 0, 2 * Math.PI)
        ctx.strokeStyle = '#e5e7eb'
        ctx.lineWidth = lineWidth
        ctx.stroke()
        
        // Progress circle
        const startAngle = -Math.PI / 2
        const endAngle = startAngle + (2 * Math.PI * percentage / 100)
        
        ctx.beginPath()
        ctx.arc(center, center, radius, startAngle, endAngle)
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.lineCap = 'round'
        ctx.stroke()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.conversion-cards {
  flex: 1;
  background-color: $color-background;
  border-radius: $border-radius-lg;
  padding: 12px;
  box-shadow: $shadow-sm;
  
  @include mobile {
    width: 100%;
  }
}

.conversion-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin: 0 0 $spacing-xl 0;
}

.conversion-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: $spacing-lg;
  border-radius: 12px;
  border: 1px solid #eee;
  padding: $spacing-lg;
  
  @include mobile {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.conversion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.donut-chart-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: $spacing-md;
}

.donut-chart {
  width: 120px;
  height: 120px;
}

.chart-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.chart-percentage {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
}

.conversion-label {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-text-secondary;
  text-align: center;
}
</style>

