import "./App.css";

function App() {
  const handleSubmitForm = (event) => {
    event.preventDefault();

    console.log(34242);
  };

  return (
    <div className="App">
      <h1>File upload</h1>

      <form onSubmit={handleSubmitForm}>
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
