const express=require('express')
const path=require('path')
const user=require('./users')
const logger=require('./middleware/logger')
const users=user


const app=express()
const PORT =process.env.PORT||3000;
app.use('/api/users',require('./router/api/router'))


// app.use(logger)
//showing info of single user

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