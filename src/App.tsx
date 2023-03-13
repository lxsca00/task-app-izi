import {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import '../src/styles/App.css';
import { MasterInit } from './partials/layout/MasterInit';

const App = () => {
  return(
    <Suspense>
      {/*start: Language provider*/}
        {/*start: Layout provider*/}
          {/*start: Auth Init*/}
          <Outlet/>
          <MasterInit/>
          {/*end: Auth Init*/}
        {/*end: Layout provider*/}
      {/*end: Language provider*/}
    </Suspense>
  )
}

export {App}