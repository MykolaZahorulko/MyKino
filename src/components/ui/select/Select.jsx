import React, {useState} from 'react'
import styles from './Select.module.scss'
import {RiArrowDownSLine} from 'react-icons/ri'

const Select = ({defaultValue, options, value, onChange}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`${styles.customSelect} ${isOpen ? styles.open : ''}`}>
            <div className={styles.customSelectHeader} onClick={() => setIsOpen(!isOpen)}>
                {options.find(option => option.value === value)?.name || defaultValue}
                <div className={`${styles.customSelectHeader_str} ${styles.img} ${isOpen ? styles._active : ''}`}>
                    <RiArrowDownSLine/>
                </div>
            </div>

            <div className={styles.customSelectOptions}>
                {options.map(option =>
                    <div
                        key={option.value}
                        className={`${styles.customSelectOption} ${option.value === value ? styles.selected : ''}`}
                        onClick={() => {
                            setIsOpen(false);
                            onChange(option.value);
                        }}
                    >
                        {option.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;
