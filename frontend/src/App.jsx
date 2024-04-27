import { Routes, Route, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './place/pages/NewPlace';
import Navigation from './shared/components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index path='/' element={<Users />}></Route>
        <Route path='/place/new' element={<NewPlace />}></Route>
        <Route path='*' element={<Navigate to='/' replace />}></Route>
      </Routes>
    </>
  );
}

export default App;
