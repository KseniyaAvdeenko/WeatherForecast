import React, {FC, useEffect, useState} from 'react';
import styles from './Dropdown.module.sass'

interface IDropdownProps {
    isActive: boolean;
    children: React.ReactNode
}

const Dropdown: FC<IDropdownProps> = ({isActive, children}) => {
    const [dropdownClass, setDropdownClass] = useState<string>(styles.dropdown)

    useEffect(() => {
        isActive ? setDropdownClass([styles.dropdown, styles.dropdown_active].join(' ')) : setDropdownClass(styles.dropdown)
    }, [isActive])
    return (
        <div className={dropdownClass}>
            {children}
        </div>
    );
};

export default Dropdown;
