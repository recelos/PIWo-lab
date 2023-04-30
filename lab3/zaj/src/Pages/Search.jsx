import { useState } from "react";

const Search = ({ toDoList }) => {
  const [query, setQuery] = useState("");

  const listOfTodosHtml = toDoList
    .filter(it => it.includes(query))
    .map(it => <p>{it}</p>);

  return <section>
    <input value={ query } onChange={ e => { setQuery(e.target.value) } }/>
    { listOfTodosHtml }
  </section>
}

export default Search;