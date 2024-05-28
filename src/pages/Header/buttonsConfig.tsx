import { ICalling } from "@/elements/calling"
import { IButton, IButtonProps, IButtonStyle } from "@/shared/button/types"
import { IButtonRadial } from "@/shared/buttonsRadial"

export const ButtonCalling:ICalling = {
	button: {
		buttonStyle: {
			borderShadow: true,
			borderLight: true,
			fill: true,
		}
	}
}
export const ButtonDown:IButtonRadial = {
	typeButton: 'none',
	button: {
		padding: 'calc((1vw + 1vh) / 4)',
		buttonStyle: {
			borderShadow: true,
			fill: true,
		}
	}	
}
export const ButtonSubscribe:IButton = {	
		buttonStyle:{
			borderShadow: true,
			fill: true,
			sqr: true,
		}
}