import React from 'react';
import PersonDesc from 'components/Contents/PersonDesc';

export default function DoctorSummary(props) {
    console.log("all doctors", props.doctors)

    const doctors = props?.doctors || {}
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
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold">Our Doctors</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record maximum.
                            </p>
                        </div>
                    </div>
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