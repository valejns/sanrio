<template>
  <div id="home">
    <nav>
    <button @click= "openLink('/sanriodex')" class="button">SanrioDex</button>
    <button @click= "openLink('/quiz')" class="button">Quiz</button>
    <button @click= "openLink('/memorama')" class="button">Memorama</button>
    </nav>
    <div class="logo-container">
    <img class="logo" src="@/assets/inicio.svg"/>
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
.button:hover{
  transform: scale(1.2);
}
.logo-container{
  width: 60%;
  display:block;
  margin:auto;
  margin-top: 3%;
  transition: transform .2s
}
.logo-container:hover{
  transform: scale(1.1);
}
 
</style>