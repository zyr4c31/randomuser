<template>
  <div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
img{
  padding: 3px;
  border-radius: 10%;
}
img.male, p-dropdown-label{
  background-color: cadetblue;
}
img.female, p-dropdown-label{
  background-color: plum;
}
</style>
