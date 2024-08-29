import React from "react";

function ProfileImage() {
  return (
    <div className="flex justify-center mr-7 ">
      <img
        src="tu-imagen.png"
        alt="Perfil"
        className="w-64 h-64 mx-auto md:mx-0 rounded-full border-4 border-gray-300"
      />
    </div>
  );
}

export default ProfileImage;
