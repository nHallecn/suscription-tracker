import express from 'express';
import {PORT} from './config/env.js'

import userRouter from './config/routes/user.routes.js';
import authRouter from './config/routes/auth.routes.js';
import subscriptionRouter from './config/routes/suscription.routes.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/suscriptions", subscriptionRouter);


app.get('/', (req,res)=>{
    res.send('Welcome to the subscription tracker')
})

app.listen(3000,()=> {
    console.log(`subscription tracker is running on http://localhost:${PORT}`);
});

export default app;