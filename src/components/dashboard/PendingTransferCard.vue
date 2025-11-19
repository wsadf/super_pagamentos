<template>
  <div class="pending-transfer-card">
    <div class="transfer-icon">
      <div class="icon-circle">
        <img src="@/assets/icons/arrow-up.svg" alt="Arrow up" class="arrow-icon" />
      </div>
      <img src="@/assets/icons/icone-exclamacao.svg" alt="Exclamation" class="exclamation-icon" />
    </div>
    <div class="transfer-content">
      <h3 class="transfer-title">Solicitação de transferência pendente</h3>
      <p class="transfer-description">
        A transação no valor de <strong>R$ 29.119,13</strong> está aguardando a sua aprovação.
      </p>
    </div>
    <button class="transfer-button">
      Autorizar transferência
      <img src="@/assets/icons/wallet-money.svg" alt="Wallet money" class="button-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PendingTransferCard'
}
</script>

<style lang="scss" scoped>
.pending-transfer-card {
  background-color: $color-background;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  margin-bottom: $spacing-xl;
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  box-shadow: $shadow-sm;
  
  @include mobile {
    flex-direction: column;
    align-items: flex-start;
  }
}

.transfer-icon {
  flex-shrink: 0;
  position: relative;
}

.icon-circle {
  width: 57px;
  height: 57px;
  border-radius: $border-radius-full;
  background-color: #E6E3DC;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.arrow-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.exclamation-icon {
  position: absolute;
  width: 19px;
  height: 19px;
  object-fit: contain;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.transfer-content {
  flex: 1;
}

.transfer-title {
  font-size: 16px;
  font-weight: $font-weight-bold;
  color: $color-text-primary;
  margin-bottom: $spacing-xs;
}

.transfer-description {
  font-size: 12px;
  color: $color-text-secondary;
  margin: 0;
  
  strong {
    color: $color-text-primary;
    font-weight: $font-weight-semibold;
  }
}

.transfer-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-sm;
  padding: $spacing-md $spacing-lg;
  width: 224px;
  height: 46px;
  background-color: #0641FC;
  color: $color-text-light;
  border: none;
  border-radius: 250px;
  font-weight: $font-weight-medium;
  font-size: $font-size-sm;
  cursor: pointer;
  transition: background-color $transition-fast;
  white-space: nowrap;
  box-sizing: border-box;
  
  &:hover {
    opacity: 0.9;
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    flex-shrink: 0;
  }
  
  @include mobile {
    width: 100%;
    justify-content: center;
  }
}
</style>

