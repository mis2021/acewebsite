import React from "react";
import MainLayout from "components/Layouts/MainLayout";
import PageLayout from "components/Layouts/PageLayout";
import PageHeaderDesign from "components/Layouts/PageHeaderDesignPolygon";
import MediaCard from "components/Cards/MediaCard";
import { getPostByCategory } from "lib/api";
import Parser from 'html-react-parser';

export default function DoctorsSched(props) {
    const doctors = props?.nodeDoctors;
    return (
        <>
            <MainLayout>
                <PageHeaderDesign title="OUR DOCTORS" />
                <div className="   mr-auto ml-auto -mt-32">
                    {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg "> */}
                    <div className="bg-blueGray-200 sec-padding-2">
                        <section className=" pb-0 relative ">

                            {/* <div className="container px-4 mx-auto"> */}
                            <div className="container ">
                                <div className="flex flex-wrap">
                                    {
                                        doctors?.map((p, index) => (
                                            <div className="w-1/2 px-4">
                                                <MediaCard
                                                title={p.title}
                                                subtitle={Parser(p.excerpt || '')}
                                                description={Parser(p.content || '')}
                                                image={p?.featuredImage?.node?.sourceUrl}
                                                />
                                            </div>
                                        ))
                                    }



                                    {/* {
                                        services.map((p, index) => (
                                            <div className="w-1/3 px-4">
                                                <CardExpand
                                                    image={p?.featuredImage?.node?.sourceUrl}
                                                    title={p.title}
                                                    description={p.excerpt}
                                                    content={p?.content}
                                                    icon={p?.image?.iconimage?.sourceUrl}
                                                />
                                            </div>
                                        ))
                                    } */}
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* </div> */}
                </div>
                <PageLayout />
            </MainLayout>


        </>
    )
}

export async function getServerSideProps({ preview = false }) {

    const PostDoctors = await getPostByCategory("doctor")

    const nodeDoctors = []

    PostDoctors.edges.map((p, index) => {
        nodeDoctors.push(p.node)
    })

    return {
        props: { nodeDoctors },
    }

}