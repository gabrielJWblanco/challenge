
import './App.css';
import TodoProvider from "./context/todolistcontext"
import Form from "./components/form";
import FormList from './components/formlist';

function App() {
  
  return (
    <div className="App">
      <TodoProvider>
        <Form />
        <FormList />
      </TodoProvider>
    </div>
  );
}

export default App;
