<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <!-- MENU Section -->
      <div class="menu-section">
        <div class="section-label">MENU</div>
        <nav class="menu-nav">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path" 
            class="menu-item"
            :class="{ 'active': $route.path === item.path }"
          >
            <div class="menu-icon-wrapper">
              <img :src="item.icon" :alt="item.label" class="menu-icon" />
            </div>
            <span class="menu-text">{{ item.label }}</span>
            <img v-if="item.hasDropdown" src="@/assets/icons/arrow-down.svg" alt="Arrow down" class="menu-arrow" />
          </router-link>
        </nav>
      </div>

      <!-- Separator -->
      <div class="sidebar-separator"></div>

      <!-- GERAL Section -->
      <div class="menu-section">
        <div class="section-label">GERAL</div>
        <nav class="menu-nav">
          <router-link 
            v-for="item in generalItems" 
            :key="item.path"
            :to="item.path" 
            class="menu-item"
          >
            <div class="menu-icon-wrapper">
              <img :src="item.icon" :alt="item.label" class="menu-icon" />
            </div>
            <span class="menu-text">{{ item.label }}</span>
          </router-link>
        </nav>
      </div>

      <!-- Card Section -->
      <a href="#" class="sidebar-card" @click.prevent>
      </a>

      <!-- Separator -->
      <div class="sidebar-separator"></div>

      <!-- Logout -->
      <div class="sidebar-logout">
        <a href="#" class="logout-link">
          <span class="logout-text">Deslogar da conta</span>
          <img src="@/assets/icons/deslogar.svg" alt="Deslogar" class="logout-icon" />
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import dashboardIcon from '@/assets/icons/dashboard.svg'
import clientesIcon from '@/assets/icons/clientes.svg'
import cobrancasIcon from '@/assets/icons/cobrancas.svg'
import carteiraIcon from '@/assets/icons/carteira.svg'
import vendedoresIcon from '@/assets/icons/vendedores.svg'
import antecipacoesIcon from '@/assets/icons/antecipacoes.svg'
import gestaoIcon from '@/assets/icons/gestao.svg'
import integracoesIcon from '@/assets/icons/integracoes.svg'
import configuracoesIcon from '@/assets/icons/configuracoes.svg'
import perfilIcon from '@/assets/icons/perfil.svg'

export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { path: '/dashboard', label: 'Dashboard', icon: dashboardIcon, hasDropdown: false },
        { path: '/clientes', label: 'Clientes', icon: clientesIcon, hasDropdown: false },
        { path: '/cobrancas', label: 'Cobranças', icon: cobrancasIcon, hasDropdown: false },
        { path: '/carteira', label: 'Carteira', icon: carteiraIcon, hasDropdown: false },
        { path: '/vendedores', label: 'Vendedores', icon: vendedoresIcon, hasDropdown: false },
        { path: '/antecipacoes', label: 'Antecipações', icon: antecipacoesIcon, hasDropdown: true },
        { path: '/gestao', label: 'Gestão', icon: gestaoIcon, hasDropdown: true },
        { path: '/integracoes', label: 'Integrações', icon: integracoesIcon, hasDropdown: false }
      ],
      generalItems: [
        { path: '/configuracoes', label: 'Configurações', icon: configuracoesIcon },
        { path: '/perfil', label: 'Perfil', icon: perfilIcon }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 315px;
  max-width: 315px;
  background-color: #FFF;
  color: #2A2E33;
  position: fixed;
  left: 0;
  top: 77px;
  height: calc(100vh - 77px);
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 100;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

  
  @include mobile {
    transform: translateX(-100%);
    transition: transform $transition-base;
    
    &.open {
      transform: translateX(0);
    }
  }
}

.sidebar-content {
  padding: $spacing-lg;
  padding-bottom: $spacing-xl;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  
  // Esconder scrollbar
  scrollbar-width: none; // Firefox
  -ms-overflow-style: none; // IE and Edge
  
  &::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
}

.section-label {
  font-size: $font-size-xs;
  text-transform: uppercase;
  color: #2A2E33;
  opacity: 0.6;
  margin-bottom: $spacing-md;
  letter-spacing: 0.5px;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  height: 39px;
  padding: 0 $spacing-md;
  border-radius: $border-radius-md;
  color: #2A2E33;
  text-decoration: none;
  transition: all $transition-fast;
  font-size: $font-size-sm;
  
  
  &.active {
    color: #2A2E33;
    font-weight: $font-weight-medium;
  }
}

.menu-icon-wrapper {
  width: 41px;
  height: 39px;
  background-color: #f5f5f5;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color $transition-fast;
  
  .menu-item:hover &,
  .menu-item.active & {
    background-color: #D1DCFF;
  }
}

.menu-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: filter $transition-fast;
  
  .menu-item:hover &,
  .menu-item.active & {
    filter: brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(7471%) hue-rotate(230deg) brightness(99%) contrast(101%);
  }
}

.menu-text {
  flex: 1;
}

.menu-arrow {
  width: 9px;
  height: 6px;
  object-fit: contain;
  opacity: 0.6;
}

.sidebar-separator {
  height: 1px;
  background-color: rgba(42, 46, 51, 0.1);
  margin: $spacing-md 0;
}

.sidebar-card {
  width: 251px;
  min-height: 322px;
  height: 322px;
  max-height: 322px;
  background-image: url('@/assets/images/bg-super-cartao-pre.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: $border-radius-lg;
  margin-top: 93px;
  display: block;
  text-decoration: none;
  cursor: pointer;
  transition: opacity $transition-fast;
  flex-shrink: 0;
  
  &:hover {
    opacity: 0.9;
  }
}

.sidebar-logout {
  width: 251px;
  min-height: 46px;
  height: 46px;
  max-height: 46px;
  border: 1px solid #d9d9d9;
  border-radius: $border-radius-md;
  margin-top: auto;
  flex-shrink: 0;
  box-sizing: border-box;
}

.logout-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 46px;
  color: #2A2E33;
  opacity: 0.7;
  text-decoration: none;
  font-size: 14px;
  padding: 0 $spacing-md;
  transition: all $transition-fast;
  box-sizing: border-box;
  
  &:hover {
    opacity: 1;
    color: #2A2E33;
  }
}

.logout-text {
  flex: 1;
}

.logout-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>

