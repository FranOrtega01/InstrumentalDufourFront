import * as React from "react"
export const SvgComponent = ({ title,handleCircle, ...props }) => {



  return (
    <div className="svgContainer">
      <h2>{title}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.83 839.6" {...props}>
        <defs>
          <style>
            {
              `.cls-1 {fill: #1f140f;}.cls-2 {fill: #fff;}
              .cls-2, .cls-3 { stroke: #1f140f;  stroke-miterlimit: 10;}
              .cls-3 {  fill: none;}
              .cls-4 {  fill: #5c5b5f;  font-family: MyriadPro-Regular, 'Myriad Pro';  font-size: 21px;}`
            }
          </style>
        </defs>
        <g id="Capa_1" data-name="Capa 1">
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
            d="m145.8,780.83c0,12.61,66.36,22.83,148.21,22.83s148.21-10.22,148.21-22.83-66.36-22.83-148.21-22.83-148.21,10.22-148.21,22.83"
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
          <path
            className="cls-1"
            d="m442.5,208.95c2.27-8.55,6.53-16.52,12.22-23.29s12.76-12.34,20.7-16.22c4.46-2.18,9.18-3.79,14.05-4.79.63-.13.36-1.09-.27-.96-8.8,1.8-17.12,5.65-24.31,11.01-7.18,5.36-13.26,12.19-17.66,19.99-2.48,4.4-4.41,9.1-5.71,13.98-.17.62.8.89.96.27h0Z"
          />
          <line className="cls-3" x1={489.34} y1={164.18} x2={569.85} y2={164.18} />
          <rect
            className="cls-3"
            x={480.88}
            y={78.43}
            width={106.44}
            height={86.22}
          />
          <line className="cls-3" x1={480.6} y1={78.43} x2={450.23} y2={0.66} />
          <line className="cls-3" x1={586.59} y1={78.43} x2={541.61} y2={0.5} />
          <line className="cls-3" x1={450.23} y1={0.66} x2={541.61} y2={0.5} />
          <line className="cls-3" x1={480.45} y1={160.05} x2={452.9} y2={64.15} />
          <line className="cls-3" x1={450.23} y1={0.66} x2={452.9} y2={64.15} />
          <line className="cls-3" x1={489.34} y1={164.18} x2={442.23} y2={165.33} />
          <line className="cls-3" x1={442.26} y1={155.97} x2={480.88} y2={156.59} />
          <path
            className="cls-1"
            d="m146.29,216.12c-2.3-8.67-6.62-16.72-12.36-23.59s-12.96-12.57-21.02-16.51c-4.54-2.22-9.34-3.88-14.29-4.89-.63-.13-.9.84-.27.96,8.66,1.77,16.83,5.54,23.92,10.8,7.1,5.27,13.1,12.04,17.44,19.74,2.44,4.33,4.33,8.94,5.6,13.74.17.62,1.13.36.96-.27h0Z"
          />
          <line className="cls-3" x1={98.48} y1={171.62} x2={17.98} y2={171.62} />
          <rect
            className="cls-3"
            x={0.5}
            y={85.87}
            width={106.44}
            height={86.22}
            transform="translate(107.44 257.96) rotate(-180)"
          />
          <line className="cls-3" x1={107.22} y1={85.87} x2={137.59} y2={8.1} />
          <line className="cls-3" x1={1.24} y1={85.87} x2={46.22} y2={7.94} />
          <line className="cls-3" x1={137.59} y1={8.1} x2={46.22} y2={7.94} />
          <line className="cls-3" x1={107.38} y1={167.49} x2={134.93} y2={71.59} />
          <line className="cls-3" x1={137.59} y1={8.1} x2={134.93} y2={71.59} />
          <line className="cls-3" x1={98.48} y1={171.62} x2={145.59} y2={172.76} />
          <line className="cls-3" x1={145.56} y1={163.41} x2={106.94} y2={164.03} />
        </g>
        <g id="Capa_3" data-name="Capa 3">
          <line className="cls-3" x1={205.98} y1={184.15} x2={207.81} y2={747.35} />
          <path
            className="cls-1"
            d="m205.95,183.23c-6.14.9-12.61.95-18.66-.58-4.7-1.19-9.36-3.32-12.75-6.87-1.87-1.96-3.22-4.32-3.9-6.94-.16-.62-1.13-.36-.96.27,2.69,10.36,14.39,14.89,24.07,15.59,4.16.3,8.34.12,12.47-.49.63-.09.36-1.06-.27-.96h0Z"
          />
          <line className="cls-3" x1={170.16} y1={168.96} x2={170.16} y2={737.99} />
          <path
            className="cls-1"
            d="m205.96,746.75c-5.94,1.24-12.08,1.13-18.06.22-4.72-.72-9.8-1.67-13.83-4.39-1.99-1.35-3.59-3.2-4.27-5.54-.18-.62-1.14-.35-.96.27,1.29,4.48,5.46,7.05,9.62,8.52,2.51.89,5.14,1.43,7.76,1.88,3.12.54,6.27.89,9.43.95,3.55.08,7.1-.21,10.58-.94.63-.13.36-1.1-.27-.96h0Z"
          />
        </g>
        <g id="Capa_4" data-name="Capa 4">
          <line className="cls-3" x1={381.58} y1={183.69} x2={379.75} y2={746.89} />
          <path
            className="cls-1"
            d="m381.35,183.73c6.35.94,13.02,1,19.27-.6,4.9-1.25,9.79-3.53,13.27-7.29,1.9-2.05,3.29-4.5,3.99-7.21.16-.62-.8-.89-.96-.27-2.58,9.95-13.96,14.22-23.22,14.86-4.03.28-8.09.12-12.08-.47-.63-.09-.9.87-.27.96h0Z"
          />
          <line className="cls-3" x1={417.4} y1={168.51} x2={417.4} y2={737.53} />
          <path
            className="cls-1"
            d="m381.33,747.26c6.21,1.3,12.59,1.15,18.83.18,4.9-.76,10.24-1.79,14.32-4.8,1.99-1.47,3.55-3.4,4.24-5.8.18-.62-.79-.88-.96-.27-1.24,4.31-5.44,6.66-9.43,8-2.43.81-4.96,1.32-7.49,1.75-2.99.51-6.02.82-9.05.88-3.42.07-6.84-.21-10.19-.91-.63-.13-.9.83-.27.96h0Z"
          />
        </g>
        <g id="Capa_5" data-name="Capa 5">
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.07} cy={207.26} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.07} cy={234.74} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.07} cy={262.22} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.07} cy={289.7} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={317.18} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={344.66} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={372.14} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={399.62} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={427.1} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.07} cy={454.58} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={482.06} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={509.54} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={537.03} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={564.51} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={591.99} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={619.47} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={646.95} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={187.71} cy={674.43} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={188.12} cy={701.91} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={187.71} cy={729.39} r={8.76} />
        </g>
        <g id="Capa_6" data-name="Capa 6">
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.6} cy={207.26} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.6} cy={234.74} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.6} cy={262.22} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.6} cy={289.7} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={317.18} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={344.66} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={372.14} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={399.62} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={427.1} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.6} cy={454.58} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={482.06} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={509.54} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={537.03} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={564.51} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={591.99} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={619.47} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={646.95} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.23} cy={674.43} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.65} cy={701.91} r={8.76} />
          <circle onClick={(e)=> handleCircle(e)} className="cls-3" cx={399.23} cy={729.39} r={8.76} />
        </g>
        <g id="Capa_7" data-name="Capa 7">
          <text
            id="_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_"
            data-name="12345 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
            className="cls-4"
            transform="translate(460.76 201.15)"
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
          <text
            id="_1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_17_18_19_20_-2"
            data-name="12345 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
            className="cls-4"
            transform="translate(103.58 201.15)"
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
      </svg>

    </div>
  )
}
