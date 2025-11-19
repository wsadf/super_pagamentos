<template>
  <div id="app">
    <router-view />
    <div class="help-icon">
      <img src="@/assets/icons/interrogation.svg" alt="Ajuda" class="help-icon-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// Reset e estilos globais básicos
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-family-primary;
  color: $color-text-primary;
  background-color: $color-background;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

.help-icon {
  position: fixed;
  bottom: $spacing-xl;
  right: $spacing-xl;
  z-index: 999;
  cursor: pointer;
  transition: transform $transition-base;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @include mobile {
    bottom: $spacing-md;
    right: $spacing-md;
  }
}

.help-icon-img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}
</style>

