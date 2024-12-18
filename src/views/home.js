import {html , render} from '../../node_modules/lit-html/lit-html.js'
import { main } from '../elements/elements.js'

const homeTemplate = () => html `
 <header class="header" id="home">
      <div class="section__container header__container">
        <h1>TRAVELLER<br /><span>FOR LIFE.</span></h1>
        <p>Live your best moments</p>
      </div>
</header>
<section class="section__container feature__container" id="service">
      <div class="feature__card">
        <img src="assets/santorini-5655299_1280.jpg" alt="feature" />
        <div>
          <h4>Best Destinations</h4>
          <p>Discover the most breathtaking places around the globe.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/price-tag-374404_1280.jpg" alt="feature" />
        <div>
          <h4>Best Price Guaranteed</h4>
          <p>Enjoy unbeatable prices on every trip you book.</p>
        </div>
      </div>
      <div class="feature__card">
        <img src="assets/icon-8794676_1280.jpg" alt="feature" />
        <div>
          <h4>Instant Booking</h4>
          <p>Secure your dream vacation with just a click.</p>
        </div>
      </div>
    </section>

    <section class="destination" id="destination">
      <div class="section__container destination__container">
        <h2 class="section__header">Top Destinations</h2>
        <p class="section__description">
          Find out what are the best destinations in the world
        </p>
        <div class="destination__grid">
          <div class="destination__card">
            <img src="assets/destination-1.jpg" alt="destination" />
            <div class="destination__content">Bhutan</div>
          </div>
          <div class="destination__card">
            <img src="assets/destination-2.jpg" alt="destination" />
            <div class="destination__content">Japan</div>
          </div>
          <div class="destination__card">
            <img src="assets/destination-3.jpg" alt="destination" />
            <div class="destination__content">Nepal</div>
          </div>
        </div>
      </div>
    </section>

   

    <section class="section__container package__container" id="package">
      <h2 class="section__header">Featured Packages</h2>
      <p class="section__description">
        We will help you find the trip that's perfect for you!
      </p>
      <div class="package__grid">
        <div class="package__card">
          <img src="assets/package-1.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Thailand City Tour</h4>
            <p>
              Explore the vibrant culture and stunning landscapes of Thailand's
              bustling cities.
            </p>
            <div>
              <button class="btn">Book Now</button>
              <h3>$130</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/package-2.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Laos City Tour</h4>
            <p>
              Immerse yourself in the rich culture and stunning landscapes of
              Laos.
            </p>
            <div>
              <button class="btn">Book Now</button>
              <h3>$150</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/package-3.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Singapore City Tour</h4>
            <p>
              Experience the vibrant blend of culture, cuisine, and cutting-edge
              architecture.
            </p>
            <div>
              <button class="btn">Book Now</button>
              <h3>$110</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

`

export function homePageView(){
    render(homeTemplate(),main);
}