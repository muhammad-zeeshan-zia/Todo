import React, { useState } from 'react';

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [dataarray, setDataArray] = useState([]);

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function handleAddButtonClick() {
    if (inputText !== "") {
      const newItem = {
        id: Date.now(),
        text: inputText
      };
      setDataArray([...dataarray, newItem]);
      setInputText("");
    }
  }

  function handleRemoveButtonClick(id) {
    const updatedItems = dataarray.filter((item) => item.id !== id);
    setDataArray(updatedItems);
  }

  return (
    <>
      <div className='container'>
        <div className='list-container'>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter a new item"
            maxLength={50}
          />
          <button onClick={handleAddButtonClick} className='add-btn'>Add</button>
        </div>
        <div className='list-items'>
          <ul>
            {dataarray.map((item) => (
              <li key={item.id} className="list-item">
                <span>{item.text}</span>
                <button onClick={() => handleRemoveButtonClick(item.id)} className="remove-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
