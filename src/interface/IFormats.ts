import React from "react";

export interface IUnit {
    id: string;
    name: string;
    ruName: string;
    icon?: React.ReactNode
}

export type TempFormat = 'celsius' | 'fahrenheit'
export type DistanceFormat = 'km' | 'miles'