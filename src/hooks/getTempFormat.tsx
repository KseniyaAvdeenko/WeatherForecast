import Celsius from "../icons/Celsius";
import Fahrenheit from "../icons/Fahrenheit";
import {TempFormat} from "../interface/IFormats";




const spanStyle = {display: 'flex', alignItems:'center', height: 'fit-content', lineHeight:.8}

export function getTempFormat(format: TempFormat, temp_c: number, temp_f: number, width: number, height: number) {
    if (format === 'celsius') {
        return (<div style={spanStyle}><p>{Math.floor(temp_c)}</p> <Celsius width={width} height={height}/></div>)
    } else if (format === 'fahrenheit') {
        return (<div style={spanStyle}><p>{Math.floor(temp_f)}</p> <Fahrenheit width={width} height={height}/></div>)
    }
}