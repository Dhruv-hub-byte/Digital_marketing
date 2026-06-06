const passport =
require("passport");

const LinkedInStrategy =
require(
"passport-linkedin-oauth2"
).Strategy;

passport.use(

new LinkedInStrategy(

{

 clientID:
 process.env.LINKEDIN_CLIENT_ID,

 clientSecret:
 process.env.LINKEDIN_CLIENT_SECRET,

 callbackURL:
 process.env.LINKEDIN_CALLBACK_URL,

 scope: [
  "openid",
  "profile",
  "email"
 ]

},

async (
 accessToken,
 refreshToken,
 profile,
 done
)=>{

 try {

   return done(
    null,
    profile
   );

 } catch(error){

   return done(
    error,
    null
   );

 }

}

)

);