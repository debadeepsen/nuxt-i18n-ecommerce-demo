<template>
  <header>
    <a href="/products/">
      <img src="~/assets/img/logo_200x200.png" />
      <span class="brand">TEMPORIUM</span>
    </a>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  padding: 10px 30px 8px 30px;
  box-shadow: 0px 0px 4px #3334;
  z-index: 3;
}

.brand {
  font-size: 2.2rem;
}

a { 
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-content: center;
}

a > img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>