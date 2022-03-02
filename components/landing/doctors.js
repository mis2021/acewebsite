import React, {useState} from 'react';
import PersonDesc from 'components/Contents/PersonDesc';
import { AP_GET_POST_BY_CATEGORY, GET_CATEGORIES_BY_PARENT } from "lib/api";
import { useMutation, useQuery } from '@apollo/client';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import _ from 'lodash';


export default function DoctorSummary(props) {

    const [doctorVar, setDoctorVar] = useState("featured_doctor")

    const { loading, error, data:dataCat } = useQuery(GET_CATEGORIES_BY_PARENT, {
        variables: {
            name: "doctor"
        }
    });

    const { loading: loadingPost, errorPost, data:dataPost, refetch } = useQuery(AP_GET_POST_BY_CATEGORY, {
        variables: {
            categoryName: doctorVar
        }
    });

    const subcatfetch  = _.get(dataCat,"categories.edges[0].node.children.edges", [])
    const postfetch  = _.get(dataPost,"posts.edges", [])

    const allSubCats = []
    subcatfetch.map((p, index) => {
        allSubCats.push({
            label: p.node?.description,
            value: p.node?.name,
            id: p.node?.id
        })
    })

    const listDoctors = []
    postfetch.map((p, index) => {
        listDoctors.push(p.node)
    })

    const doctors = listDoctors

    function getSelected(event, value){
        
        setDoctorVar(value.value)

        refetch()
        

    }
 
    return (
        <>
            <section className="relative py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-white fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>


            </section>

            <section className="pt-2 pb-48">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-10/12 px-4">
                            <h2 className="text-4xl font-semibold">Our Doctors</h2>
                            <br/>
                            <center>
                            Allied Care Experts Medical Center-Bohol believes that its primary function is to provide the highest quality patient care to all people regardless of race, color, gender, age or ability to pay and to assure the safety of our patients.
Allied Care Experts Medical Center-Bohol is composed of established medical specialists specialize in caring for complex diseases and conditions. These certified medical specialists have gone through rigorous training and examinations which bring the standard of specialty care to their patients.
                            </center>
                            <br/>
                            <center>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={allSubCats}
                                    sx={{ width: 350 }}
                                    renderInput={(params) => <TextField {...params} label="Specialization" />}
                                    onChange={getSelected}
                                />
                            </center>
                        </div>

                    </div>
                    <center>{loadingPost ? <CircularProgress /> : <></>}</center>
                    <div className="flex flex-wrap">
                        {
                            doctors.map((p, index) => (
                                <PersonDesc data={p} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>

    )
}
