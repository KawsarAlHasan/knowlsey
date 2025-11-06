import React from "react";
import image from "../../assets/Image (9).png";
import badges from "../../assets/Badges.png";

function Guidance() {
  return (
    <div className="bg-[#edff4d] grid grid-cols-1 lg:grid-cols-2">
      <div className="flex justify-center items-center mx-10 lg:mx-24">
        <div>
          <h1 className="text-3xl lg:text-[46px] font-[700] mt-4 lg:mt-0">
            Get scaffolding guidance right from your mobile
          </h1>
          <p className="mt-4 text-[18px]">
            Download the app to manage your scaffolding tasks, track site
            progress, and get real-time guidance to stay safe and on schedule.
            Stay on track and complete every project on time!
          </p>

          <img className="my-8" src={badges} alt="badges" />
        </div>
      </div>

      <div>
        <img src={image} alt="image" />
      </div>
    </div>
  );
}

export default Guidance;
