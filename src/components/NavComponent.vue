<template>
  <nav>
    
    <router-link to="/" id="logo_UsingProps">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>
    
    <router-link to="/">Home</router-link> 
    <router-link to="/historico">Histórico</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
  props: ["logo", "alt"],
};
</script>

<style scoped>
nav {
  display: flex;
  background: linear-gradient(to right, #8BDC8A, #227E5D );
  padding: 10px 40px;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
}
#logo_UsingProps {
  margin: auto;
  margin-left: 0;
  margin-top: 10px;
}
nav a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  margin: 7px;
}
#logo {
  width: 80px;
  margin: -7px 0px;
}
nav a{
  transition: .5s;
}

nav a:hover{
  color: #FFFF;
}
@media screen and (max-width: 720px){
   nav {
    padding: 10px 70px;
   }
}
</style>