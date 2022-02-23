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
                      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
