import { ButtonHTMLAttributes } from "react"

export type TButton = ButtonHTMLAttributes<HTMLButtonElement>

export interface IButtonStyle {
	sqr?: boolean,
	circle?: boolean,
	border?: boolean,
	borderLight?: boolean,
	borderShadow?: boolean,
	fill?: boolean,
}

export interface IButton extends TButton {
	buttonStyle?: IButtonStyle,
	className?: string,
	padding?: string,
}

export interface IButtonProps {
	buttonProps: IButton
}