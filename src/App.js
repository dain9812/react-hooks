import useClick from "./hooks/useClick";

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Start</h1>
    </div>
  );
};

export default App;
