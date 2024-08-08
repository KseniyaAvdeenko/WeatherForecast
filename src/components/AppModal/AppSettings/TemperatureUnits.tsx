import React, {FC, useEffect, useState} from 'react';
import styles from "./Settings.module.sass";
import {Icon} from "@iconify-icon/react";
import {IUnit, TempFormat} from "../../../interface/IFormats";

interface ITemperatureUnitsProps {
    userLang: string;
    tempFormat: TempFormat;
    setTempFormat: Function;
}

const units: IUnit[] = [
    {
        name: 'Celsius',
        id: 'celsius',
        ruName: 'Цельсий',
        icon: <Icon icon="wi:celsius" width="30" height="30" style={{color: '#010925'}}/>
    },
    {
        name: 'Fahrenheit',
        ruName: 'Фаренгейт',
        id: 'fahrenheit',
        icon: <Icon icon="wi:fahrenheit" width="30" height="30" style={{color: '#010925'}}/>
    }
]

const TemperatureUnits: FC<ITemperatureUnitsProps> = ({userLang, tempFormat, setTempFormat}) => {
    //--states
    const [tempUnitSelection, setTempUnitSelection] = useState<boolean>(false)
    const [tempUnitClass, setTempUnitClass] = useState<string>(styles.selectTempUnit)
    //---effects
    useEffect(() => {
        tempUnitSelection
            ? setTempUnitClass([styles.selectTempUnit, styles.selectTempUnit_active].join(' '))
            : setTempUnitClass(styles.selectTempUnit)
    }, [tempUnitSelection])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTempFormat(e.target.value)
        setTempUnitSelection(tempUnitSelection => !tempUnitSelection)
        localStorage.setItem('tempFormat', e.target.value)
    }
    //console.log(tempFormat, units)
    return (
        <div className={styles.settings__items}
             onClick={() => setTempUnitSelection(tempUnitSelection => !tempUnitSelection)}>
            <p>{userLang === 'ru' ? 'Единицы измерения температуры' : 'Temperature units'}</p>

            {units.filter(el => el.id === tempFormat).map(unit => (
                <p key={unit.name}>{userLang === 'ru' ? unit.ruName : unit.name} {unit.icon}</p>
            ))}

            <div className={tempUnitClass}>
                {units.map(unit => (
                    <div key={unit.id} className={styles.selectTempUnit__option}>
                        <label htmlFor={unit.id}>{userLang === 'ru' ? unit.ruName: unit.name}{unit.icon}</label>
                        <input
                            type="radio"
                            name='tempUnit'
                            value={unit.id}
                            checked={unit.id === tempFormat}
                            id={unit.id}
                            onChange={e => onChange(e)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemperatureUnits;
