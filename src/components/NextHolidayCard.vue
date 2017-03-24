<template lang="html">

    <div>
        <div v-for="holiday in upcoming3DayWeekends">
            {{ holiday.name }} ({{holiday.dayName}}: {{ holiday.fullDate | human-friendly-date }})
        </div>


    </div>

</template>

<script>

import moment from 'moment';
import { holidays } from './../data/data.js'

export default {
    name: 'NextHolidayCard',
    data() {
        return {
            allHolidays: [],
            all3DayWeekends: [],
            upcoming3DayWeekends: []
        }
    },
    computed: {
        today: function() {
            return moment();
        }
    },
    methods: {
        initHolidays() {
            this.allHolidays = holidays;
        },
        getAll3DayWeekends() {
            // returns holidays which are on Friday, Sunday or Monday
            let days = ['Friday', 'Sunday', 'Monday'];
            this.allHolidays.forEach(holiday => {
                if (days.includes(this.getDayOfHoliday(holiday.fullDate))) {
                    this.all3DayWeekends.push(holiday);
                }
            })
        },
        getUpcoming3DayWeekends() {
            this.upcoming3DayWeekends = this.all3DayWeekends.filter(holiday => {
                console.log(holiday.fullDate > this.today);
                return holiday.fullDate > this.today;
            })
        },
        sortHolidays() {
            // Sort holidays by earliest
            this.allHolidays.sort((a, b) => {
                return a.fullDate - b.fullDate;
            })
        },
        transformIntoMomentObject(allHolidays) {
            // Creates and appends a 'fullDate' moment obj to each holiday object
            let thisYear = moment().year();
            allHolidays.forEach(holiday => {
                // creates a 'fullDate' property inside the holiday object
                holiday.fullDate = moment(`${holiday.day}-${holiday.month}-${thisYear}`, 'DD-MM-YYYY');

                // create a dayName property inside the holiday object
                holiday.dayName = this.getDayOfHoliday(holiday.fullDate)

            });
        },
        getDayOfHoliday(holidayDate) {
            // Get the day name (Example: 'Sunday')
            return holidayDate.format('dddd');
        }
    },
    mounted() {
        this.initHolidays();
        this.transformIntoMomentObject(this.allHolidays);
        this.sortHolidays();
        this.getAll3DayWeekends();
        this.getUpcoming3DayWeekends();
    },
    filters: {
        'human-friendly-date'(value) {
            return value.format('DD MMM, YYYY');
        }
    }
}
</script>

<style lang="css">
</style>
