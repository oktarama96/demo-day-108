import { find } from "lodash";

const Find = () => {
  const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 22 },
  ];

  // Vanilla Javascript
  const user_vanilla = users.find((user) => user.age === 30);
  console.log("Vanilla Javascript", user_vanilla);

  // Lodash
  const user_lodash = find(users, { age: 30 });
  console.log("Lodash", user_lodash);

  return <></>;
};

export default Find;
