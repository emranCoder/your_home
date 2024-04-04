import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function PropertiesCard(props) {
  return (
    <div className="card rounded-none w-96 bg-base-100 shadow-xl property-card">
      <figure>
        <img className="scale-110" src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <a href="!#">
          <h4 className="card-title text-slate-950 text-lg hover:text-secondary-color ease-in">
            {props.title}
          </h4>
        </a>
        <p className="text-sm text-secondary-dark ">
          <PlaceIcon sx={{ fontSize: 14, marginRight: 1 }} />
          <span className="underline">{props.place}</span>
        </p>
        <p className="mt-2">
          <span className="text-slate-950 mr-2 font-light">Added:</span>
          June 15, 2020
        </p>
        <ul className="flex gap-3 my-2">
          <li>
            <h5 className="font-semibold text-sm text-slate-800">Bedrooms</h5>
            <div className="my-2">
              <BedIcon sx={{ fontSize: 35, marginRight: 2 }} />
              <span className="text-slate-950">3</span>
            </div>
          </li>
          <li>
            <h5 className="font-semibold text-sm text-slate-800">Bathrooms</h5>
            <div className="my-2">
              <ShowerIcon sx={{ fontSize: 35, marginRight: 2 }} />
              <span className="text-slate-950">3</span>
            </div>
          </li>
          <li>
            <h5 className="font-semibold text-sm text-slate-800">Area</h5>
            <div className="my-2">
              <AspectRatioIcon sx={{ fontSize: 25, marginRight: 2 }} />
              <span className="text-slate-950">30,00 sq ft</span>
            </div>
          </li>
        </ul>
        <div className="flex justify-between">
          <div>
            <p className="text-slate-800 text-sm font-semibold mb-1">
              For Sale{" "}
            </p>
            <span className="text-secondary-color text-xl font-semibold">
              $540,000
            </span>
          </div>
          <div
            className="flex items-center cursor-pointer hover:text-secondary-color tooltip before:bg-secondary-color before:text-slate-50"
            data-tip="ADD TO FAVORITE"
          >
            <FavoriteIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
