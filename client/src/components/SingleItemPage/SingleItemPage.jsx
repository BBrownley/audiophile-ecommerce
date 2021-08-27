import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import {
  Container,
  GoBack,
  Main,
  ProductImg,
  ProductDetails,
  Features,
  IncludedItems,
  Quantity
} from "./SingleItemPage.elements";

import apiService from "../../apiService";

import parseImgFileName from "../../imgFileNameParser";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

export default function SingleItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({
    name: null,
    image: []
  });

  const [mobileImgUrl, setMobileImgUrl] = useState(null);
  const [tabletImgUrl, setTabletImgUrl] = useState(null);
  const [desktopImgUrl, setDesktopImgUrl] = useState(null);

  const [quantity, setQuantity] = useState(1);

  const match = useRouteMatch("/item/:itemId");
  const history = useHistory();

  const width = useScreenWidth();

  const goBack = () => {
    history.push(`/${item.category.name}`);
  };

  useEffect(() => {
    // Fetch product info on page render
    const fetchItem = async () => {
      const item = await apiService.getItemById(match.params.itemId);
      setItem(item);
      setLoading(false);
    };

    fetchItem();
  }, []);

  useEffect(() => {
    if (item !== null) {
      const itemImages = item.image;
      const { mobileImgUrl, tabletImgUrl, desktopImgUrl } = parseImgFileName(
        itemImages
      );
      setMobileImgUrl(mobileImgUrl);
      setTabletImgUrl(tabletImgUrl);
      setDesktopImgUrl(desktopImgUrl);
    }
  }, [item]);
  return (
    <Container>
      <div className="header-bkg"></div>
      <GoBack onClick={goBack}>Go Back</GoBack>
      {loading && <p>Loading...</p>}
      <Main>
        <ProductImg
          src={(() => {
            if (width > 1100) {
              return `${baseUrl}${desktopImgUrl}`;
            } else if (width > 725) {
              return `${baseUrl}${tabletImgUrl}`;
            } else {
              return `${baseUrl}${mobileImgUrl}`;
            }
          })()}
          alt={item.name}
        />
        <div>
          <ProductDetails>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>
              <strong>${item.price}</strong>
            </p>
            <Quantity></Quantity>
          </ProductDetails>
        </div>
      </Main>
    </Container>
  );
}
