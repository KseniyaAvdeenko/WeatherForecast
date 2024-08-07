import SunIcon from "../icons/SunIcon";
import PartlyCloudy from "../icons/PartlyCloudy";
import Cloudy from "../icons/Cloudy";
import Overcast from "../icons/Overcast";
import Mist from "../icons/Mist";
import Rain from "../icons/Rain";
import PatchySnow from "../icons/PatchySnow";
import PatchySleet from "../icons/PatchySleet";
import FreezingDrizzle from "../icons/FreezingDrizzle";
import Thunderstorm from "../icons/Thunderstorm";
import BlowingSnow from "../icons/BlowingSnow";
import Blizzard from "../icons/Blizzard";
import Fog from "../icons/Fog";
import FreezingFog from "../icons/Fog";
import LightDrizzle from "../icons/LightDrizzle";
import HeavyFreezingDrizzle from "../icons/HeavyFreezingDrizzle";
import LightRain from "../icons/LightRain";
import HeavyRainAtTimes from "../icons/HeavyRainAtTimes";
import HeavyRain from "../icons/HeavyRain";
import FreezingRain from "../icons/FreezingRain";
import Sleet from "../icons/Sleet";
import Snow from "../icons/Snow";
import PatchyHeavySnow from "../icons/PatchyHeavySnow";
import HeavySnow from "../icons/HeavySnow";
import IcePellets from "../icons/IcePellets";
import RainShower from "../icons/RainShower";
import LightSleetShower from "../icons/LightSleetShower";
import IcePelletsLightShower from "../icons/IcePelletsLightShower";
import IcePelletsHeavyShower from "../icons/IcePelletsHeavyShower";
import RainWithThunder from "../icons/RainWithThunder";
import PatchySnowWithThunder from "../icons/PatchySnowWithThunder";
import HeavySnowWithThunder from "../icons/HeavySnowWithThunder";
import {Available} from "../interface/IForecast";
import Moon from "../icons/Moon";
import PartlyCloudyMoon from "../icons/PartlyCloudyMoon";
import RainMoon from "../icons/RainMoon";
import PatchySnowMoon from "../icons/PatchySnowMoon";
import PatchySleetMoon from "../icons/PatchySleetMoon";
import ThunderstormMoon from "../icons/ThunderstormMoon";
import HeavyRainAtTimesMoon from "../icons/HeavyRainAtTimesMoon";
import PatchyHeavySnowMoon from "../icons/PatchyHeavySnowMoon";
import RainShowerMoon from "../icons/RainShowerMoon";
import HeavySleetShower from "../icons/HeavySleetShower";
import HeavySleetShowerMoon from "../icons/HeavySleetShowerMoon";
import IcePelletsLightShowerMoon from "../icons/IcePelletsLightShowerMoon";
import IcePelletsHeavyShowerMoon from "../icons/IcePelletsHeavyShowerMoon";
import PatchySnowWithThunderMoon from "../icons/PatchySnowWithThunderMoon";


