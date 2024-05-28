import Phone from '@assets/img/icons/phone.svg'
import { FC } from 'react'
import styles from './style.module.less'

interface IPhoneNumber {
	class?: string
}

const PhoneNumber:FC<IPhoneNumber> = (props) => {
	return (
		<div className={`${styles.phone} ${props.class}`}>
					<Phone className={styles.phoneIcon}></Phone>
					<p>+ 82 (10) 7526-9192</p>
		</div>
	)
}
export default PhoneNumber