import { MyForm } from "../entities/MyForm";

export interface IFormStorage{

    form: MyForm

    clear(): void

    set(form: MyForm): void

}