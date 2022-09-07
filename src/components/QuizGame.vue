<template>
    <div class="container">
        <div class="datos">
                <div>rondas {{paso}}</div>
                <div>puntos {{contador}}</div>
        </div>
        <div class="game">
            <div v-for="(pregunta,index) in preguntas" :key="index.index">
                <div v-if="index === paso">
                    <div class="pregunta">
                        {{pregunta.pregunta}}
                    </div>
                    <div class="respuestas">
                        <div v-for="rta in pregunta.rtas" :key="rta.rta">
                            <button class="respuesta" @click="sum(rta.points)">
                                {{rta.rta}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-div" v-if="paso === 9">
            <button class="restart" @click="restart()">Volver a jugar</button>
        </div>
    </div>
</template>

<script>
import preguntas from '@/data/preguntas.json'
export default{
    name: 'QuizGame',
    data() {
        return{
            preguntas: preguntas,
            paso: 0,
            contador: 0,
            hidden: false
        }
    },
    methods: {
        sum(points) {
            this.paso ++
            this.contador += points
        },
        restart() {
            this.paso = 0
            this.contador = 0
        }
    }
    
}
</script>

<style scoped>
.container{
    font-family: 'Odin Rounded';
}
.datos{
    display: flex;
    justify-content: space-around;
    margin-bottom: 2%;
    font-size: 20px;
}
.pregunta{
    background-color: #fff;
    border-radius: 50px;
    margin: 0 20%;
    padding: 2% 5%;
    font-size: 22px;
}
.respuestas{
    margin: 2% 20%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    
}
.respuesta{
    font-family: 'Odin Rounded';
    background-color: #fff;
    border: none;
    border-radius: 50px ;
    cursor: pointer;
    font-size: 18px;
    padding: 15px 20px;
    margin: 10px; 
    width:100%;


}
.respuesta:hover{
    background-color: #ffe7f9;
}
.button-div{
    margin-top: 5%;
    display: flex;
    justify-content:center;
}
.restart{
    margin-top: 1%;
    background-color: #f94f4f;
    border: none;
    border-radius: 10px ;
    cursor: pointer; 
    font-family: 'Odin Rounded';
    font-size: 20px;
    color: #fff;
    padding: 1%;
}
</style>
