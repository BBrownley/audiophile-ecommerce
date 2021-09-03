import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import {
  Container,
  GoBack,
  Main,
  ProductImg,
  ProductDetails,
  Secondary,
  Features,
  IncludedItems,
  Quantity,
  Counter
} from "./SingleItemPage.elements";

import apiService from "../../apiService";

import parseImgFileName from "../../imgFileNameParser";

import marked from "marked";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

export default function SingleItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({
    name: null,
    image: [],
    features: "",
    included_items: {
      items: []
    }
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

  console.log(item.included_items.items);

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
            <Quantity>
              <Counter>
                <button
                  onClick={() =>
                    setQuantity(prevState => {
                      if (prevState <= 1) {
                        return 1;
                      }
                      return prevState - 1;
                    })
                  }
                >
                  -
                </button>
                <div className="amount">{quantity}</div>
                <button onClick={() => setQuantity(prevState => prevState + 1)}>
                  +
                </button>
              </Counter>
              <button>Add to cart</button>
            </Quantity>
          </ProductDetails>
        </div>
      </Main>
      <Secondary>
        <Features>
          <h3>Features</h3>
          <div className="item-features">{item.features}</div>
        </Features>
        <IncludedItems>
          <h3>In the box</h3>
          <ul>
            {item.included_items.items.map(item => {
              return (
                <li className="included-item">
                  <span className="included-item__count">{item.count}x </span>
                  <span className="included-item__name">{item.name}</span>
                </li>
              );
            })}
          </ul>
        </IncludedItems>
      </Secondary>
    </Container>
  );
}
