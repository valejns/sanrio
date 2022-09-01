<template>
  <div id="home">
    <nav>
    <button @click="sanriodex" class="button">SanrioDex</button>
    <button @click="quiz" class="button">Quiz</button>
    <button @click="memorama" class="button">Memorama</button>
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
      sanriodex(){
        this.$router.push('/sanriodex')
      },
      quiz(){
        this.$router.push('/quiz')
      },
      memorama(){
        this.$router.push('/memorama')
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