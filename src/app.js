import page from "../node_modules/page/page.mjs";
import { initFooter } from "./middlewares/footer.js";
import { homePageView } from "./views/home.js";

page(initFooter)
page('/',homePageView)

page.start();