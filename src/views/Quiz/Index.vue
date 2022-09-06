<template>
<div>
    <BackHome/>
    <QuizGame/>
</div>
</template>

<script>
import QuizGame from '@/components/QuizGame.vue'
import BackHome from '@/components/BackHome.vue';
export default {
    name: "QGame",
    components: { BackHome, QuizGame }
}
</script>