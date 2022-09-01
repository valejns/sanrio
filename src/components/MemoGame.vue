<template>
    <div class= 'tablero'>
        <p>hola</p>
        <div class= 'area-tarjeta'>
            <div class="tarjeta" v-for="(card,index) in card" :key="index" :cards="card">
                {{card.img}}
                <div class="hiden">
                    <img src="@/assets/trasera.jpg"/>
                </div>
                <div class="showed">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemoGame',
    data() {
        return{
        cards: [
        {idUnica: 1, img:'@/assets/1.svg', idPares: 1 },
        {idUnica: 2, img:'@/assets/1.svg', idpares: 1},
        {idUnica: 3, img:'@/assets/2.svg', idpares: 2},
        {idUnica: 4, img:'@/assets/2.svg', idpares: 2},
        {idUnica: 5, img:'@/assets/3.svg', idpares: 3},
        {idUnica: 6, img:'@/assets/3.svg', idpares: 3},
        {idUnica: 7, img:'@/assets/4.svg', idpares: 4},
        {idUnica: 8, img:'@/assets/4.svg', idpares: 4},
        {idUnica: 9, img:'@/assets/5.svg', idpares: 5},
        {idUnica: 10, img:'@/assets/5.svg', idpares: 5},
        {idUnica: 11, img:'@/assets/6.svg', idpares: 6},
        {idUnica: 12, img:'@/assets/6.svg', idpares: 6}],

        memoryCard: [],

        }
    },
    methods: {
        HideCards(){
            
        },
        showCards() {

        },
        cardMatch() {
                           
        }
    }
}
</script>