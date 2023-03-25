import { SetStateAction, useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  return (
    <>
    <div>
        <input
        type="search"
        placeholder="Buscar por código de comercio o RUC"
        value={search}
        onChange={handleChange}
        className="form-control border rounded-pill"
      />

    </div>
      
      <p>{search}</p>
    </>
  );
};

export { SearchBar };
