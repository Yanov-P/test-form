export class Converter{

    static stringsToDate(date: string, time: string){
        const convertedDate = new Date(date)
        const timeSplitted = time.split(":")
        if(timeSplitted.length == 2){
            convertedDate.setHours( parseInt(timeSplitted[0]), parseInt(timeSplitted[1]) )
        }
        else{
            throw new TypeError("Wrong time format")
        }
        return convertedDate
    }
}