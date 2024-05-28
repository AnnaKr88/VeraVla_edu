import { MyButton } from "@/shared"
import { IButtonStyle } from "@/shared/button/types"

const index = () => {
	const ButtonStyleSqr:IButtonStyle = {
		borderShadow: true,
		fill: true,
		sqr: true
	}
	return (
		<div>
			<MyButton 
			design={ButtonStyleSqr}
			>
				Button
			</MyButton>
		</div>
	)
}
export default index