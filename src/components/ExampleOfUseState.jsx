// const ExampleOfUseState = ({ user, setUser }) => {
const ExampleOfUseState = ({ handleUser }) => {
  //   const handleUser = (e) => {
  //     // mistake 1
  //     // setUser((user.name = e.target.value));

  //     // mistake 2
  //     // setUser({ name: e.target.value });

  //     // updating object in correct way
  //     setUser({
  //       ...user, //using spreed operator copy all other object property
  //       name: e.target.value,
  //     });
  //   };
  return (
    <>
      <div className="mt-4 p-4 border border-sky-200 rounded-md bg-sky-50">
        <div className="flex flex-wrap space-x-3">
          <input
            type="text"
            name="name"
            onChange={handleUser}
            className="px-4 py-2 mb-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          />
          <input
            type="text"
            name="city"
            onChange={handleUser}
            className="px-4 py-2 mb-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          />
          <input
            type="number"
            name="age"
            onChange={handleUser}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          />
        </div>
      </div>
    </>
  );
};

export default ExampleOfUseState;
