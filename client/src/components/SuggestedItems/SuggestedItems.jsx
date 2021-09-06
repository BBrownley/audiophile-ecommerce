import React, { useState, useEffect } from "react";

import apiService from "../../apiService";

/*

- Gets current category of the item the parent (SingleItemPage) belongs to and curr item ID
- Pass in category, id to server
- Server will find any other items belonging to the same category and add them into an array
- Server will return 3 items w/ name/img/itemId, with items in same category taking priority
- Any leftover spots will be filled with items from other categories
- Render them into the component

*/

export default function SuggestedItems(props) {
  const [categoryName, setCategoryName] = useState(props.category.name);
  const [itemId, setItemId] = useState(props.itemId);
  const [suggested, setSuggested] = useState(null);

  useEffect(() => {
    const getSuggestedItems = async () => {
      const data = await apiService.getSuggestedItems(categoryName, itemId);
      setSuggested(data);
    };
    getSuggestedItems();
  }, []);

  return <div></div>;
}
