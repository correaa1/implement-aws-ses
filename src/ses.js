import AWS from"aws-sdk"

import env from "dotenv"

env.config();

const awsConfig = {
     acessKeyId: process.env.AWS_ACESS_KEY_ID,
     secretAcessKey: process.env.AWS_SECRET_ACESS_KEY,
     region: process.env.AWS_REGION,
}

const SES = new AWS.SES(awsConfig)

const sendEmail = async () => {
     const email = process.env.FROM_EMAIL
     


     try {
          //preparando o envio de email

          const params = {
               Source:email,
               Destination:{
                    ToAddresses:[email]
               },
               Message:{
                    Subject:{
                         Data: ` Ganja recebida, strain: Orange Punch `
                    },
                    Body:{
                         Html:{
                              Charset: "UTF-8",
                              Data: `<h1>Deu certo </h1>`
                         },
                    },
               },
          };

          const emailSent =  SES.sendEmail(params).promise();

          
          emailSent.then((data) => {
               console.log(data)
          })
          .catch((err) => {     
               console.log(err)  
          })

     } catch (error) {
          console.log(error)
     }

}

export default sendEmail();