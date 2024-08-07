import React from 'react';
import weatherStyles from "./RisesAndSets.module.sass";
import {getMoonPhase} from "../../../hooks/getMoonPhase";

const MoonPhase: React.FC<{moonPhase: string}> = ({moonPhase}) => {
    return (
        <div className={weatherStyles.moonPhase}>
            {getMoonPhase(moonPhase)}
            {moonPhase}
        </div>
    );
};

export default MoonPhase;
