<template>
  <header class="mobile-header">
    <!-- Status Bar -->
    <div class="status-bar">
      <span class="status-time">19:02</span>
      <div class="status-icons">
        <svg class="status-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 1.54.36 2.98.97 4.29L0 16l3.71-.97C5.02 15.64 6.46 16 8 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm0 14c-1.33 0-2.57-.36-3.64-1L2 13l1-2.36C2.36 9.57 2 8.33 2 7c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
        <svg class="status-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.5 0h-11C1.12 0 0 1.12 0 2.5v11C0 14.88 1.12 16 2.5 16h11c1.38 0 2.5-1.12 2.5-2.5v-11C16 1.12 14.88 0 13.5 0zM15 13.5c0 .83-.67 1.5-1.5 1.5h-11C1.67 15 1 14.33 1 13.5v-11C1 1.67 1.67 1 2.5 1h11c.83 0 1.5.67 1.5 1.5v11z"/>
        </svg>
        <svg class="status-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 4h12v10H2V4zm1 1v8h10V5H3z"/>
          <path d="M4 2h8v2H4V2z"/>
        </svg>
      </div>
    </div>
    
    <!-- Account Selector -->
    <div class="account-selector">
      <div class="account-logo-circle">
        <span class="account-logo-text">S</span>
      </div>
      <div class="account-info">
        <span class="account-line1">Empresarial</span>
        <span class="account-line2">Astra Pagamentos</span>
      </div>
      <img src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="account-arrow" />
    </div>
    
    <!-- Bell Icon -->
    <button class="mobile-bell-btn">
      <img src="@/assets/icons/bell.svg" alt="Notifications" class="mobile-bell-icon" />
    </button>
    
    <!-- Billing Section -->
    <div class="mobile-billing">
      <div class="mobile-billing-header">
        <h2 class="mobile-billing-title">Faturamento</h2>
        <img src="@/assets/icons/eye.svg" alt="Info" class="mobile-billing-eye" />
      </div>
      <div class="mobile-billing-amount">
        <span class="mobile-currency">R$</span>
        <span class="mobile-amount">1.249.651,14</span>
      </div>
      <a href="#" class="mobile-wallet-link">
        Ir para a carteira
        <img src="@/assets/icons/arrow-right.svg" alt="Arrow right" class="wallet-arrow" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MobileHeader'
}
</script>

<style lang="scss" scoped>
.mobile-header {
  background: $color-primary;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: none;
  
  @include mobile {
    display: block;
  }
}

.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-xs $spacing-md;
  color: $color-text-light;
  font-size: 14px;
  font-weight: $font-weight-medium;
}

.status-time {
  font-weight: $font-weight-semibold;
}

.status-icons {
  display: flex;
  gap: 4px;
  align-items: center;
}

.status-icon {
  width: 16px;
  height: 16px;
  opacity: 0.9;
  color: $color-text-light;
}

.account-selector {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  background-color: $color-background;
  border-radius: 250px;
  padding: $spacing-xs $spacing-md;
  margin: $spacing-sm $spacing-md;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.account-logo-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: $color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.account-logo-text {
  color: $color-text-light;
  font-size: 18px;
  font-weight: $font-weight-bold;
  line-height: 1;
}

.account-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2px;
}

.account-line1 {
  font-size: 12px;
  font-weight: $font-weight-medium;
  color: $color-text-dark;
  line-height: 1.2;
}

.account-line2 {
  font-size: 12px;
  font-weight: $font-weight-normal;
  color: $color-text-tertiary;
  line-height: 1.2;
}

.account-arrow {
  width: 9px;
  height: 3px;
  object-fit: contain;
}

.mobile-bell-btn {
  position: absolute;
  top: 50px;
  right: $spacing-md;
  background: transparent;
  border: none;
  padding: $spacing-xs;
  cursor: pointer;
}

.mobile-bell-icon {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
}

.mobile-billing {
  padding: $spacing-md $spacing-md $spacing-xl;
  color: $color-text-light;
}

.mobile-billing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-sm;
}

.mobile-billing-title {
  font-size: 16px;
  font-weight: $font-weight-medium;
  color: $color-text-light;
  margin: 0;
}

.mobile-billing-eye {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.mobile-billing-amount {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: $spacing-md;
}

.mobile-currency {
  font-size: 16px;
  font-weight: $font-weight-bold;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
}

.mobile-amount {
  font-size: 40px;
  font-weight: $font-weight-bold;
  color: $color-text-light;
  line-height: 1.2;
}

.mobile-wallet-link {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  color: $color-text-light;
  font-size: 14px;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity $transition-fast;
  
  &:hover {
    opacity: 1;
  }
}

.wallet-arrow {
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1);
}
</style>

