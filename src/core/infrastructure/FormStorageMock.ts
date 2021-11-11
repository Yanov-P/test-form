import { MyForm } from "../entities/MyForm";
import { IFormStorage } from "../usecases/IFormStorage";

export class FormStorageMock implements IFormStorage{

    form: MyForm

    constructor(){
        this.form = new MyForm()
    }

    clear(){
        this.form = new MyForm()
    }

    set(form: MyForm){
        this.form = form
    }
}