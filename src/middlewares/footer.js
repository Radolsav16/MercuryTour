import { html , render  } from "../../node_modules/lit-html/lit-html.js";
import { footer } from "../elements/elements.js";

const footerTemplate = () => html`
  <div class="container">
    <div class="row">
      <div class="footer-col1">
        <h4>company</h4>
        <ul>
          <li><a href="#about">About us</a></li>
          <li><a href="index.html">Our services</a></li>
          <li><a href="index.html">Privacy</a></li>
          <li><a href="index.html">Affiliate program</a></li>
        </ul>
      </div>

      <div class="footer-col1">
        <h4>get help</h4>
        <ul>
          <li><a href="#musthave">Shipping</a></li>
          <li><a href="index.html">Return</a></li>
          <li><a href="#musthave">Order</a></li>
        </ul>
      </div>

      <div class="footer-col1">
        <h4>online shop</h4>
        <ul>
          <li><a href="#home">bag</a></li>
          <li><a href="#shop">Clothing</a></li>
          <li><a href="#musthave">All</a></li>
          <li><a href="#man">Men</a></li>
          <li><a href="#Woman">Women</a></li>
          <li><a href="#teenager-section">Teenage</a></li>
        </ul>
      </div>

      <div class="footer-col1">
        <h4>Contact us</h4>

        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a><i class="ri-mail-line"></i></a>
          <a><i class="ri-phone-line"></i></a>
        </div>
      </div>
    </div>
  </div>
`;


export function footerInit(ctx,next){
    render(footerTemplate(),footer)

    next();
}