import { useEffect, useState } from "react";

function ChuckNorris() {
  
    const [facts,SetFacts] = useState("Fact is Here")

useEffect(() => {
    getFacts()
}, [])

const getFacts = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random",{
        headers: {
            "Accept": "application/json",
          },
    });
const data = await response.json()
SetFacts(data.value)

}
  
  
    return(
    <div className="container">
        <h1>
          Chuck Norris Facts
        </h1>
        <p className="Facts">
          {facts}
        </p>
        <button type="button" className="btn" onClick={getFacts}>Get Another Joke</button>
    </div>
    )
}

export default ChuckNorris;