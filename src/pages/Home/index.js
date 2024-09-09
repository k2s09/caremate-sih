import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../index.css";

function Home() {
  const [ setIsLoaded] = useState(false);
  return (
    <div className="">
      <Header />
      <div className="w-full bg-[#252b61] min-h-[200px] flex flex-col items-center justify-center text-center p-3">
  <p className="text-[#b3ebf2] font-extrabold text-8xl">Caremate</p>
  <br />
  <div className="flex flex-row gap-4 w-full max-w-md">
  <div className="flex-1 flex">
    <Link to="/createhospitals">
    <button className="flex-1 h-28 text-2xl p-3 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
      Create Hospital
    </button>
    </Link>
  </div>
  <div className="flex-1 flex">
    <Link to="/queuemodel" className="w-full h-full">
      <button className="flex-1 h-28 text-2xl p-3 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
        Check OPD Slots Availability  
      </button>
    </Link>
  </div>
  <div className="flex-1 flex">
    <Link to="/bedmodel" className="w-full h-full">
      <button className="flex-1 h-28 text-2xl p-3 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
        Check Bed Avaialbility 
      </button>
    </Link>
  </div>
</div>


</div>


      <div className=" flex flex-row items-center gap-20 p-10 ">
        <div
          className="flex flex-col justify-between p-5 w-1/2 h-full  shadow-lg bg-[#A3DAC2] rounded-xl "
          style={{ animation: "slide-in-right 1s ease-out forwards" }}
          onLoad={() => setIsLoaded(true)}
        >
          <Link to="/b ">
            <p className="text-[#252B61] text-3xl font-bold ">
              What does Caremate do ?
            </p>
          </Link>
          <br />
          <p className="text-[#252b61] text-lg italic">
            Our goal is to provide a seamless platform that connects patients
            with the best hospital options based on real-time data. By allowing
            hospitals to update their availability of beds and OPD services, we
            aim to enhance patient care by guiding individuals to the most
            suitable healthcare facility, ensuring faster treatment and reducing
            wait times.
          </p>
          <br />
          <button className=" w-full h-14 text-xl  px-4 py-2 bg-[#f0da69] font-bold text-[#252b61] rounded-lg">
            Know More
          </button>
        </div>
        <div className="w-1/2">
          <p
            className="text-3xl italic font-bold text-[#252b61]"
            style={{ animation: "slide-in-left 1s ease-out forwards" }}
            onLoad={() => setIsLoaded(true)}
          >
            "Connecting patients to the right care, at the right time, for a
            healthier tomorrow."
          </p>
          <br></br>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 pt-5 p-3">
        <div className="flex flex-col justify-between p-3 w-1/4h-32 shadow-lg bg-[#A3DAC2] rounded-xl">
          <Link to=" ">
            <p className="text-[#252B61] text-2xl font-bold ">
              Check Availability
            </p>
          </Link>
          <p className="text-[#282839] text-lg italic">
            Get to know about avaialbility within few seconds .
          </p>
        </div>

        <div className="flex flex-col justify-between p-3 w-1/4h-32 shadow-lg bg-[#F0DA69] rounded-xl">
          <Link to=" ">
            <p className="text-[#252B61] text-2xl font-bold ">
              Find nearest hospitals
            </p>
          </Link>
          <p className="text-[#282839] text-lg italic ">
            No worries in emergency now .
          </p>
        </div>

        <div className="flex flex-col justify-between p-3 w-1/4h-32 shadow-lg bg-[#B3EBF2] rounded-xl">
          <Link to=" ">
            <p className="text-[#252B61] text-2xl font-bold">24/7 Medicines</p>
          </Link>
          <p className="text-[#282839] text-lg italic ">
            Your own medical centre .
          </p>
        </div>

        <div className="flex flex-col justify-between p-3 w-1/4h-32 shadow-lg bg-[#FFD1DC] rounded-xl">
          <Link to=" ">
            <p className="text-[#252B61] text-2xl font-bold">Ask anything</p>
          </Link>
          <p className="text-[#282839] text-lg italic ">
            Get your problems solved in a minute .
          </p>
        </div>
      </div>

      <br />

      <br />
      <div>
  <h1 className="text-[#252B61] text-3xl font-bold pl-[25px]">
    Our Features and Services
  </h1>
  <h5 className="text-[#5b5b7e] text-xl font-bold pl-[25px]">
    Explore Our Services
  </h5>

  <div className="flex flex-row gap-2 p-[25px] text-[#252b61]">
    <div className="relative w-1/3 bg-[#FFD1DC] rounded lg p-5">
      <h3 className="font-bold text-3xl">OPD Slot Tracking</h3>
      <br></br>
      <p className="italic">
        1. Real-time OPD Slot Availability: Our platform provides up-to-date information on available OPD (Outpatient Department) slots, allowing patients to schedule their visits conveniently and avoid long waiting times.
      </p>
      <br></br>
      <p className="italic">
        2. Specialty Slot Tracking: Find available slots for specific specialties, ensuring that patients are directed to the right department based on their needs.
      </p>
      <br></br>
      <p className="italic">
        3. Advanced Search Options: Patients can filter available slots based on specialty, time, and hospital location for a more tailored experience.
      </p>
      <br></br>
      <p className="italic">
        4. Personalized Notifications: Receive alerts and notifications for slot availability, ensuring you stay informed and never miss an appointment.
      </p>
      <br></br>
    </div>
    <div className="w-1/3 flex flex-col gap-2">
      <div className="w-full h-1/2 bg-[#A3DAC2] rounded lg p-5">
        <h3 className="font-bold text-3xl">Real-time Bed Availability</h3>
        <br></br>
        <p className="italic">
          Our platform allows hospitals to update their bed availability in real-time. This ensures that patients are directed to hospitals with the current capacity, helping to manage patient flow effectively and avoid overcrowding.
        </p>
        <br></br>
     
      </div>
      <div className="w-full h-1/2 bg-[#B3EBF2] rounded lg p-5">
        <h3 className="font-bold text-3xl">24/7 Medicine </h3>
        <br></br>
        <p className="italic">
          Our platform offers round-the-clock access to medical support through our integrated services. Patients can get instant advice, medication information, and therapy support at any time, ensuring continuous care and guidance.
        </p>
      </div>
    </div>
    <div className="w-1/3 bg-[#F0DA69] rounded lg p-5">
      <h3 className="font-bold text-3xl">Therapy & Report Generation</h3>
      <p className="italic">
        <br></br>
        Save valuable time and enhance efficiency by eliminating the hassle of manual report generation. Our platform enables quick and accurate creation of detailed, data-driven reports with automated data collection and real-time integration. Streamline your reporting process and ensure accurate documentation with ease.
        Our system automatically gathers and consolidates data from various sources, reducing the need for manual entry and minimizing errors. This ensures that your reports are based on comprehensive and up-to-date information.
      </p>
      <br></br>
    </div>
  </div>
</div>


      <br></br>
      <div className="bookings mt-8">
        <h1 className="text-[#252B61] text-3xl font-bold pl-[25px]">
          Read top articles from health experts
        </h1>
        <h5 className="text-[#5b5b7e] text-xl font-bold pl-[25px]">
          Your ultimate guide to health and wellness
        </h5>
        <div className="flex flex-row gap-2 p-[25px]">
          <div className="w-1/2 h-auto bg-[#F0da69] rounded-lg p-8 text-[#252B61]">
            <h3 className="text-[#252B61] text-3xl font-bold text-center">
              Sleeping Late on Weekends May Help Your Heart
            </h3>
            <br />
            <h5 className="text-[#252B61] font-bold">Written by Lisa O’Mary</h5>
            <br />
            <p className="text-[#252B61] italic">
              About 1 in 3 people say they don’t get enough rest or sleep every
              day, and adults typically need between 7 and 9 hours per night.
              Previous research has already linked sleep problems with a range
              of health problems .
            </p>
            <br></br>
            <Link
              to="https://www.webmd.com/parenting/baby/news/20240823/most-baby-foods-on-the-market-arent-healthy"
              target="_blank"
            >
              <button className="w-1/2 h-1/8 p-2 bg-[#252b61] text-[#b3ebf2] rounded lg ">
                {" "}
                Read More{" "}
              </button>
            </Link>
          </div>
          <div className="w-1/2 h-auto bg-[#b3ebf2] rounded-lg p-8 text-[#252B61]">
            <h3 className="text-[#252B61] font-bold  text-3xl text-center">
              Most Baby Foods on the Market Aren't Healthy, Study Says
            </h3>
            <br />
            <h5 className="text-[#252B61] font-bold">
              Written by Kara Grant, MS
            </h5>
            <br />
            <p className="text-[#252B61] italic">
              Aug. 23, 2024 – The struggle is real: When you’re a busy parent
              looking for easy, tasty foods for your little one, those squeeze
              pouches are irresistible, especially when they have promising
              claims on the front of the packaging.
            </p>
            <br />

            <Link
              to="https://www.webmd.com/parenting/baby/news/20240823/most-baby-foods-on-the-market-arent-healthy"
              target="_blank"
            >
              <button className="w-1/2 h-1/8 p-2 bg-[#252b61] text-[#b3ebf2] rounded lg ">
                {" "}
                Read More{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
