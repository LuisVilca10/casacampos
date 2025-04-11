function App() {

  return (
    <>
      <div className="relative bg-cover bg-center" style={{
        backgroundImage: "url('https://a0.muscache.com/pictures/8f09d56f-f521-40b4-b1bd-2cfef0d8b8ed.jpg')",
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Casa de Campo</h1>
          <p className="text-xl">¡Separa tu fecha hoy mismo!</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App