import Celsius from "../icons/Celsius";
import Fahrenheit from "../icons/Fahrenheit";
import {TempFormat} from "../interface/IFormats";




export function getTempFormat(format: TempFormat, temp_c: number, temp_f: number, width: number, height: number) {
    if (format === 'celsius') {
        return (<div className='temp-format'><p>{Math.floor(temp_c)}</p> <Celsius width={width} height={height}/></div>)
    } else if (format === 'fahrenheit') {
        return (<div className='temp-format'><p>{Math.floor(temp_f)}</p> <Fahrenheit width={width} height={height}/></div>)
    }
}