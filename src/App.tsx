

function App() {

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-10 gap-3 md:gap-5 m-2 md:m-5">
        {
          Array.from({ length: 1000 }).map((item, i) => (
            <div key={i} className="border border-gray-600 w-full h-24 text-white flex justify-center items-center font-bold text-xl bg-slate-900">
              <h1> {i + 1}</h1>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
