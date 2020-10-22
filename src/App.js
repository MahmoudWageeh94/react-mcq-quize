import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./store";
const Login = lazy(() => import("./pages/login"));
const Question1 = lazy(() => import("./pages/question1"));
const Question2 = lazy(() => import("./pages/question2"));
const Question3 = lazy(() => import("./pages/question3"));
const Question4 = lazy(() => import("./pages/question4"));
const Question5 = lazy(() => import("./pages/question5"));
const ResultBox = lazy(() => import("./pages/result"));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/question1" component={Question1} />
            <Route path="/question2" component={Question2} />
            <Route path="/question3" component={Question3} />
            <Route path="/question4" component={Question4} />
            <Route path="/question5" component={Question5} />
            <Route path="/result" component={ResultBox} />
          </Switch>
        </Suspense>
      </Provider>
    </Router>
  );
}

export default App;
