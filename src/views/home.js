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
            <a href="/destinations/14">
            <img src="assets/las-vegas-1846684_1280.jpg" alt="destination" />
            <div class="destination__content">Las Vegas</div>
          </a>
          </div>
          <div class="destination__card">
            <a href="/destinations/10">
            <img src="assets/bali-8838762_1280.jpg" alt="destination" />
            <div class="destination__content">Bali</div></a>
          </div>
          <div class="destination__card">
          <a href="/destinations/6">
            <img src="assets/sagrada-familia-552084_1280.jpg" alt="destination" />
            <div class="destination__content">Barcelona</div>
          </a>
          </div>
        </div>
      </div>
    </section>

   

    <section class="section__container package__container" id="package">
      <h2 class="section__header">We Offer Best Services</h2>
      <p class="section__description">
        We will help you find the trip that's perfect for you!
      </p>
      <div class="package__grid">
        <div class="package__card">
          <img src="assets/eiffel-tower-975004_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Paris</h4>
            <p>
              Explore timeless elegance, enchanting streets, iconic Eiffel Tower, romantic Seine, world-class art, and couture.
            </p>
            <div>
            <a href="/book"><button class="btn">Book Now</button></a>
              
              <h3>$1700</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/thailand-1451382_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>Puket</h4>
            <p>
            Phuket, Thailand: turquoise waters, vibrant beaches, thrilling nightlife, cultural temples,and tropical serenity.
            </p>
            <div>
            <a href="/book"><button class="btn">Book Now</button></a>
              <h3>$2250</h3>
            </div>
          </div>
        </div>
        <div class="package__card">
          <img src="assets/sunset-3875817_1280.jpg" alt="package" />
          <div class="package__card__details">
            <h4>New York</h4>
            <p>
            New York, USA: towering skyline, vibrant streets, cultural melting pot, Broadway shows, iconic landmarks, endless energy.
            </p>
            <div>
              <a href="/book"><button class="btn">Book Now</button></a>
              <h3>$1550</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

`

export function homePageView(){
    render(homeTemplate(),main);
}