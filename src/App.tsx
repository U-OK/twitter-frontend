import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { SignIn } from 'pages/SIgnIn/SignIn';
import {FullTweet} from "components/FullTweet";
import {AllTweets} from "components/AllTweets";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AllTweets />}/>
          <Route path="tweet/:id" element={<FullTweet/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
