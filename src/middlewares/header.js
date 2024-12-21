import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { nav } from "../elements/elements.js";

const headerTemplate = () => html `
<div class="nav__header">
<div class="nav__logo">
  <a href="/"><img src="./assets/image0-removebg-preview.png" alt="mercury-tour-logo" class="img-logo"></a>
</div>
<div class="nav__menu__btn" id="menu-btn">
  <i class="ri-menu-line"></i>
</div>
</div>
<ul class="nav__links" id="nav-links">
<li><a href="/">Home</a></li>
<li><a href="/destinations">Destinations</a></li>
<li><a href="/activities">Activities</a></li>
<li><a href="/about">About us</a></li>
</ul>`

export function initHeader(ctx,next){
    render(headerTemplate(),nav)
    next()
}