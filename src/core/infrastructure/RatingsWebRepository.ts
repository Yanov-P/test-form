import { IRatingsRepository } from "../usecases/IRatingsRepository";
import axios from 'axios'
import { MyRating } from "../entities/MyRating";

export class RatingsWebRepository implements IRatingsRepository{
    fetch(){
        return axios.get('http://testwork.rdbx24.ru/api/')
        .then(response => {

            return response.data?.result.map(function(item: any){
                return new MyRating(item.title, item.id)
            })
            
        });
    }
}