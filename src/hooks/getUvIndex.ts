export function getUvIndex(userLang:string, uvIndex: number):string {
    if(uvIndex === 0||1||2){
        if(userLang === 'ru'){
            return 'Низкий'
        }else {
            return 'Low'
        }
    }else if(uvIndex === 3||4||5){
       if(userLang === 'ru'){
            return 'Умеренный'
        }else {
            return 'Moderate'
        }
    }else if(uvIndex === 6||7){
       if(userLang === 'ru'){
            return 'Высокий'
        }else {
            return 'High'
        }
    }else if(uvIndex === 8||9||10){
       if(userLang === 'ru'){
            return 'Очень высокий\t'
        }else {
            return 'Very high'
        }
    }else{
       if(userLang === 'ru'){
            return 'Чрезмерный'
        }else {
            return 'Extreme'
        }
    }
}