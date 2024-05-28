import { MyButton } from "@/shared"
import Headphones from '@assets/img/icons/headphones.svg'
import Arrow from '@assets/img/icons/arrow.svg'
import { FC } from "react"
import { IButton } from "@/shared/button/types"
import classes from './style.module.less'

type TButtonRadial = 'headphones' | 'arrow' | 'none'

export interface IButtonRadial {
	button: IButton,
	typeButton?:TButtonRadial,
}

export interface IButtonRadialProps {
	buttonRadialProps: IButtonRadial
}

const ButtonsRadial: FC<IButtonRadialProps> = (props) => {

	const {buttonStyle, padding} = props.buttonRadialProps.button
	const {typeButton} = props.buttonRadialProps

	const buttonStyleProps = {
		buttonStyle:{
			...buttonStyle,
			circle: true
		},
		padding: padding
	}
	return (
		<MyButton buttonProps={buttonStyleProps}>
			{
				typeButton === 'none' && ''
			}
			{				
				typeButton === 'arrow' && <Arrow className={classes.buttons}/>	
			}				
			{
				typeButton === 'headphones' &&	<Headphones className={classes.buttons}/>
			}
		</MyButton>
	)
}
export default ButtonsRadial