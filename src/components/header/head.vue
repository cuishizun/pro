<template>
  <mt-header fixed v-if="headTitle" :title="headTitle" class="flex1 title_head ellipsis">
    <section v-if="headLogo" slot="left">
      <img src="@/images/dog.png">
    </section>
  </mt-header>
</template>

<script>
  export default {
    props: ['headLogo','headTitle']
  }
</script>

<style lang="scss" scoped>
    .title_head{
      background: #232323;
      height: 3.2rem;
      padding: 0.5rem;
      font-size: 1.2rem;
    }
</style>