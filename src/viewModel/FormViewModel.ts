import { toRefs, reactive } from "vue";

import { MyForm } from "@/core/entities/MyForm";
import { MyRating } from "@/core/entities/MyRating";
import { RatingsWebRepository } from "@/core/infrastructure/RatingsWebRepository";
import { Validator } from "@/core/utils/Validator";
import { IFormStorage } from "@/core/usecases/IFormStorage";

const viewModel = reactive({
    form: <MyForm> {},
    ratings: <Array<MyRating>> []
})

export default function create(storage: IFormStorage) {
    console.log(storage)
    init(storage.form) 
    return { 
        ...toRefs(viewModel),
        validate,
        clear
    };
}

async function init(form: MyForm | null = null) {
    console.log(form)
    if(form){
        viewModel.form = form
    }
    
    else{
        viewModel.form = new MyForm()
    }
    viewModel.ratings = await new RatingsWebRepository().fetch()
}

function validate(){
    return Validator.validate(viewModel.form)
}

function setForm(){

}

function clear(){
    viewModel.form = new MyForm()
}