import s from "./searchbox.module.css";

const SearchBox = () => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        className={s.input}
        placeholder="What name do you want to find?"
      />
    </div>
  );
};

export default SearchBox;
