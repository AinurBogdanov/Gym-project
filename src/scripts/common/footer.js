const mainPath = '/src/pages/'
const footerHTML = `
  <footer class="footer">
		<div class="container">
			<div class="footer__inner">
				<h2><a href="index.php">Adrenalin</a></h2>

				<div class="nav-footer">
					<nav class="nav nav-footer__inner">
          <a href="../../index.html" class="nav__link">Главная</a>
          <a href="./schedule.html" class="nav__link">Расписание</a>
          <a href="./prices.html" class="nav__link">Цены</a>
					</nav>
					<nav class="nav nav-footer__inner">
          <a href="./faq.html" class="nav__link">Ответы на вопросы</a>
          <a href="./signUp.html" class="nav__link">Регестрация</a>
          <a href="./signIn.html" class="nav__link">Вход</a>

					</nav>
          <nav class="nav nav-footer__inner">
            <span>Контакты:</span>
            <span>Столик регестрации: +7 888 777 66 55</span>
            <span>Директор: +7 925 277 46 22</span>
					</nav>
				</div>
				
				<div class="work-time">
					<h2>Режим работы</h2>
					<span>Пн-Пт: 7:00-23:00</span>
					<span>Сб-Вс: 9:00-22:00</span>
				</div>
			</div>
		</div>
	</footer>
`

export function renderFooter() {
  document.querySelector('.main').insertAdjacentHTML('beforeend',footerHTML)
}