import {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import '../src/styles/App.css';

const App = () => {
  return(
    <Suspense>
      {/*start: Language provider*/}
        {/*start: Layout provider*/}
          {/*start: Auth Init*/}
          <Outlet/>
          {/*end: Auth Init*/}
        {/*end: Layout provider*/}
      {/*end: Language provider*/}
    </Suspense>
  )
}

export {App}