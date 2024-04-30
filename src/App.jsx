import { useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Header />
        <div className="w-full flex gap-x-2 gap-y-3 flex-wrap-reverse items-end justify-center p-4">
          <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <SideMenu/>
        </div>
      </div>
    </>
  );
}

export default App;
