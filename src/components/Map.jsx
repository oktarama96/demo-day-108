import { map } from "lodash";

const Map = () => {
  const numbers = [1, 2, 3, 4];

  // Vanilla Javascript
  const doubled_vanilla = numbers.map((n) => n * 2);
  console.log("Vanilla Javascript", doubled_vanilla);

  // Lodash
  const doubled_lodash = map(numbers, (n) => n * 2);
  console.log("Lodash", doubled_lodash);

  return <></>;
};

export default Map;
