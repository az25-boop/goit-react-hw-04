import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    const notify = () =>
      toast("Search field must be filled", {
        duration: 1500,
        style: {
          backgroundColor: "pink",
        },
      });
    event.preventDefault();
    const searchRequest = event.target.elements.search.value.trim();
    if (searchRequest !== "") {
      onSubmit(searchRequest);
    } else {
      notify();
    }
    event.target.reset();
  }
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          name="search"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
