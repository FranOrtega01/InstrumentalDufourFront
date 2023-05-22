import React, { useState, useRef } from "react";
import '../svg.scss'
export const SvgComponent = ({ title, ...props }) => {

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
      width={700} height={700}
       onMouseDown={handleMouseDown}
       onMouseUp={handleMouseUp}
       onMouseMove={handleMouseMove}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 587.83 943.92"
        {...props}
      >
        <defs>
          <style>
            {
              "\n      .cls-1, .cls-2, .cls-3, .cls-4 {\n        fill: #fff;\n      }\n\n      .cls-5 {\n        fill: #1f140f;\n      }\n\n      .cls-2, .cls-3, .cls-4, .cls-6 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-2, .cls-6 {\n        stroke: #1f140f;\n      }\n\n      .cls-3 {\n        stroke: #221a16;\n      }\n\n      .cls-4 {\n        stroke: #030202;\n      }\n\n      .cls-6 {\n        fill: none;\n      }\n\n      .cls-7 {\n        fill: #5c5b5f;\n        font-family: MyriadPro-Regular, 'Myriad Pro';\n        font-size: 21px;\n      }\n    "
            }
          </style>
        </defs>
        <g id="Capa_1" data-name="Capa 1">
          <ellipse
            className="cls-2"
            cx={295.55}
            cy={890.09}
            rx={199.33}
            ry={53.33}
          />
          <rect
            className="cls-2"
            x={145.8}
            y={152.84}
            width={296.43}
            height={732.32}
          />
          <path
            className="cls-2"
            d="m145.8,885.16c0,12.61,66.36,22.83,148.21,22.83s148.21-10.22,148.21-22.83-66.36-22.83-148.21-22.83-148.21,10.22-148.21,22.83"
          />
          <ellipse
            className="cls-2"
            cx={294.02}
            cy={152.47}
            rx={148.21}
            ry={16.38}
          />
        </g>
        <g id="Capa_2" data-name="Capa 2">
          <path
            className="cls-5"
            d="m442.5,313.28c2.27-8.55,6.53-16.52,12.22-23.29s12.76-12.34,20.7-16.22c4.46-2.18,9.18-3.79,14.05-4.79.63-.13.36-1.09-.27-.96-8.8,1.8-17.12,5.65-24.31,11.01s-13.26,12.19-17.66,19.99c-2.48,4.4-4.41,9.1-5.71,13.98-.17.62.8.89.96.27h0Z"
          />
          <line className="cls-6" x1={489.34} y1={268.5} x2={569.85} y2={268.5} />
          <rect
            className="cls-6"
            x={480.88}
            y={182.76}
            width={106.44}
            height={86.22}
          />
          <line className="cls-6" x1={480.6} y1={182.76} x2={450.23} y2={104.99} />
          <line className="cls-6" x1={586.59} y1={182.76} x2={541.61} y2={104.82} />
          <line className="cls-6" x1={450.23} y1={104.99} x2={541.61} y2={104.82} />
          <line className="cls-6" x1={480.45} y1={264.37} x2={452.9} y2={168.47} />
          <line className="cls-6" x1={450.23} y1={104.99} x2={452.9} y2={168.47} />
          <line className="cls-6" x1={489.34} y1={268.5} x2={442.23} y2={269.65} />
          <line className="cls-6" x1={442.26} y1={260.29} x2={480.88} y2={260.92} />
          <path
            className="cls-5"
            d="m146.29,320.45c-2.3-8.67-6.62-16.72-12.36-23.59s-12.96-12.57-21.02-16.51c-4.54-2.22-9.34-3.88-14.29-4.89-.63-.13-.9.84-.27.96,8.66,1.77,16.83,5.54,23.92,10.8,7.1,5.27,13.1,12.04,17.44,19.74,2.44,4.33,4.33,8.94,5.6,13.74.17.62,1.13.36.96-.27h0Z"
          />
          <line className="cls-6" x1={98.48} y1={275.94} x2={17.98} y2={275.94} />
          <rect
            className="cls-6"
            x={0.5}
            y={190.19}
            width={106.44}
            height={86.22}
            transform="translate(107.44 466.61) rotate(-180)"
          />
          <line className="cls-6" x1={107.22} y1={190.19} x2={137.59} y2={112.42} />
          <line className="cls-6" x1={1.24} y1={190.19} x2={46.22} y2={112.26} />
          <line className="cls-6" x1={137.59} y1={112.42} x2={46.22} y2={112.26} />
          <line className="cls-6" x1={107.38} y1={271.81} x2={134.93} y2={175.91} />
          <line className="cls-6" x1={137.59} y1={112.42} x2={134.93} y2={175.91} />
          <line className="cls-6" x1={98.48} y1={275.94} x2={145.59} y2={277.09} />
          <line className="cls-6" x1={145.56} y1={267.73} x2={106.94} y2={268.35} />
        </g>
        <g id="Capa_4" data-name="Capa 4">
          <line className="cls-6" x1={381.58} y1={288.02} x2={379.75} y2={851.22} />
          <path
            className="cls-5"
            d="m381.35,288.06c6.35.94,13.02,1,19.27-.6,4.9-1.25,9.79-3.53,13.27-7.29,1.9-2.05,3.29-4.5,3.99-7.21.16-.62-.8-.89-.96-.27-2.58,9.95-13.96,14.22-23.22,14.86-4.03.28-8.09.12-12.08-.47-.63-.09-.9.87-.27.96h0Z"
          />
          <line className="cls-6" x1={417.4} y1={272.83} x2={417.4} y2={841.85} />
          <path
            className="cls-5"
            d="m381.33,851.59c6.21,1.3,12.59,1.15,18.83.18,4.9-.76,10.24-1.79,14.32-4.8,1.99-1.47,3.55-3.4,4.24-5.8.18-.62-.79-.88-.96-.27-1.24,4.31-5.44,6.66-9.43,8-2.43.81-4.96,1.32-7.49,1.75-2.99.51-6.02.82-9.05.88-3.42.07-6.84-.21-10.19-.91-.63-.13-.9.83-.27.96h0Z"
          />
        </g>
        <g id="Capa_6" data-name="Capa 6">
          <circle className="cls-6" cx={399.6} cy={311.58} r={8.76} />
          <circle className="cls-6" cx={399.6} cy={339.06} r={8.76} />
          <circle className="cls-6" cx={399.6} cy={366.54} r={8.76} />
          <circle className="cls-6" cx={399.6} cy={394.02} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={421.5} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={448.99} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={476.47} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={503.95} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={531.43} r={8.76} />
          <circle className="cls-6" cx={399.6} cy={558.91} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={586.39} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={613.87} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={641.35} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={668.83} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={696.31} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={723.79} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={751.27} r={8.76} />
          <circle className="cls-6" cx={399.23} cy={778.75} r={8.76} />
          <circle className="cls-6" cx={399.65} cy={806.23} r={8.76} />
          <circle className="cls-6" cx={399.23} cy={833.71} r={8.76} />
        </g>
        <g id="Capa_7" data-name="Capa 7">
          <text
            id="_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_"
            data-name="12345 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
            className="cls-7"
            transform="translate(460.76 305.48)"
          >
            <tspan x={0} y={0}>
              {"20"}
            </tspan>
            <tspan x={0} y={28}>
              {"19"}
            </tspan>
            <tspan x={0} y={56}>
              {"18"}
            </tspan>
            <tspan x={0} y={84}>
              {"17"}
            </tspan>
            <tspan x={0} y={112}>
              {"16"}
            </tspan>
            <tspan x={0} y={140}>
              {"15"}
            </tspan>
            <tspan x={0} y={168}>
              {"14"}
            </tspan>
            <tspan x={0} y={196}>
              {"13"}
            </tspan>
            <tspan x={0} y={224}>
              {"12"}
            </tspan>
            <tspan x={0} y={252}>
              {"11"}
            </tspan>
            <tspan x={0} y={280}>
              {"10"}
            </tspan>
            <tspan x={0} y={308}>
              {"09"}
            </tspan>
            <tspan x={0} y={336}>
              {"08"}
            </tspan>
            <tspan x={0} y={364}>
              {"07"}
            </tspan>
            <tspan x={0} y={392}>
              {"06"}
            </tspan>
            <tspan x={0} y={420}>
              {"05"}
            </tspan>
            <tspan x={0} y={448}>
              {"04"}
            </tspan>
            <tspan x={0} y={476}>
              {"03"}
            </tspan>
            <tspan x={0} y={504}>
              {"02"}
            </tspan>
            <tspan x={0} y={532}>
              {"01"}
            </tspan>
          </text>
        </g>
        <g id="SauraHeelingsChain" ref={groupRef} transform={`translate(0,${currentPos.y})`} data-name="Capa 8">
          <g>
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={215.76}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={237.03}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={203.43}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={247.14}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={226.4}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={274.47}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={295.74}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={262.13}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={305.84}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={285.1}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={330.68}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={351.95}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={318.34}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={362.05}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={340.2}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={374.39}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={395.66}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={362.05}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={405.76}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={385.02}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={418.1}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={439.37}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={405.76}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={449.47}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={428.73}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={461.51}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={482.77}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={449.17}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={492.88}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={472.14}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={507.14}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={528.41}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={493.41}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={538.52}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={517.78}
              rx={5.36}
              ry={10.63}
            />
            <circle className="cls-3" cx={354.16} cy={560.93} r={13.48} />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={136.89}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={158.16}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={124.56}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={168.27}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={147.53}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={195.6}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={216.87}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={183.26}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={226.97}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={56.92}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={78.19}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={44.58}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={88.29}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={67.56}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={115.62}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={136.89}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={103.29}
              rx={5.36}
              ry={10.63}
            />
            <ellipse className="cls-4" cx={354.16} cy={147} rx={5.36} ry={10.63} />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={13.35}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={34.62}
              rx={5.36}
              ry={10.63}
            />
            <ellipse
              className="cls-4"
              cx={354.16}
              cy={44.73}
              rx={5.36}
              ry={10.63}
            />
          </g>
        </g>
        <g id="Capa_9" data-name="Capa 9">
          <rect
            className="cls-1"
            x={331.23}
            y={168.84}
            width={36.41}
            height={90.72}
          />
          <ellipse
            className="cls-2"
            cx={294.55}
            cy={152.84}
            rx={148.21}
            ry={16.38}
          />
          <rect className="cls-1" x={335.15} width={46.33} height={136.09} />
        </g>
      </svg>
    </div>
  )
}
