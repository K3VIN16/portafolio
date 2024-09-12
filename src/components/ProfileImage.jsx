import React from "react";
// import perfil from "../assets/photos/perfil.jpg";
import perfil from "../assets/logos/logo1.jpeg";

function ProfileImage() {
  return (
    <div className="flex justify-center">
      <img
        src={perfil}
        alt="Perfil"
        className="w-56 h-56 md:w-72 md:h-72 mx-auto md:mx-0 md:my-0 rounded-full border-4 border-gray-300"
      />
    </div>
  );
}

export default ProfileImage;
