require('dotenv').config()
// Config server
export const PORT = process.env.PORT || 8000
// Session config
export const sessionOptions = { 
    key: 'token', 
    secret: process.env.SESSION_SECRET || 'KLJDHoihsfoihnsdfkj90JAJUvheuifoisdjf',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 24 * 60 * 1000  // 24 hours
    }
}
// CORS config
export const corsOptions = {
    origin: `http://localhost:${PORT}`,
    credentials: true   // for set cookie on client from server
}
