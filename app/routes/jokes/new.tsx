function newJoke() {
  return (
    <div>
      <form action="">
        <fieldset className="flex flex-col space-y-4">
          <legend>Add your funny a$$ joke:</legend>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input type="text" name="name" id="name" />
          <label
            htmlFor="joke"
            className="block text-sm font-medium text-gray-700"
          >
            Your joke:
          </label>
          <textarea name="joke" id="joke"></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </fieldset>
      </form>
    </div>
  );
}
export default newJoke;
