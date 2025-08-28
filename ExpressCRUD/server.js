const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const wordCounter = {
    car: 2,
    table: 3
}
app.get('/sanity', (req,res) =>
{
    res.send('Server is up and running');
})

app.get('/sanity/:name', (req,res) =>
{
    const word = req.params.name;
    wordCounter[word] = (wordCounter[word] || 0) + 1;
    if(wordCounter[word] === 1)
    {
        res.send({count: 0});
    }
    else
    {
        res.send({count: wordCounter[word]})
    }
})
app.post('/sanity/add', (req,res) =>
{
    const word = req.body.word;
    // console.log(word);
    wordCounter[word] = (wordCounter[word] || 0) + 1;
    res.send(`Added ${word}, currentCount" ${wordCounter[word]}`);
})
app.post('/sanity/addSentence', (req,res) =>
{
    const sentence = req.query.sentence;
    const words = sentence.split(" ");
    let newWords = 0;
    let oldWords = 0;
    for(const word of words)
    {   
        wordCounter[word] = (wordCounter[word] || 0) + 1;
        if(wordCounter[word] === 1)
        {
            newWords++;
        }
        else
        {
            oldWords++;
        }
    }
    res.send({text: `Added ${newWords} words, ${oldWords} already existed`, currentCount: -1});
})
//{text: "Added {numNewWords} words, {numOldWords} already existed", currentCount: -1}
const port = 8080 
app.listen(port, function () {
console.log(`Server running on ${port}`)
})
//{text: "Added {word}", currentCount: {count} }