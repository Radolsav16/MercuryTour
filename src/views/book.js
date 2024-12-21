import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import page from '../../node_modules/page/page.mjs'

const bookTemplate = () => html`
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Booking</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" @submit=${bookDestintion}>

    <div>
        <label for="firstName" class="block text-sm/6 font-medium text-gray-900">First Name</label>
        <div class="mt-2">
          <input type="text" name="firstName" id="firstName"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <label for="lastName" class="block text-sm/6 font-medium text-gray-900">Last Name</label>
        <div class="mt-2">
          <input type="text" name="lastName" id="lastName"  required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>


      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book</button>
      </div>
    </form>
  </div>
</div>

`;


export function bookingPageView(){
    render(bookTemplate(),main);
}


async function bookDestintion(e){
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());

  const firstName = formData["firstName"];
  const lastName = formData["lastName"];
  const email = formData["email"];
  const password = formData["password"];

  
  const url = 'https://mercury-tour-default-rtdb.europe-west1.firebasedatabase.app/Bookers.json';

  try{
  const res = await fetch(url,{
    method:'POST',
    body:JSON.stringify({email,firstName,lastName,password})
  });
  page.redirect('/');
}catch(err){
  console.log(err.message);
}
}