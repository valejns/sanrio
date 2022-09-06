<template>
    <div class= 'board'>
        <div class= 'cards-area'>
            <div class="cards" v-for="card in cards" :key="card.id">
                    <img class="card"
                    @click="card.matched ? false : turn(card.id, card.turned)"
                    :src="card.turned || card.matched
                    ? require(`../assets/${card.idPares}.svg`) 
                    : require(`../assets/trasera.svg`)">
            </div>
        </div>
        <div class="button">
        <button @click="shuffle()">Volver a jugar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MemoGame',
        
        data() {
            return {
                backcard: {turned: true},
                cards: [],
                
                memoryCard: []
            };
        },
        methods: {
            shuffle() {
                this.cards = [
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
                {id: 12, idPares: 6, turned:false, matched: false}]
                this.cards.sort(()=> Math.random() - 0.5)
            },
            turn(id, estadoActual) {
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
                        if(card.turned && this.memoryCard[0].id !== card.id && !card.matched){
                            this.memoryCard.push(card)
                        }
                    }else{
                        //si es true
                        if(card.turned && !card.matched){
                            this.memoryCard.push(card)
                        }
                    }
                    return card
                })
                }
                setTimeout(() => {
                    if(this.memoryCard.length === 2){
                        //si index 0 y 1 son iguales
                        if(this.memoryCard[0].idPares === this.memoryCard[1].idPares) {
                            //mapeo si index 0 idp es igual a idp de la carta
                            this.cards = this.cards.map(card => {if (this.memoryCard[0].idPares === card.idPares) {
                                //le cambia el valor de matched
                            card.matched = true
                        }
                            return card})
                            //se limpia el array
                            this.memoryCard = []
                        }
                        else{
                            //mapeo para q se vuelvan a dar vuelta
                            this.cards = this.cards.map(card=> {
                                card.turned = false
                                return card
                            })
                            //se limpia el array
                            this.memoryCard = []
                        }
                    }   
                }, 300);
            }
    },

    mounted() {
        this.shuffle()
    }
}
</script>

<style scoped>
.cards-area{
    margin:0 5%;
    border-radius: 30px;
    padding:5% 10%;
    display: grid;
    height: auto;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    background: rgba(247, 247, 247, 0.245);
    row-gap: 2%;
    justify-items: center
}
.cards{
    width:90%;
    display: inline-block;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
}
.cards:hover{
    transform: scale(1.02);
}
 .card{ 
    /* display: inline-block; */
    width: 100%; 
    height: 150px;
}  

.button{
    display: flex;
    justify-content:center;
}
button{
    margin-top: 1%;
    background-color: #f94f4f;
    border: none;
    border-radius: 10px ;
    cursor: pointer;
    /* overflow: hidden; */
    font-family: 'Odin Rounded';
    font-size: 20px;
    color: #fff;
    padding: 1%;
}
</style>