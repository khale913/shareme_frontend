import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { createOrGetUser } from "../googleAuth";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    const res = createOrGetUser(response);
  };

  const user = false;
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {user ? (
              <div>Logged In</div>
            ) : (
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={responseGoogle}
                cookiePolicy="single_host_origin"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;