import React, { useState } from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";

import styles from '../../styles/Home.module.css'


export default function ContactUs(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

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
      <MainLayout>
        {/* <PagehaderLayoutv2 image={careers}/>
        <PageheaderLayoutCareers image={careers} /> */}

        <PageHeaderDesign title={"CONTACT US"} />

        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div className=" sec-padding">
            <section className=" pb-0 relative ">
              <div className={styles.container}>
                <form className={styles.main} >
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='name'>Name</label>
                    < input type='text' onChange={(e) => { setName(e.target.value) }} name='name' className={styles.inputField} />
                  </formGroup>
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='email'>Email</label>
                    < input type='text' onChange={(e) => { setEmail(e.target.value) }} name='email' className={styles.inputField} />
                  </formGroup>
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='phone'>Phone</label>
                    < input type='text' onChange={(e) => { setPhone(e.target.value) }} name='email' className={styles.inputField} />
                  </formGroup>
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='company'>Company</label>
                    < input type='text' onChange={(e) => { setCompany(e.target.value) }} name='email' className={styles.inputField} />
                  </formGroup>
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='subject'>Subject</label>
                    < input type='text' onChange={(e) => { setSubject(e.target.value) }} name='email' className={styles.inputField} />
                  </formGroup>
                  <formGroup className={styles.inputGroup} >
                    < label htmlFor='message'>Message</label>
                    < input type='text' onChange={(e) => { setMessage(e.target.value) }} name='message' className={styles.inputField} />
                  </formGroup>
                  <input type='submit' onClick={(e) => { handleSubmit(e) }} />
                </form >
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
