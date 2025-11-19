<template>
  <DashboardLayout>
    <ControlsBar />
    <BillingCard />
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

export default {
  name: 'Home',
  components: {
    DashboardLayout,
    ControlsBar,
    BillingCard,
    PendingTransferCard,
    StatsCards,
    ConversionCards,
    PaymentBrandsCard
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
</style>

