import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { footer } from "../elements/elements.js";

const  footerTemplate = () => html`
  <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="/"><img src="/assets/image0-removebg-preview.png" alt="mercury-tour-logo" class="img-logo"></a>
          </div>
          <p>
            Explore the world's best destinations, enjoy unbeatable prices, and
            book your perfect getaway instantly.
          </p>
          <h4>CONNECT WITH US</h4>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-mail-fill"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>QUICK LINKS</h4>
          <ul class="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/destinations">Destinations</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>DESTINATIONS</h4>
          <ul class="footer__links">
            <li><a href="/destinations">Asia</a></li>
            <li><a href="/destinations">Europe</a></li>
            <li><a href="/destinations">North America</a></li>
            <li><a href="/destinations">South America</a></li>
            <li><a href="/destinations">Africa</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>OUR ACTIVITIES</h4>
          <ul class="footer__links">
            <li><a href="/activities">Beach Day</a></li>
            <li><a href="/activities">City Tour</a></li>
            <li><a href="/activities">Hiking</a></li>
            <li><a href="/activities">Food tasting</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bar">
      </div>
`

export function initFooter(ctx,next){
    render(footerTemplate(),footer)
    next();
}