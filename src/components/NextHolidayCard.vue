<template lang="html">
    <div>
        <h1>Upcoming 3 Day Weekends</h1>
        <!-- <div class="next-3day-weekend">
            <h1>{{ next3DayWeekend.name }}</h1>
            <p>{{next3DayWeekend.dayName}}, {{next3DayWeekend.fullDate | human-friendly-date}}</p>
        </div> -->
        <div v-for="holiday in upcoming3DayWeekends">
            <div class="day">
                <h3>{{ holiday.name }}</h3>
                 <small>{{holiday.dayName}}, {{ holiday.fullDate | human-friendly-date }}</small>
            </div>
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
            upcoming3DayWeekends: [],
            next3DayWeekend: {}
        }
    },
    computed: {
        today() {
            return moment();
        }
    },
    methods: {
        initHolidays() {
            this.allHolidays = holidays;
        },
        getAll3DayWeekends() {
            // returns all past and future holidays which are on Friday, Sunday or Monday
            let days = ['Friday', 'Sunday', 'Monday'];
            this.allHolidays.forEach(holiday => {
                if (days.includes(this.getDayOfHoliday(holiday.fullDate))) {
                    this.all3DayWeekends.push(holiday);
                }
            })
        },
        getUpcoming3DayWeekends() {
            // returns a list of 3 day weekends, which are after today
            this.upcoming3DayWeekends = this.all3DayWeekends.filter(holiday => {
                return holiday.fullDate > this.today;
            })
        },
        getNext3DayWeekend() {
            // returns the one upcoming 3 day weekend
            this.next3DayWeekend = this.upcoming3DayWeekends[0];
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
    created() {
        this.initHolidays();
        this.transformIntoMomentObject(this.allHolidays);
        this.sortHolidays();
        this.getAll3DayWeekends();
        this.getUpcoming3DayWeekends();
        this.getNext3DayWeekend();
    },
    filters: {
        'human-friendly-date'(value) {
            return value.format('DD MMM, YYYY');
        },
        'without-head'(value) {
            return value.splice(0, 1);
        }
    }
}
</script>

<style lang="css">
h3 {
    margin-bottom: 0
}
</style>
