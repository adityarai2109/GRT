import React , {useEffect, useState} from 'react';
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

function ZoomDecide(props) {

    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);
    return (
        <div>
            {(width < 550 ) ? (
                                    <InnerImageZoom
                                        className=""
                                        src={props.image}
                                        afterZoomIn={() =>
                                            document.body.classList.add(
                                                "stop-scrolling"
                                            )
                                        }
                                        afterZoomOut={() =>
                                            document.body.classList.remove(
                                                "stop-scrolling"
                                            )
                                        }
                                        fullscreenOnMobile={true}
                                        // alt="ProductImage"
                                    />
                                ) : (
                                    <InnerImageZoom
                                        className=""
                                        src={props.image}
                                        fullscreenOnMobile={true}
                                        // alt="ProductImage"
                                    />
                                )}
        </div>
    )
}

export default ZoomDecide
