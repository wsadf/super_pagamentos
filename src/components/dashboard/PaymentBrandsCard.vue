<template>
  <div class="payment-brands-card">
    <div class="card-header">
      <h2 class="card-title">Bandeiras mais utilizadas</h2>
      <img src="@/assets/icons/icone-info.svg" alt="Info" class="info-icon" />
    </div>
    
    <div class="brands-chart">
      <div 
        v-for="(brand, index) in brands" 
        :key="index"
        class="brand-item"
      >
        <div class="brand-bar-container">
          <div 
            class="brand-bar" 
            :style="{ height: brand.percentage + '%', backgroundColor: '#0641FC' }"
          ></div>
        </div>
        <div class="brand-logo">
          <img v-if="brand.logo" :src="brand.logo" :alt="brand.name" class="brand-logo-img" />
          <span v-else class="brand-name">{{ brand.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import visaIcon from '@/assets/icons/visa.svg'
import mastercardIcon from '@/assets/icons/mastercard.svg'
import eloIcon from '@/assets/icons/elo.svg'
import hipercardIcon from '@/assets/icons/hipercard.svg'
import amexIcon from '@/assets/icons/amex.svg'
import googlepayIcon from '@/assets/icons/googlepay.svg'
import samsungpayIcon from '@/assets/icons/samsungpay.svg'
import applepayIcon from '@/assets/icons/applepay.svg'
import hiperIcon from '@/assets/icons/hiper.svg'

export default {
  name: 'PaymentBrandsCard',
  data() {
    return {
      brands: [
        { name: 'VISA', percentage: 78, logo: visaIcon },
        { name: 'Mastercard', percentage: 78, logo: mastercardIcon },
        { name: 'ELO', percentage: 42, logo: eloIcon },
        { name: 'Hipercard', percentage: 18, logo: hipercardIcon },
        { name: 'AM EX', percentage: 12, logo: amexIcon },
        { name: 'G Pay', percentage: 12, logo: googlepayIcon },
        { name: 'Samsung Pay', percentage: 22, logo: samsungpayIcon },
        { name: 'Pay', percentage: 32, logo: applepayIcon },
        { name: 'Hiper', percentage: 12, logo: hiperIcon }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-brands-card {
  flex: 1;
  background-color: $color-background;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  box-shadow: $shadow-sm;
}

.card-header {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-bottom: $spacing-xl;
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

.brands-chart {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
  margin-top: $spacing-xl;
}

.brand-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-xs;
  flex: 1;
  min-width: 0;
}

.brand-bar-container {
  width: 100%;
  max-width: 8px;
  height: 120px;
  background-color: $color-border-chart;
  border-radius: $border-radius-md;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
}

.brand-bar {
  width: 100%;
  border-radius: $border-radius-md;
  transition: height $transition-base;
  position: relative;
  z-index: 1;
}

.brand-logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: $spacing-xs;
  min-height: 24px;
}

.brand-logo-img {
  width: 100%;
  max-width: 60px;
  height: auto;
  object-fit: contain;
}

.brand-name {
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: $color-text-primary;
  text-align: center;
}
</style>

