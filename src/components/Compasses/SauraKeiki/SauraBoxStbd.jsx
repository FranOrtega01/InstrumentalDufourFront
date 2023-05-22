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
        width={700} height={700}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 798.16 860.92"
        {...props}
      >
        <defs>
          <style>
            {
              "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-1, .cls-2 {\n        stroke: #000;\n        stroke-miterlimit: 10;\n      }\n\n      .cls-2 {\n        fill: none;\n      }\n\n      .cls-3, .cls-4 {\n        isolation: isolate;\n      }\n\n      .cls-4 {\n        font-family: MyriadPro-Regular, 'Myriad Pro';\n        font-size: 20px;\n      }\n    "
            }
          </style>
        </defs>
        <g>
          <line className="cls-2" x1={110.08} y1={85.55} x2={111.28} y2={860.92} />
          <path d="m111.8,395.6h0c5.48-14.7,11.87-29.08,19.57-42.75,7.62-13.52,16.56-26.37,27.22-37.68,10.48-11.12,22.65-20.67,36.33-27.55,15.9-8,33.44-12.05,51.08-13.8,17.97-1.78,36.07-1.33,54.08-.58,2.2.09,4.4.19,6.6.29.64.03.64-.97,0-1-18.25-.81-36.56-1.54-54.81-.21-17.82,1.3-35.61,4.65-52.03,11.88-14.21,6.25-27,15.38-38.04,26.25-11.09,10.94-20.44,23.56-28.41,36.92-8.09,13.57-14.79,27.93-20.53,42.64-.69,1.77-1.37,3.54-2.03,5.32-.22.61.75.87.97.27h0Z" />
          <line className="cls-2" x1={286.94} y1={273.04} x2={797.66} y2={273.04} />
          <line className="cls-2" x1={286.94} y1={273.04} x2={110.37} y2={272.14} />
          <line className="cls-2" x1={797.66} y1={273.04} x2={797.66} y2={304.97} />
          <line className="cls-2" x1={797.66} y1={304.97} x2={168.45} y2={304.97} />
          <path d="m110.8,89.84h0c-2.35-9.6-5.9-18.91-10.68-27.57-4.31-7.83-9.61-15.12-15.77-21.61-5.66-5.96-12.07-11.25-19.06-15.58-9.17-5.67-19.24-9.72-29.6-12.62-10.23-2.87-20.71-4.66-31.19-6.31-1.29-.2-2.58-.4-3.87-.6-.63-.1-.9.87-.27.96,10.36,1.61,20.74,3.24,30.91,5.8,10.45,2.64,20.66,6.31,30.07,11.6,7.29,4.1,13.99,9.18,19.95,15.05,6.28,6.19,11.73,13.2,16.23,20.79,4.94,8.32,8.73,17.31,11.33,26.63.34,1.23.67,2.47.97,3.71.17.64,1.14.38.98-.25h0Z" />
          <line className="cls-2" x1={318.3} y1={273.04} x2={318.3} y2={284.06} />
          <line className="cls-2" x1={380.63} y1={272.98} x2={380.63} y2={284} />
          <line className="cls-2" x1={508.04} y1={273.77} x2={508.04} y2={284.8} />
          <line className="cls-2" x1={565.27} y1={273.77} x2={565.27} y2={284.8} />
          <line className="cls-2" x1={629.29} y1={273.04} x2={629.29} y2={284.06} />
          <line className="cls-2" x1={443.21} y1={273.77} x2={443.21} y2={284.8} />
          <line className="cls-2" x1={687.3} y1={273.77} x2={687.3} y2={284.8} />
          <line className="cls-2" x1={749.67} y1={273.37} x2={749.67} y2={284.4} />
          <line className="cls-2" x1={347.95} y1={273.98} x2={347.95} y2={285} />
          <line className="cls-2" x1={413.17} y1={271.82} x2={413.17} y2={282.85} />
          <line className="cls-2" x1={474.49} y1={272.9} x2={474.49} y2={283.93} />
          <line className="cls-2" x1={536.65} y1={271.82} x2={536.65} y2={282.85} />
          <line className="cls-2" x1={597.28} y1={273.98} x2={597.28} y2={285} />
          <line className="cls-2" x1={658.3} y1={273.04} x2={658.3} y2={284.06} />
          <line className="cls-2" x1={718.49} y1={273.98} x2={718.49} y2={285} />
        </g>
        <g ref={groupRef} transform={`translate(${currentPos.x},0)`} className="Box" data-name="Box">
          <path
            className="cls-2"
            d="m651.27.5h-283.7c-5.36,1.5-10.85,4.49-11.62,9.87v262.73s303.4,0,303.4,0V8.84c-1.93-3.31-4.99-6.06-8.08-8.34Z"
          />
          <line className="cls-2" x1={513.78} y1={221.66} x2={532.74} y2={221.66} />
          <line className="cls-2" x1={483.17} y1={221.66} x2={502.13} y2={221.66} />
          <line className="cls-2" x1={532.74} y1={221.66} x2={532.74} y2={247.14} />
          <line className="cls-2" x1={483.17} y1={221.66} x2={483.17} y2={247.14} />
          <line className="cls-2" x1={532.74} y1={247.14} x2={513.78} y2={285.06} />
          <line className="cls-2" x1={482.98} y1={247.14} x2={502.13} y2={285.06} />
          <line className="cls-2" x1={502.13} y1={221.66} x2={502.13} y2={285.06} />
          <line className="cls-2" x1={513.78} y1={221.66} x2={513.78} y2={285.06} />
        </g>
        <g id="Capa_3" data-name="Capa 3">
          <path
            className="cls-1"
            d="m711.33,811.43c6.17.13,9.51-4.3,11.93-9.29v-376.03c-.83-2.87-1.88-5.67-3.44-8.12-3.33-5.24-8.61-6.19-14.49-6.03-.82.02-1.54-.12-2.15-.39h-361.98c-7.67,4.13-14.85,11.12-17.93,18.64v361.96c.28.6.46,1.29.46,2.08.21,9.63,5.89,14.48,13.22,17.31h373.08c.39-.09.83-.14,1.3-.13Z"
          />
          <circle className="cls-1" cx={341.98} cy={426.78} r={5.97} />
          <circle className="cls-1" cx={705.28} cy={426.78} r={5.97} />
          <circle className="cls-1" cx={341.98} cy={797.18} r={5.97} />
          <circle className="cls-1" cx={705.28} cy={797.18} r={5.97} />
        </g>
        <g id="Capa_4" data-name="Capa 4">
          <g>
            <line
              className="cls-2"
              x1={323.26}
              y1={733.92}
              x2={344.1}
              y2={733.92}
            />
            <line className="cls-2" x1={344.1} y1={733.92} x2={344.1} y2={727.78} />
            <line
              className="cls-2"
              x1={344.1}
              y1={727.78}
              x2={323.26}
              y2={719.29}
            />
            <line
              className="cls-2"
              x1={323.38}
              y1={743.24}
              x2={344.21}
              y2={743.24}
            />
            <line
              className="cls-2"
              x1={344.21}
              y1={743.24}
              x2={344.21}
              y2={749.37}
            />
            <line
              className="cls-2"
              x1={344.21}
              y1={749.37}
              x2={323.38}
              y2={757.87}
            />
            <line
              className="cls-2"
              x1={323.32}
              y1={664.91}
              x2={344.15}
              y2={664.91}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={664.91}
              x2={344.15}
              y2={658.77}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={658.77}
              x2={323.32}
              y2={650.28}
            />
            <line
              className="cls-2"
              x1={323.43}
              y1={674.23}
              x2={344.27}
              y2={674.23}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={674.23}
              x2={344.27}
              y2={680.37}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={680.37}
              x2={323.43}
              y2={688.86}
            />
            <line
              className="cls-2"
              x1={323.32}
              y1={597.91}
              x2={344.15}
              y2={597.91}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={597.91}
              x2={344.15}
              y2={591.77}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={591.77}
              x2={323.32}
              y2={583.28}
            />
            <line
              className="cls-2"
              x1={323.43}
              y1={607.23}
              x2={344.27}
              y2={607.23}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={607.23}
              x2={344.27}
              y2={613.37}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={613.37}
              x2={323.43}
              y2={621.86}
            />
            <line
              className="cls-2"
              x1={323.32}
              y1={530.91}
              x2={344.15}
              y2={530.91}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={530.91}
              x2={344.15}
              y2={524.77}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={524.77}
              x2={323.32}
              y2={516.28}
            />
            <line
              className="cls-2"
              x1={323.43}
              y1={540.23}
              x2={344.27}
              y2={540.23}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={540.23}
              x2={344.27}
              y2={546.37}
            />
            <line
              className="cls-2"
              x1={344.27}
              y1={546.37}
              x2={323.43}
              y2={554.86}
            />
            <line
              className="cls-2"
              x1={323.21}
              y1={464.74}
              x2={344.04}
              y2={464.74}
            />
            <line
              className="cls-2"
              x1={344.04}
              y1={464.74}
              x2={344.04}
              y2={458.6}
            />
            <line
              className="cls-2"
              x1={344.04}
              y1={458.6}
              x2={323.21}
              y2={450.11}
            />
            <line
              className="cls-2"
              x1={323.32}
              y1={474.06}
              x2={344.15}
              y2={474.06}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={474.06}
              x2={344.15}
              y2={480.19}
            />
            <line
              className="cls-2"
              x1={344.15}
              y1={480.19}
              x2={323.32}
              y2={488.69}
            />
            <line
              className="cls-2"
              x1={721.72}
              y1={735.16}
              x2={700.89}
              y2={735.16}
            />
            <line
              className="cls-2"
              x1={700.89}
              y1={735.16}
              x2={700.89}
              y2={729.02}
            />
            <line
              className="cls-2"
              x1={700.89}
              y1={729.02}
              x2={721.72}
              y2={720.53}
            />
            <line
              className="cls-2"
              x1={721.61}
              y1={744.48}
              x2={700.77}
              y2={744.48}
            />
            <line
              className="cls-2"
              x1={700.77}
              y1={744.48}
              x2={700.77}
              y2={750.62}
            />
            <line
              className="cls-2"
              x1={700.77}
              y1={750.62}
              x2={721.61}
              y2={759.11}
            />
            <line
              className="cls-2"
              x1={721.66}
              y1={666.15}
              x2={700.83}
              y2={666.15}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={666.15}
              x2={700.83}
              y2={660.01}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={660.01}
              x2={721.66}
              y2={651.52}
            />
            <line
              className="cls-2"
              x1={721.55}
              y1={675.47}
              x2={700.72}
              y2={675.47}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={675.47}
              x2={700.72}
              y2={681.61}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={681.61}
              x2={721.55}
              y2={690.1}
            />
            <line
              className="cls-2"
              x1={721.66}
              y1={599.15}
              x2={700.83}
              y2={599.15}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={599.15}
              x2={700.83}
              y2={593.01}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={593.01}
              x2={721.66}
              y2={584.52}
            />
            <line
              className="cls-2"
              x1={721.55}
              y1={608.47}
              x2={700.72}
              y2={608.47}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={608.47}
              x2={700.72}
              y2={614.61}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={614.61}
              x2={721.55}
              y2={623.1}
            />
            <line
              className="cls-2"
              x1={721.66}
              y1={532.15}
              x2={700.83}
              y2={532.15}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={532.15}
              x2={700.83}
              y2={526.01}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={526.01}
              x2={721.66}
              y2={517.52}
            />
            <line
              className="cls-2"
              x1={721.55}
              y1={541.47}
              x2={700.72}
              y2={541.47}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={541.47}
              x2={700.72}
              y2={547.61}
            />
            <line
              className="cls-2"
              x1={700.72}
              y1={547.61}
              x2={721.55}
              y2={556.1}
            />
            <line
              className="cls-2"
              x1={721.78}
              y1={465.98}
              x2={700.94}
              y2={465.98}
            />
            <line
              className="cls-2"
              x1={700.94}
              y1={465.98}
              x2={700.94}
              y2={459.84}
            />
            <line
              className="cls-2"
              x1={700.94}
              y1={459.84}
              x2={721.78}
              y2={451.35}
            />
            <line className="cls-2" x1={721.66} y1={475.3} x2={700.83} y2={475.3} />
            <line
              className="cls-2"
              x1={700.83}
              y1={475.3}
              x2={700.83}
              y2={481.44}
            />
            <line
              className="cls-2"
              x1={700.83}
              y1={481.44}
              x2={721.66}
              y2={489.93}
            />
          </g>
        </g>
        <g id="Capa_5" data-name="Capa 5">
          <rect onClick={e => handlePlate(e)}
            className="cls-2"
            x={344.1}
            y={733.92}
            width={356.68}
            height={10.56}
          />
          <rect onClick={e => handlePlate(e)}
            className="cls-2"
            x={344.1}
            y={664.29}
            width={356.68}
            height={10.56}
          />
          <rect onClick={e => handlePlate(e)}
            className="cls-2"
            x={344.93}
            y={598.53}
            width={356.68}
            height={10.56}
          />
          <rect onClick={e => handlePlate(e)}
            className="cls-2"
            x={344.93}
            y={531.53}
            width={356.68}
            height={10.56}
          />
          <rect onClick={e => handlePlate(e)}
            className="cls-2"
            x={344.1}
            y={464.12}
            width={356.68}
            height={10.56}
          />
        </g>
        <g id="Capa_6" data-name="Capa 6">
          <g className="cls-3">
            <text className="cls-4" transform="translate(308.73 301)">
              <tspan x={0} y={0}>
                {"8"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(370.5 301.22)">
              <tspan x={0} y={0}>
                {"7"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(432.68 301.22)">
              <tspan x={0} y={0}>
                {"6"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(497.56 301)">
              <tspan x={0} y={0}>
                {"5"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(556.56 301)">
              <tspan x={0} y={0}>
                {"4"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(619.85 301)">
              <tspan x={0} y={0}>
                {"3"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(678.67 301)">
              <tspan x={0} y={0}>
                {"2"}
              </tspan>
            </text>
          </g>
          <g className="cls-3">
            <text className="cls-4" transform="translate(740.38 301)">
              <tspan x={0} y={0}>
                {"1"}
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}