import { Logo, PhoneNumber, Calling } from '@/elements'
import Diplom from '@assets/img/icons/diplom.svg'
import styles from './style.module.less'
import { Arch, ButtonsRadial, MyButton } from '@/shared'
import { ButtonCalling, ButtonDown, ButtonSubscribe } from './buttonsConfig'

const Header = () => {

	return (
		<div id={styles.header} className="bgcolor-light line-light">
			{/* <div className="side header__side">
				<Calling callingProps={ButtonCalling}></Calling>
			</div> */}
			<div className={styles.top}>
				<div className="logo top_logo">
					<Logo></Logo>
				</div>
				<PhoneNumber class="top_phone"></PhoneNumber>
			</div>
			<div className={styles.content}>
				<div className={styles.content_conteiner}>
					<div className={styles.content_text}>
						<p>
							Добро пожаловать в онлайн школу 
						</p>
						<h1>VeraVla&nbsp;edu!</h1>
						<p>
							Переквалифицируйся в разработчика искусственного интеллекта и получи высокооплачиваемую работу    
						</p>
					</div>
					<div className={styles.content_block}>
						<Arch className={styles.block_arch}>
							<Diplom className={styles.block_pic}></Diplom>
						</Arch>
						<div className={styles.block_text}>
							<h5>Мы обучаем с гарантией!</h5>
							<p>Первый месяц действует гарантия 100% возврата денег, если тебя не устроят наши курсы</p>
						</div>
					</div>
					<div className={styles.content_buttons}>
						<div className={styles.buttons_calling}>
							<MyButton buttonProps={ButtonSubscribe}>
								<p>
									Записаться на ознакомительный вебинар
								</p>
							</MyButton>
						</div>
						<div className={styles.buttons_down}>							
							<div className={styles.button_down}>
								<ButtonsRadial buttonRadialProps={ButtonDown} ></ButtonsRadial>
							</div>
							<p>Листайте вниз</p>
							</div>						
					</div>
				</div>

			</div>
		</div>
	)
}
export default Header