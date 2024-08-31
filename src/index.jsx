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
const imgShopEx = "shopEx";
const vanCleef = "Van Cleef";
const _bvlgari = "BVLGARI";

const vilebrequin = "Vilebrequin";
const stella = "Stella McCartney";

const catalogImg = "catalogImg";
const imageEx = "imageEx";
const trendImg = "trendImg";
const valueImg = "valueImg";

export function Card(props) {
  return (
    <div class={props.class_card}>
      <div class={props.class_new}>{props.new}</div>
      <img class="shopExampleImg" src={props.img_src} alt="shop example" />
      <div class={props.class_inCardCont}>
        <div class={props.class_inInCardCont}>
          <button class={props.class_quickView}>
            <span class={props.class_quickViewSpan}>
              <img class="fullscreenQV" src="fullscreen.svg" alt="quick view" />{" "}
              Quick View
            </span>
          </button>
          <h3 class={props.class_headerClass}>{props.header}</h3>
          <p class={props.class_descrClass}>Same manufacturer as</p>
          <div class={props.class_authorAnd}>
            <p>{props.author}</p>
            <img class="dot" src="dot.svg" alt="" />
            <p class="bvlgari">{props.bvlgari}</p>
          </div>
          <div class="costAndColorsCont">
            <p class="cost">
              <img src="$.svg" alt="dollars" />
              {props.cost}
            </p>
            <p class="colors">{props.num_colors} COLORS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Catalog(props) {
  return (
    <div class="catalogExample">
      <img src={props.img_src} alt="" />
      <p class="catalogDescr">{props.imgDescr}</p>
    </div>
  );
}

export function ImageExamples(props) {
  return (
    <div className="imageExCont">
      <img class="imageEx" src={props.img_src} alt="" />
      <h2 class="imageHeading">{props.img_heading}</h2>
      <p className="imageDescr">{props.img_descr}</p>
    </div>
  );
}

export function ValueCard(props) {
  return (
    <div class="valueCard">
      <h2 class="valueCardHeader">{props.header}</h2>
      <p class="valueCardDescr">{props.descr}</p>
      <img class="valueCardImg" src={props.img_src} alt="" />
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrateRoot(
    document.querySelector(".skincarePhotosHolder"),
    <>
      <ImageExamples
        img_src="skincareSaviours.png"
        img_heading="Skincare Saviors"
        img_descr="Upgrade your routine with prestige formulas for every skin type."
      />
      <ImageExamples
        img_src="makeYrslfHome.png"
        img_heading="Make Yourself at Home"
        img_descr="Transform your space with plush bath towels and cozy robes to rival any resort."
      />
    </>
  );
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
  hydrateRoot(
    document.querySelector(".catalog"),
    <>
      <Catalog img_src={catalogImg + "1.png"} imgDescr="Women's Clothing" />
      <Catalog img_src={catalogImg + "2.png"} imgDescr="Bath" />
      <Catalog img_src={catalogImg + "3.png"} imgDescr="Kitchen" />
      <Catalog img_src={catalogImg + "4.png"} imgDescr="Bedding" />
      <Catalog img_src={catalogImg + "5.png"} imgDescr="Men's Clothing" />
      <Catalog img_src={catalogImg + "6.png"} imgDescr="Jewelry" />
      <Catalog img_src={catalogImg + "7.png"} imgDescr="Skincare" />
    </>
  );
  hydrateRoot(
    document.querySelector(".imagesPreact"),
    <>
      <ImageExamples
        img_src={imageEx + "3.png"}
        img_heading="Cookware to Count On"
        img_descr="Upgrade your meal prep and stick to your resolutions with Italic cookware."
      />
      <ImageExamples
        img_src={imageEx + "4.png"}
        img_heading="Indulgent Bedding"
        img_descr="From breathable flax linen to silky luxe sateen, cozy up to bedding essentials for everyone."
      />
    </>
  );
  hydrateRoot(
    document.querySelector(".trendItemsPreact"),
    <>
      <Card
        new="TRENDING"
        class_new="trending"
        class_card="trendCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={trendImg + "1.png"}
        header="Rafa Backpack"
        author="Away"
        bvlgari="Boss"
        cost="85"
        num_colors="3"
      />
      <Card
        new="ATELIER"
        class_new="trending"
        class_card="trendCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={trendImg + "2.png"}
        header="Cleo Oversized Cashmere Scarf"
        author="Burberry"
        bvlgari="Max Mara"
        cost="130"
        num_colors="3"
      />
      <Card
        class_card="trendCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={trendImg + "3.png"}
        header="Aluminum Carry-On Suitcase"
        author="Away"
        bvlgari="Samsonite"
        cost="248"
        num_colors="2"
      />
      <Card
        new="ATELIER"
        class_new="trending"
        class_card="trendCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={trendImg + "4.png"}
        header="Amara Cashmere Wrap"
        author="Burberry"
        bvlgari="Max Mara"
        cost="135"
        num_colors="2"
      />
      <Card
        new="ATELIER"
        class_new="trending"
        class_card="trendCard"
        class_quickView="hiitQuickView"
        class_quickViewSpan="hiitQuickViewSpan"
        class_inCardCont="hiitCardCont"
        class_inInCardCont="hiitInCardCont"
        class_headerClass="hiitExHeader"
        class_descrClass="hiitExDescr"
        class_authorAnd="hiitAuthAndStella"
        img_src={trendImg + "5.png"}
        header="Priscilla Silk Halter Mini Dress"
        author="Stella McCartney"
        bvlgari="Max Mara"
        cost="125"
        num_colors="3"
      />
    </>
  );
  hydrateRoot(
    document.querySelector(".valueCards"),
    <>
      <ValueCard
        header="Atelier-Grade Materials"
        descr="Fine, rare materials for optimal performance and durability."
        img_src={valueImg + "1.png"}
      />
      <ValueCard
        header="Radical Value"
        descr="We believe luxury is defined by the quality of product, not by the price tag."
        img_src={valueImg + "2.png"}
      />
      <ValueCard
        header="World-Class Craftsmanship"
        descr="The world's best manufacturers, the same as top luxury brands."
        img_src={valueImg + "3.png"}
      />
    </>
  );
}
