<template>
  <div id="home">
    <nav>
    <button @click= "openLink('/sanriodex')" class="button">SanrioDex</button>
    <button @click= "openLink('/quiz')" class="button">Quiz</button>
    <button @click= "openLink('/memorama')" class="button">Memorama</button>
    </nav>
    <div>
    <img src="@/assets/logo.svg"/>
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

<style>
nav{
  display: flex;
  justify-content:space-evenly;
  align-items: center;
}
</style>