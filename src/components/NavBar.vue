<template>
<nav>
    <img class="logo"  @click= "openLink('/')" src="@/assets/sanriologo.svg"/>
    <!-- <button @click= "openLink('/')" class="button">back home</button> -->
</nav>
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
  justify-content:center;
}
.logo{
    width: 13%;
    cursor: pointer;
}
/* .button {
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
} */
</style>