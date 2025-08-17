import ItemList from "./Itemlist";

const ResturantCategory = ({ category, showItems, setShowIndex }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-2xl p-4">
            {category?.title} ({category?.itemCards?.length})
          </span>
          <span className="p-4">{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {showItems && <ItemList items={category.itemCards} />}
      </div>
      {/* Body */}
    </div>
  );
};

export default ResturantCategory;
