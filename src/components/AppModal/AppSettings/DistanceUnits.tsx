import React, {FC, useEffect, useState} from 'react';
import styles from "./Settings.module.sass";
import {DistanceFormat, IUnit} from "../../../interface/IFormats";

interface IDistanceUnitsProps {
    userLang: string;
    distanceFormat: DistanceFormat;
    setDistanceFormat: Function
}

const distUnits: IUnit[] = [
    {id: 'km', name: 'Kilometer', ruName: 'Километр'},
    {id: 'miles', name: 'Mile', ruName: 'Миля'}
]

const DistanceUnits: FC<IDistanceUnitsProps> = ({userLang, setDistanceFormat, distanceFormat}) => {
    //---states
    const [distanceUnitSelection, setDistanceUnitSelection] = useState<boolean>(false);
    const [distanceSelectionClass, setDistanceSelectionClass] = useState<string>(styles.selectDistanceUnit)

    //--effects
    useEffect(() => {
        distanceUnitSelection
            ? setDistanceSelectionClass([styles.selectDistanceUnit, styles.selectDistanceUnit_active].join(' '))
            : setDistanceSelectionClass(styles.selectDistanceUnit)
    }, [distanceUnitSelection])

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setDistanceFormat(e.target.value)
        setDistanceUnitSelection(distanceUnitSelection => !distanceUnitSelection)
        localStorage.setItem('distanceFormat', e.target.value)
    }

    return (
        <div className={styles.settings__items}
             onClick={() => setDistanceUnitSelection(distanceUnitSelection => !distanceUnitSelection)}>
            <p>{userLang === 'ru' ? 'Единицы измерения расстояния' : 'Distance units'}</p>
            <p>{distUnits.filter(el => el.id === distanceFormat).map(unit => (userLang === 'ru' ? unit.ruName : unit.name))}</p>
            <div className={distanceSelectionClass}>
                {distUnits.map(unit => (
                    <div key={unit.id} className={styles.selectDistanceUnit__option}>
                        <label htmlFor={unit.id}>{userLang === 'ru' ? unit.ruName : unit.name}</label>
                        <input type="radio"
                               name={'distanceUnit'}
                               id={unit.id}
                               checked={unit.id === distanceFormat}
                               value={unit.id}
                               onChange={e => onChange(e)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DistanceUnits;
