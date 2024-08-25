import "../styles/styles.css";
import { hydrateRoot } from "preact/compat/client";

const _new = "NEW";
const imgShopEx = "public/shopEx";
const vanCleef = "Van Cleef";
const _bvlgari = "BVLGARI";

export function Card(props) {
  return (
    <div class="card">
      <div class="new">{props.new}</div>
      <img class="shopExampleImg" src={props.img_src} alt="shop example" />
      <button class="quickView">
        <span class="quickViewSpan">
          <img src="public/fullscreen.svg" alt="quick view" /> Quick View
        </span>
      </button>
      <h3 class="shopExHeader">{props.header}</h3>
      <p class="shopExDescr">Same manufacturer as</p>
      <p class="author">{props.author}</p>
      <img src="public/dot.svg" alt="" />
      <p class="bvlgari">{props.bvlgari}</p>
      <p class="cost">
        <img src="public/$.svg" alt="dollars" />
        {props.cost}
      </p>
    </div>
  );
}

// render(<Card new={_new} img_src={imgShopEx + 1} header="14k Solid Gold Diamond Drop Chain Earrings" author={vanCleef} bvlgari={_bvlgari} cost="315"/>, document.getElementById("arrivals_card_preact"));
if (typeof window !== "undefined") {
  hydrateRoot(
    document.querySelector(".arrivals_card_preact"),
    <Card
      new={_new}
      img_src={imgShopEx + "1.png"}
      header="14k Solid Gold Diamond Drop Chain Earrings"
      author={vanCleef}
      bvlgari={_bvlgari}
      cost="315"
    />
  );
}
