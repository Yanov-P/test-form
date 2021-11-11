import { MyDate } from "./MyDate"

export class MyForm{

    hostName: string
    phone: string
    email: string
    city: string
    name: string
    images: Array<string>
    description: string
    dates: Array<MyDate>
    rating: string

    constructor(
        hostName: string = "",
        phone: string = "",
        email: string = "",
        city: string = "",
        name: string = "",
        images: Array<string> = [],
        description: string = "",
        dates: Array<MyDate> = [new MyDate()],
        rating: string = ""
    ){
        this.hostName = hostName
        this.phone = phone
        this.email = email
        this.city = city
        this.name = name
        this.images = images
        this.description = description
        this.dates = dates,
        this.rating = rating
    }

}