type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: {
    lat: number;
    lng: number;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: Address;
  company: Company;
};
