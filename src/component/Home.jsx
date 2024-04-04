import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PropertiesCard from "./PropertiesCard";
import img1 from "../images/zac-gudakov-0qir5hBOj18-unsplash-488x326.jpg";
import img2 from "../images/Villa-in-Coral-Gables-488x326.jpg";
import img3 from "../images/Property-1-488x326.jpg";

export default function Home() {
  return (
    <section>
      <div className="hero main overflow-hidden ">
        <div className="intro-video m-[-100px] hidden">
          <iframe
            className="elementor-background-video-embed"
            frameBorder="0"
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="Modern House Stock Footage - Modern House Free Stock Videos - Modern House No Copyright Videos"
            width="1602"
            height="1000"
            src="https://www.youtube.com/embed/3fKqCTe_hVI?&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fsample.realhomes.io&widgetid=1&autoplay=1&mute=1&showsearch=0&showinfo=0&loop=1&rel=0&"
            id="widget2"
            __idm_id__="16385"
          ></iframe>
        </div>
        <div className="hero-overlay bg-gray-950 opacity-50 "></div>
        <div className="hero-content text-center py-56 px-2 text-slate-50 block  container">
          <div className="max-w-3xl m-auto">
            <h1 className="mb-5 text-4xl font-bold text-slate-50">
              Find Your Dream Home
            </h1>
            <div className="divider mx-auto w-32 before:bg-slate-50 after:hidden"></div>
            <p className="mb-28 text-lg">
              RealHomes gracefully facilitates real estate business owners by
              making property management easier & affordable. ​
            </p>
          </div>
          <div className="block">
            <div className="action-btns">
              <div className="inline px-5 py-4 pb-5 rounded-md mx-2 hover:bg-slate-50 hover:text-gray-600 cursor-pointer text-slate-50 font-normal bg-secondary-color border-0 action-active">
                All Status
              </div>
              <div className="inline px-5 py-4 pb-5 rounded-md mx-2 hover:bg-slate-50 hover:text-gray-600 cursor-pointer text-slate-50 font-normal bg-secondary-color border-0">
                For Rent
              </div>
              <div className="inline px-5 py-4 pb-5 rounded-md mx-2 hover:bg-slate-50 hover:text-gray-600 cursor-pointer text-slate-50 font-normal bg-secondary-color border-0">
                For Sale
              </div>
            </div>
            <div className="filter-action bg-slate-50 py-5 px-4 my-3 relative z-10 rounded-md flex justify-between w-full gap-3">
              <select
                className="select min-h-[auto] h-auto px-5 font-normal select-bordered w-full text-gray-600 rounded-md !outline-none"
                defaultValue={0}
              >
                <option disabled value={0}>
                  Who shot first?
                </option>
                <option value={1}>Han Solo</option>
                <option value={2}>Greedo</option>
              </select>
              <select
                className="select min-h-[auto] h-auto px-5 font-normal select-bordered w-full text-gray-600 rounded-md !outline-none"
                defaultValue={0}
              >
                <option disabled value={0}>
                  Who shot first?
                </option>
                <option value={1}>Han Solo</option>
                <option value={2}>Greedo</option>
              </select>
              <select
                className="select min-h-[auto] h-auto px-5 font-normal select-bordered w-full text-gray-600 rounded-md !outline-none"
                defaultValue={0}
              >
                <option disabled value={0}>
                  Who shot first?
                </option>
                <option value={1}>Han Solo</option>
                <option value={2}>Greedo</option>
              </select>
              <select
                className="select min-h-[auto] h-auto px-5 font-normal select-bordered w-full text-gray-600 rounded-md !outline-none"
                defaultValue={0}
              >
                <option disabled value={0}>
                  Who shot first?
                </option>
                <option value={1}>Han Solo</option>
                <option value={2}>Greedo</option>
              </select>
              <div className=" px-5 py-4 rounded-md mx-2 text-slate-50 font-normal bg-secondary-color border-0 hover:bg-primary-color items-center flex cursor-pointer">
                <SearchIcon sx={{ fontSize: 18, marginRight: 0.5 }} />
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="properties-box container my-32">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h3 className=" text-4xl font-normal ">Recent Properties</h3>
          <div className="divider mx-auto w-32 my-3 before:bg-secondary-color after:hidden"></div>
          <p className="mb-12 text-lg text-center">
            Check out some of our latest properties.
          </p>
        </div>
        <div className="container-row justify-center">
          <div className="col-lg-4 col-sm-12">
            <PropertiesCard
              title="Home in Merrick Way"
              place="Merrick Way, Miami, FL 33134, USA"
              img={img1}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <PropertiesCard
              title="Home in Merrick Way"
              place="Merrick Way, Miami, FL 33134, USA"
              img={img2}
            />
          </div>
          <div className="col-lg-4 col-sm-12">
            <PropertiesCard
              title="Home in Merrick Way"
              place="Merrick Way, Miami, FL 33134, USA"
              img={img3}
            />
          </div>
          <div className="col-lg-12">
            <div className="justify-center flex mt-16 pagination gap-2">
              <button className="join-item btn btn-active btn-ghos !outline-none btn-md border-none hover:bg-secondary-color hover:text-slate-50">
                1
              </button>
              <button className="join-item btn-ghost btn !outline-none btn-md border-none hover:bg-secondary-color hover:text-slate-50">
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
