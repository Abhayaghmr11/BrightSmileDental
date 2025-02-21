"use client";
// import { useRef, useState, useMemo } from "react";
// import dynamic from "next/dynamic";
// const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

import MaxWidthWrapper from "@/components/Layout/MaxWidthWrapper";
import React from "react";
import TeamDoctor from "@/public/assets/images/team-doctors.png";
import Image from "next/image";
import Text from "@/components/atom/Text";

import { FlipWords } from "@/components/ui/flip-words";

import { aboutUs } from "@/app/constants/config";

const AboutUs = () => {
  const words = ["excellence", "care", "smiles"];
  // const value = [
  //   {
  //     insert: "High quality rich text editor for the web\n",
  //     attributes: { header: 2 },
  //   },
  //   { insert: "Rich text editor handles the following formatting:\n" },

  //   // Bullet List Items
  //   { insert: "Bold", attributes: { bold: true } },
  //   { insert: "\n", attributes: { list: "bullet" } },

  //   { insert: "Italic", attributes: { italic: true } },
  //   { insert: "\n", attributes: { list: "bullet" } },

  //   { insert: "Underline", attributes: { underline: true } },
  //   { insert: "\n", attributes: { list: "bullet" } },

  //   { insert: "Strike-through", attributes: { strike: true } },
  //   { insert: "\n", attributes: { list: "bullet" } },

  //   { insert: "Blockquotes\n", attributes: { header: 3 } },
  //   {
  //     insert:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
  //   { insert: "\n", attributes: { blockquote: true } },

  //   { insert: "Code blocks\n", attributes: { header: 3 } },
  //   {
  //     insert: "<vaadin-rich-text-editor></vaadin-rich-text-editor>\n",
  //     attributes: { "code-block": true },
  //   },

  //   // Numbered List Items
  //   { insert: "Step 1: Open Quill Editor" },
  //   { insert: "\n", attributes: { list: "ordered" } },

  //   { insert: "Step 2: Write some text" },
  //   { insert: "\n", attributes: { list: "ordered" } },

  //   { insert: "Step 3: Format it using the toolbar" },
  //   { insert: "\n", attributes: { list: "ordered" } },
  // ];

  // const editor = useRef(null); //declared a null value
  // const [content, setContent] = useState("Worlds best html page"); //declare using state
  // console.log(content);

  // /* The most important point*/
  // const config = useMemo(
  //   //  Using of useMemo while make custom configuration is strictly recomended
  //   () => ({
  //     //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
  //     /* Custom image uploader button configuretion to accept image and convert it to base64 format */
  //     uploader: {
  //       insertImageAsBase64URI: true,
  //       imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // this line is not much important , use if you only strictly want to allow some specific image format
  //     },
  //   }),
  //   []
  // );
  // /* function to handle the changes in the editor */
  // const handleChange = (value) => {
  //   setContent(value);
  // };

  return (
    <section className="bg-secondary relative">
      <MaxWidthWrapper>
        {/* <div className="h-full w-[90vw]"> */}
        {/* This is the main initialization of the Jodit editor */}
        {/* <JoditEditor
            ref={editor} //This is important
            value={content} //This is important
            config={config} //Only use when you declare some custom configs
            onChange={handleChange} //handle the changes
            className="w-full h-[70%] mt-10 bg-white"
          />
          <style>{`.jodit-wysiwyg{height:300px !important}`}</style> */}
        {/* </div> */}

        {/* <div className="my-10 h-full w-[90vw]">
          Preview:
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div> */}
        <div className="flex  ipad-pro:h-[600px] flex-col pt-[60px] md:pt-0  flex-auto lg:flex-row w-full gap-[40px] items-center justify-center">
          <div className="flex md:max-w-[700px] flex-col gap-[30px]">
            <Text
              variant="heading"
              className=" font-bold text-center md:text-left"
            >
              <span className=" text-primary">Bright Smile</span> Dental Clinic
            </Text>
            <Text variant="body" className=" leading-5 font-light">
              {aboutUs}
              {aboutUs}
              {aboutUs}
            </Text>

            <div className=" text-center font-bold md:text-left mt-2 text-[30px]">
              Committed to
              <FlipWords words={words} />
            </div>
          </div>
          <div className=" mt-[20px] w-full max-w-[500px]">
            <Image
              src={TeamDoctor}
              alt="About Us"
              className="md:w-[500px]  rounded-[20px]"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
