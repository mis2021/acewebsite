import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import { gql, useQuery } from "@apollo/client";
import Parser from "html-react-parser";
import CardExpand from "components/Cards/CardExpandCareers";


export default function index() {
  const GET_CAREERS = gql`
    query {
      posts(where: { categoryName: "careers" }) {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
  `;

  const GetData = () => {
    const { loading, error, data } = useQuery(GET_CAREERS);
    const newspost = data;
    if (loading) return <p>Loading ...</p>;
    console.log(newspost)
    return (
      
          <center>
          <div className="w-full md:w-5/10 px-4 mr-auto ml-auto">
            {newspost?.posts.edges.map((p, index) => (
              <div
                style={{
                  width: "90%",
                  padding: "20px",
                  justifyContent: "center",
                }}
              >
                 
                <CardExpand title={p.node.title} content={p?.node.content} id={p.node.id} />
              </div>
            ))}
          </div>
        </center>
     
    );
  };

  return (
    <div>
      <MainLayout type="index">
        <PageHeaderLayout title="CAREERS" image="/img/career_heading_bg.jpg" />
        <GetData />
      </MainLayout>
    </div>
  );
}
