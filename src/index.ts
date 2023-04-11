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

const PORT = 4001

app.use('/users', userRouter)
app.use('/crypto', cryptoRouter)
app.use('/relation', relationRouter)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})