import * as React from "react"
export const SvgComponent = ({ title, handleCircle,changeCircleColor, ...props }) => {

    const handleAth = (e) => {
        e.stopPropagation();
        const gElement = e.target.parentNode;
        const dataNameValue = gElement.getAttribute('data-name');
        const dataPosition = gElement.getAttribute('data-position');

        const targetElement = document.querySelectorAll(`[data-name="${dataNameValue}"]`);

        if (dataPosition === 'right'){
            const ellipses = targetElement[1].querySelectorAll('ellipse');
            
            ellipses.forEach(el => {
                let id = el.getAttribute('data-id')
                id >= 2 ? id = 0 : id++
                el.setAttribute('data-id', id )
                changeCircleColor(el, id)
            })
            
            let idValue = Number(ellipses[0].getAttribute('data-id'))

            const complementEllipses = targetElement[0].querySelectorAll('ellipse');
            complementEllipses.forEach(el => {
                let id
                if(idValue === 0) id = 0;
                if(idValue === 1) id = 2;
                if(idValue === 2) id = 1;
                el.setAttribute('data-id', id)
                changeCircleColor(el, id)

            })
        }else{
            const ellipses = targetElement[0].querySelectorAll('ellipse');
            
            ellipses.forEach(el => {
                let id = Number(el.getAttribute('data-id'))
                id >= 2 ? id = 0 : id++
                el.setAttribute('data-id', id )
                changeCircleColor(el, id)
            })
            
            let idValue = Number(ellipses[0].getAttribute('data-id')
)
            const complementEllipses = targetElement[1].querySelectorAll('ellipse');
            complementEllipses.forEach(el => {
                let id
                if(idValue === 0) id = 0;
                if(idValue === 1) id = 2;
                if(idValue === 2) id = 1;
                el.setAttribute('data-id', id)
                changeCircleColor(el, id)

            })
        }

        
    };

    return (
        <div className="svgContainer">
            <h2>{title}</h2>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1427.47 997.75"
                {...props}
            >
                <defs>
                    <style>
                        {
                            "\n      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-9 {\n        stroke: #1e1e1c;\n      }\n\n      .cls-3 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-4 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-5 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-6 {\n        stroke-miterlimit: 10;\n        stroke-width: 1px;\n      }\n\n      .cls-10 {\n        fill: #1e1e1c;\n        font-family: MyriadPro-Regular, 'Myriad Pro';\n        font-size: 15.53px;\n      }\n\n      .cls-10, .cls-11 {\n        isolation: isolate;\n      }\n\n      .cls-7, .cls-8, .cls-9, .cls-12 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-8 {\n        stroke: #fff;\n      }\n\n      .cls-9, .cls-12 {\n        fill: none;\n      }\n\n      .cls-12 {\n        stroke: #1d1d1b;\n      }\n    "
                        }
                    </style>
                </defs>
                <g id="Capa_1" data-name="Capa 1">
                    <g id="Capa_1-2" data-name="Capa 1-2">
                        <g>
                            <line
                                className="cls-9"
                                x1={110.51}
                                y1={179.8}
                                x2={110.47}
                                y2={844.99}
                            />
                            <line
                                className="cls-9"
                                x1={425.99}
                                y1={179.84}
                                x2={425.96}
                                y2={845.03}
                            />
                            <ellipse
                                className="cls-9"
                                cx={268.25}
                                cy={184.05}
                                rx={157.74}
                                ry={128.86}
                            />
                            <rect
                                className="cls-8"
                                x={111.76}
                                y={184.05}
                                width={312.22}
                                height={182.74}
                            />
                            <ellipse
                                className="cls-9"
                                cx={268.25}
                                cy={837.17}
                                rx={157.74}
                                ry={128.86}
                            />
                            <rect
                                className="cls-8"
                                x={112.51}
                                y={654.44}
                                width={312.22}
                                height={182.74}
                            />
                        </g>
                        <g>
                            <line
                                className="cls-9"
                                x1={141.8}
                                y1={199.56}
                                x2={141.78}
                                y2={825.2}
                            />
                            <line
                                className="cls-9"
                                x1={396.43}
                                y1={199.6}
                                x2={396.4}
                                y2={825.24}
                            />
                            <ellipse
                                className="cls-9"
                                cx={269.11}
                                cy={203.56}
                                rx={127.31}
                                ry={121.21}
                            />
                            <rect
                                className="cls-8"
                                x={142.82}
                                y={203.56}
                                width={251.99}
                                height={171.87}
                            />
                            <ellipse
                                className="cls-9"
                                cx={269.11}
                                cy={817.86}
                                rx={127.31}
                                ry={121.21}
                            />
                            <rect
                                className="cls-8"
                                x={143.42}
                                y={645.98}
                                width={251.38}
                                height={171.87}
                            />
                        </g>
                        <rect
                            className="cls-8"
                            x={259.4}
                            y={941.97}
                            width={19.42}
                            height={35.01}
                        />
                        <line className="cls-9" x1={259.4} y1={939.06} x2={259.4} y2={966.04} />
                        <line
                            className="cls-9"
                            x1={278.82}
                            y1={938.72}
                            x2={278.82}
                            y2={966.04}
                        />
                        <g>
                            <line
                                className="cls-9"
                                x1={168.83}
                                y1={213.09}
                                x2={168.81}
                                y2={807.31}
                            />
                            <line
                                className="cls-9"
                                x1={366.45}
                                y1={213.13}
                                x2={366.43}
                                y2={807.34}
                            />
                            <ellipse
                                className="cls-9"
                                cx={267.64}
                                cy={216.89}
                                rx={98.81}
                                ry={115.12}
                            />
                            <rect
                                className="cls-8"
                                x={169.62}
                                y={216.89}
                                width={195.56}
                                height={163.24}
                            />
                            <ellipse
                                className="cls-9"
                                cx={267.64}
                                cy={800.33}
                                rx={98.81}
                                ry={115.12}
                            />
                            <rect
                                className="cls-8"
                                x={170.1}
                                y={637.07}
                                width={195.1}
                                height={163.24}
                            />
                        </g>
                        <g>
                            <ellipse
                                className="cls-7"
                                cx={268.16}
                                cy={819}
                                rx={82.01}
                                ry={83.77}
                            />
                            <rect
                                className="cls-1"
                                x={179.34}
                                y={727.47}
                                width={176.54}
                                height={95.15}
                            />
                            <line
                                className="cls-9"
                                x1={186.15}
                                y1={822.61}
                                x2={350.17}
                                y2={822.61}
                            />
                            <line
                                className="cls-9"
                                x1={186.15}
                                y1={822.61}
                                x2={221.59}
                                y2={792.4}
                            />
                            <ellipse className="cls-9" cx={270.15} cy={853} rx={4.44} ry={4.53} />
                            <line
                                className="cls-9"
                                x1={350.17}
                                y1={822.61}
                                x2={314.74}
                                y2={792.4}
                            />
                            <line
                                className="cls-9"
                                x1={221.59}
                                y1={792.4}
                                x2={314.74}
                                y2={792.4}
                            />
                        </g>
                        <g>
                            <ellipse
                                className="cls-7"
                                cx={268.56}
                                cy={202.89}
                                rx={82.01}
                                ry={83.77}
                            />
                            <rect
                                className="cls-1"
                                x={180.84}
                                y={199.28}
                                width={176.54}
                                height={95.15}
                            />
                            <line
                                className="cls-9"
                                x1={350.57}
                                y1={199.27}
                                x2={186.54}
                                y2={199.27}
                            />
                            <line
                                className="cls-9"
                                x1={350.57}
                                y1={199.27}
                                x2={315.13}
                                y2={229.5}
                            />
                            <ellipse
                                className="cls-9"
                                cx={266.58}
                                cy={168.89}
                                rx={4.44}
                                ry={4.53}
                            />
                            <line
                                className="cls-9"
                                x1={186.54}
                                y1={199.27}
                                x2={221.98}
                                y2={229.5}
                            />
                            <line
                                className="cls-9"
                                x1={315.13}
                                y1={229.5}
                                x2={221.98}
                                y2={229.5}
                            />
                        </g>
                        <line className="cls-9" x1={221.59} y1={792.4} x2={221.98} y2={229.5} />
                        <line className="cls-9" x1={314.74} y1={792.4} x2={315.13} y2={229.5} />
                        <line
                            className="cls-9"
                            x1={221.78}
                            y1={752.89}
                            x2={314.74}
                            y2={752.89}
                        />
                        <line className="cls-9" x1={221.78} y1={716.6} x2={314.74} y2={716.6} />
                        <line className="cls-9" x1={222} y1={680.31} x2={314.96} y2={680.31} />
                        <line className="cls-9" x1={222} y1={644.02} x2={314.96} y2={644.02} />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={607.73}
                            x2={315.03}
                            y2={607.73}
                        />
                        <line
                            className="cls-9"
                            x1={221.4}
                            y1={571.44}
                            x2={314.35}
                            y2={571.44}
                        />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={535.15}
                            x2={315.03}
                            y2={535.15}
                        />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={498.86}
                            x2={315.03}
                            y2={498.86}
                        />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={462.57}
                            x2={315.03}
                            y2={462.57}
                        />
                        <line className="cls-9" x1={222} y1={426.28} x2={314.96} y2={426.28} />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={389.99}
                            x2={315.03}
                            y2={389.99}
                        />
                        <line className="cls-9" x1={221.88} y1={353.7} x2={314.84} y2={353.7} />
                        <line
                            className="cls-9"
                            x1={222.09}
                            y1={317.41}
                            x2={315.03}
                            y2={317.41}
                        />
                        <line className="cls-9" x1={222} y1={281.12} x2={314.96} y2={281.12} />
                        <line
                            className="cls-9"
                            x1={221.69}
                            y1={238.43}
                            x2={314.64}
                            y2={238.43}
                        />
                        <rect
                            className="cls-1"
                            x={257.3}
                            y={242.18}
                            width={25.01}
                            height={544.57}
                        />
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.26 757.46) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"1"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(267.64 718.7) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"2"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.26 647.89) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"4"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.26 685.21) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"3"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.26 613.2) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"5"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.9 575.72) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"6"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(267.21 539.18) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"7"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(266.72 503.14) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"8"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(265.51 467.72) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"9"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(261.2 431.17) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"10"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(261.2 394.24) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"11"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(261.83 358.52) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"12"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(262.78 321.18) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"13"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(261.2 286.67) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"14"}
                                </tspan>
                            </text>
                        </g>
                        <ellipse
                            className="cls-7"
                            cx={270.76}
                            cy={624.24}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={270.76}
                            cy={587.95}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse className="cls-7" cx={271.71} cy={553.3} rx={3.92} ry={4.01} />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={517.01}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={480.72}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={444.43}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={408.14}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={371.85}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={335.56}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={271.15}
                            cy={299.27}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={269.81}
                            cy={262.98}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={270.76}
                            cy={660.53}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={270.76}
                            cy={696.82}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={270.76}
                            cy={734.75}
                            rx={3.92}
                            ry={4.01}
                        />
                        <line className="cls-9" x1={360.1} y1={766.27} x2={360.1} y2={242.18} />
                        <line
                            className="cls-9"
                            x1={320.46}
                            y1={775.03}
                            x2={360.1}
                            y2={804.04}
                        />
                        <line className="cls-9" x1={360.1} y1={766.27} x2={360.1} y2={804.04} />
                        <line className="cls-9" x1={325.78} y1={229.5} x2={360.1} y2={242.18} />
                    </g>
                    {/* Magnets Left */}
                    <g id="Capa_2" data-name="Capa 2">
                        {/* Fore Magnets Left*/}
                        <g >

                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={746.72}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={711.48}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={676.25}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={641.02}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={605.77}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={570.54}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={535.31}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={500.07}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={464.83}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={429.6}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={394.36}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={359.13}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={323.9}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={194.39}
                                cy={288.65}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}

                            />
                        </g>
                        {/* Ath left */}
                        <g>
                            {/* 1 */}
                            <g data-name={'1'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.87}
                                    cy={288.02}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={288.67}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 2 */}
                            <g data-name={'2'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.85}
                                    cy={323.23}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={323.57}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 3 */}
                            <g data-name={'3'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.85}
                                    cy={358.47}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={359.15}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 4 */}
                            <g data-name={'4'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.85}
                                    cy={393.71}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={394.26}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 5 */}
                            <g data-name={'5'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.86}
                                    cy={428.94}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={429.62}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 6 */}
                            <g data-name={'6'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.85}
                                    cy={464.17}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={464.85}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 7 */}
                            <g data-name={'7'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.85}
                                    cy={499.42}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={500.09}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 8 */}
                            <g data-name={'8'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.83}
                                    cy={534.63}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.54}
                                    cy={535.33}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 9 */}
                            <g data-name={'9'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-5"
                                    cx={340.83}
                                    cy={569.87}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={571.44}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 10 */}
                            <g data-name={'10'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-3"
                                    cx={340.83}
                                    cy={605.1}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={605.89}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 11 */}
                            <g data-name={'11'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-3"
                                    cx={340.84}
                                    cy={640.33}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={641.02}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 12 */}
                            <g data-name={'12'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-3"
                                    cx={340.84}
                                    cy={675.57}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={676.25}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 13 */}
                            <g data-name={'13'} data-position={'left'} className="pointer" onClick={handleAth}>

                                <ellipse
                                    className="cls-3"
                                    cx={340.83}
                                    cy={710.81}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={711.48}
                                    rx={15.05}
                                    ry={15.37}
                                />

                            </g>
                            {/* 14 */}
                            <g data-name={'14'} data-position={'left'} className="pointer" onClick={handleAth}>
                                <ellipse
                                    className="cls-3"
                                    cx={340.83}
                                    cy={746.04}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-5"
                                    cx={335.52}
                                    cy={745.79}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Capa_2-2" data-name="Capa 2">
                    <g id="Capa_1-2-2" data-name="Capa 1-2">
                        <g>
                            <line
                                className="cls-9"
                                x1={989.88}
                                y1={181.55}
                                x2={989.85}
                                y2={846.74}
                            />
                            <line
                                className="cls-9"
                                x1={1305.36}
                                y1={181.59}
                                x2={1305.33}
                                y2={846.78}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1147.62}
                                cy={185.8}
                                rx={157.74}
                                ry={128.86}
                            />
                            <rect
                                className="cls-8"
                                x={991.14}
                                y={185.8}
                                width={312.22}
                                height={182.74}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1147.62}
                                cy={838.92}
                                rx={157.74}
                                ry={128.86}
                            />
                            <rect
                                className="cls-8"
                                x={991.88}
                                y={656.19}
                                width={312.22}
                                height={182.74}
                            />
                        </g>
                        <g>
                            <line
                                className="cls-9"
                                x1={1021.17}
                                y1={201.31}
                                x2={1021.15}
                                y2={826.95}
                            />
                            <line
                                className="cls-9"
                                x1={1275.8}
                                y1={201.35}
                                x2={1275.77}
                                y2={826.99}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1148.49}
                                cy={205.31}
                                rx={127.31}
                                ry={121.21}
                            />
                            <rect
                                className="cls-8"
                                x={1022.19}
                                y={205.31}
                                width={251.99}
                                height={171.87}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1148.49}
                                cy={819.6}
                                rx={127.31}
                                ry={121.21}
                            />
                            <rect
                                className="cls-8"
                                x={1022.8}
                                y={647.73}
                                width={251.38}
                                height={171.87}
                            />
                        </g>
                        <rect
                            className="cls-8"
                            x={1138.78}
                            y={943.72}
                            width={19.42}
                            height={35.01}
                        />
                        <line
                            className="cls-9"
                            x1={1138.78}
                            y1={940.81}
                            x2={1138.78}
                            y2={967.79}
                        />
                        <line
                            className="cls-9"
                            x1={1158.2}
                            y1={940.47}
                            x2={1158.2}
                            y2={967.79}
                        />
                        <g>
                            <line
                                className="cls-9"
                                x1={1048.2}
                                y1={214.84}
                                x2={1048.19}
                                y2={809.05}
                            />
                            <line
                                className="cls-9"
                                x1={1245.82}
                                y1={214.88}
                                x2={1245.8}
                                y2={809.09}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1147.01}
                                cy={218.64}
                                rx={98.81}
                                ry={115.12}
                            />
                            <rect
                                className="cls-8"
                                x={1048.99}
                                y={218.64}
                                width={195.56}
                                height={163.24}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1147.01}
                                cy={802.07}
                                rx={98.81}
                                ry={115.12}
                            />
                            <rect
                                className="cls-8"
                                x={1049.47}
                                y={638.82}
                                width={195.1}
                                height={163.24}
                            />
                        </g>
                        <g>
                            <ellipse
                                className="cls-7"
                                cx={1147.54}
                                cy={820.75}
                                rx={82.01}
                                ry={83.77}
                            />
                            <rect
                                className="cls-1"
                                x={1058.71}
                                y={729.21}
                                width={176.54}
                                height={95.15}
                            />
                            <line
                                className="cls-9"
                                x1={1065.53}
                                y1={824.36}
                                x2={1229.55}
                                y2={824.36}
                            />
                            <line
                                className="cls-9"
                                x1={1065.53}
                                y1={824.36}
                                x2={1100.97}
                                y2={794.14}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1149.52}
                                cy={854.75}
                                rx={4.44}
                                ry={4.53}
                            />
                            <line
                                className="cls-9"
                                x1={1229.55}
                                y1={824.36}
                                x2={1194.11}
                                y2={794.14}
                            />
                            <line
                                className="cls-9"
                                x1={1100.97}
                                y1={794.14}
                                x2={1194.11}
                                y2={794.14}
                            />
                        </g>
                        <g>
                            <ellipse
                                className="cls-7"
                                cx={1147.93}
                                cy={204.64}
                                rx={82.01}
                                ry={83.77}
                            />
                            <rect
                                className="cls-1"
                                x={1060.21}
                                y={201.03}
                                width={176.54}
                                height={95.15}
                            />
                            <line
                                className="cls-9"
                                x1={1229.94}
                                y1={201.02}
                                x2={1065.92}
                                y2={201.02}
                            />
                            <line
                                className="cls-9"
                                x1={1229.94}
                                y1={201.02}
                                x2={1194.5}
                                y2={231.24}
                            />
                            <ellipse
                                className="cls-9"
                                cx={1145.95}
                                cy={170.64}
                                rx={4.44}
                                ry={4.53}
                            />
                            <line
                                className="cls-9"
                                x1={1065.92}
                                y1={201.02}
                                x2={1101.36}
                                y2={231.24}
                            />
                            <line
                                className="cls-9"
                                x1={1194.5}
                                y1={231.24}
                                x2={1101.36}
                                y2={231.24}
                            />
                        </g>
                        <line
                            className="cls-9"
                            x1={1100.97}
                            y1={794.14}
                            x2={1101.36}
                            y2={231.24}
                        />
                        <line
                            className="cls-9"
                            x1={1194.11}
                            y1={794.14}
                            x2={1194.5}
                            y2={231.24}
                        />
                        <line
                            className="cls-9"
                            x1={1101.16}
                            y1={754.64}
                            x2={1194.11}
                            y2={754.64}
                        />
                        <line
                            className="cls-9"
                            x1={1101.16}
                            y1={718.35}
                            x2={1194.11}
                            y2={718.35}
                        />
                        <line
                            className="cls-9"
                            x1={1101.38}
                            y1={682.06}
                            x2={1194.33}
                            y2={682.06}
                        />
                        <line
                            className="cls-9"
                            x1={1101.38}
                            y1={645.77}
                            x2={1194.33}
                            y2={645.77}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={609.48}
                            x2={1194.41}
                            y2={609.48}
                        />
                        <line
                            className="cls-9"
                            x1={1100.78}
                            y1={573.19}
                            x2={1193.72}
                            y2={573.19}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={536.9}
                            x2={1194.41}
                            y2={536.9}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={500.61}
                            x2={1194.41}
                            y2={500.61}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={464.32}
                            x2={1194.41}
                            y2={464.32}
                        />
                        <line
                            className="cls-9"
                            x1={1101.38}
                            y1={428.03}
                            x2={1194.33}
                            y2={428.03}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={391.74}
                            x2={1194.41}
                            y2={391.74}
                        />
                        <line
                            className="cls-9"
                            x1={1101.25}
                            y1={355.45}
                            x2={1194.21}
                            y2={355.45}
                        />
                        <line
                            className="cls-9"
                            x1={1101.46}
                            y1={319.16}
                            x2={1194.41}
                            y2={319.16}
                        />
                        <line
                            className="cls-9"
                            x1={1101.38}
                            y1={282.87}
                            x2={1194.33}
                            y2={282.87}
                        />
                        <line
                            className="cls-9"
                            x1={1101.06}
                            y1={240.17}
                            x2={1194.01}
                            y2={240.17}
                        />
                        <rect
                            className="cls-1"
                            x={1136.68}
                            y={243.93}
                            width={25.01}
                            height={544.57}
                        />
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1145.64 759.2) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"1"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1147.01 720.45) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"2"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1145.64 649.63) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"4"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1145.64 686.95) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"3"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1145.64 614.95) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"5"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1146.27 577.47) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"6"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1146.59 540.93) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"7"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1146.09 504.89) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"8"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1144.89 469.46) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"9"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1140.57 432.91) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"10"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1140.57 395.98) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"11"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1141.2 360.26) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"12"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1142.15 322.93) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"13"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-11">
                            <text
                                className="cls-10"
                                transform="translate(1140.57 288.41) scale(.98 1)"
                            >
                                <tspan x={0} y={0}>
                                    {"14"}
                                </tspan>
                            </text>
                        </g>
                        <ellipse
                            className="cls-7"
                            cx={1150.13}
                            cy={625.99}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.13}
                            cy={589.7}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1151.08}
                            cy={555.05}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={518.76}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={482.47}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={446.18}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={409.89}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={373.6}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={337.31}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.52}
                            cy={301.02}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1149.18}
                            cy={264.73}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.13}
                            cy={662.28}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.13}
                            cy={698.57}
                            rx={3.92}
                            ry={4.01}
                        />
                        <ellipse
                            className="cls-7"
                            cx={1150.13}
                            cy={736.5}
                            rx={3.92}
                            ry={4.01}
                        />
                        <line
                            className="cls-9"
                            x1={1054.46}
                            y1={243.93}
                            x2={1054.46}
                            y2={768.02}
                        />
                        <line
                            className="cls-9"
                            x1={1054.46}
                            y1={805.79}
                            x2={1094.1}
                            y2={776.78}
                        />
                        <line
                            className="cls-9"
                            x1={1054.46}
                            y1={805.79}
                            x2={1054.46}
                            y2={768.02}
                        />
                        <line
                            className="cls-9"
                            x1={1054.46}
                            y1={243.93}
                            x2={1088.78}
                            y2={231.24}
                        />
                    </g>
                    {/* Magnets Right */}
                    <g id="Capa_2-3" data-name="Capa 2">
                        {/* FA Right */}
                        <g>
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={750.84}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={715.59}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={680.35}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={645.13}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={609.89}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={574.66}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={539.41}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={504.18}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={468.95}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={433.72}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={398.47}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={363.24}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={328.01}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                            <ellipse
                                className="cls-7 pointer"
                                cx={1221.71}
                                cy={292.77}
                                rx={15.05}
                                ry={15.37}
                                onClick={e => handleCircle(e)}
                            />
                        </g>
                        <g>
                            {/* 1 */}
                            <g data-name={'1'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-6"
                                    cx={1073.53}
                                    cy={287.64}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={288.33}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 2 */}
                            <g data-name={'2'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={322.9}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={323.24}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 3 */}
                            <g data-name={'3'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={358.13}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={358.81}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 4 */}
                            <g data-name={'4'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={393.37}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={393.91}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 5 */}
                            <g data-name={'5'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={428.6}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={429.28}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 6 */}
                            <g data-name={'6'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={463.83}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={464.51}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 7 */}
                            <g data-name={'7'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={499.08}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={499.75}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 8 */}
                            <g data-name={'8'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-2"
                                    cx={1073.52}
                                    cy={534.31}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={534.99}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 9 */}
                            <g data-name={'9'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={569.54}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={571.12}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 10 */}
                            <g data-name={'10'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={604.78}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={605.57}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 11 */}
                            <g data-name={'11'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={640.02}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={640.69}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 12 */}
                            <g data-name={'12'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={675.25}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={675.93}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                            {/* 13 */}
                            <g data-name={'13'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={710.49}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={711.16}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g >
                            {/* 14 */}
                            <g data-name={'14'} data-position={'right'} className="pointer"  onClick={handleAth}>
                                <ellipse
                                    className="cls-7"
                                    cx={1073.53}
                                    cy={745.72}
                                    rx={15.05}
                                    ry={15.37}
                                />
                                <ellipse
                                    className="cls-7"
                                    cx={1078.83}
                                    cy={745.48}
                                    rx={15.05}
                                    ry={15.37}
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Capa_3" data-name="Capa 3">
                    <line
                        className="cls-12"
                        x1={515.83}
                        y1={734.32}
                        x2={515.83}
                        y2={234.32}
                    />
                    <line
                        className="cls-12"
                        x1={904.83}
                        y1={734.32}
                        x2={904.83}
                        y2={234.32}
                    />
                    <path
                        className="cls-12"
                        d="m515.83,234.32c127.6,32.76,261.4,32.76,388.99,0"
                    />
                    <path
                        className="cls-12"
                        d="m515.83,734.32c126.07,43.16,262.92,43.16,388.99,0"
                    />
                    <line className="cls-12" x1={0.5} y1={0.71} x2={0.5} y2={969.23} />
                    <line className="cls-12" x1={1426.97} y1={0} x2={1426.94} y2={969.23} />
                    <path
                        className="cls-12"
                        d="m.5,4.49c473.1,67.33,953.34,67.33,1426.44,0"
                    />
                    <path
                        className="cls-12"
                        d="m.5,969.23c474.75,37.36,951.69,37.36,1426.44,0"
                    />
                    <circle className="cls-12" cx={96.72} cy={64.45} r={6.52} />
                    <circle className="cls-12" cx={448.62} cy={141.03} r={6.52} />
                    <circle className="cls-12" cx={461.65} cy={851.51} r={6.52} />
                    <circle className="cls-12" cx={90.2} cy={923.71} r={6.52} />
                    <circle className="cls-12" cx={1324.46} cy={63.25} r={6.52} />
                    <circle className="cls-12" cx={972.56} cy={139.83} r={6.52} />
                    <circle className="cls-12" cx={959.53} cy={850.31} r={6.52} />
                    <circle className="cls-12" cx={1330.98} cy={922.51} r={6.52} />
                </g>
            </svg>

        </div>
    )
}
