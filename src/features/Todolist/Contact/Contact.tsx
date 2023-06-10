import {ReactComponent as GitIcon} from '../../../assets/svg/github.svg'
import {ReactComponent as TelegramIcon} from '../../../assets/svg/telegram.svg'
import styles from './Contact.module.css';

export const Contact = () => {
    return (<div className={styles.socialNetworkBlock}>
            <a href={'https://github.com/pantaiz'}  target={'_blank'}>
                <div className={styles.iconContainer}>
                    <GitIcon className={styles.icon}/>
                </div>
            </a>
            <a href={'https://t.me/pantaiz'}  target={'_blank'}>
                <div className={styles.iconContainer}>
                    <TelegramIcon className={styles.icon}/>
                </div>
            </a>
        </div>
    )
}