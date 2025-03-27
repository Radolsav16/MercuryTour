import page from "../node_modules/page/page.mjs";
import { initFooter,scroll } from "./middlewares/footer.js";
import { initHeader } from "./middlewares/header.js";
import { aboutPageView } from "./views/about.js";
import { activitiesPageView } from "./views/activities.js";
import { bookingPageView } from "./views/book.js";
import { descriptionPage } from "./views/destinations.js";
import { detailsPage } from "./views/details.js";
import { homePageView } from "./views/home.js";

page(initHeader)
page(initFooter)
page(scroll)
page('/',homePageView)
page('/about',aboutPageView);
page('/book',bookingPageView)
page('/destinations',descriptionPage);
page('/destinations/:id',detailsPage)
page('/activities',activitiesPageView)

page.start();
