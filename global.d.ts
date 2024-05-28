declare module '*.module.css'{
	interface IClassName{
		[className:string]:string;
	}
	const classNames:IClassName
	export = classNames
}
declare module '*.module.less'{
	interface IClassName{
		[className:string]:string;
	}
	const classNames:IClassName
	export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module "*.svg" {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __PLATFORM__: 'mobile' | 'desktop'
declare const __ENV__: 'development' | 'production'