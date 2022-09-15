import { useEffect, useState } from "react";

function DadsJoke() {

const [joke, SetJoke] = useState("Joke is Here")

useEffect(()=> {
  getJoke()
  
}, [])

const getJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
      },
    });
  
  const data = await response.json()
  SetJoke(data.joke)
  
}

  return (
    <div className="container">
        <h1>
          Dad's Joke
        </h1>
        <p className="joke">
          {joke}
        </p>
        <button type="button" className="btn" onClick={getJoke}>Get Another Joke</button>
    </div>
  );
}

export default DadsJoke;
