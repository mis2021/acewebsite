import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MainLayout from "components/Layouts/MainLayout";
import PageHeaderLayout from "components/Layouts/PageHeaderLayout";
import Parser from "html-react-parser";
import TextField from "@mui/material/TextField";

export default function Career(id) {
  const router = useRouter();

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [path, setPath] = useState("")
  const [submitted, setSubmitted] = useState(false);

  const GET_CAREERS_BY_ID = gql`
    query ($id: ID = "") {
      post(id: $id) {
        id
        title
        content
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CAREERS_BY_ID, {
    variables: {
      id: router.query.id,
    },
  });

  const career = data;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Sending");

      let data = {
        fname,
        email,
        attachments:[
            {
              filename: "myfile",
              path: path
            }
        ]
      };

      fetch("/api/attach", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setSubmitted(true);
          setFname("");
          setEmail("");
        }
      });
    };



  return (
    <div>
      <MainLayout type="index">
        <PageHeaderLayout title="CAREERS" image="/img/career_heading_bg.jpg" />
        <section className=" container mx-auto max-w-7xl my-auto px-3 py-3">
          <div className="flex lg:flex-row md:flex-col sm:flex-col">
            <div className="bg-slate-600 px-10 py-10">
              <h1>{career?.post.title}</h1>
              <p>{Parser(career?.post.content || "")}</p>
            </div>
            <div className=" px-5 py-10 mx-auto">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Full name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Attachement
                  </label>
                  <input
          
                    onChange={(e) => {
                    console.log( e.target.value)
                    setPath(e.target.value);
                    }}
                    type="file"
                    id="myfile"
                    name="myfile"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Send Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
}
