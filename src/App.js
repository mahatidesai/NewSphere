import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { News } from './components/News';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeContext } from './components/ThemeContext';
import { useContext } from 'react';

const RootLayout = () => {
  return(
  <>
    <Navbar />
    <Outlet /> 
    {/* <Outlet /> is a placeholder component used inside a layout route to render the matched child route. */}
  </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, //deafult child for this parent is News
        element: <News pageSize={12} />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '/:categoryName',
        element: <News pageSize={12} />
      }
    ]
  }
])

function App() {
  const { BgColor } = useContext(ThemeContext);
  return (
    <div className="App" style={{backgroundColor: BgColor}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
