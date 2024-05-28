import LogoPic from '@assets/img/Logo.svg'
import styles from './style.module.less'

const Logo = () => {
	return (
		<a href="#" id={styles.logo}>
			<div className={styles.logo}>				
					<LogoPic className={styles.logo_pic}></LogoPic>
					<div className={styles.logo_text}>
						<h1>VeraVla edu</h1>
						<p>Online education academy</p>	
					</div>
			</div>
		</a>
	)
}
export default Logo