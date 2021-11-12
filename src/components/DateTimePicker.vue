<template lang="pug">
.datetime-picker
    .datetime-picker__date(
        v-for="(date, index) in dates",
        )
        .datetime-picker__column
            h3 Дата начала
            input(
                @input="onInput",
                type="date",
                v-model="date.startDate"
            )
        .datetime-picker__column
            h3 Время начала
            input(
                @input="onInput",
                type="time",
                v-model="date.startTime"
            )
        hr
        .datetime-picker__column
            h3 Дата окончания
            input(
                @input="onInput",
                type="date",
                v-model="date.endDate"
            )
        .datetime-picker__column
            h3 Время окончания
            input(
                @input="onInput",
                type="time",
                v-model="date.endTime"
            )
        .close-btn(@click="removeDate(index)") &times;
    .datetime-picker__date.datetime-picker__date_default
        .datetime-picker__column
            h3 Дата начала
            input(
                @input="onInput",
                type="date",
                v-model="defaultDate.startDate"
            )
        .datetime-picker__column
            h3 Время начала
            input(
                @input="onInput",
                type="time",
                v-model="defaultDate.startTime"
            )
        hr
        .datetime-picker__column
            h3 Дата окончания
            input(
                @input="onInput",
                type="date",
                v-model="defaultDate.endDate"
            )
        .datetime-picker__column
            h3 Время окончания
            input(
                @input="onInput",
                type="time",
                v-model="defaultDate.endTime"
            )

    button(
        type="button",
        @click="addDate"
    ) + Добавить дату
    

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { MyDate } from "../core/entities/MyDate"

@Options({

})
export default class DateTimePicker extends Vue {

    dates: Array<MyDate> = []
    defaultDate: MyDate = new MyDate()

    addDate(){
        this.dates.push(new MyDate())
        this.onInput()
    }

    removeDate(index: number){
        this.dates.splice(index, 1)
        this.onInput()
    }

    onInput(){
        let allDates = [...this.dates]
        allDates.unshift(this.defaultDate)
        this.$emit('datesChanged', allDates)
    }

}
</script>

<style lang="stylus" scoped>
.datetime-picker
    margin-top 55px
    input 
        width 254px
        padding 20px
    button
        width 182px
        margin-top 35px
    h3
        margin-bottom 10px

.datetime-picker__date
    position: relative
    padding: 20px 25px
    margin-bottom 40px
    background: $datetime-color
    display: flex
    justify-content: space-between
    align-items: center
    .close-btn
        right: -13px

.datetime-picker__date_default
    padding 0px
    background: none
    margin-bottom 0px
    hr
        width 55px

hr
    position: relative
    top 15px
    width 22px
    height 0px
    border $default-border
</style>
