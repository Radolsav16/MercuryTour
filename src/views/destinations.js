import { data } from "../data.js";
import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";

const destinationTemplate = (obj) => html `
<div class="group relative">
  <img src="${obj.imageUrl}" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="/destinations/${obj.id}">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${obj.name}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">${obj.description}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$${obj.price}</p>
  </div>
</div>
`;





const destinationsTemplate = (data) => html `
<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Destinations</h2>

    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        ${data.map(obj => destinationTemplate(obj))}
      </div>
    </div>
  </div>
</div>
`;


export function descriptionPage(){
    render(destinationsTemplate(data),main);
}



function showPersonal(id){
    console.log(id);
}