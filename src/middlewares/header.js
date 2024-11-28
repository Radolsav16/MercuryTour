import {html , render } from '../../node_modules/lit-html/lit-html.js'
import { header } from '../elements/elements.js'

const headerTemplate = () => html`
 <nav class="navbar">
        <div class="container">
            <a href="/" class="logo">Mercury Tour</a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>

            </ul>
            <a href="/book" class="cta">Book Now</a>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>
`;

export function  initHeader(ctx,next){
    render(headerTemplate(),header);
    next()
}