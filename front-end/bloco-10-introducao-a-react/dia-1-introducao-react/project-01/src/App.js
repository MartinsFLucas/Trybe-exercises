import './App.css';

const Task = (value) => {
  return (
      <li>{value}</li>
  );
  }

const companiesArray = ['Google', 'Amazon', 'Facebook', 'Microsoft'];

const companiesList = (array) => array.map((element) => Task(element));

function App() {
  return (
    companiesList(companiesArray)
  );
}

export default App;
