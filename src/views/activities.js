import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from '../elements/elements.js'
const activitiesTemplate = () => html`

<div class="activity-container">
  
  <!-- Beach Day Activity -->
  <div class="activity">
    <img src="assets/child-5489290_1280.jpg" alt="Beach Day">
    <div class="activity-info">
      <h3>Beach Day</h3>
      <p>Relax and unwind at the beach. Whether you're into surfing, lounging by the sea, or playing beach volleyball, there's something for everyone!</p>
    </div>
  </div>

  <!-- City Tour Activity -->
  <div class="activity">
    <img src="assets/travel-6493621_1280.jpg" alt="City Tour">
    <div class="activity-info">
      <h3>City Tour</h3>
      <p>Take a guided tour through the city’s landmarks. From historic sites to modern marvels, discover the culture and beauty of our vibrant city.</p>
    </div>
  </div>
  
  <!-- Hiking Activity -->
  <div class="activity">
    <img src="assets/man-1850181_1280.jpg" alt="Hiking">
    <div class="activity-info">
      <h3>Hiking</h3>
      <p>Embark on scenic hiking trails and experience nature at its finest. Enjoy breathtaking views and the refreshing outdoors.</p>
    </div>
  </div>
  
  <!-- Food Tasting Activity -->
  <div class="activity">
    <img src="assets/spaghetti-1932466_1280.jpg" alt="Food Tasting">
    <div class="activity-info">
      <h3>Food Tasting</h3>
      <p>Savor local delicacies and international flavors with a guided food-tasting experience. Discover a rich variety of tastes!</p>
    </div>
  </div>
  
  
</div>

`;


export function activitiesPageView(){
    render(activitiesTemplate(),main);
}