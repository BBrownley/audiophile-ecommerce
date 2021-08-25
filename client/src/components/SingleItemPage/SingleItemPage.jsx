import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  Container,
  GoBack,
  Main,
  ProductImg,
  ProductDetails,
  Features,
  IncludedItems
} from "./SingleItemPage.elements";

import apiService from "../../apiService";

export default function SingleItemPage() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const match = useRouteMatch("/item/:itemId");

  useEffect(() => {
    // Fetch product info on page render
    const fetchItem = async () => {
      const item = await apiService.getItemById(match.params.itemId);
      console.log(item);
      setItem(item);
    };

    fetchItem();
  }, []);

  return <Container>{loading && <p>Loading...</p>}</Container>;
}
