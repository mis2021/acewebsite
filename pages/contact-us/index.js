import React, { useState } from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";



import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const initialState = {
  name: null,
  email: null,
  phone: null,
  company: null,
  subject: null,
  message: null
}


export default function ContactUs(props) {
  const careers = props?.NodeNewsAndEvent;

  const [textValue, setTextValue] = React.useState('');

  const handleReset = () => setTextValue("");

  const [state, setState] = useState(initialState)

  function handleChange(init, value) {
    console.log("name", init)
    console.log("value", value)
    setState(prev => ({ ...prev, [init]: value }))
  }

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)


  const handleSubmit = (e) => {
    alert(`The Form has been successfully submitted.`)
    e.preventDefault()
    console.log('Sending')

    // let data = {
    //   name: state.name,
    //   email: state.email,
    //   phone: state.phone,
    //   company: state.company,
    //   subject: state.subject,
    //   message: state.message
    // }

    let data = {
      name,
      email,
      phone,
      company,
      subject,
      message
    }

    console.log("data", data);
    

    fetch('/contact-us/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setPhone('')
        setCompany('')
        setSubject('')
        setMessage('')
        // setState({ ...data })
      }
    })
  }


  console.log(careers)

  return (
    <>
      <MainLayout type="index">
        {/* <PagehaderLayoutv2 image={careers}/>
        <PageheaderLayoutCareers image={careers} /> */}

        <PageHeaderDesign title={"CONTACT US"} />

        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div className=" sec-padding">
            <section className=" pb-0 relative ">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="flex flex-wrap" style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Arial' }}>
                <div style={{ fontSize: '30px', padding: '14px', fontWeight: 'bold' }}>
                  <Paper style={{ padding: '5vw', maxWidth: '950px', width: '90vw', maxHeight: '450px', height: '90vw', marginTop: '5vw', borderRadius: '40px' }}>
                    {/* <h1 style={{fontSize:'28px'}}>Contact Us</h1> */}

                    <p style={{ fontSize: '15px', fontFamily: 'Helvetica', paddingLeft: '20px' }}>ALLIED CARE EXPERTS MEDICAL CENTER - BOHOL
                      <br />
                      0368 AS Bioco St., Carlos P. Garcia East Avenue, Mansasa District, Tagbilaran City, Bohol 6300</p>
                    <br />
                    <div style={{ fontFamily: 'Helvetica', float: 'left', width: '300px', display: 'inline-block' }}>
                      <h1 style={{ fontSize: '15px' }}>Contact</h1>
                      <div style={{ fontSize: '12px', paddingLeft: '57px' }}>
                        <p>Landline: (038) 412-8888 </p>
                        <p style={{ paddingLeft: '0px' }}>Mobile: <span style={{ paddingLeft: '10px' }}>09497167106 - Smart</span></p>
                        <p style={{ paddingLeft: '52px' }}>09054885024 - Globe </p>

                      </div>
                      <div style={{ fontFamily: 'Helvetica', float: 'left' }}>
                        <h2 style={{ fontSize: '15px', float: 'left' }}>Email</h2>
                        <div style={{ fontSize: '12px', paddingLeft: '45%' }}>
                          <br />
                          <br />
                          <p>info@acemcbohol.com</p>
                        </div>
                      </div>
                    </div>
                  </Paper>

                  <center>
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                      <Paper style={{ padding: '30px', maxWidth: '780px', width: '90vw', marginTop: '5vw', height: '100%', borderRadius: '20px' }}>
                        <h1 style={{ fontSize: '80%' }}>FEEDBACK FORM</h1>
                        <br />
                        <TextField
                          required
                          value={state.name}
                          label="Name"
                          // onBlur={(e) => { handleChange("name", e.target.value) }}
                          onBlur={(e) => { setName(e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        />
                        <br />
                        <TextField
                          required
                          value={state.email}
                          label="Email"
                          type="email"
                          onBlur={(e) => { setEmail(e.target.value) }}
                          // onBlur={(e) => { handleChange("email", e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        />
                        <br />
                        <TextField
                          required
                          value={state.phone}
                          label="Phone"
                          // onBlur={(e) => { handleChange("phone", e.target.value) }}
                          onBlur={(e) => { setPhone(e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        />
                        <br />
                        <TextField
                          required
                          value={state.company}
                          label="Company"
                          // onBlur={(e) => { handleChange("company", e.target.value) }}
                          onBlur={(e) => { setCompany(e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        />
                        <br />
                        <TextField
                          required
                          value={state.subject}
                          label="Subject"
                          // onBlur={(e) => { handleChange("subject", e.target.value) }}
                          onBlur={(e) => { setSubject(e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        />
                        <br />
                        <TextField
                          required
                          value={state.message}
                          label="Message"
                          // onBlur={(e) => { handleChange("message", e.target.value) }}
                          onBlur={(e) => { setMessage(e.target.value) }}
                          style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                          multiline
                          rows={5}
                          maxRows={8}
                        />
                        <br />
                        <br />

                        <Button variant="text" style={{ backgroundColor: 'lightblue', width: '200px' }} onClick={(e) => { handleSubmit(e) }}>Send</Button>
                      </Paper>
                    </form>
                  </center>
                </div>

                <></>
              </div>
            </section>
          </div>
        </div>
        <PageLayout>
        </PageLayout>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const PostNewsAndEvent = await getPostByCategory("careers");

  const NodeNewsAndEvent = [];

  PostNewsAndEvent.edges.map((p, index) => {
    NodeNewsAndEvent.push(p.node);
  });

  return {
    props: { NodeNewsAndEvent },
  };
}
