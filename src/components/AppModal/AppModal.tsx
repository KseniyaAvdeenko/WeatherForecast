import React, {useEffect, useState} from 'react';
import modalStyle from './Modal.module.sass'

interface IAppModalProps {
    isActive: boolean;
    children: React.ReactNode;
    setIsSettingModalActive: Function
}

const AppModal:React.FC<IAppModalProps>= ({isActive, children, setIsSettingModalActive}) => {
    const [modalClass,setModalClass] = useState<string>(modalStyle.modal)
    useEffect(()=>{
        isActive ? setModalClass([modalStyle.modal, modalStyle.modal_active].join(' ')) : setModalClass(modalStyle.modal)
    }, [isActive])
    return (
        <div className={modalClass} onClick={()=>setIsSettingModalActive(false)}>
            {children}
        </div>
    );
};

export default AppModal;
