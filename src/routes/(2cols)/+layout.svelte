<script lang="ts">
  import Footer from '../components/Footer.svelte'
  import SideBar from './blog/components/SideBar.svelte'
</script>

<div class="layout pure-g">
  <SideBar />

  <div class="content pure-u-1 pure-u-md-3-4">
    <slot />

    <Footer />
  </div>
</div>

<style>
  .layout {
    padding: 0;
  }

  .content {
    padding: 2em 1em 0;
  }

  @media (min-width: 48em) {
    .content {
      padding: 2em 3em 0;
      margin-left: 25%;
    }
  }
</style>
