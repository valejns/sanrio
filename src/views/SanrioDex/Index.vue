<template>
    <div>
        <BackHome/>
        <div class="container">
            <div class="card" v-for="character of characters" :key="character.name">
                <img class="character" :src="require(`@/assets/${character.image}.svg`)"/>
                <p class="name">{{character.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import characters from '@/data/characters.json'
    import BackHome from '@/components/BackHome.vue';
    export default {
    name: "SanrioDex",
    data() {
        return {
            characters: characters,
        };
    },
    components: {
        BackHome
    },
}
 
</script>
<style scoped>
.container {
    padding: 2% 10%;
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
}
.card{
    width: 65%;
    margin: 0;
    padding: 10px;
    /* background-color:#fff; */
    border-radius: 15px;
    filter: drop-shadow(7px 7px 4px rgba(0, 0, 0, 0.25));
}
.name {
    text-align: center;
    font-family: 'Odin Rounded';
}
.filter{
    margin: 0 auto;
    display: block;
    width: 20%;
    border: none;
    padding: 5px 20px;
    outline: none;
    background: #f4f4f4;
    font-size: 16px;
    border-radius: 20px;
}
</style>