import axios from "axios";

import { useState } from "react";
import "./App.css";

function App() {
  const [path, setPath] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    //const avatar = formData.get("avatar")

    axios
      .post("http://localhost:3001/user/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        setPath(response.data);
      });
  };

  return (
    <div className="App">
      <h1>File upload</h1>

      <img src={`http://localhost:3001/${path}`} />

      <form onSubmit={handleSubmitForm} encType="multipart/form-data">
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          E-mail
          <input type="email" name="email" />
        </label>
        <label>
          Upload your avatar
          <input type="file" name="avatar" accept="image/*" />
        </label>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default App;
