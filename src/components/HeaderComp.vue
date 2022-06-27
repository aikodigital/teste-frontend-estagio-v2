<template>
  <div id="header">
    <div id="containerHeader">      
      <div id="imageHeader">
        <img src="../../public/img/aiko.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {};
  },
};
</script>

<style scoped>
#header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d5f78;
}

#containerHeader {
  width: 80%;
  display: flex;
  justify-content: center;
}

#imageHeader {
  padding-top: 20px;
}

#imageHeader img {
  width: 200px;
}


</style>