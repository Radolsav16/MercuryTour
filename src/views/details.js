import { data } from "../../data.js";
import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";


const detailsTemplate = (obj) => html`
   <div class="bg-white">
  <div class="pt-6">
    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
     <img src="${obj.imageUrl}" class="img-into-details"></img>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${obj.name}</h1>
      </div>

      <!-- Options -->
      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <p class="text-3xl tracking-tight text-gray-900">$${obj.price}</p>
          <a href ="/book"><button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Book Now</button></a>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div>
          <h3 class="sr-only">Description</h3>
          <div class="space-y-6">
            <p class="text-base text-gray-900">${obj.description}</p>
            <p>
Welcome to ${obj.name}, a place where culture, history, and nature come together. From iconic landmarks to stunning landscapes, there's something for every type of traveler.

Top Attractions
Don't miss the landmarks and enjoy the breathtaking views. Wander through neighborhoods or streets, and explore beaches, parks, or natural spots that showcase the region's beauty.

Local Culture & Cuisine
Indulge in the flavors of ${obj.name} with local dishes . Experience the blend of traditions, art, and vibrant local life.

Shopping & Entertainment
Whether you’re exploring markets or trendy districts, ${obj.name} offers fantastic shopping opportunities for unique, local finds.
Start your adventure in ${obj.name} — where unforgettable memories await!
            </p>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>

`;

export function detailsPage(ctx){
    const { id }  = ctx.params;
    const obj = data.find(val => val.id == id);

    render(detailsTemplate(obj),main);
    
    

}

