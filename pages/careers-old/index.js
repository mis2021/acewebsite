import React, { useState } from "react";
import MainLayout from "components/Layouts/MainLayout";
import CardExpand from "components/Cards/CardExpandCareers";
import { getPostByCategory } from "lib/api";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
export default function VMGC(props) {
  const careers = props?.NodeNewsAndEvent;

  return (
    <>
      <MainLayout type="index">
        <PageHeaderLayout title="CAREERS" image="/img/career_heading_bg.jpg" />
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="">
            <div className="flex flex-wrap items-center mt-10">
              <div
                className="w-full md:w-5/10 px-4 mr-auto ml-auto"
                style={{ padding: "8vw", width: "80%" }}
              >
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  <br />
                  FOR INTERESTED APPLICANTS
                </h3>
                <p
                  className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
                  style={{ textAlign: "justify" }}
                >
                  You may email your resume to hr@acemcbohol.com or you may
                  personally submit it to our office at 8th floor HR Department
                  ACE Medical Center-Bohol 0368 AS Bioco St., Carlos P. Garcia
                  East Avenue, Mansasa District, Tagbilaran City, Bohol 6300.
                </p>
              </div>
            </div>
          </div>
        </section>
        <center>
          <div className="w-full md:w-5/10 px-4 mr-auto ml-auto">
            {careers.map((p, index) => (
              <div
                style={{
                  width: "90%",
                  padding: "20px",
                  justifyContent: "center",
                }}
              >
                <CardExpand title={p.title} content={p?.content} />
              </div>
            ))}
          </div>
        </center>
        <br />
        <br />
        <br />
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
