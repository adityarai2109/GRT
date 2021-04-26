import React from "react";
import cimage from "../images/carousel_collage1.png";

function Cta() {
    return (
        <div style={{ position: "relative" }}>
            <div
                style={{
                    backgroundColor: "#f9c5d1",
                    backgroundImage:
                        "linear-gradient(135deg, #f9c5d1 0%, #9795ef 74%)",
                }}
            >
                <img
                    src={cimage}
                    style={{
                        marginLeft: "50% ",
                        transform: "translate(-50%)",
                        width: "100vw",
                        objectFit: "contain",
                    }}
                    alt="img"
                />
                <div
                    style={{
                        fontFamily: "Poppins",
                        color: "white",
                        width: "25%",
                        fontSize: "3.5vw",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div>Latest Collections at reasonable prices.</div>Buy now
                </div>
            </div>
        </div>
    );
}

export default Cta;
