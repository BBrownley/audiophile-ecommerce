import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, CategoryHeader } from "./CategoryPage.elements";

import apiService from "../../apiService";

import ScaleLoader from "react-spinners/ScaleLoader";

export default function CategoryPage() {
  const location = useLocation();

  const [category, setCategory] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const updateItems = async category => {
      console.log("fetching data...");
      setItems([]);
      setLoading(true);
      await timeout(1000);
      const items = await apiService.getAllFromCategory(category);
      setLoading(false);
      setItems(items);
    };

    // When category page renders, set it to current category
    // based on pathname
    setCategory(() => {
      const category = location.pathname.substring(1);
      // Fetch category items from server
      updateItems(category);
      return category;
    });
  }, [location.pathname]);

  return (
    <Container>
      <CategoryHeader>
        <h2>{category}</h2>
      </CategoryHeader>
      <div>
        {loading && <ScaleLoader />}
        {items.map(item => {
          return <div>{item.name}</div>;
        })}
      </div>
    </Container>
  );
}
