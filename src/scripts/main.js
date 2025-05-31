import { renderFooter } from "./common/footer";

const mainPage = document.querySelector('html.main')

function renderPage() {
  console.log('script works')
  if (!mainPage) {
    renderFooter();
  }
}

renderPage();