import { groupBy } from "lodash";

const GroupBy = () => {
  const items = [
    { type: "fruit", name: "apple" },
    { type: "fruit", name: "banana" },
    { type: "vegetable", name: "carrot" },
  ];

  // Vanilla Javascript
  const grouped_vanilla = items.reduce((acc, item) => {
    (acc[item.type] = acc[item.type] || []).push(item);
    return acc;
  }, {});
  console.log("Vanilla Javascript", grouped_vanilla);

  // Lodash
  const grouped_lodash = groupBy(items, "type");
  console.log("Lodash", grouped_lodash);

  return <></>;
};

export default GroupBy;
