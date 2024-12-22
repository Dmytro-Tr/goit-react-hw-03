import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
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
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
