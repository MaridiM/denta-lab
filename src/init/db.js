import mongoose from 'mongoose'

// Connect to  mongodb
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

const connectionDB = mongoose.connection

connectionDB.once('open', () => console.log('✔️ Connected to DB'))
connectionDB.on('error', () => console.log('❌ Failed to connect to DB'))