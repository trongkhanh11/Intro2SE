import {RiMoonFill} from 'react-icons/ri';
import {BsFillSunFill} from 'react-icons/bs'
import styles from './SwitchStyles.module.scss';
import {useEffect, useRef, useState} from 'react'

function SwitchMode() {
    const refInput = useRef();
    const refCircle = useRef();
    const refToggle = useRef();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        refInput.current.checked = isDark;
    }, [isDark])

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked;
        setIsDark(refInput.current.checked);
    }

    useEffect(() => {
        const changeBackgroundButton = () => {
            if(isDark) {
                refCircle.current.style.background = '#222';
                refToggle.current.style.background = '#fff';
            }
            else {
                refCircle.current.style.background = '#fff';
                refToggle.current.style.background = 'hsl(208, 59%, 41%)';
            }
        }
        changeBackgroundButton();
        document.addEventListener('resize', changeBackgroundButton);
        return() => {
            document.removeEventListener('resize', changeBackgroundButton);
        }
    }, [isDark])

    return (
        <div className={styles.toggleButton} ref ={refToggle} onClick={handleToggle}>
            <input type='checkbox' className={styles.Input} ref={refInput} />
            <div className={styles.Icon}>
                {
                    (isDark) ? <RiMoonFill />: <BsFillSunFill />
                }
            </div>
            <div className={styles.Circle} ref={refCircle}></div>
        </div>
    )
}

export default SwitchMode;