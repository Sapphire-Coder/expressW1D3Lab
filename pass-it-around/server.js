const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')


app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`)
      .replace('#content#', `<div>${options.content}</div>` )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'hypatia')


app.get('/', (req, res) => {
    res.render('template', {
        'title': '99 bottles', 
        'message': '99 bottles of milk on the wall', 
        'content': `<a href = "/98">Take one down, pass it around</a>`
    })
})

app.get('/:number_of_bottles', (req, res) =>{
    if (req.params.number_of_bottles > 0) {
        res.render('template', {
            'title': `${req.params.number_of_bottles} bottles`, 
            'message': `${req.params.number_of_bottles} bottles of milk on the wall`, 
            'content': `<a href = "/${req.params.number_of_bottles - 1}">Take one down, pass it around</a>`
        })
    }
    else {
        res.render('template', {
            'title': `${req.params.number_of_bottles} bottles`, 
            'message': `${req.params.number_of_bottles} bottles of milk on the wall`, 
            'content': `<a href = "/">Start over!</a>`
        })
    }
})


app.listen(port, () => {console.log('listening')})