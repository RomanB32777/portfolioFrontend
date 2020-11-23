// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { ReducerState } from './context/reducer/reducerState';
import { ResourceState } from './context/resource/resourceState';
import 'materialize-css';
import './App.css';
import './sass/style.scss'
//import './css/fullpage.min.css'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Suspense fallback={<p style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: 'auto' }}>Loading...</p>}>
        <ResourceState>
          <ReducerState>
            <Router>
              <Routes />
            </Router>
          </ReducerState>
        </ResourceState>
      </Suspense>
    </div>
  );
}

export default App














  // const { req } = useHttp()
  // const resource = useResource()
  // const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(reducer, initialState);

  // const loadPosts = useCallback(async () => {
  //   try {
  //     const getPosts = await req("http://localhost:3040/api/post/", "GET", null, {
  //       Authorization: `Bearer ${state.user?.token}`
  //     })

  //     dispatch({
  //       type: ActionType.SetPosts,
  //       payload: {
  //         posts: getPosts.data.posts
  //       }
  //     })
  //   } catch (error) {
  //     console.log(error);
  //     throw error
  //   }

  // }, [req])

  // useEffect(() => {
     //loadPosts()
  // }, [loadPosts])

