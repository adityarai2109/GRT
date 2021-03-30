console.log("backend")

const app = express()
  
app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.send('API is running...')
})


app.listen(5000,console.log('server on port 5k') )
