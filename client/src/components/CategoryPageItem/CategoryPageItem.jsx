import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ImageWrapper,
  ItemImage,
  ItemDetails
} from "./CategoryPageItem.elements";

export default function CategoryPageItem({ item, index }) {
  let mobileImgUrl, tabletImgUrl, desktopImgUrl;

  item.image.forEach(image => {
    // Each image's name ends with either -mobile, -tablet, or -desktop
    // Search through the three images and assign the appropriate url

    // e.g. image-product-mobile.jpg
    const size = image.name
      .split(".")[0]
      .split("-")
      .pop(); // mobile, tablet, or desktop

    console.log(image);

    switch (size) {
      case "mobile":
        mobileImgUrl = image.url;
        break;
      case "tablet":
        tabletImgUrl = image.url;
        break;
      case "desktop":
        desktopImgUrl = image.url;
        break;
      default:
        console.error(
          "Unable to parse image file name, or image was not found"
        );
        break;
    }
  });
  return (
    <Container index={index}>
      <ImageWrapper>
        <ItemImage
          mobileImgUrl={mobileImgUrl}
          tabletImgUrl={tabletImgUrl}
          desktopImgUrl={desktopImgUrl}
        ></ItemImage>
      </ImageWrapper>

      <ItemDetails index={index}>
        <div className="details-wrapper">
          {index === 0 && <p className="new-product">NEW PRODUCT</p>}
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <Link to={`/item/${item.id}`}>
            <button>SEE PRODUCT</button>
          </Link>
        </div>
      </ItemDetails>
    </Container>
  );
}
