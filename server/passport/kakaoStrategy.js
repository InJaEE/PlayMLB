const KakaoStrategy = require('passport-kakao').Strategy;
const UserModel= require('../models/UserModel');

module.exports = passport => {
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_KEY,
        clientSecret: '',
        callbackURL: '/oauth',
    }, async(accessToken, refreshToken, profile, done) => {
        try{
            console.log("@@@", profile);
            const exUser = UserModel.findOne({ username: profile.username, provider: 'kakao'})
            console.log("###", exUser);
            if(exUser){
                done(null, exUser);
            } else{
                const newUser = await UserModel.create({
                    username: profile._json,
                    nickname: profile.displayName,
                    provider: 'kakao',
                });
                done(null, newUser);
            } 
        }catch(err){
            console.error(err);
            done(err)
        }
    }));
}
