<template>
  <div class="dashboard-layout">
    <Sidebar />
    <div class="main-wrapper">
      <DashboardHeader />
      <main class="dashboard-content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import DashboardHeader from './DashboardHeader.vue'

export default {
  name: 'DashboardLayout',
  components: {
    Sidebar,
    DashboardHeader
  }
}
</script>

<style lang="scss" scoped>
.dashboard-layout {
  display: flex;
  min-height: 100vh;
  background-color: $color-background-light;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 315px; // Largura da sidebar
  margin-top: 77px; // Altura do header
  min-width: 0; // Permite que o conteúdo encolha
  
  @include mobile {
    margin-left: 0;
    margin-top: 77px;
  }
}

.dashboard-content {
  flex: 1;
  padding: $spacing-xl;
  overflow-y: auto;
  
  @include mobile {
    padding: $spacing-md;
  }
}
</style>