export function getIcon(code: number, width: number, height: number, isDay: Available.YES | Available.NO|null) {
    if (code === 1000) {
        if (isDay === 1) {
            return (<SunIcon width={width} height={height}/>)
        } else if(isDay===0) {
            return (<Moon width={width} height={height}/>)
        }
    } else if (code === 1003) {
        if (isDay === 1) {
            return (<PartlyCloudy width={width} height={height}/>)
        } else if(isDay===0) {
            return (<PartlyCloudyMoon width={width} height={height}/>)
        }
    } else if (code === 1006) {
        return (<Cloudy width={width} height={height}/>)
    } else if (code === 1009) {
        return (<Overcast width={width} height={height}/>)
    } else if (code === 1030) {
        return (<Mist width={width} height={height}/>)
    } else if (code === 1063 || 1180 || 1186 || 1240) {
        if (isDay === 1) {
            return (<Rain width={width} height={height}/>)
        } else {
            return (<RainMoon width={width} height={height}/>)
        }
    } else if (code === 1066 || 1216 || 1255 || 1210) {
        if (isDay === 1) {
            return (<PatchySnow width={width} height={height}/>)
        } else if(isDay===0) {
            return (<PatchySnowMoon width={width} height={height}/>)
        }
    } else if (code === 1069 || 1249) {
        if (isDay === 1) {
            return (<PatchySleet width={width} height={height}/>)
        } else if(isDay===0) {
            return (<PatchySleetMoon width={width} height={height}/>)
        }
    } else if (code === 1072 || 1168) {
        return (<FreezingDrizzle width={width} height={height}/>)
    } else if (code === 1087 || 1273) {
        if (isDay === 1) {
            return (<Thunderstorm width={width} height={height}/>)
        } else if(isDay===0) {
            return (<ThunderstormMoon width={width} height={height}/>)
        }
    } else if (code === 1114) {
        return (<BlowingSnow width={width} height={height}/>)
    } else if (code === 1117) {
        return (<Blizzard width={width} height={height}/>)
    } else if (code === 1135) {
        return (<Fog width={width} height={height}/>)
    } else if (code === 1147) {
        return (<FreezingFog width={width} height={height}/>)
    } else if (code === 1150 || 1153) {
        return (<LightDrizzle width={width} height={height}/>)
    } else if (code === 1171) {
        return (<HeavyFreezingDrizzle width={width} height={height}/>)
    } else if (code === 1183 || 1189) {
        return (<LightRain width={width} height={height}/>)
    } else if (code === 1192 || 1243) {
        if (isDay === 1) {
            return (<HeavyRainAtTimes width={width} height={height}/>)
        } else if(isDay===0) {
            return (<HeavyRainAtTimesMoon width={width} height={height}/>)
        }
    } else if (code === 1195) {
        return (<HeavyRain width={width} height={height}/>)
    } else if (code === 1198 || 1201) {
        return (<FreezingRain width={width} height={height}/>)
    } else if (code === 1204 || 1207) {
        return (<Sleet width={width} height={height}/>)
    } else if (code === 1213 || 1219) {
        return (<Snow width={width} height={height}/>)
    } else if (code === 1222 || 1258) {
        if (isDay === 1) {
            return (<PatchyHeavySnow width={width} height={height}/>)
        } else if(isDay===0) {
            return (<PatchyHeavySnowMoon width={width} height={height}/>)
        }
    } else if (code === 1225) {
        return (<HeavySnow width={width} height={height}/>)
    } else if (code === 1237) {
        return (<IcePellets width={width} height={height}/>)
    } else if (code === 1246) {
        if (isDay === 1) {
            return (<RainShower width={width} height={height}/>)
        } else if(isDay===0) {
            return (<RainShowerMoon width={width} height={height}/>)
        }
    } else if (code === 1249) {
        return (<LightSleetShower width={width} height={height}/>)
    } else if (code === 1252) {
        if (isDay === 1) {
            return (<HeavySleetShower width={width} height={height}/>)
        } else if(isDay===0) {
            return (<HeavySleetShowerMoon width={width} height={height}/>)
        }
    } else if (code === 1261) {
        if (isDay === 1) {
            return (<IcePelletsLightShower width={width} height={height}/>)
        } else if(isDay===0) {
            return (<IcePelletsLightShowerMoon width={width} height={height}/>)
        }
    } else if (code === 1264) {
        if (isDay === 1) {
            return (<IcePelletsHeavyShower width={width} height={height}/>)
        } else if(isDay===0) {
            return (<IcePelletsHeavyShowerMoon width={width} height={height}/>)
        }
    } else if (code === 1276) {
        return (<RainWithThunder width={width} height={height}/>)
    } else if (code === 1279) {
        if(isDay===1){
            return (<PatchySnowWithThunder width={width} height={height}/>)
        }else if(isDay===0){
            return (<PatchySnowWithThunderMoon width={width} height={height}/>)
        }
    } else if (code === 1282) {
        return (<HeavySnowWithThunder width={width} height={height}/>)
    }
}