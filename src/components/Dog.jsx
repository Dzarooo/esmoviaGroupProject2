import React, { useState } from "react";

export const Dog = () => {

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(["https://dog.ceo/img/dog-api-logo.svg", "https://dog.ceo/img/dog-api-logo.svg", "https://dog.ceo/img/dog-api-logo.svg"]);

  function getRandomImage() {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
        <>
            <div className="h-[70vh] flex flex-col justify-center items-center text-[25px]">
                <p className="text-center">Every bomb defuser needs a</p>
                <p className="text-5xl text-orange-500 text-center font-bold">Break.</p>
                <p>Here, generate some cute dog pictures to lighten the mood.</p>
                <button onClick={getRandomImage} id="generateButton" className="appearance-none bg-[#3d3d3d] text-white p-[15px] text-[16px] cursor-pointer mt-[20px] rounded-[5px]">Generate</button><br />
                <div id="loading_text" style={{ display: loading ? "block" : "none" }}>Loading...</div>
                <div id="dogImageContainer" className="flex flex-wrap justify-center gap-[20px] mt-[20px]">
                    <img id="dog_image_1" src={images[0]} alt="dog 1" className="h-[180px] w-[180px] object-cover object-center rounded-[10px]"/>
                    <img id="dog_image_2" src={images[1]} alt="dog 2" className="h-[180px] w-[180px] object-cover object-center rounded-[10px]"/>
                    <img id="dog_image_3" src={images[2]} alt="dog 3" className="h-[180px] w-[180px] object-cover object-center rounded-[10px]"/>
                </div>
            </div>
        </>
    );
}
