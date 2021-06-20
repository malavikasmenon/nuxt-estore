<template>
  <div>
    <header class="header"> 
      <div class="nav-list">
        <NuxtLink class="header-link" to='/'>randomStore</NuxtLink>
        <NuxtLink class="header-link" to='/cart'>Cart</NuxtLink>
      </div>
    </header>
    <Nuxt />
    <footer class="footer"> Made for non-commerical purposes. </footer>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100vh;  
}

*,
*::before,
*::after {
  box-sizing: border-box; 
  margin: 0;
}

body::before{
  height: 100%;
}

body::after {
  height: 100%;
}

.header {
  background-color: #35495e;
  color: white;
  padding: 30px;
  margin: 0;
}

.footer {
  background-color: #35495e;
  color: white;
  padding: 30px;
  text-align: center;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;

}

.nav-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  color: white;
}

.header-link {
  color: white;
  text-decoration: none;
}


</style>
