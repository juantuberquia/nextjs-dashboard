import Header from "./components/Header";
import ListPatients from "./components/ListPatients";
import Form from "./components/Form";
function App() {
  return (
    <div className="container mx-auto ">
      <Header />
      <div className="md:flex mt-10">
        <Form />
        <ListPatients />
      </div>
    </div>
  );
}

export default App;
