import React from 'react';
import { mainCamera } from "../utils/index";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainCamera = () => {

    useGSAP(() => {
        gsap.to('feature-text', { opacity: 1 })
    }, [])

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        Next-Gen main camera.
                    </h2>
                </div>

                <div className="mt-10 md:mt-20 mb-14">


                </div>
                <div className="hiw-text-container">

                    <div className="flex-1 flex justify-center h-full align-middle">
                        <img src={mainCamera} />
                    </div>

                    <div className="flex flex-1 justify-center flex-col align-middle">


                        <p className="text-gray max-w-md text-lg md:text-xl font-semibold">
                            The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a {''}
                            <span className="text-white">
                                new level of detail and colour
                            </span> with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                        </p>
                        <br />
                        <p className="text-gray max-w-md text-lg md:text-xl font-semibold">
                            You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog or cat, iPhone automatically captures depth information. So you can choose to instantly {''}
                            <span className="text-white">
                                see your photo as a portrait
                            </span>, with an artful blur effect. Or later in the Photos app.
                        </p>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default MainCamera