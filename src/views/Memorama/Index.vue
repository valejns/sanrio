<template>
 <div>
    <BackHome/>
    <MemoGame/>
 </div>
</template>

<script>
import MemoGame from '@/components/MemoGame.vue'
import BackHome from '@/components/BackHome.vue';

export default {
    name: 'memoramaGame',
    components: {
    MemoGame,
    BackHome
}
}
</script>