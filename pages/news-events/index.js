import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PagehaderLayoutv2 from "components/Layouts/PagehaderLayoutv2";
import CardExpand from "components/Cards/CardExpand";
import { getPostByCategory } from "lib/api";
import AceContainer from "components/Containers/AceContainer";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Footer from "components/FooterTemp/Footer";

export default function NewsEvents(props) {
  const news = props?.NodeNewsAndEvent;


  return (
    <>
      <MainLayout>

        <PagehaderLayoutv2 image={news} />

        <div className=" bg-blueGray-200  mr-auto ml-auto -mt-12">
          {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
          <div className=" sec-padding">
            <section className=" pb-0 relative ">
              {/* <div className="container px-4 mx-auto"> */}
              <div className="container  mx-auto">
                <div className="flex flex-wrap">
                  {news.map((p, index) => (
                    <div className="w-1/3 px-4">
                      <CardExpand
                        image={p?.featuredImage?.node?.sourceUrl}
                        title={p.title}
                        description={p.excerpt}
                        content={p?.content}
                        icon={p?.image?.iconimage?.sourceUrl}
                      />
                    </div>
                  ))}
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
  const PostNewsAndEvent = await getPostByCategory("news_events");

  const NodeNewsAndEvent = [];

  PostNewsAndEvent.edges.map((p, index) => {
    NodeNewsAndEvent.push(p.node);
  });

  return {
    props: { NodeNewsAndEvent },
  };
}
