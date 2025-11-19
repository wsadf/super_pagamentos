<template>
  <header class="dashboard-header">
    <div class="header-left">
      <img src="@/assets/images/logo.png" alt="Super Pagamentos" class="header-logo-image" />
      <span class="header-title">Super central de gestão</span>
      <img src="@/assets/icons/icone-super-central.svg" alt="Super Central" class="header-bell" />
    </div>
    <div class="header-right">
      <button class="header-icon-btn">
        <img src="@/assets/icons/calculator.svg" alt="Calculator" class="header-icon" />
      </button>
      <button class="header-icon-btn">
        <img src="@/assets/icons/settings.svg" alt="Settings" class="header-icon" />
      </button>
      <button class="header-icon-btn">
        <img src="@/assets/icons/bell.svg" alt="Notifications" class="header-icon" />
      </button>
      <div class="header-user">
        <img src="@/assets/icons/avatar.svg" alt="Avatar" class="user-avatar-icon" />
        <div class="user-name">
          <span class="user-name-line1">Empresarial</span>
          <span class="user-name-line2">Astra Pagamentos</span>
        </div>
        <img src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="user-arrow" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader'
}
</script>

<style lang="scss" scoped>
.dashboard-header {
  background-color: $color-background;
  height: 77px;
  padding: 0 $spacing-xl;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $color-border-light;
  box-shadow: $shadow-sm;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  
  @include mobile {
    display: none;
  }
}

.header-left {
  display: flex;
  align-items: center;
  position: relative;
}

.header-logo-image {
  width: 130px;
  height: 30px;
  object-fit: contain;
}

.header-title {
  color: $color-text-primary;
  font-size: 20px;
  font-weight: $font-weight-bold;
  margin-left: 185px;
  
  @include mobile {
    display: none;
  }
}

.header-bell {
  width: 24px;
  height: 24px;
  object-fit: contain;
  
  @include mobile {
    display: none;
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: $spacing-md;
}

.header-icon-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  border-radius: $border-radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color $transition-fast;
  
  &:hover {
    background-color: $color-background-light;
  }
  
  @include mobile {
    display: none;
  }
}

.header-icon {
  width: 30px;
  height: 32px;
  object-fit: contain;
}

.header-user {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-xs $spacing-md;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: background-color $transition-fast;
  
  &:hover {
    background-color: $color-background-light;
  }
  
  @include mobile {
    .user-name {
      display: none;
    }
  }
}

.user-avatar-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.user-name {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.4;
}

.user-name-line1 {
  color: #11151B;
  font-weight: $font-weight-medium;
}

.user-name-line2 {
  color: #86898B;
  font-weight: $font-weight-normal;
}

.user-arrow {
  width: 12px;
  height: 6px;
  object-fit: contain;
}
</style>

