
export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "smtp.gmail.com",
       auth: {
            user: "acewebsite.feedbacks@gmail.com",
            pass: "p@SSword123!",
         },
    secure: true,
  });

  

  const mailData = {
      from: "<no_reply@acemcbohol.com>",
      to: "info@acemcbohol.com",
      subject: `${req.body.subject} - ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      // html: `<div>${req.body.message}</div>
      
      // ` 
      html: `
      <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
            <tr>
                <td style="padding:0;font-size:1vw;">
                    <div style="font-family:Helvetica;font-weight:400;line-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                        <p>From: ${req.body.email}</p>
                        <p>Name: ${req.body.name}</p>
                        <p>Phone: ${req.body.phone}</p>
                        <p>Company: ${req.body.company}</p>
                    </div>
                    <div style="font-family:Helvetica;font-weight:bold;line-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                        <p>${req.body.subject}</p>
                    </div>
                    <div style="font-family:Helvetica;fline-height:20px;padding-left:40px;padding-top:20px;padding-bottom:20px;">
                        <p>${req.body.message}</p>
                    </div>
                    <br>
                </td>
            </tr>
            <tr>
            <td style="padding:0;">
            <hr>
            <div style="font-family:Helvetica;font-weight:400;font-size:1vw;line-height:20px;padding-left:7%;padding-top:20px;padding-bottom:20px;">  
                This message is sent from ACEMB website.
                <br>
                Please do not reply from this message.
            </div>
            <div style="padding-left:2%;display:inline-block;">
            <img src="https://admin.acemcbohol.ph/wp-content/uploads/2022/01/LOGO-PNG-NEW.jpg" style="max-width:180px;max-height:180px;width:15vw;height:15vw;padding-right:20px;padding-bottom:20px;padding-left:20px;">
            <div style="font-family:Helvetica;font-weight:400;float:right;width:300px;">
                    <h1 style="font-size:15px;">Contact</h1>
                    <div style="font-size:12px;padding-left:57px;">
                    <p>Landline: (038) 412-8888 </p>
                    <p style="padding-left:0px;">Mobile: <span style="padding-left:10px;">09497167106 - Smart</span></p>
                    <p style="padding-left:52px;">09054885024 - Globe </p>
                </div>
                <div style="font-family:Helvetica;font-weight:400;float:left;">
                    <h2 style="font-size:15px;float:left;">Email</h2>
                    <div style="font-size:12px;padding-left:45%;">
                    <br>
                    <br>
                    <p>info@acemcbohol.com</p>
                </div>
            </div>
        </td>
            </tr>
        </table>
      `
  }

  transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  })

  console.log(req.body)
  res.send('success')
}