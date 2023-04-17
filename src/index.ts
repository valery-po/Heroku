import express, {Request, Response} from 'express';
const app = express()
const port = 3000;

// npm run watch
// npm run dev

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'hello Valery!!!!!!!!!!'
    res.send(helloMessage);
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})