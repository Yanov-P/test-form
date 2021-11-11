import { MyRating } from "../entities/MyRating";

export interface IRatingsRepository {

    fetch(): Promise<MyRating[]>

}