<template>
  <nav class="bottom-navigation">
    <router-link to="/" class="nav-item" active-class="active">
      <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="nav-label">Início</span>
    </router-link>
    
    <router-link to="/cobrancas" class="nav-item" active-class="active">
      <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="nav-label">Cobranças</span>
    </router-link>
    
    <button class="nav-item nav-item-center">
      <div class="nav-center-icon">
        <span class="nav-center-plus">+</span>
      </div>
    </button>
    
    <router-link to="/carteira" class="nav-item" active-class="active">
      <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 10H23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="nav-label">Carteira</span>
    </router-link>
    
    <button class="nav-item" active-class="active">
      <svg class="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H3.01M7 12H7.01M11 12H11.01M15 12H15.01M19 12H19.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="nav-label">Menu</span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'BottomNavigation'
}
</script>

<style lang="scss" scoped>
.bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid $color-border-light;
  display: none;
  justify-content: space-around;
  align-items: center;
  padding: $spacing-xs $spacing-sm;
  z-index: 100;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  
  @include mobile {
    display: flex;
  }
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: $spacing-xs;
  background: transparent;
  border: none;
  cursor: pointer;
  color: $color-text-secondary;
  text-decoration: none;
  transition: color $transition-fast;
  flex: 1;
  max-width: 80px;
  
  &.active {
    color: #0641FC;
  }
  
  &:not(.nav-item-center):hover {
    color: #0641FC;
  }
}

.nav-icon {
  width: 24px;
  height: 24px;
  stroke: currentColor;
}

.nav-label {
  font-size: 10px;
  font-weight: $font-weight-medium;
  line-height: 1;
}

.nav-item-center {
  position: relative;
  max-width: none;
  flex: 0 0 auto;
  margin: 0 $spacing-md;
  padding: 0;
}

.nav-center-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #0641FC;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(6, 65, 252, 0.3);
  position: relative;
  top: -10px;
}

.nav-center-plus {
  color: #fff;
  font-size: 28px;
  font-weight: $font-weight-bold;
  line-height: 1;
}
</style>

