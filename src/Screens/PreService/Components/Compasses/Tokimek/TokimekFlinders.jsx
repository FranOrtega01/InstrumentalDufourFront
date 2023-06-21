import React, {useState} from "react"
export const SvgComponent = ({ title, handlePlate, ...props }) => {

  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [fourth, setFourth] = useState('')


  return (
    <div className="svgContainer">
      <h2>{title}</h2>
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 587.82 889.58"
        width={700} height={700}
        {...props}
      >
        <defs>
          <style>
            {
              `
            .cls-1, .cls-2 {fill: none;}
            .cls-3 {  fill: #fff;}
            .cls-3, .cls-2 {  stroke: #000;  stroke-miterlimit: 10;}
            .cls-4 {  font-family: MyriadPro-Regular, 'Myriad Pro';  font-size: 16px;  isolation: isolate;}    `
            }
          </style>
        </defs>
        <g id="Capa_1-2" data-name="Capa 1">
          <ellipse
            className="cls-3"
            cx={295.55}
            cy={835.75}
            rx={199.33}
            ry={53.33}
          />
          <rect
            className="cls-3"
            x={145.8}
            y={98.51}
            width={296.43}
            height={732.32}
          />
          <path
            className="cls-3"
            d="m145.8,830.82c0,12.61,66.36,22.83,148.21,22.83s148.22-10.22,148.22-22.83-66.36-22.83-148.21-22.83-148.22,10.22-148.22,22.83"
          />
          <ellipse
            className="cls-3"
            cx={294.02}
            cy={98.13}
            rx={148.21}
            ry={16.38}
          />
        </g>
        <g id="Magnets" data-name="Layer 11">
          <rect
            className="cls-3"
            x={255.64}
            y={119.36}
            width={69.88}
            height={457.56}
          />
          <ellipse className="cls-3" cx={290.58} cy={576.92} rx={34.94} ry={5.22} />
          <ellipse className="cls-3" cx={290.46} cy={119.36} rx={34.94} ry={5.22} />

          <text className="cls-4" style={{ fontSize: 22 }} transform="translate(285 146.7)">
            <tspan x={0} y={0}>
              {first}
            </tspan>
          </text>

          <line className="cls-2" x1={255.52} y1={155.36} x2={325.4} y2={155.36} />
          <text className="cls-4" style={{ fontSize: 22 }} transform="translate(285 192.37)">
            <tspan x={0} y={0}>
              {second}
            </tspan>
          </text>
          <line className="cls-2" x1={255.52} y1={213.7} x2={325.4} y2={213.7} />
          <text className="cls-4" style={{ fontSize: 22 }} transform="translate(285 274.57)">
            <tspan x={0} y={0}>
              {third}
            </tspan>
          </text>
          <line className="cls-2" x1={255.64} y1={323.83} x2={325.4} y2={323.83} />
          <text className="cls-4" style={{ fontSize: 22 }} transform="translate(285 446.29)">
            <tspan x={0} y={0}>
              {fourth}
            </tspan>
          </text>

          <text className="cls-4" style={{ fontSize: 15 }} transform="translate(330.21 143.7)">
            <tspan x={0} y={0}>
              {"70mm x 35mm"}
            </tspan>
          </text>
          <text className="cls-4" style={{ fontSize: 15 }} transform="translate(330.21 190.37)">
            <tspan x={0} y={0}>
              {"70mm x 75mm"}
            </tspan>
          </text>

          <text className="cls-4" style={{ fontSize: 15 }} transform="translate(330.21 274.57)">
            <tspan x={0} y={0}>
              {"70mm x 150mm"}
            </tspan>
          </text>

          <text className="cls-4" style={{ fontSize: 15 }} transform="translate(330.21 446.29)">
            <tspan x={0} y={0}>
              {"70mm x 300mm"}
            </tspan>
          </text>

        </g>
        <g id="Capa_2" data-name="Capa 2">
          <path d="m442.5,258.94c2.27-8.55,6.53-16.52,12.22-23.29,5.69-6.76,12.76-12.34,20.7-16.22,4.46-2.18,9.18-3.79,14.05-4.79.63-.13.36-1.09-.27-.96-8.8,1.8-17.12,5.65-24.31,11.01-7.18,5.36-13.26,12.19-17.66,19.99-2.48,4.4-4.41,9.1-5.71,13.98-.15.64.82.9.98.28h0Z" />
          <line className="cls-2" x1={489.34} y1={214.17} x2={569.84} y2={214.17} />
          <rect
            className="cls-2"
            x={480.88}
            y={128.42}
            width={106.44}
            height={86.22}
          />
          <line className="cls-2" x1={480.6} y1={128.42} x2={450.23} y2={50.65} />
          <line className="cls-2" x1={586.58} y1={128.42} x2={541.61} y2={50.49} />
          <line className="cls-2" x1={450.23} y1={50.65} x2={541.61} y2={50.49} />
          <line className="cls-2" x1={480.45} y1={210.04} x2={452.89} y2={114.14} />
          <line className="cls-2" x1={450.23} y1={50.65} x2={452.89} y2={114.14} />
          <line className="cls-2" x1={489.34} y1={214.17} x2={442.23} y2={215.31} />
          <line className="cls-2" x1={442.26} y1={205.96} x2={480.88} y2={206.58} />
          <path d="m146.28,266.11c-2.3-8.67-6.62-16.72-12.36-23.59-5.75-6.88-12.96-12.57-21.02-16.51-4.54-2.22-9.34-3.88-14.29-4.89-.63-.13-.9.84-.27.96,8.66,1.77,16.83,5.54,23.92,10.8,7.1,5.27,13.1,12.04,17.44,19.74,2.44,4.33,4.33,8.94,5.6,13.74.18.64,1.15.38.98-.25h0Z" />
          <line className="cls-2" x1={98.48} y1={221.61} x2={17.98} y2={221.61} />
          <rect
            className="cls-2"
            x={0.5}
            y={135.86}
            width={106.44}
            height={86.22}
          />
          <line className="cls-2" x1={107.22} y1={135.86} x2={137.59} y2={58.09} />
          <line className="cls-2" x1={1.24} y1={135.86} x2={46.21} y2={57.93} />
          <line className="cls-2" x1={137.59} y1={58.09} x2={46.21} y2={57.93} />
          <line className="cls-2" x1={107.38} y1={217.48} x2={134.93} y2={121.57} />
          <line className="cls-2" x1={137.59} y1={58.09} x2={134.93} y2={121.57} />
          <line className="cls-2" x1={98.48} y1={221.61} x2={145.59} y2={222.75} />
          <line className="cls-2" x1={145.56} y1={213.4} x2={106.94} y2={214.02} />
        </g>
      </svg>
      <label htmlFor="first">70mm x 35mm</label>
      <input type="number"  min={0}  name="first" onInput={e => setFirst(e.target.value)} />
      <label htmlFor="second">70mm x 75mm</label>
      <input type="number" min={0} name="second" onInput={e => setSecond(e.target.value)} />
      <label htmlFor="third">70mm x 150mm</label>
      <input type="number" min={0} name="third" onInput={e => setThird(e.target.value)} />
      <label htmlFor="fourth">70mm x 300mm</label>
      <input type="number" name="fourth" onInput={e => setFourth(e.target.value)} />
    </div>
  )
}