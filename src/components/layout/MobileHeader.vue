<template>
  <header class="mobile-header">
    <!-- Status Bar -->
    <div class="status-bar">
      <span class="status-time">19:02</span>
      <div class="status-icons">
        <span class="status-icon">📶</span>
        <span class="status-icon">📶</span>
        <span class="status-icon">🔋</span>
      </div>
    </div>
    
    <!-- Account Selector -->
    <div class="account-selector">
      <img src="@/assets/images/logo.png" alt="Logo" class="account-logo" />
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
  background: linear-gradient(180deg, #0641FC 0%, #0641FC 100%);
  padding: 0;
  position: relative;
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
  color: #fff;
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
  font-size: 12px;
  opacity: 0.9;
}

.account-selector {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  background-color: #fff;
  border-radius: 250px;
  padding: $spacing-xs $spacing-md;
  margin: $spacing-sm $spacing-md;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.account-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
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
  color: #11151B;
  line-height: 1.2;
}

.account-line2 {
  font-size: 12px;
  font-weight: $font-weight-normal;
  color: #86898B;
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
  color: #fff;
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
  color: #fff;
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
  gap: $spacing-xs;
  margin-bottom: $spacing-md;
}

.mobile-currency {
  font-size: 20px;
  font-weight: $font-weight-bold;
  color: #fff;
  line-height: 1;
}

.mobile-amount {
  font-size: 36px;
  font-weight: $font-weight-bold;
  color: #fff;
  line-height: 1.2;
}

.mobile-wallet-link {
  display: inline-flex;
  align-items: center;
  gap: $spacing-xs;
  color: #fff;
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

