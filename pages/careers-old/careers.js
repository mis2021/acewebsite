import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";
import { SpeakerNotes } from "@mui/icons-material";
import {isBrowser,isMobile} from 'react-device-detect';




export default function Careers(props) {
  const careers = props?.NodeNewsAndEvent;

  const pageTitle = 'Allied Care Experts CAREERS';


  return (
    <>
      <MainLayout>
        {/* <PagehaderLayoutv2 image={careers}/>
        <PageheaderLayoutCareers image={careers} /> */}

        <PageHeaderDesign title={"OUR CAREERS"}/>
        
        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div>
            <section className=" pb-0 relative ">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="container  mx-auto">
              {/* <div className="container  mx-auto" style={{width:"300px"}}> */}
                <div className="flex flex-wrap" style={{display:'flex', justifyContent:'center' }}>
                  <center>
                    <br/>
                    <br/>
                    <br/>
                    {/* <div style={isMobile?{fontSize:'10px',paddingLeft:'10%',paddingRight:'10%',paddingTop:'80px',paddingBottom:'20%',fontWeight:'bold'}:{fontSize:'10px',paddingLeft:'20%',paddingTop:'80px',paddingBottom:'20%',fontWeight:'bold'}}> */}
                    <div>
                    {/* <div className={`${isMobile?'forMobileCareers':'forBrowserCareers'}`}> */}
                      <h1 style={{fontSize:'25px'}}>FOR THE INTERESTED APPLICANTS</h1>
                      <br/>
                      <p><span style={{fontSize:'15px'}}>You may email your resume to hr@acemcbohol.com or you may personally submit it to our office at 8th floor HR Department ACE Medical Center-Bohol 0368 AS Bioco St., Carlos P. Garcia East Avenue, Mansasa District, Tagbilaran City, Bohol 6300.</span></p>
                    </div>
                    <div className="w-full md:w-5/10 px-4 mr-auto ml-auto">
                {/* <div className="w-full md:w-5/12 px-4 mr-auto ml-auto"> */}
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-hospital-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {/* {history.title} */}
                  FOR THE INTERESTED APPLICANTS
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600" style={{ textAlign: 'justify' }}>
                  {/* {history?.content ? Parser(history?.content) : <></>} */}
                  ou may email your resume to hr@acemcbohol.com or you may personally submit it to our office at 8th floor HR Department ACE Medical Center-Bohol 0368 AS Bioco St., Carlos P. Garcia East Avenue, Mansasa District, Tagbilaran City, Bohol 6300.
                </p>
              </div>
                    
                  {careers.map((p, index) => (
                    // <div className="w-1/3 px-4"style={{width:'80%',padding:'20px'}}>
                    <div style={{width:'75%',padding:'30px'}}>
                      <CardExpand
                        // image={p?.featuredImage?.node?.sourceUrl}
                        title={p.title}
                        // description={p.excerpt}
                        content={p?.content}
                        // icon={p?.image?.iconimage?.sourceUrl}
                      />
                    </div>
                  ))}
                  </center>
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
