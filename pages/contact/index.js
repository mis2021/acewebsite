import React, { useState } from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";

import styles from '../../styles/Home.module.css'
import { Button, Paper, TextField } from "@mui/material";


import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';


import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export default function ContactUs(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    setOpen(true);

    let data = {
      name,
      email,
      phone,
      company,
      subject,
      message
    }

    fetch('/api/contact', {
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
      }
    })
  }


  return (
    <>
      <MainLayout type="index">
        <PageHeaderDesign title={"CONTACT US"} />

        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div>
            <section className=" pb-0 relative ">
              <br />

              <div className={styles.container}>
                <center>
                  <Paper style={{
                    padding: '3vw', maxWidth: '950px', width: '90vw', maxHeight: '380px', height: '90vw', marginTop: '5vw', borderRadius: '40px', marginLeft: '-12px', textAlign: 'left'}}>
          
                    <p style={{ fontSize: '16px', fontFamily: 'Helvetica', paddingLeft: '20px', fontWeight: 'bold', position: 'relative' }}>ALLIED CARE EXPERTS MEDICAL CENTER - BOHOL</p>
                    <p style={{ fontSize: '16px', fontFamily: 'Helvetica', paddingLeft: '20px' }}> 0368 AS Bioco St., Carlos P. Garcia East Avenue, Mansasa District, Tagbilaran City, Bohol 6300</p>
                    <br />
                    <div style={{ fontFamily: 'Helvetica', float: 'left', width: '300px', display: 'inline-block', paddingLeft: '20px' }}>
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
                  <form onSubmit={(e) => { handleSubmit(e)}}>
                    <Paper style={{ padding: '30px', maxWidth: '750px', width: '90vw', marginTop: '5vw', height: '100%', borderRadius: '20px', marginLeft: '-12px' }}>
                      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>FEEDBACK FORM</h1>
                      <br />
                      <br />
                      <TextField
                        required
                        label="Name"
                        type='text' onChange={(e) => { setName(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                      />
                      <br />
                      <TextField
                        required
                        label="Email"
                        type='text' onChange={(e) => { setEmail(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                      />
                      <br />
                      <TextField
                        required
                        label="Phone"
                        type='text' onChange={(e) => { setPhone(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                      />
                      <br />
                      <TextField
                        required
                        label="Company"
                        type='text' onChange={(e) => { setCompany(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                      />
                      <br />
                      <TextField
                        required
                        label="Subject"
                        type='text' onChange={(e) => { setSubject(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                      />
                      <br />
                      <TextField
                        required
                        label="Message"
                        type='text' onChange={(e) => { setMessage(e.target.value) }} name='name'
                        style={{ maxWidth: '90%', width: '90vw', paddingBottom: '30px' }}
                        multiline
                        rows={5}
                        maxRows={8}
                      />
                      <br />
                      <br />

                      <Button variant="text" type="submit" style={{ backgroundColor: 'lightblue', width: '200px' }} disabled={open}>Send</Button>
                      <br/>
                      <Collapse in={open}>
                        <Alert sx={{ mb: 2 }}>
                          The form has been successfully sent.
                        </Alert>
                      </Collapse>
                    </Paper>
                  </form>
                </center>
              </div>
              <br />
              <br />
              <br />
              <br />
            </section>
          </div>
        </div>
        <PageLayout>
        </PageLayout>
      </MainLayout >
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
