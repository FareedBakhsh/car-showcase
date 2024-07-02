"use client"
import { useState } from "react"
import {SearchManufacturer} from "./"  /// because it is exported from the index.ts this file of the component folder

const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");
    const handleSearch = () =>{}
  return (
    <form 
    className="searcgbar" onSubmit={handleSearch}
    >
        <div className="searchbar__item">
            <SearchManufacturer
             manufacturer={manufacturer}
             setManuFacturer={setManuFacturer} />
        </div>
    </form>
  )
}

export default SearchBar
