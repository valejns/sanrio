<template>
    <div class= 'tablero'>
        <div class= 'area-tarjeta'>
            <div class="tarjetas" v-for="card in cards" :key="card.id">
                    <img class="backCard"
                    @click="turn(card.id, card.turned, card.matched)"
                    :src="card.turned 
                    ? require(`../assets/${card.idPares}.svg`) 
                    : require(`../assets/trasera.jpg`)">
                </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MemoGame',

    data() {
        return {
            backcard: {img: '@/assets/trasera.jpg', turned: true},
            cards: [
                {id: 1, idPares: 1, turned:false, matched: false},
                {id: 2, idPares: 1, turned:false, matched: false},
                {id: 3, idPares: 2, turned:false, matched: false},
                {id: 4, idPares: 2, turned:false, matched: false},
                {id: 5, idPares: 3, turned:false, matched: false},
                {id: 6, idPares: 3, turned:false, matched: false},
                {id: 7, idPares: 4, turned:false, matched: false},
                {id: 8, idPares: 4, turned:false, matched: false},
                {id: 9, idPares: 5, turned:false, matched: false},
                {id: 10, idPares: 5, turned:false, matched: false},
                {id: 11, idPares: 6, turned:false, matched: false},
                {id: 12, idPares: 6, turned:false, matched: false}],

            memoryCard: []
    };
},
    methods: {
        turn(id, estadoActual, match){
            if(this.memoryCard.length < 2) {
                //nuevo array con la condicion de que id sea igual al id clickeado
                this.cards = this.cards.map(card => {
                    if(card.id === id){
                        //cambia el valor de turned
                        card.turned = !estadoActual
                    }
                    //si el memorycard es mayor a 0
                    if(this.memoryCard.length > 0) {
                        //si card es true y si en el index 0 de la memory.id no es el clickeado
                        if(card.turned && this.memoryCard[0].id !== card.id ){
                            this.memoryCard.push(card)
                        }
                    }else{
                        //si es true
                        if(card.turned){
                            this.memoryCard.push(card)
                        }
                    }
                    return card
                })
            }
            setTimeout(() => {
                if(this.memoryCard.length === 2){
                    //si index 0 y 1 son iguales
                    if(this.memoryCard[0].idPares === this.memoryCard[1].idPares){
                        this.memoryCard.matched = !match
                    //filtra si idpares no es igual a idpares del index 0
                        this.cards = this.cards.filter(card=> card.idPares !== this.memoryCard[0].idPares)
                        // this.cards = this.cards.map (card => )
                        this.memoryCard = []
                    }
                    else{
                        this.cards = this.cards.map(card=> {
                            card.turned = false
                            return card
                        })
                        this.memoryCard = []
                    }
                }   
            }, 1000);
        }
 
    },  
    computed: {
        },
        mounted() {
            console.log('hola');
        }
}
</script>

<style scoped>
.tarjetas{
    width:400px;
    display: inline-block
}
.backCard, .turnedCard{
    display: inline-block;
    width: 400px;
    height: 130px;

}

</style>