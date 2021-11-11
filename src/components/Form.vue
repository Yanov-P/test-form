<template lang="pug">
.form
    h1 Шаг 1
    form(@submit.prevent="onSubmit")
        section
            h2 Информация об огранизаторе
            h3 Организатор
            input(
                type="text",
                v-model="viewModel.form.hostName"
                )
        section
            h2 Контактные данные
            .form__contacts
                div
                    h3 Телефон
                    input(
                        type="text",
                        v-model="viewModel.form.phone"
                        )
                div
                    h3 E-mail
                    input(
                        type="email",
                        v-model="viewModel.form.email"
                        )
                div
                    h3 Город организатора
                    input(
                        type="text",
                        v-model="viewModel.form.city"
                        )
        section
            h2 Общая информация
            h3 Название
            input(
                type="text",
                v-model="viewModel.form.name"
                )
            h3 Фотография
            .form__images
                input.form__image-upload(
                    ref="image"
                    type="file",
                    multiple,
                    @change="onFileChange",
                    accept="image/*"
                )
                img.form__image-upload__btn(
                    src="@/assets/img/photo-placeholder.svg",
                    @click="$refs.image.click()"
                )
                .form__loaded-image(v-for="(url, index) in viewModel.form.images",)
                    img(:src="url")
                    .close-btn(@click="removeUrl(index)") &times;
            h3 Подробное описание
            textarea(v-model="viewModel.form.description")
            DateTimePicker(@datesChanged="dateInput")
            h3 Рейтинг мероприятия
            select(v-model="viewModel.form.rating")
                option(
                    v-for="(item, index) in viewModel.ratings",
                    :value="item.title"
                    :selected="index == 0"
                ) {{item.title}}
            
            .form__errors
                strong.form__error(v-for="error in errors") {{error}}

            .form__buttons
                button(
                    type="reset",
                    @click="viewModel.clear"
                    ) Отменить
                button(type="submit") Далее
</template>

<script lang="ts">
import { Options, Vue, setup, prop } from 'vue-class-component';
import DateTimePicker from './DateTimePicker.vue'
import FormViewModel from '../viewModel/FormViewModel'
import { IFormStorage } from '../core/usecases/IFormStorage'

import { MyDate }  from '@/core/entities/MyDate';

@Options({
    props:{
        storage: Object
    },
    components:{
        DateTimePicker
    }
})
export default class Form extends Vue {

    storage!: IFormStorage 

    errors: Array<string> = []

    viewModel = setup(() => {
		return FormViewModel(this.storage)
	})

    onFileChange(e: any) {

        const files = e.target.files;
        for(let file of files){
            let url = URL.createObjectURL(file);
            this.viewModel.form.images.push(url)
        }
    }

    dateInput(val: Array<MyDate>){
        this.viewModel.form.dates = val 
    }

    removeUrl(index: number){
        this.viewModel.form.images.splice(index, 1)
    }

    onSubmit(){
        this.errors = this.viewModel.validate()
        if(this.errors.length == 0){
            this.$emit('validated', this.viewModel.form)
        }
    }
}
</script>

<style scoped lang="stylus">
form
    background: white
    display: flex
    flex-direction: column
    padding 40px 30px 50px 30px

section
    display: flex
    flex-direction: column
    margin-bottom 40px
    margin-top 40px
    &:last-child
        margin-bottom 0px
    h3
        margin-top 30px
        margin-bottom 10px

.form__contacts
    width 100%
    display: flex
    flex-direction: row
    justify-content: space-between
    div
        width 367px

.form__images
    display: flex
    flex-wrap: wrap;
    img 
        border 4px solid $border-color
        border-radius 4px
        width 126px
        height 126px
        margin-right 10px
        margin-bottom 10px
        object-fit: scale-down;

.form__image-upload
    display: none

.form__image-upload__btn
    cursor pointer
    margin-bottom 10px

.form__loaded-image
    position: relative

.form__errors
    display: flex
    flex-direction: column 
    margin-top 40px

.form__error
    color #ff2998


.form__buttons
    margin-top 50px
    display: flex
    *:first-child
        margin-right 20px
</style>
