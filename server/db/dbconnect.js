const mongoose=require('mongoose');
mongoose.connect(process.env.mongodb||'mongodb+srv://user1:user1234@cluster0.piogaqd.mongodb.net/Sbit?retryWrites=true&w=majority&appName=Cluster0');
module.export=dbconnect;