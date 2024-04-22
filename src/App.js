import Counter from "../src/components/Counter";
import TaskList from "./components/TaskList";
import UserCreationForm from "./components/UserCreationForm";

function App(props) {
  
  return (
    <>
      <TaskList />
      <UserCreationForm />
      <Counter/>
    </>
  );
}

export default App;