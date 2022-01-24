import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PagehaderLayoutv2 from "components/Layouts/PagehaderLayoutv2";
import CardExpand from "components/Cards/CardExpand";
import AceContainer from "components/Containers/AceContainer";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Footer from "components/FooterTemp/Footer";

// import 'tw-elements';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewsEvents(props) {
  return (
    <>
      <MainLayout>
        <PageLayout>
          <PagehaderLayoutv2 />
          <div className="bg-blueGray-200 sec-padding">
            <section className=" pb-0 relative bg-blueGray-200 ">
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                  <div className="w-1/3 px-4">
                    <CardExpand 
                    image= "/img/pattern_nextjs.png"
                    title="Sample Title"
                    content="aaaaaa"
                    description="asdsadasdasa" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PageLayout>
      </MainLayout>
    </>
  );
}
