import { FC, PropsWithChildren, useEffect, useState } from "react"
import styles from './style.module.less'
import {IButton, IButtonProps} from './types'
import { getClassesMass } from "@app/js/functions"


const MyButton:FC<PropsWithChildren<IButtonProps>> = (props) => {
	const {buttonStyle, padding, className} = props.buttonProps
	let classesMass:Array<string> = []
	const [addClass, setAddClass] = useState('')
	
	useEffect(() => {
		if(buttonStyle){
			classesMass = getClassesMass(buttonStyle, styles)
			setAddClass(classesMass.join(' '))
		}
	}, [])
	
	return (
		<button 
			style={{padding: padding}}
			className={`
									${styles.button}
									${addClass} 
									${className ? className : ''}
								`}
		>
			{props.children}
		</button>
	)
}
export default MyButton