import { Header, Resons, ITPage, Important, AboutCourse, Course, Author, School, Vacancy, Footer, TestPage } from "@/pages"
import styles from './removeStyle.module.less'
export const App = () => {
	return(
		<div 
			className={styles.app}
			>
				{/* <TestPage></TestPage> */}
			<Header></Header>
			{/* <Resons></Resons>
			<ITPage></ITPage>
			<Important></Important>
			<AboutCourse></AboutCourse>
			<Course></Course>
			<Author></Author>
			<School></School>
			<Vacancy></Vacancy>
			<Footer></Footer> */}
		</div>
	)
}