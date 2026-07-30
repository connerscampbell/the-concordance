"use client";

import { useState } from "react";
import { characters } from "../data/characters";
import Dashboard from "./Dashboard";

export default function LoginScreen() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);


  function connectUser() {

    const foundUser = characters.find(
      (character) =>
        character.userName.toLowerCase()
        === username.toLowerCase()
    );


    if(foundUser){
      setUser(foundUser);
    }

  }


  if(user){
    return (
      <Dashboard user={user}/>
    );
  }


  return (
    <main className="datapad">

      <div className="panel">

        <h1>
          THE CONCORDANCE
        </h1>

        <p>
          USER IDENTIFICATION REQUIRED
        </p>


        <input
          placeholder="ENTER FIRST NAME"
          value={username}
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />


        <button onClick={connectUser}>
          CONNECT
        </button>

      </div>

    </main>
  );
}