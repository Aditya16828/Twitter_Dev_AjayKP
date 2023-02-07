import JWT from 'passport-jwt';
import User from '../models/user.js'

const JwtStreategy =JWT.Strategy; //whole implementation of how jWT is going to be heandle
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

export const passportAuth = (password) => {
    try{
           password.use (new JwtStreategy(opts, async (jwt_payload, done) =>{        
            const user=User.findById(jwt_payload.id);
           
            if(!user){
                done(null, false);
            }else{
                done(null, user);
            }
        }));
    }catch(err){
        console.log(err);
        throw err;
    }
}