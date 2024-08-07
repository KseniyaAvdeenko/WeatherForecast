
export function windDirWord(windDir: string, capitalize: boolean){
    if(windDir === 'N'){
        return capitalize ?'North': 'north'
    }else if(windDir === 'E'){
        return capitalize ?'East': 'east'
    }else if(windDir === 'W'){
        return capitalize ? 'West': 'west'
    }else if(windDir === 'S'){
        return capitalize ? 'South': 'south'
    }
}

export function getWindDirection(windDir: string){
    if(windDir.length === 1){
        return windDirWord(windDir[0], true)
    }else if(windDir.length === 2){
        return `${windDirWord(windDir[0], true)}${windDirWord(windDir[1], false)}`
    }else {
        return `${windDirWord(windDir[0], true)}`
    }
}