<template>
    <div class= 'tablero'>
        <div class= 'area-tarjeta'>
            <div class="tarjetas" v-for="card in cards" v-bind:key="card" @click="turn()">
                <!-- <div class="showed" :class=" !turn ? : "> -->
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>

export default {
    name: 'MemoGame',
    data() {
        return{
        backcard: {img: '@/assets/trasera.jpg', turned: true},

        cards: [
        {idUnica: 1, img: '@/assets/1.svg', idPares: 1, turned:false},
        {idUnica: 2, img: '@/assets/1.svg', idpares: 1, turned:false},
        {idUnica: 3, img: '@/assets/2.svg', idpares: 2, turned:false},
        {idUnica: 4, img: '@/assets/2.svg', idpares: 2, turned:false},
        {idUnica: 5, img: '@/assets/3.svg', idpares: 3, turned:false},
        {idUnica: 6, img: '@/assets/3.svg', idpares: 3, turned:false},
        {idUnica: 7, img: '@/assets/4.svg', idpares: 4, turned:false},
        {idUnica: 8, img: '@/assets/4.svg', idpares: 4, turned:false},
        {idUnica: 9, img: '@/assets/5.svg', idpares: 5, turned:false},
        {idUnica: 10, img: '@/assets/5.svg', idpares: 5, turned:false},
        {idUnica: 11, img: '@/assets/6.svg', idpares: 6, turned:false},
        {idUnica: 12, img: '@/assets/6.svg', idpares: 6, turned:false}],

        memoryCard: [],

        }
    },
    methods: {
        turn(){
            this.cards.turned =true
            this.backcard.turned = false
        },
        hideCards(){
            
        },
        showCards() {

        },
        cardMatch() {
                           
        }
    },
    computed: {
        }
}
</script>