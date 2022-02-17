import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";




export default function ContactUs(props) {
  const careers = props?.NodeNewsAndEvent;


  console.log(careers)

  return (
    <>
      <MainLayout>
        {/* <PagehaderLayoutv2 image={careers}/>
        <PageheaderLayoutCareers image={careers} /> */}

        <PageHeaderDesign title={"CONTACT US"}/>
        
        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div className=" sec-padding">
            <section className=" pb-0 relative ">
              {/* <div className="container px-4 mx-auto"> */}
                <div className="flex flex-wrap" style={{display:'flex', justifyContent:'center' }}>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{fontSize:'30px',padding:'140px',fontWeight:'bold'}}>
                      <form>
                        <div style="padding: 50px;  
                          margin: 100px;
                          border-radius: 25px;
                          background-color: lightblue;  ">  
                        <center>  <h1 style="font-family:Helvetica;"> FEEDBACK FORM</h1> </center>  
                        <hr/>  
                        <label> Name </label>   
                      <input type="text" name="name" placeholder="" size="15" style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   " required />   
                      <label> Email Address </label>   
                      <input type="text" name="email" placeholder="" size="15" style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   "  required />  
                      <label> Phone </label>  
                      <input type="text" name="phone" placeholder="" size="10" style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   " required> 
                      <label> Company </label>    
                      <input type="text" name="company" placeholder="" size="15" style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   " required />   
                      <label> Subject </label>    
                      <input type="text" name="subject" placeholder="" size="15" style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   " required />   
                      Message
                      <textarea cols="80" rows="5" placeholder="Your Message Here..."  style="width: 100%;  
                        padding: 15px;  
                        margin: 5px 0 22px 0;  
                        display: inline-block;  
                        border: none;  
                        background: #f1f1f1;   " required ></textarea>  
                          <button type="submit" style="background-color: #4CAF50;  
                        color: white;  
                        padding: 16px 20px;  
                        margin: 8px 0;  
                        border: none;  
                        cursor: pointer;  
                        width: 100%;  
                        opacity: 0.9;  ">SUBMIT</button>   
                      </form>
                    </div>

                    <></>
                </div>
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
