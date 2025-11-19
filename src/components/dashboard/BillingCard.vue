<template>
  <div class="billing-card">
    <div class="card-header">
      <h2 class="card-title">Faturamento</h2>
      <img src="@/assets/icons/eye.svg" alt="Info" class="info-icon" />
    </div>
    
    <div class="billing-header">
      <div class="billing-amount">
        <span class="currency">R$</span>
        <span class="amount">1.060.551,14</span>
      </div>
      
      <div class="growth-indicator">
        <div class="growth-top">
          <span class="growth-arrow">↑</span>
          <span class="growth-percent">123,9%</span>
        </div>
        <div class="growth-text">Em crescimento</div>
      </div>
    </div>
    
    <div class="chart-container">
      <canvas ref="chartCanvas" class="billing-chart"></canvas>
    </div>
    
    <div class="billing-summary">
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
          <div class="summary-label">
            Faturamento previsto
            <span class="badge">D+2</span>
          </div>
          <div class="summary-value">R$ 815.210,24</div>
        </div>
      </div>
      
      <div class="summary-item">
        <div class="summary-dot dot-orange"></div>
        <div class="summary-content">
          <div class="summary-label">Vendas pendentes</div>
          <div class="summary-value">R$ 15.332,18</div>
        </div>
      </div>
      
      <div class="summary-item">
        <div class="summary-dot dot-purple"></div>
        <div class="summary-content">
          <div class="summary-label">Ticket médio</div>
          <div class="summary-value">R$ 192,30</div>
        </div>
      </div>
      
      <div class="summary-item">
        <div class="summary-dot dot-gray"></div>
        <div class="summary-content">
          <div class="summary-label">Número de cobranças</div>
          <div class="summary-value">12.349</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BillingCard',
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      const canvas = this.$refs.chartCanvas
      if (!canvas) return
      
      const ctx = canvas.getContext('2d')
      const width = canvas.offsetWidth
      const height = 200
      
      canvas.width = width
      canvas.height = height
      
      // Configurações do gráfico
      const padding = 40
      const chartWidth = width - padding * 2
      const chartHeight = height - padding * 2
      const barWidth = chartWidth / 31
      const maxValue = 200000
      
      // Grid
      ctx.strokeStyle = '#e5e7eb'
      ctx.lineWidth = 1
      
      // Linhas verticais (uma para cada dia)
      for (let i = 0; i <= 31; i++) {
        const x = padding + (barWidth * i)
        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, height - padding)
        ctx.stroke()
      }
      
      // Linhas horizontais
      for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i
        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(width - padding, y)
        ctx.stroke()
      }
      
      // Labels do eixo Y
      ctx.fillStyle = '#6b7280'
      ctx.font = '12px "Plus Jakarta Sans", sans-serif'
      const labels = ['0', '50K', '100K', '200K']
      labels.forEach((label, i) => {
        const y = padding + (chartHeight / 4) * (4 - i)
        ctx.fillText(label, 5, y + 4)
      })
      
      // Barras do gráfico
      const data = this.generateChartData()
      data.forEach((value, index) => {
        const x = padding + barWidth * index
        const barHeight = (value / maxValue) * chartHeight
        const y = padding + chartHeight - barHeight
        
        // Cores: verde para valores altos, azul para normais
        ctx.fillStyle = value > 100000 ? '#10b981' : '#0641FC'
        
        ctx.fillRect(x + 2, y, barWidth - 4, barHeight)
      })
      
      // Labels do eixo X (todos os dias de 1 a 31)
      ctx.fillStyle = '#6b7280'
      ctx.font = '10px "Plus Jakarta Sans", sans-serif'
      ctx.textAlign = 'center'
      for (let i = 0; i < 31; i++) {
        const x = padding + barWidth * i + barWidth / 2
        ctx.fillText((i + 1).toString(), x, height - 10)
      }
    },
    generateChartData() {
      // Gera dados simulados para o gráfico baseado no padrão da imagem
      const data = []
      const highDays = [5, 6, 14, 15, 27, 28] // Dias com picos verdes
      
      for (let i = 0; i < 31; i++) {
        if (highDays.includes(i)) {
          // Valores altos (verde) - entre 120K e 200K
          data.push(120000 + Math.random() * 80000)
        } else {
          // Valores normais (azul) - entre 20K e 100K
          data.push(20000 + Math.random() * 80000)
        }
      }
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
.billing-card {
  background-color: $color-background;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  margin-bottom: $spacing-xl;
  box-shadow: $shadow-sm;
  width: 100%;
}

.card-header {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  margin-bottom: $spacing-md;
}

.card-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin: 0;
}

.info-icon {
  width: 16px;
  height: 16px;
  opacity: 0.5;
  cursor: pointer;
  object-fit: contain;
}

.billing-header {
  display: flex;
  align-items: flex-start;
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
  
  @include mobile {
    flex-direction: column;
    gap: $spacing-md;
  }
}

.billing-amount {
  display: flex;
  align-items: baseline;
  gap: $spacing-xs;
  flex-shrink: 0;
}

.currency {
  font-size: 16px;
  font-weight: $font-weight-bold;
  color: #86898B;
  line-height: 1;
}

.amount {
  font-size: 40px;
  font-weight: $font-weight-bold;
  color: #0641FC;
  line-height: 1.2;
  
  @include mobile {
    font-size: 28px;
  }
}

.growth-indicator {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex-shrink: 0;
}

.growth-top {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  color: #10b981;
}

.growth-arrow {
  font-size: $font-size-base;
}

.growth-percent {
  font-size: 12px;
  font-weight: $font-weight-semibold;
  color: #10b981;
}

.growth-text {
  font-size: 12px;
  font-weight: $font-weight-normal;
  color: #86898B;
}

.chart-container {
  width: 100%;
  margin-bottom: $spacing-xl;
  position: relative;
}

.billing-chart {
  width: 100%;
  height: 200px;
  display: block;
}

.billing-summary {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: $spacing-lg;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
  
  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }
}

.summary-item {
  display: flex;
  gap: $spacing-md;
  align-items: flex-start;
  padding: $spacing-md;
  border: 1px solid #EEE;
  border-radius: 12px;
}

.summary-dot {
  width: 12px;
  height: 12px;
  border-radius: $border-radius-full;
  margin-top: $spacing-xs;
  flex-shrink: 0;
  
  &.dot-blue {
    background-color: $color-primary;
  }
  
  &.dot-purple {
    background-color: $color-secondary;
  }
  
  &.dot-orange {
    background-color: $color-warning;
  }
  
  &.dot-gray {
    background-color: #6b7280;
  }
}

.summary-content {
  flex: 1;
}

.summary-label {
  font-size: $font-size-sm;
  color: $color-text-secondary;
  margin-bottom: $spacing-xs;
  display: flex;
  align-items: center;
  gap: $spacing-xs;
}

.badge {
  background-color: $color-background-light;
  color: $color-text-secondary;
  padding: 2px 6px;
  border-radius: $border-radius-sm;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
}

.summary-value {
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $color-text-primary;
}
</style>

