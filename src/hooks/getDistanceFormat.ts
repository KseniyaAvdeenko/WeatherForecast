export type DistanceFormat = 'km' | 'miles'

export function getDistanceFormat(distanceFormat:DistanceFormat, kmValue: number, milesValue: number, langValue: string): string{
    if (distanceFormat === 'km'){
        return kmValue + ' ' + langValue
    }else{
        return milesValue + ' ' + langValue
    }
}