import { merge } from "lodash";

const Merge = () => {
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { age: 30, city: "New York" };

  // Vanilla Javascript
  const merged_vanilla = { ...obj1, ...obj2 };
  console.log("Vanilla Javascript", merged_vanilla);

  // Lodash
  const merged_lodash = merge(obj1, obj2);
  console.log("Lodash", merged_lodash);

  return <></>;
};

export default Merge;
