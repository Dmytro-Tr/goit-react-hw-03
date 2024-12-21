import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
