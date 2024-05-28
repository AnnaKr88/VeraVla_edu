export function getClassesMass (mass: any, styles: any) {
	let keysMass = Object.keys(mass)
	let stylesEntries = Object.entries(styles)
	let massValue: Array<any> = [] 
	for(let i = 0; i<= keysMass.length-1; i++){
		stylesEntries.
			filter(e => keysMass[i] === e[0]).
			map(e => massValue.push(e[1]))
	}
	return massValue
}