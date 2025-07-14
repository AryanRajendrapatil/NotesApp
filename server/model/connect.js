const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();



const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MongoDBURL}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.name}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

module.exports = connectDB;