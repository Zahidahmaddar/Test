import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";

function Home({ setLogin }) {
  const navigate = useNavigate();

  const [state, setState] = useState([]);

  const handleSubmit = () => {
    setState([{}, ...state]);
  };

  const handleDelete = (index) => {
    state.splice(index, 1);
    setState([...state]);
  };

  return (
    <div className="container">
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
      {state.map((v, i) => {
        return (
          <div className="">
            <input type="text" placeholder="" className="search-input" />
            <button className="add-button" onClick={handleSubmit}>
              Add
            </button>
            {i !== 0 ? (
              <button className="delete-button" onClick={() => handleDelete(i)}>
                Delete
              </button>
            ) : null}
          </div>
        );
      })}

      <div>
        <button
          className="log-out-button"
          onClick={() => {
            setLogin(false);
            localStorage.removeItem("user");
            navigate("/login-form");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;
