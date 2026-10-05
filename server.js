import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app=express(); const __dirname=path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname,'public')));
app.get('/health',(_req,res)=>res.json({status:'ok',app:'PeopleHub HR'}));
app.get('*',(_req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
const port=process.env.PORT||3000; app.listen(port,()=>console.log(`PeopleHub HR running on ${port}`));