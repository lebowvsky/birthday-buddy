export interface People {
  id: number;
  name: string;
  age: number;
  image: string;
}

export interface PersonListProps {
  people: People[];
}
