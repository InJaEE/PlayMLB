<template>
    <div>
        <div>
            <router-link to="/player/547943">
                Sample - Ryu
            </router-link>
        </div>
        <p v-for="(list, index) in clubList" :key="list.name">
            {{ index+1 }}, {{ list.name_display_full }}
        </p>
    </div>
</template>
<script>
export default {
    computed: {
        clubList(){
            console.log(this.$store.getters.fetchedAllClub);
            
            return this.$store.getters.fetchedAllClub;
        }
    },
    created(){
        this.$store.dispatch('FETCH_ALL_CLUB', 2019);
    }
}
</script>

<style>
body {
    text-align: center;
}
</style>