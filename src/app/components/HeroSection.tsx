"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="mb-2  text-transparent bg-clip-text  bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
              Hi,我是
            </div>

            <TypeAnimation
              sequence={[
                "政勳藥師",
                2000,
                "Data Scientist",
                2000,
                "FullStack Dev.",
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="m-[100] mt-2  text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {" "}
            歡迎來到我的網頁，很高興認識你們amet consectetur adipisicing elit.
            Quisquam, voluptatum.
          </p>
          <div>
            <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              聯絡我
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                文檔下載
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className=" rounded-full bg-[#181818]  mt-10  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            {" "}
            <Image
              className="absolute transform -translate-x-[50px] -translate-y-[-30px]"
              src="/images/portrait-cheerful-handsome-pharmacist-leaning-counter-drugstore_109710-1739 (1).png"
              alt="codeOnDrug"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
