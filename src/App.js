import React, { useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  //
  const inputRef = useRef();

  const filteredItem = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLocaleLowerCase());
    });
  }, [items, query]);
  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setItems((pre) => [...pre, value]);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <div>
        search:
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <br />
        <form onSubmit={onSubmit}>
          New Item:
          <input type="text" ref={inputRef} />
          <br />
          <button type="submit">add</button>
        </form>
        <div>
          Items :
          {filteredItem.map((item) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
