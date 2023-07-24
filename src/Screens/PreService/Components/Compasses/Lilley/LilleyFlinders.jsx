import React, {useState} from "react"
export const SvgComponent = ({ title, ...props }) => {

    const [first, setFirst] = useState('')

    return (
        <div className="svgContainer">
            <h2>{title}</h2>
            <svg
                id="Capa_1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 587.82 839.59"
                {...props}
            >
                <defs>
                    <style>
                        {
                            ".cls-1 {font-family: MyriadPro-Regular, 'Myriad Pro';  font-size: 12px;}.cls-2 {fill: #fff;}.cls-2, .cls-3 {stroke: #000;  stroke-miterlimit: 10;}.cls-3 {fill: none;}"
                        }
                    </style>
                </defs>
                <g id="Capa_1-2" data-name="Capa 1-2">
                    <ellipse
                        className="cls-2"
                        cx={295.55}
                        cy={785.76}
                        rx={199.33}
                        ry={53.33}
                    />
                    <rect
                        className="cls-2"
                        x={145.8}
                        y={48.52}
                        width={296.43}
                        height={732.32}
                    />
                    <path
                        className="cls-2"
                        d="m145.8,780.83c0,12.61,66.36,22.83,148.21,22.83s148.22-10.22,148.22-22.83-66.36-22.83-148.21-22.83-148.22,10.22-148.22,22.83"
                    />
                    <ellipse
                        className="cls-2"
                        cx={294.02}
                        cy={48.14}
                        rx={148.21}
                        ry={16.38}
                    />
                </g>
                <g id="Capa_2" data-name="Capa 2">
                    <path d="m442.5,208.95c2.27-8.55,6.53-16.52,12.22-23.29,5.69-6.76,12.76-12.34,20.7-16.22,4.46-2.18,9.18-3.79,14.05-4.79.63-.13.36-1.09-.27-.96-8.8,1.8-17.12,5.65-24.31,11.01-7.18,5.36-13.26,12.19-17.66,19.99-2.48,4.4-4.41,9.1-5.71,13.98-.15.64.82.9.98.28h0Z" />
                    <line className="cls-3" x1={489.34} y1={164.18} x2={569.84} y2={164.18} />
                    <rect
                        className="cls-3"
                        x={480.88}
                        y={78.43}
                        width={106.44}
                        height={86.22}
                    />
                    <line className="cls-3" x1={480.6} y1={78.43} x2={450.23} y2={0.66} />
                    <line className="cls-3" x1={586.58} y1={78.43} x2={541.61} y2={0.5} />
                    <line className="cls-3" x1={450.23} y1={0.66} x2={541.61} y2={0.5} />
                    <line className="cls-3" x1={480.45} y1={160.05} x2={452.89} y2={64.15} />
                    <line className="cls-3" x1={450.23} y1={0.66} x2={452.89} y2={64.15} />
                    <line className="cls-3" x1={489.34} y1={164.18} x2={442.23} y2={165.32} />
                    <line className="cls-3" x1={442.26} y1={155.97} x2={480.88} y2={156.59} />
                    <path d="m146.28,216.12c-2.3-8.67-6.62-16.72-12.36-23.59-5.75-6.88-12.96-12.57-21.02-16.51-4.54-2.22-9.34-3.88-14.29-4.89-.63-.13-.9.84-.27.96,8.66,1.77,16.83,5.54,23.92,10.8,7.1,5.27,13.1,12.04,17.44,19.74,2.44,4.33,4.33,8.94,5.6,13.74.18.64,1.15.38.98-.25h0Z" />
                    <line className="cls-3" x1={98.48} y1={171.62} x2={17.98} y2={171.62} />
                    <rect className="cls-3" x={0.5} y={85.87} width={106.44} height={86.22} />
                    <line className="cls-3" x1={107.22} y1={85.87} x2={137.59} y2={8.1} />
                    <line className="cls-3" x1={1.24} y1={85.87} x2={46.21} y2={7.94} />
                    <line className="cls-3" x1={137.59} y1={8.1} x2={46.21} y2={7.94} />
                    <line className="cls-3" x1={107.38} y1={167.49} x2={134.93} y2={71.58} />
                    <line className="cls-3" x1={137.59} y1={8.1} x2={134.93} y2={71.58} />
                    <line className="cls-3" x1={98.48} y1={171.62} x2={145.59} y2={172.76} />
                    <line className="cls-3" x1={145.56} y1={163.41} x2={106.94} y2={164.03} />
                </g>
                <rect className="cls-2" x={248} y={69.15} width={92} height={366.86} />
                <text className="cls-1" transform="translate(288 250)" 
                    style={{ fontSize: 22}}
                    >
                    <tspan x={0} y={0}>
                        {first}
                    </tspan>
                </text>
                <circle className="cls-2" cx={294} cy={415.03} r={5.02} />
                <circle className="cls-2" cx={294} cy={90.89} r={5.02} />
                <text className="cls-1" transform="translate(238.69 452.05)">
                    <tspan style={{fontSize:15}} x={0} y={0}>
                        {"25mm x 500mm"}
                    </tspan>
                </text>
            </svg>
            <label htmlFor="first">25mm x 500mm</label>
            <input type="number" min={0} name="first" onInput={e => setFirst(e.target.value)} />
        </div>
    )
}