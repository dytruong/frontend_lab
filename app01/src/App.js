import Login from './components/Login';
import SignUp from './components/SignUp';
import './index.css';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex w-full h-screen bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500">
      <div className='w-full flex items-center justify-center'>
        <Routes>
          <Route
            path="/" element= {<Login />}
          />
          <Route
            path="signup" element= {<SignUp />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App