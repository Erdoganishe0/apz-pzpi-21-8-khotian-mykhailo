const jwt = require('jsonwebtoken');
const User = require('../model/User')

const verifyJWT2 = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    );
}

const verifyJWT = (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.accessToken) {
        res.sendStatus(401)
        return
    }
    const token = cookies.accessToken;

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {

            if (err.name === 'TokenExpiredError') {

                const refreshToken = cookies.jwt;
                if (!refreshToken) {
                    res.sendStatus(401)
                    return
                }

                jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
                    if (err) {

                        res.sendStatus(401)
                        return
                    }

                    const foundUser = await User.findOne({ refreshToken }).exec();
                    if (!foundUser) {
                        res.sendStatus(401)
                        return
                    }
                    const roles = Object.values(foundUser.roles);

                  
                    const accessToken = jwt.sign(
                        {
                            "UserInfo": {
                                "username": foundUser.username,
                                "email": foundUser.email,
                                "address": foundUser.wallet.adress,
                                "roles": roles
                            }
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '15m' } 
                    );


                    res.cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 60 * 60 * 1000 })

             
                    req.user = foundUser.username;
                    req.roles = roles;
                    req.jwtaddress = foundUser.wallet.adress
                    next();
                });
            } else { 
                res.sendStatus(401)
                return
            }
        } else {
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            req.jwtaddress = decoded.UserInfo.address

            next();
        }
    });
};


module.exports = verifyJWT;