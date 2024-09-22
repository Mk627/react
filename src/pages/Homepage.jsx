const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-sky-900">
      <div className="h-[400px] w-full max-w-[650px]  grid grid-cols-4 grid-rows-3 gap-2">

        <div className="bg-green-600 grid place-items-center row-span-3">
          <h1>bx1</h1>
        </div>

        <div className="bg-green-500 col-span-2 flex justify-center items-center">
          <h1>bx2</h1>
        </div>

        <div className="bg-red-600 flex justify-center items-center">
          <h1>bx3</h1>
        </div>

        <div className="bg-yellow-400 flex justify-center items-center">
          <h1>bx4</h1>
        </div>

        <div className="bg-red-600 flex justify-center items-center">
          <h1>bx5</h1>
        </div>

        <div className="bg-green-600 row-span-2 flex justify-center items-center">
          <h1>bx6</h1>
        </div>

        <div className="bg-red-700 flex justify-center items-center">
          <h1>bx7</h1>
        </div>

        <div className="bg-red-400 flex justify-center items-center">
          <h1>bx8</h1>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
