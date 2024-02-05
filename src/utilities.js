// part of typescript and is use to define parameters and props of components 

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
};

interface Children {
  name: string;
  age: number;
};

interface PersonArg {
  name: string;
  lastName: string;
  age?: number;
  hobbies: string[];
  address: Address;
  children?: Children[];
  sex: 'M' | 'F';
  graduate: boolean | undefined | null | string;
};

function citizen(person: PersonArg) {
  console.log(`Name: ${person.name}, Last name: ${person.lastName}`)
};

citizen({
  name: "Jorge",
  lastName: "Carmona",
  age: 57,
  hobbies: ['la playa', 'billar', 'rompecabezas'],
  address: {
    street: '',
    number: 0,
    city: '',
    state: '',
    country: ''
  },
  children: [
    {
      name: 'Jose',
      age: 10
    },
    {
      name: 'Maria',
      age: 3
    },
  ],
  sex: 'M',
  graduate: '',
});