import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map((item) => {
          return (
            <Contact
              key={item.id}
              {...item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
