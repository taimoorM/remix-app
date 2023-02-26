function newJoke() {
  return (
    <div>
      <form action="">
        <fieldset className="flex flex-col">
          <legend>Add your funny a$$ joke:</legend>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="joke">Your joke:</label>
          <textarea name="joke" id="joke"></textarea>
          <button type="submit">Add</button>
        </fieldset>
      </form>
    </div>
  );
}
export default newJoke;
