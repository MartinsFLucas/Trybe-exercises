const Task = (value) => {
  return (
      <li>{value}</li>
  );
  }

const compromissos = ['Trabalho', 'Faculdade', 'Academia', 'Reunião'];

function App() {
  return (
    compromissos.map((tarefa) => Task(tarefa))
  )
}

export default App;
