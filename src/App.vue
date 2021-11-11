<template lang="pug">
.wrapper
    Form(
        v-if="!isApproval",
        @validated="onSubmit",
        :storage="storage"
    )
    FormApproval(
        v-else,
        :form="form",
        @cancel="approvalCancelled"
    )
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Form from './components/Form.vue';
import FormApproval from './components/FormApproval.vue';
import { FormStorageMock } from './core/infrastructure/FormStorageMock'

import { MyForm } from './core/entities/MyForm'
import { IFormStorage } from './core/usecases/IFormStorage';

@Options({
    components: {
        Form,
        FormApproval
    },
})
export default class App extends Vue {

    isApproval = false

    storage: IFormStorage = new FormStorageMock()

    get form(){
        return this.storage.form
    }

    set form(form: MyForm){
        this.storage.set(form)
    }

    onSubmit(form: MyForm){
        this.storage.set(form)
        this.isApproval = true
    }

    approvalCancelled(){
        this.isApproval = false
    }

}
</script>

<style lang="stylus" scoped>
.wrapper
    width 1200px
    background: $background-color
</style>
