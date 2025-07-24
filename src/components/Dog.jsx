import React, { useState } from "react";

export const Dog = () => {
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState(["", "", ""]);

    function getRandomImage() {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(res => res.json())
            .then(data => {
                setImages(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <div>
                <p>Every bomb defuser needs a</p>
                <p className="textGradient">Break.</p>
                <p>Here, generate some cute dog pictures to lighten the mood.</p>
                <button onClick={getRandomImage} id="generateButton">Generate</button><br />
                <div id="loading_text" style={{ display: loading ? "block" : "none" }}>Loading...</div>
                <div id="dogImageContainer">
                    <img id="dog_image_1" src={images[0]} alt="dog 1" />
                    <img id="dog_image_2" src={images[1]} alt="dog 2" />
                    <img id="dog_image_3" src={images[2]} alt="dog 3" />
                </div>
            </div>
        </>
    );
}