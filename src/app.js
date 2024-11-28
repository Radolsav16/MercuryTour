import page from '../node_modules/page/page.mjs';
import { initHeader } from './middlewares/header.js';
import { homePageView } from './views/home.js';


page(initHeader);
page('/',homePageView)

page.start();