import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   NavLink,
RouterProvider
 } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import CareerLayout from './layouts/CareerLayout';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareerError from './pages/careers/CareerError';




const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='Midestic_jobs'  element= { <RootLayout/> } >

  <Route index element= { <Home/> } />
  <Route path='about' element={ <About/> } />


  <Route path='help' element={ <HelpLayout/> } >

    <Route path='faq' element={ <Faq/> } />
    <Route path='contact' element={ <Contact/> } action={ contactAction } />

  </Route>


  <Route path='careers' element= { <CareerLayout/> }>

<Route 
index 
loader={ careersLoader }
element={ <Careers/> }
errorElement={ <CareerError/> }
/>


<Route

path=':id'
element= { <CareerDetails/> }
loader={ careerDetailsLoader }
errorElement={ <CareerError/> }

/>


  </Route>

  <Route path='*' element={ <NotFound/> } />

    </Route>
  )
)



function App() {
  return (
    <div className="App">
      
      <RouterProvider router={ router }/>
    </div>
  );
}

export default App;
