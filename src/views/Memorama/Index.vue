<template>
 <div>
    <NavBar/>
    <MemoGame/>
 </div>
</template>

<script>
import MemoGame from '@/components/MemoGame.vue'
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'memoramaGame',
    components: {
    MemoGame,
    NavBar
}
}
</script>