import { render } from "preact";
import "../styles/styles.css";

export function Card(props) {
  return (
    <div class="card">
      <div class="new">NEW</div>
      <img class="shopExampleImg" src="" alt="shop example" />
      <button class="quickView">
        <span class="quickViewSpan">
          <img src="public/fullscreen.svg" alt="quick view" /> Quick View
        </span>
      </button>
      <h3 class="shopExHeader"></h3>
      <p class="shopExDescr"></p>
      <p class="author"></p>
      <img src="public/dot.svg" alt="" />
      <p class="bvlgari"></p>
      <p class="cost"></p>
    </div>
  );
}

render(<Card />, document.querySelector(".arrivals_card_preact"));
