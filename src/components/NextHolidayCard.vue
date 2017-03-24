<template lang="html">
    <p>card</p>

</template>

<script>

import { holidays } from './../data/data.js'

export default {
    data() {
        return {
            allHolidays: []
        }
    },
    mounted() {
        this.allHolidays = holidays;
        console.log(this.allHolidays);
    },
    methods: {

    }
}
</script>

<style lang="css">
</style>
