import page from '../node_modules/page/page.mjs';
import { footerInit } from './middlewares/footer.js';
import { initHeader } from './middlewares/header.js';
import { homePageView } from './views/home.js';
import { loginPageView } from './views/login.js';

page(footerInit)
page(initHeader);
page('/',homePageView)
page('/login',loginPageView)

page.start();