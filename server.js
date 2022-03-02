const express = require('express')
const app = express()
const port = 3000

app.get('/greeting/:name', (req, res) => {
    res.send(`<h2>${req.params.name}! It's so great to see you!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) =>{
    res.send(`Your tip should be ${req.params.total * (req.params.tipPercentage * 0.01)}`)
})

app.get('/magic/:question', (req, res) => {
    let magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    let answer = Math.floor(Math.random() * magic8Responses.length)
    res.send(`<h1>The Magic 8 Ball says: ${magic8Responses[answer]}</h1> <p>Your question was: ${req.params.question}?</p>`)
})

app.listen(port, () => {console.log('listening')})