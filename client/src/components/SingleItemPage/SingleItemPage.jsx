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

import Gallery from "../Gallery/Gallery";
import Skeleton from "react-loading-skeleton";
import SuggestedItems from "../SuggestedItems/SuggestedItems";

const baseUrl = process.env.BASE_URL || "http://localhost:1337";

export default function SingleItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({
    name: null,
    category: null,
    id: null,
    image: [],
    features: "",
    included_items: {
      items: []
    },
    gallery: []
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
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

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
            <h2>{item.name || <Skeleton />}</h2>
            <p>{item.description || <Skeleton count={3} />}</p>
            <p>
              <strong>${item.price || <Skeleton width={100} />}</strong>
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
          <div className="item-features">
            {item.features || <Skeleton count={10} />}
          </div>
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
      <Gallery images={item.gallery} />
      {loading === false && <SuggestedItems category={item.category} itemId={item.id} />}
    </Container>
  );
}
