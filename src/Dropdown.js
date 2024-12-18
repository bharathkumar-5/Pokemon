import React, { useState } from "react";
const Dropdown() => {
    const [selectOption, setSelectOption] = useState("")
    const handleChange = (event) => {
        useState(event.target.value)
    }
    return (
        <h1> Pokemon </h1>
        <label htmlFor="select">Choose the Option :</label>
        <select id="select">
            <option id="select" value="selectOption" onChange={handleChange}>Select</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select>
    );
}
export default Dropdown;