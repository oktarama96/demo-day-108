import { uniq } from "lodash";

const Uniq = () => {
  const numbers = [1, 2, 2, 3, 4, 4, 5];

  // Vanilla Javascript
  const uniqueNumbers_vanilla = [...new Set(numbers)];
  console.log("Vanilla Javascript", uniqueNumbers_vanilla);

  // Lodash
  const uniqueNumbers_lodash = uniq(numbers);
  console.log("Lodash", uniqueNumbers_lodash);

  return <></>;
};

export default Uniq;
