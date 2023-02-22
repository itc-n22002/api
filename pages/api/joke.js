export default (req, res) => {
    const jokes = [
      'Why did the tomato turn red? Because it saw the salad dressing!',
      'What did one wall say to the other wall? I’ll meet you at the corner.',
      'Why do birds fly south for the winter? Because it’s too far to walk.',
      'Why was the math book sad? Because it had too many problems.',
      'What’s orange and sounds like a parrot? A carrot!'
    ]
  
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.status(200).json({ joke: randomJoke })
  }
  