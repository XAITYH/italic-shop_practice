import "../styles/styles.css";
import { hydrateRoot } from "preact/compat/client";

// (NEW Classes)
// new
// shopExampleImg
// inCardContainer
// quickView
// quickViewSpan
// shopExHeader
// shopExDescr
// authorAndBvlgariContainer
// newCost

// (HIIT Classes)
// trending
// hiitExImg
// hiitCardCont
// hiitInCardCont
// hiitQuickView
// hiitQuickViewSpan
// hiitExHeader
// hiitExDescr
// hiitAuthAndStella
// hiitStella
// hiitCostAndColors
// hiitCost
// hiitColors

const _new = "NEW";
const imgShopEx = "public/shopEx";
const vanCleef = "Van Cleef";
const _bvlgari = "BVLGARI";

const vilebrequin = "Vilebrequin";
const stella = "Stella McCartney";

export function Card(props) {
  return (
    <div class={props.class_card}>
      <div class={props.class_new}>{props.new}</div>
      <img class="shopExampleImg" src={props.img_src} alt="shop example" />
      <div class={props.class_inCardCont}>
        <div class={props.class_inInCardCont}>
          <button class={props.class_quickView}>
            <span class={props.class_quickViewSpan}>
              <img
                class="fullscreenQV"
                src="public/fullscreen.svg"
                alt="quick view"
              />{" "}
              Quick View
            </span>
          </button>
          <h3 class={props.class_headerClass}>{props.header}</h3>
          <p class={props.class_descrClass}>Same manufacturer as</p>
          <div class={props.class_authorAnd}>
            <p>{props.author}</p>
            <img class="dot" src="public/dot.svg" alt="" />
            <p class="bvlgari">{props.bvlgari}</p>
          </div>
          <div class="costAndColorsCont">
            <p class="cost">
              <img src="public/$.svg" alt="dollars" />
              {props.cost}
            </p>
            <p class="colors">{props.num_colors} COLORS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrateRoot(
    document.querySelector(".arrivals_card_preact"),
    <>
      <Card
        class_card="card"
        class_new="new"
        class_quickView="quickView"
        class_quickViewSpan="quickViewSpan"
        class_inCardCont="inCardContainer"
        class_inInCardCont="inInCardContainer"
        class_headerClass="shopExHeader"
        class_descrClass="shopExDescr"
        class_authorAnd="authorAndBvlgariContainer"
        new={_new}
        img_src={imgShopEx + "1.png"}
        header="14k Solid Gold Diamond Drop Chain Earrings"
        author={vanCleef}
        bvlgari={_bvlgari}
        cost="315"
        num_colors="2"
      />
      <Card
        class_card="card"
        class_new="new"
        class_imgShopEx="shopExampleImg"
        class_quickView="quickView"
        class_quickViewSpan="quickViewSpan"
        class_inCardCont="inCardContainer"
        class_inInCardCont="inInCardContainer"
        class_headerClass="shopExHeader"
        class_descrClass="shopExDescr"
        class_authorAnd="authorAndBvlgariContainer"
        new={_new}
        img_src={imgShopEx + "2.png"}
        header="14k Solid Gold Interlocking Necklace"
        author={vanCleef}
        bvlgari={_bvlgari}
        cost="350"
        num_colors="2"
      />
    </>
  );
  hydrateRoot(
    document.querySelector(".hiitCards"),
    <>
      <Card
        class_card="hiitCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={imgShopEx + "3.png"}
        header="Aura Contour Jacket"
        author={vilebrequin}
        bvlgari={stella}
        cost="58"
        num_colors="2"
      />
      <Card
        class_card="hiitCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={imgShopEx + "4.png"}
        header="Aura Active Sports Tank"
        author={vilebrequin}
        bvlgari={stella}
        cost="39"
        num_colors="1"
      />
      <Card
        class_card="hiitCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={imgShopEx + "5.png"}
        header="Aura Active Bodysuit"
        author={vilebrequin}
        bvlgari={stella}
        cost="65"
        num_colors="2"
      />
      <Card
        new="TRENDING"
        class_new="trending"
        class_card="hiitCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={imgShopEx + "6.png"}
        header="Aura Racerback Sports Bra"
        author={vilebrequin}
        bvlgari={stella}
        cost="25"
        num_colors="4"
      />
    </>
  );
}
