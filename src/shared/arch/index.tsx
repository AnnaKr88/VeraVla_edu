import { FC, PropsWithChildren } from 'react'
import styles from './style.module.less'

interface IArch{
	className?:string
}

const Arch:FC<PropsWithChildren<IArch>> = (props) => {
	return (
		<div className={`${styles.arch} ${props.className}`}>

			{props.children}

		</div>
	)
}
export default Arch