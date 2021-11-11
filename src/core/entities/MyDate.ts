export class MyDate{

    startDate: string
    startTime: string
    endDate: string 
    endTime: string

    id: number

    constructor(
        startDate: string = "", 
        startTime: string = "", 
        endDate: string = "", 
        endTime: string = "", 
    ){
        this.startDate = startDate
        this.startTime = startTime
        this.endDate = endDate
        this.endTime = endTime
        this.id = Math.floor(Math.random() * 100)
    }

}