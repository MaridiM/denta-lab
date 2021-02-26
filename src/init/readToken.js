require('dotenv').config()
import jwt from 'jsonwebtoken'

export const readToken = (req, res, next) => {
    const { token } = req.session

    if( token ) {
        const { fullname, email, phone } = jwt.verify(token, process.env.SESSION_SECRET)
        req.user = { email, phone, fullname}
    }
    next()
} 