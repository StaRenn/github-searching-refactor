import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import "./style.sass";

export const HeaderSearchForm = (props) => {

    const history = useHistory()
    const {id} = props
    const [searchInput, setSearchInput] = useState("");

    const handleSearchChange = (ev) => {
        setSearchInput(ev.target.value)
    }

    const handleSearchSubmit = () => {
        if (searchInput === id) return null
        history.push(`/search/${searchInput}/1`)
    }

    return(
        <header className="header">
            <div className="search-form">
                <input
                    onKeyDown={(ev) => ev.key === "Enter" && handleSearchSubmit()}
                    className="search-form__input"
                    type="search"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    value={searchInput}
                />
                <button className={"search-form__submit"} onClick={handleSearchSubmit}/>
            </div>
        </header>
    )

}