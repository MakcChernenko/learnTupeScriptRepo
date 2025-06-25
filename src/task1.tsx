interface Person {
  name: string;
  age: number;
  location: {
    city: string;
    country: string;
  };
}

function Task1() {
  const person: Person = {
    name: "Максим",
    age: 23,
    location: {
      city: "Київ",
      country: "Україна",
    },
  };
  const {
    name,
    age,
    location: { city, country },
  } = person;
  console.log({ person });
  console.log(name, age, city, country);
  return <div></div>;
}

export default Task1;
