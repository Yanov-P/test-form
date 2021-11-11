<template lang="pug">
.approval
    h1 Шаг 2
    .notification
        img(src="../assets/img/notification.svg")
        h2 Проверьте ваше меропрятие на наличие ошибок, если все в порядке - отправляйте на модерацию
    .approval__content
        .approval__rating {{form.rating}}
        .approval__description
            h1 {{form.name}}
            strong {{form.city}}
            .approval__date(v-for="date in form.dates")
                strong {{myDateToDates(date)}}
                strong {{myDateToTime(date)}}
            h3 Контакты
            strong {{form.phone}}
            strong {{form.email}}
            strong {{form.hostName}}
        img(v-if="form.images" :src="form.images[0]")
    p {{form.description}}
    .approval__buttons
        button(
            type="button",
            @click="cancel"
            ) Назад
        button(type="submit") Отправить на модерацию
</template>

<script lang="ts">

import { Options, Vue, prop } from 'vue-class-component';

import { MyForm } from '../core/entities/MyForm'
import { MyDate } from '../core/entities/MyDate'

@Options({
    props: {
        form: MyForm
    }
})

export default class FormApproval extends Vue {

    cancel(){
        this.$emit("cancel")
    }

    myDateToDates(val: MyDate){
        return `${val.startDate}, ${val.endDate}`
    }

    myDateToTime(val: MyDate){
        return `${val.startTime}, ${val.endTime}`
    }
}
</script>

<style lang="stylus" scoped>
.approval
    background: white
    padding 30px 25px 50px 30px
    

.notification
    display: flex
    align-items: center
    width 100%
    height 80px
    box-shadow: 0px 8px 25px rgba(155, 99, 248, 0.15);
    border-radius: 4px;
    margin-bottom 60px
    img
        margin-left 25px
        height 45px
        width 45px
        margin-right 20px


.approval__content
    display: flex
    img
        width 630px
        height 420px
        object-fit: scale-down;
        margin-bottom 30px

.approval__description
    display: flex
    flex-direction: column
    h1
        margin-top 0
        margin-bottom 32px
        width 415px
    h3
        margin-top 9px
        margin-bottom 13px

.approval__rating
    display: flex
    justify-content: center
    align-items: center  
    
    font-family: Montserrat;
    
    color white
    background: $stressed-color
    width 48px
    height 48px
    margin-right 16px

p
    margin-bottom 50px

strong 
    margin-bottom 14px

.approval__buttons
    display: flex
    *:first-child
        margin-right 20px

.approval__date
    margin-top 10px
    display: flex
    flex-direction: column
</style>
