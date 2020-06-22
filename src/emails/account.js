const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'rohithbodagala.rit@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome to the app,${name}.Let me know how you get along with app.`
    }).then(() => {
            console.log('Message sent')
        }).catch((error) => {
            console.log(error.response.body)
        })
}

const sendCancellationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'rohithbodagala.rit@gmail.com',
        subject:'Sorry to see you go!',
        text:`Goodbye,${name}.I hope to see you back sometime soon.`
    }).then(() => {
            console.log('Message sent')
        }).catch((error) => {
            console.log(error.response.body)
        })
}


module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}