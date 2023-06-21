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
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 382 956.24"
                {...props}
            >
                <defs>
                    <style>
                        {
                            "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: none;\n        stroke: #1d1d1b;\n        stroke-miterlimit: 10;\n      }\n\n      .cls-3, .cls-4 {\n        isolation: isolate;\n      }\n\n      .cls-4 {\n        fill: #1d1d1b;\n        font-family: MyriadPro-Regular, 'Myriad Pro';\n        font-size: 14px;\n      }\n    "
                        }
                    </style>
                </defs>
                <g id="LilleyChain" className="chain" ref={groupRef} transform={`translate(0,${currentPos.y})`} data-name="Capa 2">
                    <g>
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={207.26}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={230.42}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={257.81}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={284.05}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={311.74}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={339.13}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={365.36}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={394.21}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={421.6}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={447.83}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={475.53}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={502.91}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={529.15}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={553.78}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={581.17}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={607.41}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={635.1}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.66}
                            cy={662.49}
                            rx={7.62}
                            ry={22.02}
                        />
                        <ellipse
                            className="cls-2"
                            cx={190.46}
                            cy={681.25}
                            rx={7.42}
                            ry={14.55}
                        />
                        <circle className="cls-2" cx={190.46} cy={716.53} r={20.73} />
                    </g>
                </g>
                <g id="Capa_3" data-name="Capa 3">
                    <rect className="cls-1" style={{stroke:"none"}}  width={382} height={217.9} />
                </g>
                <g id="Capa_1-2" data-name="Capa 1">
                    <g>
                        <line className="cls-2" x1={30.98} y1={870.15} x2={30.98} y2={118.44} />
                        <line
                            className="cls-2"
                            x1={351.61}
                            y1={870.15}
                            x2={351.61}
                            y2={118.44}
                        />
                        <path
                            className="cls-2"
                            d="m30.98,119.7c53.45-106.9,267.24-106.9,320.69,0"
                        />
                        <path
                            className="cls-2"
                            d="m30.98,870.15c53.44,106.88,267.19,106.88,320.63,0"
                        />
                    </g>
                    <g>
                        <line className="cls-2" x1={60.34} y1={855.95} x2={60.34} y2={133.13} />
                        <line
                            className="cls-2"
                            x1={322.26}
                            y1={855.95}
                            x2={322.26}
                            y2={133.13}
                        />
                        <path
                            className="cls-2"
                            d="m60.34,134.33c43.66-87.32,218.31-87.32,261.97,0"
                        />
                        <path
                            className="cls-2"
                            d="m60.34,855.95c43.65,87.31,218.26,87.31,261.92,0"
                        />
                    </g>
                    <g>
                        <line className="cls-2" x1={79.26} y1={841.26} x2={79.26} y2={141.03} />
                        <line
                            className="cls-2"
                            x1={303.35}
                            y1={841.26}
                            x2={303.35}
                            y2={141.03}
                        />
                        <path
                            className="cls-2"
                            d="m79.26,142.2c37.35-74.71,186.77-74.71,224.13,0"
                        />
                        <path
                            className="cls-2"
                            d="m79.26,841.27c37.35,74.7,186.74,74.7,224.09,0"
                        />
                    </g>
                    <path
                        className="cls-2"
                        d="m108.66,791.17c0,110.18,165.27,110.18,165.27,0"
                    />
                    <line className="cls-2" x1={108.65} y1={791.16} x2={273.94} y2={791.16} />
                    <circle className="cls-2" cx={191.3} cy={829.56} r={6.78} />
                    <line className="cls-2" x1={108.65} y1={791.16} x2={148.72} y2={757.28} />
                    <line className="cls-2" x1={273.94} y1={791.16} x2={233.87} y2={757.28} />
                    <line className="cls-2" x1={148.72} y1={757.28} x2={233.87} y2={757.28} />
                    <line className="cls-2" x1={273.94} y1={193.69} x2={108.65} y2={193.69} />
                    <circle className="cls-2" cx={191.29} cy={155.29} r={6.78} />
                    <line className="cls-2" x1={273.94} y1={193.69} x2={233.87} y2={227.57} />
                    <line className="cls-2" x1={108.65} y1={193.69} x2={148.72} y2={227.57} />
                    <line className="cls-2" x1={158.48} y1={321.57} x2={148.72} y2={321.57} />
                    <path
                        className="cls-2"
                        d="m108.66,193.68c0-110.18,165.27-110.18,165.27,0"
                    />
                    <line className="cls-2" x1={148.72} y1={227.57} x2={148.72} y2={757.28} />
                    <line className="cls-2" x1={233.87} y1={227.57} x2={233.87} y2={757.28} />
                    <rect
                        style={{stroke:'none'}}
                        className="cls-1"
                        x={180.32}
                        y={926.85}
                        width={21.98}
                        height={29.39}
                    />
                    <line className="cls-2" x1={180.32} y1={921.76} x2={180.32} y2={949.87} />
                    <line className="cls-2" x1={202.29} y1={921.36} x2={202.29} y2={950.36} />
                    <line className="cls-2" x1={148.71} y1={524.87} x2={160.57} y2={524.87} />
                    <line className="cls-2" x1={148.71} y1={490.98} x2={160.57} y2={490.98} />
                    <line className="cls-2" x1={148.71} y1={457.1} x2={160.57} y2={457.1} />
                    <line className="cls-2" x1={148.71} y1={423.22} x2={160.57} y2={423.22} />
                    <line className="cls-2" x1={148.73} y1={389.34} x2={160.57} y2={389.34} />
                    <line className="cls-2" x1={148.71} y1={355.45} x2={159.72} y2={355.45} />
                    <line className="cls-2" x1={148.73} y1={558.75} x2={160.57} y2={558.75} />
                    <line className="cls-2" x1={148.71} y1={592.63} x2={160.57} y2={592.63} />
                    <line className="cls-2" x1={148.65} y1={626.51} x2={160.57} y2={626.51} />
                    <line className="cls-2" x1={148.73} y1={659.39} x2={160.57} y2={659.39} />
                    <line className="cls-2" x1={148.72} y1={227.57} x2={233.87} y2={227.57} />
                    <line className="cls-2" x1={148.75} y1={287.69} x2={159.72} y2={287.69} />
                    <line className="cls-2" x1={148.65} y1={253.81} x2={159.72} y2={253.81} />
                    <line className="cls-2" x1={148.95} y1={692.28} x2={160.57} y2={692.28} />
                    <line className="cls-2" x1={148.65} y1={725.16} x2={160.57} y2={725.16} />
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.47 727.24)">
                            <tspan x={0} y={0}>
                                {"1"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.15 693.32)">
                            <tspan x={0} y={0}>
                                {"2"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.05 661.5)">
                            <tspan x={0} y={0}>
                                {"3"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.05 627.04)">
                            <tspan x={0} y={0}>
                                {"4"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.94 594.12)">
                            <tspan x={0} y={0}>
                                {"5"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(214.26 561.62)">
                            <tspan x={0} y={0}>
                                {"6"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(215.26 530.48)">
                            <tspan x={0} y={0}>
                                {"7"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(215.05 494.91)">
                            <tspan x={0} y={0}>
                                {"8"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(215.51 461.1)">
                            <tspan x={0} y={0}>
                                {"9"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(208.26 425.6)">
                            <tspan x={0} y={0}>
                                {"10"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(208.69 390.78)">
                            <tspan x={0} y={0}>
                                {"11"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(208.26 357.43)">
                            <tspan x={0} y={0}>
                                {"12"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(208.26 324.93)">
                            <tspan x={0} y={0}>
                                {"13"}
                            </tspan>
                        </text>
                    </g>
                    <g className="cls-3">
                        <text className="cls-4" transform="translate(208.15 291.23)">
                            <tspan x={0} y={0}>
                                {"14"}
                            </tspan>
                        </text>
                    </g>
                    <line className="cls-2" x1={182.46} y1={201.69} x2={182.56} y2={217.9} />
                    <line className="cls-2" x1={200.01} y1={201.69} x2={200.11} y2={217.9} />
                    <path className="cls-2" d="m182.57,217.9c5.01,4.42,12.52,4.42,17.53,0" />
                    <path className="cls-2" d="m182.57,217.9c5.29-3.6,12.24-3.6,17.54,0" />
                    <line className="cls-2" x1={232.19} y1={321.02} x2={222.43} y2={321.02} />
                    <line className="cls-2" x1={222.42} y1={524.31} x2={234.29} y2={524.31} />
                    <line className="cls-2" x1={222.42} y1={490.43} x2={234.29} y2={490.43} />
                    <line className="cls-2" x1={222.42} y1={456.55} x2={234.29} y2={456.55} />
                    <line className="cls-2" x1={222.42} y1={422.67} x2={234.29} y2={422.67} />
                    <line className="cls-2" x1={222.44} y1={388.78} x2={234.29} y2={388.78} />
                    <line className="cls-2" x1={222.42} y1={354.9} x2={233.43} y2={354.9} />
                    <line className="cls-2" x1={222.44} y1={558.2} x2={234.29} y2={558.2} />
                    <line className="cls-2" x1={222.42} y1={592.08} x2={234.29} y2={592.08} />
                    <line className="cls-2" x1={222.36} y1={625.96} x2={234.29} y2={625.96} />
                    <line className="cls-2" x1={222.44} y1={658.84} x2={234.29} y2={658.84} />
                    <line className="cls-2" x1={222.46} y1={287.14} x2={233.43} y2={287.14} />
                    <line className="cls-2" x1={222.36} y1={253.25} x2={233.43} y2={253.25} />
                    <line className="cls-2" x1={222.67} y1={691.72} x2={234.29} y2={691.72} />
                    <line className="cls-2" x1={222.36} y1={724.61} x2={234.29} y2={724.61} />
                </g>
            </svg>
        </div>
    )
}

