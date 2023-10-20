import Cars from "./components/Car";
import carsArray from "./data";

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {carsArray.map((car, index) => {
          return (
            <Cars
              key={index}
              title={car.title}
              text={car.text}
              number={car.number}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;