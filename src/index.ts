import express from 'express';
import userRouter from './routes/user.route';
import cryptoRouter from './routes/crypto.route';
import relationRouter from './routes/relation.route';
import cors from 'cors'

const app = express()
app.use(express.json())

const allowedOrigins = ['http://localhost:4200']
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

const PORT = 5000

app.use('/api/users', userRouter)
app.use('/api/crypto', cryptoRouter)
app.use('/api/relation', relationRouter)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})