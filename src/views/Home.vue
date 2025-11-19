<template>
  <DashboardLayout>
    <ControlsBar />
    <BillingCard />
    
    <!-- Mobile: Nova cobrança button -->
    <button class="mobile-new-charge-btn">
      Nova cobrança
      <div class="btn-icon-wrapper">
        <span class="btn-icon">+</span>
      </div>
    </button>
    
    <!-- Mobile: Estatísticas do período -->
    <MobilePeriodStats />
    
    <PendingTransferCard />
    <StatsCards />
    <div class="charts-row">
      <ConversionCards />
      <PaymentBrandsCard />
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ControlsBar from '@/components/dashboard/ControlsBar.vue'
import BillingCard from '@/components/dashboard/BillingCard.vue'
import PendingTransferCard from '@/components/dashboard/PendingTransferCard.vue'
import StatsCards from '@/components/dashboard/StatsCards.vue'
import ConversionCards from '@/components/dashboard/ConversionCards.vue'
import PaymentBrandsCard from '@/components/dashboard/PaymentBrandsCard.vue'
import MobilePeriodStats from '@/components/dashboard/MobilePeriodStats.vue'

export default {
  name: 'Home',
  components: {
    DashboardLayout,
    ControlsBar,
    BillingCard,
    PendingTransferCard,
    StatsCards,
    ConversionCards,
    PaymentBrandsCard,
    MobilePeriodStats
  }
}
</script>

<style lang="scss" scoped>
.charts-row {
  display: flex;
  gap: $spacing-lg;
  align-items: flex-start;
  
  @include mobile {
    flex-direction: column;
  }
}

.mobile-new-charge-btn {
  display: none;
  
  @include mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-sm;
    padding: 14px $spacing-lg;
    background: linear-gradient(135deg, #2d1b4e 0%, #1a0d2e 100%);
    color: #fff;
    border: none;
    border-radius: 250px;
    font-weight: $font-weight-medium;
    font-size: 14px;
    cursor: pointer;
    transition: all $transition-fast;
    white-space: nowrap;
    width: 100%;
    margin-top: 40px;
    margin-bottom: $spacing-lg;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    min-height: 48px;
    
    &:hover {
      opacity: 0.95;
    }
    
    &:active {
      transform: scale(0.98);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
}

.btn-icon-wrapper {
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-icon {
  font-size: 14px;
  font-weight: $font-weight-bold;
  line-height: 1;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>

