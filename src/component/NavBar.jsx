import React from "react";
import logo from "../images/Realhomes-logo.png";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NavBar() {
  return (
    <header>
      <div className="navbar bg-base-100 p-5">
        <div className="container !p-0">
          <div className="container-row w-full">
            <div className="col-lg-4 col-md-4">
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 flex">
              <div className="flex items-center mr-11">
                <span className="text-primary-color mr-5">
                  <PlaceIcon style={{ fontSize: 43 }} />
                </span>
                <span className="dtl-info">
                  <h4 className="font-bold text-base text-slate-950">
                    3015 Grand Ave, Grove
                  </h4>
                  <p className="text-sm">Merrick, FL 12345</p>
                </span>
              </div>
              <div className="flex items-center mr-11">
                <span className="text-primary-color mr-5">
                  <LocalPhoneIcon style={{ fontSize: 43 }} />
                </span>
                <span className="dtl-info">
                  <h4 className="font-bold text-base text-slate-950">
                    1-800-555-1234
                  </h4>
                  <p className="text-sm">24/7 Customer Support</p>
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-primary-color mr-5">
                  <AccessTimeIcon style={{ fontSize: 43 }} />
                </span>
                <span className="dtl-info">
                  <h4 className="font-bold text-base text-slate-950">
                    Mon - Fri: 9:00 - 17:30
                  </h4>
                  <p className="text-sm">Online store always open</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-color">
        <div className="container !p-0">
          <div className="container-row">
            <div className="col-lg-10">
              <ul className="text-slate-50 hidden lg:flex  ">
                <li className="px-5 py-4 m-0 active text-base font-normal nav-link">
                  <a href="!#">Home</a>
                </li>
                <li className="px-5 py-4 m-0 text-base font-normal nav-link">
                  <a href="!#">Real State</a>
                </li>
                <li className="px-5 py-4 m-0 text-base font-normal nav-link">
                  <a href="!#">Property</a>
                </li>
                <li className="px-5 py-4 m-0 text-base font-normal nav-link">
                  <a href="!#">Blog</a>
                </li>
                <li className="px-5 py-4 m-0 text-base font-normal nav-link">
                  <a href="!#">Gallery</a>
                </li>
                <li className="px-5 py-4 m-0 text-base font-normal nav-link">
                  <a href="!#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 flex items-center">
              <div className="social-info space-x-5 text-slate-50">
                <FacebookIcon sx={{ fontSize: 20 }} />
                <XIcon sx={{ fontSize: 20 }} />
                <YouTubeIcon sx={{ fontSize: 20 }} />
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
