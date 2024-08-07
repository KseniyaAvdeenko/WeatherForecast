import FullMoon from '../assets/full moon.png'
import WaxingCrescent from '../assets/waxing crecsent.png'
import FirstQuarter from '../assets/first quater.png'
import WaxingGibbous from '../assets/waxing gibbous.png'
import NewMoon from '../assets/new moon.png'
import WaningGibbous from '../assets/waning gibbous.png'
import LastQuarter from '../assets/third quater.png'
import WaningCrescent from '../assets/waning crescent.png'


export function getMoonPhase(moonPhase: string) {
    if (moonPhase === 'New Moon') {
        return (<img src={NewMoon} height={50} alt="New Moon"/>)
    } else if (moonPhase === 'Waxing Crescent') {
        return (<img src={WaxingCrescent} height={50} alt="Waxing Crescent"/>)
    } else if (moonPhase === 'First Quarter') {
        return (<img src={FirstQuarter} height={50} alt="First Quarter"/>)
    } else if (moonPhase === 'Waxing Gibbous') {
        return (<img src={WaxingGibbous} height={50} alt="Waxing Gibbous"/>)
    } else if (moonPhase === 'Full Moon') {
        return (<img src={FullMoon} height={50} alt="Full Moon"/>)
    } else if (moonPhase === 'Waning Gibbous') {
        return (<img src={WaningGibbous} height={50} alt="Waning Gibbous"/>)
    } else if (moonPhase === 'Last Quarter') {
        return (<img src={LastQuarter} height={50} alt="Last Quarter"/>)
    } else if (moonPhase === 'Waning Crescent') {
        return (<img src={WaningCrescent} height={50} alt="Waning Crescent"/>)
    }
}