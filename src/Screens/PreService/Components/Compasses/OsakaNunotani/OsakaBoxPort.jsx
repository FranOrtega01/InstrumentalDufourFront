import React, { useState, useRef } from "react";
export const SvgComponent = ({ title, handlePlate, ...props }) => {

    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

    const groupRef = useRef();

    const handleMouseDown = (event) => {
        event.preventDefault();
        if (isDragging) return; // Evitar actualización de startPos mientras se arrastra
        setIsDragging(true);
        setStartPos({ x: event.clientX, y: event.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;

        requestAnimationFrame(() => {
            const dx = event.clientX - startPos.x;
            const dy = event.clientY - startPos.y;

            setCurrentPos((prevPos) => ({
                x: prevPos.x + dx,
                y: prevPos.y + dy
            }));

            setStartPos({ x: event.clientX, y: event.clientY });
        });
    };

    return (

        <div className="svgContainer">
            <h2>{title}</h2>
            <svg
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                width={700} height={700}
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 798.16 860.92"
                {...props}
            >
                <defs>
                    <style>
                        {".cls-1 {fill: #fff;}.cls-1, .cls-2 {stroke: #000;  stroke-miterlimit: 10;}.cls-2 {  fill: none;}.cls-3 {  font-family: MyriadPro-Regular, 'Myriad Pro';  font-size: 20px;  isolation: isolate;}`"}
                    </style>
                </defs>
                <g >
                    <line className="cls-2" x1={686.88} y1={860.92} x2={688.08} y2={85.55} />
                    <path d="m686.36,395.6c.22.6,1.19.34.97-.27-.66-1.78-1.34-3.55-2.03-5.32-5.74-14.71-12.44-29.07-20.53-42.64-7.97-13.36-17.32-25.98-28.41-36.92-11.04-10.87-23.83-20-38.04-26.25-16.42-7.23-34.21-10.58-52.03-11.88-18.25-1.33-36.56-.6-54.81.21-.64.03-.64,1.03,0,1,2.2-.1,4.4-.2,6.6-.29,18.01-.75,36.11-1.2,54.08.58,17.64,1.75,35.18,5.8,51.08,13.8,13.68,6.88,25.85,16.43,36.33,27.55,10.66,11.31,19.6,24.16,27.22,37.68,7.7,13.67,14.09,28.05,19.57,42.75h0Z" />
                    <line className="cls-2" x1={0.5} y1={273.04} x2={511.22} y2={273.04} />
                    <line className="cls-2" x1={687.79} y1={272.14} x2={511.22} y2={273.04} />
                    <line className="cls-2" x1={0.5} y1={304.97} x2={0.5} y2={273.04} />
                    <line className="cls-2" x1={629.71} y1={304.97} x2={0.5} y2={304.97} />
                    <path d="m687.36,89.84c-.16.63.81.89.98.25.3-1.24.63-2.48.97-3.71,2.6-9.32,6.39-18.31,11.33-26.63,4.5-7.59,9.95-14.6,16.23-20.79,5.96-5.87,12.66-10.95,19.95-15.05,9.41-5.29,19.62-8.96,30.07-11.6,10.17-2.56,20.55-4.19,30.91-5.8.63-.09.36-1.06-.27-.96-1.29.2-2.58.4-3.87.6-10.48,1.65-20.96,3.44-31.19,6.31-10.36,2.9-20.43,6.95-29.6,12.62-6.99,4.33-13.4,9.62-19.06,15.58-6.16,6.49-11.46,13.78-15.77,21.61-4.78,8.66-8.33,17.97-10.68,27.57h0Z" />
                    <line className="cls-2" x1={479.86} y1={284.06} x2={479.86} y2={273.04} />
                    <line className="cls-2" x1={417.53} y1={284} x2={417.53} y2={272.98} />
                    <line className="cls-2" x1={290.12} y1={284.8} x2={290.12} y2={273.77} />
                    <line className="cls-2" x1={232.89} y1={284.8} x2={232.89} y2={273.77} />
                    <line className="cls-2" x1={168.87} y1={284.06} x2={168.87} y2={273.04} />
                    <line className="cls-2" x1={354.95} y1={284.8} x2={354.95} y2={273.77} />
                    <line className="cls-2" x1={110.86} y1={284.8} x2={110.86} y2={273.77} />
                    <line className="cls-2" x1={48.49} y1={284.4} x2={48.49} y2={273.37} />
                    <line className="cls-2" x1={450.21} y1={285} x2={450.21} y2={273.98} />
                    <line className="cls-2" x1={384.99} y1={282.85} x2={384.99} y2={271.82} />
                    <line className="cls-2" x1={323.67} y1={283.93} x2={323.67} y2={272.9} />
                    <line className="cls-2" x1={261.51} y1={282.85} x2={261.51} y2={271.82} />
                    <line className="cls-2" x1={200.88} y1={285} x2={200.88} y2={273.98} />
                    <line className="cls-2" x1={139.86} y1={284.06} x2={139.86} y2={273.04} />
                    <line className="cls-2" x1={79.67} y1={285} x2={79.67} y2={273.98} />
                </g>
                <g ref={groupRef} transform={`translate(${currentPos.x},0)`} className="Box" data-name="Box">
                    <path
                        className="cls-2"
                        d="m138.81,8.84v264.26s303.4,0,303.4,0V10.37c-.77-5.38-6.26-8.37-11.62-9.87H146.89c-3.09,2.28-6.15,5.03-8.08,8.34Z"
                    />
                    <line className="cls-2" x1={265.42} y1={221.66} x2={284.38} y2={221.66} />
                    <line className="cls-2" x1={296.03} y1={221.66} x2={314.99} y2={221.66} />
                    <line className="cls-2" x1={265.42} y1={247.14} x2={265.42} y2={221.66} />
                    <line className="cls-2" x1={314.99} y1={247.14} x2={314.99} y2={221.66} />
                    <line className="cls-2" x1={284.38} y1={285.06} x2={265.42} y2={247.14} />
                    <line className="cls-2" x1={296.03} y1={285.06} x2={315.18} y2={247.14} />
                    <line className="cls-2" x1={296.03} y1={285.06} x2={296.03} y2={221.66} />
                    <line className="cls-2" x1={284.38} y1={285.06} x2={284.38} y2={221.66} />
                </g>
                <g id="Capa_3" data-name="Capa 3">
                    <path
                        className="cls-1"
                        d="m88.13,811.56h373.08c7.33-2.83,13.01-7.68,13.22-17.31,0-.79.18-1.48.46-2.08v-361.96c-3.08-7.52-10.26-14.51-17.93-18.64H94.98c-.61.27-1.33.41-2.15.39-5.88-.16-11.16.79-14.49,6.03-1.56,2.45-2.61,5.25-3.44,8.12v376.03c2.42,4.99,5.76,9.42,11.93,9.29.47-.01.91.04,1.3.13Z"
                    />
                    <circle className="cls-1" cx={456.18} cy={426.78} r={5.97} />
                    <circle className="cls-1" cx={92.88} cy={426.78} r={5.97} />
                    <circle className="cls-1" cx={456.18} cy={797.18} r={5.97} />
                    <circle className="cls-1" cx={92.88} cy={797.18} r={5.97} />
                </g>
                <g id="Capa_4" data-name="Capa 4">
                    <g>
                        <line
                            className="cls-2"
                            x1={454.06}
                            y1={733.92}
                            x2={474.9}
                            y2={733.92}
                        />
                        <line
                            className="cls-2"
                            x1={454.06}
                            y1={727.78}
                            x2={454.06}
                            y2={733.92}
                        />
                        <line
                            className="cls-2"
                            x1={474.9}
                            y1={719.29}
                            x2={454.06}
                            y2={727.78}
                        />
                        <line
                            className="cls-2"
                            x1={453.95}
                            y1={743.24}
                            x2={474.78}
                            y2={743.24}
                        />
                        <line
                            className="cls-2"
                            x1={453.95}
                            y1={749.37}
                            x2={453.95}
                            y2={743.24}
                        />
                        <line
                            className="cls-2"
                            x1={474.78}
                            y1={757.87}
                            x2={453.95}
                            y2={749.37}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={664.91}
                            x2={474.84}
                            y2={664.91}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={658.77}
                            x2={454.01}
                            y2={664.91}
                        />
                        <line
                            className="cls-2"
                            x1={474.84}
                            y1={650.28}
                            x2={454.01}
                            y2={658.77}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={674.23}
                            x2={474.73}
                            y2={674.23}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={680.37}
                            x2={453.89}
                            y2={674.23}
                        />
                        <line
                            className="cls-2"
                            x1={474.73}
                            y1={688.86}
                            x2={453.89}
                            y2={680.37}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={597.91}
                            x2={474.84}
                            y2={597.91}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={591.77}
                            x2={454.01}
                            y2={597.91}
                        />
                        <line
                            className="cls-2"
                            x1={474.84}
                            y1={583.28}
                            x2={454.01}
                            y2={591.77}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={607.23}
                            x2={474.73}
                            y2={607.23}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={613.37}
                            x2={453.89}
                            y2={607.23}
                        />
                        <line
                            className="cls-2"
                            x1={474.73}
                            y1={621.86}
                            x2={453.89}
                            y2={613.37}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={530.91}
                            x2={474.84}
                            y2={530.91}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={524.77}
                            x2={454.01}
                            y2={530.91}
                        />
                        <line
                            className="cls-2"
                            x1={474.84}
                            y1={516.28}
                            x2={454.01}
                            y2={524.77}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={540.23}
                            x2={474.73}
                            y2={540.23}
                        />
                        <line
                            className="cls-2"
                            x1={453.89}
                            y1={546.37}
                            x2={453.89}
                            y2={540.23}
                        />
                        <line
                            className="cls-2"
                            x1={474.73}
                            y1={554.86}
                            x2={453.89}
                            y2={546.37}
                        />
                        <line
                            className="cls-2"
                            x1={454.12}
                            y1={464.74}
                            x2={474.95}
                            y2={464.74}
                        />
                        <line
                            className="cls-2"
                            x1={454.12}
                            y1={458.6}
                            x2={454.12}
                            y2={464.74}
                        />
                        <line
                            className="cls-2"
                            x1={474.95}
                            y1={450.11}
                            x2={454.12}
                            y2={458.6}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={474.06}
                            x2={474.84}
                            y2={474.06}
                        />
                        <line
                            className="cls-2"
                            x1={454.01}
                            y1={480.19}
                            x2={454.01}
                            y2={474.06}
                        />
                        <line
                            className="cls-2"
                            x1={474.84}
                            y1={488.69}
                            x2={454.01}
                            y2={480.19}
                        />
                        <line className="cls-2" x1={97.27} y1={735.16} x2={76.44} y2={735.16} />
                        <line className="cls-2" x1={97.27} y1={729.02} x2={97.27} y2={735.16} />
                        <line className="cls-2" x1={76.44} y1={720.53} x2={97.27} y2={729.02} />
                        <line className="cls-2" x1={97.39} y1={744.48} x2={76.55} y2={744.48} />
                        <line className="cls-2" x1={97.39} y1={750.62} x2={97.39} y2={744.48} />
                        <line className="cls-2" x1={76.55} y1={759.11} x2={97.39} y2={750.62} />
                        <line className="cls-2" x1={97.33} y1={666.15} x2={76.5} y2={666.15} />
                        <line className="cls-2" x1={97.33} y1={660.01} x2={97.33} y2={666.15} />
                        <line className="cls-2" x1={76.5} y1={651.52} x2={97.33} y2={660.01} />
                        <line className="cls-2" x1={97.44} y1={675.47} x2={76.61} y2={675.47} />
                        <line className="cls-2" x1={97.44} y1={681.61} x2={97.44} y2={675.47} />
                        <line className="cls-2" x1={76.61} y1={690.1} x2={97.44} y2={681.61} />
                        <line className="cls-2" x1={97.33} y1={599.15} x2={76.5} y2={599.15} />
                        <line className="cls-2" x1={97.33} y1={593.01} x2={97.33} y2={599.15} />
                        <line className="cls-2" x1={76.5} y1={584.52} x2={97.33} y2={593.01} />
                        <line className="cls-2" x1={97.44} y1={608.47} x2={76.61} y2={608.47} />
                        <line className="cls-2" x1={97.44} y1={614.61} x2={97.44} y2={608.47} />
                        <line className="cls-2" x1={76.61} y1={623.1} x2={97.44} y2={614.61} />
                        <line className="cls-2" x1={97.33} y1={532.15} x2={76.5} y2={532.15} />
                        <line className="cls-2" x1={97.33} y1={526.01} x2={97.33} y2={532.15} />
                        <line className="cls-2" x1={76.5} y1={517.52} x2={97.33} y2={526.01} />
                        <line className="cls-2" x1={97.44} y1={541.47} x2={76.61} y2={541.47} />
                        <line className="cls-2" x1={97.44} y1={547.61} x2={97.44} y2={541.47} />
                        <line className="cls-2" x1={76.61} y1={556.1} x2={97.44} y2={547.61} />
                        <line className="cls-2" x1={97.22} y1={465.98} x2={76.38} y2={465.98} />
                        <line className="cls-2" x1={97.22} y1={459.84} x2={97.22} y2={465.98} />
                        <line className="cls-2" x1={76.38} y1={451.35} x2={97.22} y2={459.84} />
                        <line className="cls-2" x1={97.33} y1={475.3} x2={76.5} y2={475.3} />
                        <line className="cls-2" x1={97.33} y1={481.44} x2={97.33} y2={475.3} />
                        <line className="cls-2" x1={76.5} y1={489.93} x2={97.33} y2={481.44} />
                    </g>
                </g>
                <g id="Capa_5" data-name="Capa 5">
                    <rect onClick={e => handlePlate(e)}
                        className="cls-2"
                        x={97.38}
                        y={733.92}
                        width={356.68}
                        height={10.56}
                    />
                    <rect onClick={e => handlePlate(e)}
                        className="cls-2"
                        x={97.38}
                        y={664.29}
                        width={356.68}
                        height={10.56}
                    />
                    <rect onClick={e => handlePlate(e)}
                        className="cls-2"
                        x={96.55}
                        y={598.53}
                        width={356.68}
                        height={10.56}
                    />
                    <rect onClick={e => handlePlate(e)}
                        className="cls-2"
                        x={96.55}
                        y={531.53}
                        width={356.68}
                        height={10.56}
                    />
                    <rect onClick={e => handlePlate(e)}
                        className="cls-2"
                        x={97.38}
                        y={464.12}
                        width={356.68}
                        height={10.56}
                    />
                </g>
                <g id="Capa_6" data-name="Capa 6">
                    <text className="cls-3" transform="translate(470.78 299.85)">
                        <tspan x={0} y={0}>
                            {"23"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(407.59 300.07)">
                        <tspan x={0} y={0}>
                            {"24"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(345.92 300.07)">
                        <tspan x={0} y={0}>
                            {"25"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(281.1 300.29)">
                        <tspan x={0} y={0}>
                            {"26"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(223.87 300.07)">
                        <tspan x={0} y={0}>
                            {"27"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(158.27 299.85)">
                        <tspan x={0} y={0}>
                            {"28"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(101.83 300.51)">
                        <tspan x={0} y={0}>
                            {"29"}
                        </tspan>
                    </text>
                    <text className="cls-3" transform="translate(39.21 299.85)">
                        <tspan x={0} y={0}>
                            {"30"}
                        </tspan>
                    </text>
                </g>
            </svg>
        </div>
    )
}