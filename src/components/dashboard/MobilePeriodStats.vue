<template>
  <div class="mobile-period-stats">
    <div class="stats-header">
      <h2 class="stats-title">Estatísticas do período</h2>
      <button class="stats-filter-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5H17M5 10H15M7 15H13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    
    <div class="stats-amount">R$ 760.102,06</div>
    
    <div class="stats-growth">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4L12 8H9V12H7V8H4L8 4Z" fill="#10b981"/>
      </svg>
      <span class="growth-percent">+125,9%</span>
    </div>
    
    <div class="stats-chart-container">
      <canvas ref="chartCanvas" class="stats-chart"></canvas>
    </div>
    
    <div class="stats-date-range">
      De 15 de Dez. de 2024 à 07 de Fev. de 2025
    </div>
    
    <div class="stats-summary">
      <div class="summary-item">
        <div class="summary-dot dot-blue"></div>
        <div class="summary-content">
          <div class="summary-label">Faturamento recebido</div>
          <div class="summary-value">R$ 245.340,90</div>
        </div>
      </div>
      
      <div class="summary-item">
        <div class="summary-dot dot-purple"></div>
        <div class="summary-content">
          <div class="summary-label">Faturamento a receber</div>
          <div class="summary-value">R$ 890.000,00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobilePeriodStats',
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.drawChart()
      }, 100)
    })
    
    // Redesenhar quando a janela for redimensionada
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.$nextTick(() => {
        this.drawChart()
      })
    },
    drawChart() {
      const canvas = this.$refs.chartCanvas
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      const container = canvas.parentElement
      if (!container) return
      
      const width = container.offsetWidth || canvas.offsetWidth || 300
      const height = 120
      
      // Configurar dimensões do canvas
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.scale(dpr, dpr)
      
      // Limpar canvas
      ctx.clearRect(0, 0, width, height)
      
      const padding = 20
      const chartWidth = width - padding * 2
      const chartHeight = height - padding * 2
      const barWidth = chartWidth / 31
      const maxValue = 200000
      
      // Grid
      ctx.strokeStyle = '#e5e7eb'
      ctx.lineWidth = 1
      
      // Linhas horizontais
      for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }
      
      // Linhas verticais
      for (let i = 0; i <= 31; i++) {
        const x = padding + (barWidth * i)
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      }
      
      // Dados do gráfico
      const data = this.generateChartData()
      
      // Barras
      data.forEach((value, index) => {
        const x = padding + barWidth * index
        const barHeight = (value / maxValue) * chartHeight
        const y = height - padding - barHeight
        
        // Aplicar cores corretamente
        if (value > 100000) {
          ctx.fillStyle = '#10b981' // Verde para valores altos
        } else {
          ctx.fillStyle = '#0641FC' // Azul para valores normais
        }
        
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight)
      })
    },
    generateChartData() {
      const data = []
      const highDays = [5, 6, 14, 15, 27, 28]
      
      for (let i = 0; i < 31; i++) {
        if (highDays.includes(i)) {
          data.push(120000 + Math.random() * 80000)
        } else {
          data.push(20000 + Math.random() * 80000)
        }
      }
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-period-stats {
  background-color: $color-background;
  border-radius: $border-radius-lg;
  padding: $spacing-lg;
  margin-bottom: $spacing-lg;
  box-shadow: $shadow-sm;
  display: none;
  
  @include mobile {
    display: block;
  }
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-md;
}

.stats-title {
  font-size: 16px;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
  margin: 0;
}

.stats-filter-btn {
  background: transparent;
  border: none;
  padding: $spacing-xs;
  cursor: pointer;
  color: $color-text-secondary;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-amount {
  font-size: 24px;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin-bottom: $spacing-xs;
}

.stats-growth {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: $spacing-md;
}

.growth-percent {
  font-size: 14px;
  font-weight: $font-weight-semibold;
  color: $color-success;
}

.stats-chart-container {
  width: 100%;
  margin-bottom: $spacing-md;
}

.stats-chart {
  width: 100%;
  height: 120px;
  display: block;
}

.stats-date-range {
  font-size: 12px;
  color: $color-text-secondary;
  margin-bottom: $spacing-lg;
  text-align: center;
}

.stats-summary {
  display: flex;
  gap: $spacing-md;
}

.summary-item {
  flex: 1;
  display: flex;
  gap: $spacing-sm;
  align-items: flex-start;
}

.summary-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 6px;
  
  &.dot-blue {
    background-color: $color-primary;
  }
  
  &.dot-purple {
    background-color: $color-secondary;
  }
}

.summary-content {
  flex: 1;
}

.summary-label {
  font-size: 12px;
  color: $color-text-secondary;
  margin-bottom: 4px;
}

.summary-value {
  font-size: 14px;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}
</style>

