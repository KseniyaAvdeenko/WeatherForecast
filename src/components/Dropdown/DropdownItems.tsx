import React, {FC} from 'react';
import styles from './Dropdown.module.sass'

interface IDropdownItemsProps {
    setIsDropdown: Function;
    setIsSettingModalActive: Function;
    userLang: string;
}

const DropdownItems: FC<IDropdownItemsProps> = ({setIsDropdown, setIsSettingModalActive, userLang}) => {
    const activateModal = ()=>{
        setIsDropdown(false);
        setIsSettingModalActive(true)
    }
    return (
        <div className={styles.dropdown__items}>
            <div className={styles.dropdown__item} onClick={activateModal}>{userLang === 'ru' ? 'Настройки' : 'Settings'}</div>
        </div>
    );
};

export default DropdownItems;
