import { People, PersonListProps } from "../definitions/people";
import Person from "./Person";

const PersonList = ({ people }: PersonListProps) => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default PersonList;
