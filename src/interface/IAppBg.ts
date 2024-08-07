export enum BgColors {
    clear = '#92d0eb',
    night = '#010925',
    overcast = '#425963'
}


export interface IAppBg {
    background: bgColorType
}

export type bgColorType = BgColors.clear | BgColors.night |BgColors.overcast


export const OvercastCodes = [1009, 1072, 1114, 1117, 1150, 1153, 1168, 1183, 1189, 1195, 1198, 1201, 1204, 1207, 1213, 1219, 1225,1240, 1237, 1276, 1279, 1282, 1087]