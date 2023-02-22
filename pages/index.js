import React, { useState, useEffect } from 'react'

function Home() {
  const [joke, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/joke')
      .then((res) => res.json())
      .then((data) => setMessage(data.joke))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>ジョーク</h1>
      <p>{joke}</p>
    </div>
  )
}

export default Home
