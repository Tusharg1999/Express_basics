const express=require('express')
const path=require('path')
const user=require('./users')
const moment=require('moment')
const users=user.user


const app=express()
const PORT =process.env.PORT||3000;
const logger=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().parseZone()}`)
    next()
}
app.use(logger)

app.get('/api/users',(req,res)=>{
    res.json(users)
})

//we donot want to route website with express we want to build an api with the help of express so we will focus on api part now
//and leave the routing part from here we can see it fom docs
app.use(express.static(path.join(__dirname,'public')))
//for static page routing
// app.get('/',(req,res)=>{
//     res.sendfile(path.join(__dirname,'public','index.html'))
// })
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})