<template>
  <div>
    <header>
      <div class="container">
        <nav>
          <img src="/aiko.png" alt="">
          <ul class="ul-header">
            <a href="#map">Map</a>
            <a href="#home">Home</a>
          </ul>
        </nav>

        <section class="hero">
          <h1>CONSULTA</h1>
          <h3>Saiba de onde estamos operando <br> através da <span>tecnologia em tempo real!</span></h3>
          <a href="#map" id="seta"><img src="/seta.png" alt=""></a>
        </section>
      </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap');


header {
  background: url('/header.png') no-repeat;
  background-size: cover;
  margin: 0 auto;
}

#seta {
  display: none;
}

html {
  scroll-behavior: smooth;
}

img {
  height: 78px;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
}

ul a {
  margin: 10px;
  text-decoration: none;
  color: white;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.8rem;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 40px 0;
  flex-wrap: wrap;
}

.hero {
  text-align: center;
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.hero h1 {
  font-family: 'Montserrat';
  font-weight: bold;
  color: white;
  line-height: 1.6;
  font-size: 5rem;
  display: inline;
  padding: 0 1px;
}

.hero h3 {
  font-family: 'Montserrat';
  font-weight: 500;
  color: white;
  font-size: 2rem;
}

span {
  font-weight: 800;
}

@media (max-width: 600px)
{

  nav {
    padding: 30px 100px;
  }
  .hero h1 {
    font-size: 2rem;
  }

  .hero h3 {
    font-size: 1.5rem;
  }

  .hero {
    margin-bottom: 60px;
    padding: 80px;
  }

  img {
    height: 60px;
  }

 ul a {
   font-size: 20px;
 }

 #seta {
  display: block;
  background-color: white;
  border-radius: 50px;
  padding: 10px; 
  margin-top: 20px;
  transition: ease 0.2s;
 }

 #seta img {
   height: 20px;
 }
}
</style>