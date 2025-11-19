<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <router-link to="/" class="logo-link">
            <!-- TODO: Adicionar logo do Figma -->
            <span class="logo-text">
              <span class="logo-icon">💳</span>
              Super Pagamentos
            </span>
          </router-link>
        </div>

        <!-- Navegação Desktop -->
        <nav class="nav-desktop" v-if="!isMobileMenuOpen">
          <ul class="nav-list">
            <li class="nav-item" v-for="item in navItems" :key="item.path">
              <router-link 
                v-if="item.path.startsWith('/')"
                :to="item.path" 
                class="nav-link"
              >
                {{ item.label }}
              </router-link>
              <a 
                v-else
                :href="item.path" 
                class="nav-link"
                @click.prevent="scrollToSection(item.path)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Botão Menu Mobile -->
        <button 
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
          <span class="hamburger-line" :class="{ 'active': isMobileMenuOpen }"></span>
        </button>
      </div>

      <!-- Navegação Mobile -->
      <nav class="nav-mobile" :class="{ 'open': isMobileMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item" v-for="item in navItems" :key="item.path">
              <router-link 
                v-if="item.path.startsWith('/')"
                :to="item.path" 
                class="nav-link"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </router-link>
              <a 
                v-else
                :href="item.path" 
                class="nav-link"
                @click.prevent="scrollToSection(item.path); closeMobileMenu()"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false,
      navItems: [
        { path: '/', label: 'Início' },
        { path: '#features', label: 'Recursos' },
        { path: '#sobre', label: 'Sobre' },
        { path: '#contato', label: 'Contato' }
        // TODO: Adicionar itens de navegação conforme o design do Figma
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    scrollToSection(hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: $color-background;
  border-bottom: 1px solid $color-border;
  position: sticky;
  top: 0;
  z-index: $z-index-sticky;
  box-shadow: $shadow-sm;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $spacing-md 0;
  
  @include mobile {
    padding: $spacing-sm 0;
  }
}

.logo {
  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-text-primary;
    font-weight: $font-weight-bold;
    font-size: $font-size-xl;
    transition: opacity $transition-fast;
    
    &:hover {
      opacity: 0.8;
    }
    
    @include mobile {
      font-size: $font-size-lg;
    }
  }
  
  .logo-text {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }
  
  .logo-icon {
    font-size: 1.5em;
    display: inline-block;
  }
}

// Navegação Desktop
.nav-desktop {
  @include mobile-and-tablet {
    display: none;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    gap: $spacing-xl;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin: 0;
  }
  
  .nav-link {
    color: $color-text-primary;
    text-decoration: none;
    font-weight: $font-weight-medium;
    padding: $spacing-sm $spacing-md;
    border-radius: $border-radius-md;
    transition: background-color $transition-fast, color $transition-fast;
    
    &:hover,
    &.router-link-active {
      color: $color-primary;
      background-color: $color-background-light;
    }
  }
}

// Botão Menu Mobile
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: $z-index-fixed;
  
  @include mobile-and-tablet {
    display: flex;
  }
  
  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: $color-text-primary;
    border-radius: $border-radius-sm;
    transition: all $transition-base;
    
    &.active {
      &:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }
}

// Navegação Mobile
.nav-mobile {
  display: none;
  max-height: 0;
  overflow: hidden;
  transition: max-height $transition-base;
  
  @include mobile-and-tablet {
    display: block;
  }
  
  &.open {
    max-height: 500px;
    border-top: 1px solid $color-border;
    margin-top: $spacing-sm;
    padding-top: $spacing-md;
  }
  
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }
  
  .nav-item {
    margin: 0;
  }
  
  .nav-link {
    display: block;
    color: $color-text-primary;
    text-decoration: none;
    font-weight: $font-weight-medium;
    padding: $spacing-md;
    border-radius: $border-radius-md;
    transition: background-color $transition-fast;
    
    &:hover,
    &.router-link-active {
      background-color: $color-background-light;
      color: $color-primary;
    }
  }
}
</style>

