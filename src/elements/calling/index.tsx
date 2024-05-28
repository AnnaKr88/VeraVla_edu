import { ButtonsRadial } from "@/shared"
import { IButton} from "@/shared/button/types"
import { FC } from "react"
import styles from './style.module.less'
import { IButtonRadial } from "@/shared/buttonsRadial"

export interface ICalling {
	button: IButton,
	className?: string
}

export interface ICallingProps {
	callingProps: ICalling
}

const Calling:FC<ICallingProps> = (props) => {
	const {button, className} = props.callingProps

	const buttonCallingProps:IButtonRadial = {
		button: button,
		typeButton: 'headphones'
	}

	return (
		<div className={`${styles.calling} ${className}`}>
					<div className="icon-circle calling_icon-circle">
						<ButtonsRadial buttonRadialProps={buttonCallingProps}></ButtonsRadial>
					</div>
					<div className={styles.text}>
						<h4>Бесплатная консультация</h4>
					</div>
		</div>
	)
}
export default Calling