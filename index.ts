import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send("hello_world");
});

app.get('/hello', (req: Request, res: Response) => {
    res.send("hello_da_pundai");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//it doezs not work do you know how your are doing the concepts... managing directors