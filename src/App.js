import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Counter from './components/counter';
import Ships from './components/Ships';
import Todo from './components/Todo';
import Menu from './components/Menu';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/counter' element={<Counter />} />
          <Route exact path='/ships' element={<Ships />} />
          <Route exact path='/todo' element={<Todo />} />
          <Route exact path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
