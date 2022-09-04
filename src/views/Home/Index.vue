<template>
  <div id="home">
    <nav>
    <button @click= "openLink('/sanriodex')" class="button">SanrioDex</button>
    <button @click= "openLink('/quiz')" class="button">Quiz</button>
    <button @click= "openLink('/memorama')" class="button">Memorama</button>
    </nav>
    <div class="logo-container">
    <img class="logo" src="@/assets/logo.svg"/>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'HomePage',
    methods:{
      openLink(path){
        this.$router.push(path)
      }
    }
}
</script>

<style scoped>
nav{
  display: flex;
  justify-content:space-evenly;
  align-items: center;
}
.button {
  margin-top: 1%;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-family: 'Odin Rounded';
  font-size: 23px;
  color: #fff;
}
.logo-container{
  width: 50%;

  display:block;
  margin:auto;
  margin-top: 3%;
}
 
</style>