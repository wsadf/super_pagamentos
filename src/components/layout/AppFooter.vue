<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- TODO: Adicionar conteúdo do footer conforme o design do Figma -->
        <div class="footer-section">
          <h3 class="footer-title">Super Pagamentos</h3>
          <p class="footer-text">
            Sistema de pagamentos moderno e seguro.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Links Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Sobre</a></li>
            <li><a href="#" class="footer-link">Contato</a></li>
            <li><a href="#" class="footer-link">Suporte</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Legal</h4>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Termos de Uso</a></li>
            <li><a href="#" class="footer-link">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-copyright">
          &copy; {{ currentYear }} Super Pagamentos. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: $color-background-dark;
  color: $color-text-light;
  margin-top: auto;
  padding: $spacing-3xl 0 $spacing-lg;
  
  @include mobile {
    padding: $spacing-xl 0 $spacing-md;
  }
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-xl;
  margin-bottom: $spacing-xl;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
    margin-bottom: $spacing-lg;
  }
}

.footer-section {
  .footer-title {
    font-size: $font-size-xl;
    margin-bottom: $spacing-md;
    color: $color-text-light;
  }
  
  .footer-subtitle {
    font-size: $font-size-lg;
    margin-bottom: $spacing-md;
    color: $color-text-light;
  }
  
  .footer-text {
    color: $color-text-muted;
    line-height: 1.6;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: $spacing-sm;
  }
  
  .footer-link {
    color: $color-text-muted;
    text-decoration: none;
    transition: color $transition-fast;
    
    &:hover {
      color: $color-text-light;
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: $spacing-lg;
  text-align: center;
  
  @include mobile {
    padding-top: $spacing-md;
  }
}

.footer-copyright {
  color: $color-text-muted;
  font-size: $font-size-sm;
  margin: 0;
}
</style>

