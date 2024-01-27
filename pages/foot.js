import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
const Foot = () => {
  return (
    <>
      <footer class="text-white bg-blue-500 body-font pt-4">
        <div class="container px-5 ">
          <div class="flex justify-start md:text-left  order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h1 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                Logo
              </h1>
              <h3>Favorite Doctor</h3>
              <p>The ultimate destination fot all of your medical needs</p>
              <p>Follow Us</p>
              <div className="flex flex-row text-white text-3xl">
                  <CiTwitter className="mr-3" />
                  <FaInstagram className="mr-3" /> <FaFacebook />
                </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
              Explore
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-white">Patient Care</a>
                </li>
                <li>
                  <a class="text-white hover:text-purple-800">Centres of Excellence</a>
                </li>
                <li>
                  <a class="text-white hover:text-purple-800">Health Information</a>
                </li>
                <li>
                  <a class="text-white hover:text-purple-800">International patient</a>
                </li>
                <li>
                  <a class="text-white hover:text-purple-800">Academics & Research</a>
                </li>
                <li>
                  <a class="text-white hover:text-purple-800">Hospitals</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
              About US
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">
                  Post a Query
                  </a>
                </li>
                {/* <br /> */}
                <li>
                  <a class="text-white hover:text-gray-800">
                  Consult Doctors online
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">
                  Book Physical Appointment 
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">
                  Lifeline 
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
              Contact US
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-white hover:text-gray-800">
Health Help Line
<IoCallOutline/>
+44-020-3745-5718
                  </a>
                </li>
                {/* <br /> */}
                <li>
                  <a class="text-white hover:text-gray-800">
                  Emergecny Line
                  <IoCallOutline/>
+34-020-3745-5718
                  </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-800">
                  Email

                  abubkar@hotmail.com 
                  </a>
                </li>
                
              </nav>
            </div>
          </div>
        </div>
        {/* <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       
        <span class="ml-3 text-xl">Abu Bakar Foodie</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Abu Bakar
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@All Rights reserved</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div> */}
      </footer>
    </>
  );
};

export default Foot;
