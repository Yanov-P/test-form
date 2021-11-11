import { MyForm } from "../entities/MyForm";
import { Converter } from "./Converter";

export class Validator{

    public static validate(form: MyForm){

        let errors = []

        if(form.hostName.length == 0){
            errors.push("Нужно указать организатора")
        }

        if(form.phone.length == 0){
            errors.push("Нужно указать телефон")
        }
        if(form.city.length == 0){
            errors.push("Нужно указать город")
        }
        if(form.name.length == 0){
            errors.push("Нужно указать название мероприятия")
        }
        if(form.images.length == 0){
            errors.push("Нужно прикрепить фотографию")
        }
        if(form.rating.length == 0){
            errors.push("Нужно указать рейтинг мероприятия")
        }

        try{
            for(let date of form.dates){
    
                const endDate = Converter.stringsToDate(date.endDate, date.endTime)
    
                const startDate = Converter.stringsToDate(date.startDate, date.startTime)
    
                const res = endDate.getTime() - startDate.getTime()
    
                if(res < 0){
                    errors.push("Дата указана некорректно")
                    break
                }   
            }
        }
        catch{
            errors.push("Дата указана некорректно")
        }
        return errors

    }

    

}