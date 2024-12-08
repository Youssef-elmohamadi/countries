import Countries from './components/Countries';
import Details from './components/Details';
import { FilterProvider } from './components/Filter-context';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes , Route } from 'react-router';

function App() {
  return (
    <Router basename='/countries'>
    <FilterProvider >
    <Nav/>
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="/:name" element={<Details />} />
    </Routes>
    </FilterProvider>
    </Router>

  );
}

export default App;
