import * as React from "react";
export const SvgComponent = ({ title, handleCircle, ...props }) => {
  return (
    <div className="svgContainer">
      <h2>{title}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 587.83 840.33"
        {...props}
      >
        <defs>
          <style>
            {
              `.cls-1 {fill: #1f140f;}
              .cls-2 {  fill: #fff;}
              .cls-2, .cls-3 {  stroke: #1f140f;  stroke-miterlimit: 10;}
              .cls-3 {  fill: none;}
              .cls-4 {  fill: #fff;  font-family: MyriadPro-Regular, 'Myriad Pro';  font-size: 21px;} `
            }
          </style>
        </defs>
        <g id="Capa_1" data-name="Capa 1">
          <ellipse
            className="cls-2"
            cx={295.55}
            cy={786.5}
            rx={199.33}
            ry={53.33}
          />
          <rect
            className="cls-2"
            x={145.8}
            y={49.25}
            width={296.43}
            height={732.32}
          />
          <path
            className="cls-2"
            d="m145.8,781.57c0,12.61,66.36,22.83,148.21,22.83s148.21-10.22,148.21-22.83-66.36-22.83-148.21-22.83-148.21,10.22-148.21,22.83"
          />
          <ellipse
            className="cls-2"
            cx={294.02}
            cy={48.88}
            rx={148.21}
            ry={16.38}
          />
        </g>
        <g id="Capa_3" data-name="Capa 3">
          <line className="cls-3" x1={205.98} y1={184.89} x2={207.81} y2={748.08} />
          <path
            className="cls-1"
            d="m205.95,183.96c-6.14.9-12.61.95-18.66-.58-4.7-1.19-9.36-3.32-12.75-6.87-1.87-1.96-3.22-4.32-3.9-6.94-.16-.62-1.13-.36-.96.27,2.69,10.36,14.39,14.89,24.07,15.59,4.16.3,8.34.12,12.47-.49.63-.09.36-1.06-.27-.96h0Z"
          />
          <line className="cls-3" x1={170.16} y1={169.7} x2={170.16} y2={738.72} />
          <path
            className="cls-1"
            d="m205.96,747.49c-5.94,1.24-12.08,1.13-18.06.22-4.72-.72-9.8-1.67-13.83-4.39-1.99-1.35-3.59-3.2-4.27-5.54-.18-.62-1.14-.35-.96.27,1.29,4.48,5.46,7.05,9.62,8.52,2.51.89,5.14,1.43,7.76,1.88,3.12.54,6.27.89,9.43.95,3.55.08,7.1-.21,10.58-.94.63-.13.36-1.1-.27-.96h0Z"
          />
        </g>
        <g id="Capa_5" data-name="Capa 5">
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.07} cy={235.47} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.07} cy={262.95} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.07} cy={290.44} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={317.92} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={345.4} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={372.88} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={400.36} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={427.84} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.07} cy={455.32} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={482.8} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={510.28} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={537.76} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={565.24} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={592.72} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={620.2} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={647.68} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={187.71} cy={675.16} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={188.12} cy={702.64} r={8.76} />
          <circle onClick={e => handleCircle(e)} className="cls-3" cx={187.71} cy={730.12} r={8.76} />
        </g>
        <g id="Capa_7" data-name="Capa 7">
          <text
            id="_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_"
            data-name="12345 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
            className="cls-4"
            transform="translate(106.35 206.38)"
          >
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
        <g id="Capa_8" data-name="Capa 8">
          <rect
            className="cls-2"
            x={204.75}
            y={87.03}
            width={198.13}
            height={82.67}
            transform="translate(607.63 256.73) rotate(-180)"
          />
          <line className="cls-3" x1={396.42} y1={76.93} x2={188.83} y2={73.84} />
          <line className="cls-3" x1={204.75} y1={169.7} x2={187.71} y2={147.17} />
          <line className="cls-3" x1={188.83} y1={73.84} x2={187.71} y2={147.17} />
          <line className="cls-3" x1={204.75} y1={87.03} x2={188.27} y2={73.84} />
          <line className="cls-3" x1={396.42} y1={76.93} x2={402.88} y2={87.03} />
          <line className="cls-3" x1={209.55} y1={19.17} x2={347.03} y2={16.94} />
          <line className="cls-3" x1={198.92} y1={1.83} x2={336.22} y2={0.5} />
          <line className="cls-3" x1={198.92} y1={1.83} x2={209.55} y2={19.17} />
          <line className="cls-3" x1={336.22} y1={0.5} x2={347.03} y2={16.94} />
          <line className="cls-3" x1={198.89} y1={3.31} x2={200.43} y2={35.51} />
          <line className="cls-3" x1={209.55} y1={19.17} x2={209.82} y2={34.83} />
          <line className="cls-3" x1={347.03} y1={16.94} x2={346.61} y2={33.93} />
        </g>
      </svg>
    </div>
  )
}