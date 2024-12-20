import s from "./contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={s.item}>
      <div className={s.text_box}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={s.button}>Delete</button>
    </li>
  );
};

export default Contact;
