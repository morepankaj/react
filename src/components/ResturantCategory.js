import { useState } from "react";
import ItemList from "./Itemlist";

const ResturantCategory = ({ category }) => {
  const [showitems, setShowItems] = useState(false);
  console.log("ResturantCategory", category);

  const handleClick = () => {
    console.log("Category clicked:", category.title);
    setShowItems(!showitems);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-2xl p-4">
            {category?.title} ({category?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {/*console.log(category.itemCards, "ItemCards")*/}
        {showitems && (
          <ItemList key={category?.categoryId} items={category.itemCards} />
        )}
      </div>
      {/* Body */}
    </div>
  );
};

export default ResturantCategory;
