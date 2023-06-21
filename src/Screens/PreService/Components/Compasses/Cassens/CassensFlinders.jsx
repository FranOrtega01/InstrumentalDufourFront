import React, { useState } from "react"
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
                viewBox="0 0 651 843.88"
                width={700} height={700}
                {...props}
            >
                <defs>
                    <style>
                        {
                            "\n      .cls-1, .cls-2, .cls-3 {\n        fill: none;\n      }\n\n      .cls-4 {\n        font-family: MyriadPro-Regular, 'Myriad Pro';\n        font-size: 16.38px;\n      }\n\n      .cls-4, .cls-5 {\n        isolation: isolate;\n      }\n\n      .cls-6, .cls-7 {\n        fill: #fff;\n      }\n\n      .cls-8 {\n        fill: #1f140f;\n      }\n\n      .cls-7, .cls-2, .cls-3 {\n        stroke-miterlimit: 10;\n      }\n\n      .cls-7, .cls-3 {\n        stroke: #000;\n      }\n\n      .cls-2 {\n        stroke: #1f140f;\n      }\n    "
                        }
                    </style>
                </defs>
                <g id="Capa_1-2" data-name="Capa 1-2">
                    <g id="Capa_1-2-2" data-name="Capa 1-2">
                        <ellipse
                            className="cls-7"
                            cx={328.3}
                            cy={790.05}
                            rx={199.33}
                            ry={53.33}
                        />
                        <rect
                            className="cls-7"
                            x={178.55}
                            y={52.81}
                            width={296.43}
                            height={732.32}
                        />
                        <path
                            className="cls-7"
                            d="m178.55,785.12c0,12.61,66.36,22.83,148.21,22.83s148.22-10.22,148.22-22.83-66.36-22.83-148.21-22.83-148.22,10.22-148.22,22.83"
                        />
                        <ellipse
                            className="cls-7"
                            cx={326.77}
                            cy={52.43}
                            rx={148.21}
                            ry={16.38}
                        />
                    </g>
                    <g id="Magnets" data-name="Layer 11">
                        <rect
                            className="cls-7"
                            x={288.39}
                            y={73.66}
                            width={69.88}
                            height={457.56}
                        />
                        <ellipse
                            className="cls-7"
                            cx={323.33}
                            cy={531.22}
                            rx={34.94}
                            ry={5.22}
                        />
                        <ellipse
                            className="cls-7"
                            cx={323.21}
                            cy={73.66}
                            rx={34.94}
                            ry={5.22}
                        />
                        <line
                            className="cls-3"
                            x1={288.27}
                            y1={109.66}
                            x2={358.15}
                            y2={109.66}
                        />
                        <line className="cls-3" x1={288.27} y1={168} x2={358.15} y2={168} />
                        <line
                            className="cls-3"
                            x1={288.39}
                            y1={278.13}
                            x2={358.15}
                            y2={278.13}
                        />

                        {/* Numbers */}
                        <text className="cls-4" transform="translate(320 98)">
                            <tspan style={{ fontSize: 18 }} x={0} y={0}>
                                {first}
                            </tspan>
                        </text>
                        <text className="cls-4" transform="translate(320 144.67)">
                            <tspan style={{ fontSize: 18 }} x={0} y={0}>
                                {second}
                            </tspan>
                        </text>
                        <text className="cls-4" transform="translate(320 228.87)">
                            <tspan style={{ fontSize: 18 }} x={0} y={0}>
                                {third}
                            </tspan>
                        </text>
                        <text className="cls-4" transform="translate(320 400.59)">
                            <tspan style={{ fontSize: 18 }} x={0} y={0}>
                                {fourth}
                            </tspan>
                        </text>

                        {/* Sizes */}

                        <g className="cls-5">
                            <text style={{ fontSize: 15 }} className="cls-4" transform="translate(364.98 98)">
                                <tspan x={0} y={0}>
                                    {"73mm x 35mm"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-5">
                            <text style={{ fontSize: 15 }} className="cls-4" transform="translate(362.96 144.67)">
                                <tspan x={0} y={0}>
                                    {"73mm x 75mm"}
                                </tspan>
                            </text>
                        </g>
                        <g className="cls-5">
                            <text style={{ fontSize: 15 }} className="cls-4" transform="translate(359.96 228.87)">
                                <tspan x={0} y={0}>
                                    {"73mm x 150mm"}
                                </tspan>
                            </text>
                        </g>

                        <g className="cls-5">
                            <text className="cls-4" transform="translate(359.96 400.59)">
                                <tspan style={{ fontSize: 15 }} x={0} y={0}>
                                    {"73mm x 300mm"}
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
                <g id="Capa_2" data-name="Capa 2">
                    <path
                        className="cls-8"
                        d="m178.27,157.13c-2.3-8.67-6.62-16.72-12.36-23.59s-12.96-12.57-21.02-16.51c-4.54-2.22-9.34-3.88-14.29-4.89-.63-.13-.9.84-.27.96,8.66,1.77,16.83,5.54,23.92,10.8,7.1,5.27,13.1,12.04,17.44,19.74,2.44,4.33,4.33,8.94,5.6,13.74.17.62,1.13.36.96-.27h0l.02.02h0Z"
                    />
                    <line className="cls-2" x1={130.47} y1={112.63} x2={11.67} y2={112.63} />
                    <line className="cls-2" x1={130.47} y1={112.63} x2={177.58} y2={113.77} />
                    <line className="cls-2" x1={177.79} y1={90.33} x2={14.87} y2={91.17} />
                    <path
                        className="cls-8"
                        d="m12.45,112.22c-1.72-.8-2.39-2.69-2.73-4.43-.47-2.37-.51-4.81-.45-7.22.03-1.15.04-2.32.14-3.47s.69-2.06,1.27-2.99,1.23-1.7,2.26-2.06,2.08-.3,3.12-.27c.64.02.64-.98,0-1-1.75-.05-3.59,0-4.97,1.22-.63.56-1.1,1.3-1.53,2.02-.47.79-.93,1.58-1.08,2.5-.17,1.01-.15,2.06-.18,3.08-.04,1.09-.06,2.18-.05,3.27.03,2.01.17,4.1.7,6.05.46,1.69,1.34,3.39,2.99,4.16.58.27,1.09-.59.5-.86h0Z"
                    />
                    <line className="cls-2" x1={177.79} y1={100.26} x2={12.4} y2={99.71} />
                    <line className="cls-2" x1={177.79} y1={103.34} x2={12.4} y2={102.8} />
                    <path
                        className="cls-8"
                        d="m12.76,99.17c-.54.04-1.04.27-1.41.67s-.58.93-.64,1.48c-.06.52-.01,1.21.48,1.52.24.15.53.17.79.22.29.05.58.1.87.16.26.05.55-.07.62-.35.06-.24-.07-.57-.35-.62-.44-.08-.88-.14-1.32-.24,0,0-.15-.02-.07-.01l-.04-.02s.04.03.05.05l-.02-.04s.02.05,0,.02c0-.04-.02-.09-.03-.13,0-.05,0,.06,0-.04v-.15c0-.1,0-.21.01-.31s-.01.04.01-.07c0-.04.02-.08.03-.13.02-.09.05-.18.08-.27-.03.08.03-.05.03-.07.02-.05.05-.09.08-.13.02-.04.05-.08.08-.12-.05.07.03-.03.04-.04.03-.03.05-.06.08-.08.01-.01.11-.1.07-.07s.05-.04.06-.04c.04-.03.08-.05.12-.07,0,0,.14-.07.05-.03.04-.02.09-.03.13-.05s.09-.02.14-.03c.11-.03-.07,0,.05,0,.26-.02.51-.21.5-.5-.01-.25-.22-.52-.5-.5h.01Z"
                    />
                    <g className="sphere">
                        <circle className="cls-2" cx={56.2} cy={56.2} r={55.7} />
                        <ellipse className="cls-2" cx={56.2} cy={58.89} rx={55.7} ry={13.68} />
                        <path
                            className="cls-6"
                            d="m79.17,47.07l4.77.35c.55.04.69-.9.13-.98-2.89-.44-5.78-.87-8.68-1.31-.62-.09-.9.78-.27.96,2.13.6,4.3,1.02,6.49,1.26.55.06.69-.9.13-.98l-5.74-.84c-.62-.09-.91.82-.27.96,3.67.83,7.36,1.55,11.08,2.14l.13-.98-6.52-.86v1l3.59.37c.65.07.63-.92,0-1l-6.54-.82c-.42-.05-.57.45-.43.75l.03.06c.08.17.27.23.43.25.46.04.74-.44.67-.84-.03-.18-.19-.29-.35-.35-.33-.12-.75-.06-1.1-.07-.45,0-.9-.03-1.35-.04-.65-.02-.64.97,0,1,.59.03,1.18.06,1.76.09.66.03.62-.92,0-1-3.34-.43-6.71-.69-10.08-.77-.64-.02-.64.98,0,1l5.6.17c.65.02.63-.94,0-1l-3.51-.31v1l7.09.24c.66.02.63-.93,0-1l-6.4-.7v1c3.03-.06,6.06-.12,9.09-.18.66,0,.62-.92,0-1-1.99-.25-3.97-.51-5.96-.76v1c7.43.77,14.82,1.95,22.13,3.53l.13-.98c-3.27-.02-6.66-.04-9.71-1.37-.28-.12-.66-.05-.73.3-.15.71-.04,1.39.4,1.97l.79-.61c-1.05-1.17-2.5-1.83-4.06-1.9-.47-.02-.72.73-.25.93,2.99,1.27,6.07,2.3,9.23,3.07.55.13.87-.61.39-.91-1.6-1.01-3.29-1.85-5.06-2.53l-.27.96,2.22.44.13-.98-4.18-.28v1c4.55.25,9.02,1.21,13.27,2.84l.13-.98c-2.28-.07-4.51-.49-6.67-1.22l-.13.98c3.52.08,6.98.7,10.31,1.84.62.21.85-.73.27-.96-1.92-.76-3.9-1.25-5.95-1.49-.56-.06-.68.88-.13.98,4.86.93,9.47,2.85,13.55,5.67l.5-.86c-4.08-1.92-8.39-3.28-12.83-4.03v.96l2.41-.71c.54-.16.44-.98-.13-.98-.95,0-1.87.16-2.75.53-.49.21-.48.98.13.98,1.49.02,2.96.2,4.41.56.63.16.87-.76.27-.96l-3.57-1.2c-.62-.21-.86.74-.27.96,2.37.9,4.79,1.65,7.26,2.23,1.16.27,2.35.43,3.5.74.96.26,2.19.98,1.83,2.16l.84-.22c-.92-.73-1.65-1.65-2.09-2.74l-.91.39c.78,1.28,1.55,2.56,2.33,3.85.2.33.84.33.91-.12l.22-1.38h-.96l.31,2.19c.08.57.98.42.98-.13v-1.94h-1l.23,2.41.63-.48c-7.76-1.18-15.3-3.39-22.77-5.75-7.47-2.35-14.91-4.86-22.55-6.62-4.26-.98-8.58-1.72-12.94-2.09-.58-.05-.65.82-.13.98,6,1.87,12.22,2.97,18.5,3.28.58.03.66-.82.13-.98-3.54-1.07-7.21-1.63-10.91-1.66-.57,0-.66.82-.13.98,3.79,1.19,7.57,2.38,11.36,3.57l.27-.96c-7.12-1.01-14.26-1.85-21.42-2.5-.57-.05-.67.84-.13.98,1.85.49,3.74.82,5.64,1.01.56.06.69-.89.13-.98-8.39-1.41-16.95-1.53-25.37-.33-2.43.35-4.85.8-7.24,1.37l.27.96,8.44-2.3c.53-.15.44-1.01-.13-.98l-4.08.18c-.66.03-.62.92,0,1,4.89.65,9.78,1.31,14.67,1.96v-1c-3.57-.23-7.13-.62-10.67-1.16v.96c1.62-.66,3.31-1.06,5.06-1.17.54-.03.71-.84.13-.98-1.22-.3-2.47-.24-3.63.23-.47.19-.48.78,0,.96,1.8.7,3.71.88,5.61.57.55-.09.43-1.02-.13-.98l-1.48.11c-.63.05-.65,1,0,1,4.01,0,8.01-.46,11.91-1.42.45-.11.44-.68.12-.91-1.82-1.34-3.9-2.27-6.11-2.73-.64-.14-.85.73-.27.96,3.37,1.36,6.78,2.6,10.24,3.71l.13-.98-8.87-.66-4.31-.32c-.86-.06-2.39-.38-2.67.79-.09.38.24.7.62.62,3.98-.85,8.03-1.33,12.11-1.43l-.13-.98c-1.64.33-3.29.65-4.93.98-.48.09-.48.87,0,.96,4.82.96,9.71,1.49,14.62,1.56.55,0,.69-.86.13-.98-5.36-1.12-10.77-1.96-16.22-2.51-.55-.06-.69.9-.13.98,7.15,1.02,14.34,1.75,21.55,2.2.56.03.69-.87.13-.98-2.61-.55-5.25-.97-7.9-1.27v1l5.44.14c.55,0,.7-.89.13-.98l-7.79-1.31-.13.98,8.75.21v-1l-1.71.05c-.56.02-.69.83-.13.98,3.13.88,6.31,1.52,9.53,1.95.55.07.69-.89.13-.98l-6.02-.95-.13.98,2.08-.12.98-.06c.16,0,.33-.02.49-.03h.21c.19.02.31-.1.36-.37l.43.25c-.64-1.33-2.1-1.76-3.47-1.86-1.94-.13-3.96.19-5.89.41-4.31.49-8.6,1.22-12.92,1.61-2.47.22-4.96.33-7.44.24-.65-.02-.64.95,0,1,5.42.39,10.86-.57,15.83-2.76.51-.23.15-1.12-.39-.91-4.61,1.75-9.12,3.74-13.51,5.97-.43.22-.24.98.25.93,3.87-.35,7.7-.97,11.47-1.89.59-.14.39-.92-.13-.98-9.2-1.06-18.44-1.7-27.7-1.91-2.64-.06-5.29-.08-7.93-.07-.66,0-.63.93,0,1,12.18,1.31,24.41,2.21,36.65,2.6,2.98.1,6.02.04,8.77-1.27.5-.24.19-.88-.25-.93-5.38-.58-10.8-.41-16.13.47l.39.91c2.37-1.27,4.74-2.54,7.12-3.8.5-.27.16-1.07-.39-.91-1.8.5-3.41,1.47-4.69,2.83-.41.44.1,1,.61.79,2.04-.88,4.13-1.61,6.27-2.23l-.56-.73-1.36,2.77c-.28.57.53,1.06.86.5.65-1.09.82-2.34.51-3.56-.1-.4-.55-.44-.84-.22-1.77,1.37-3.56,2.76-5.59,3.73s-4.46,1.51-6.78,1.77c-4.87.55-9.82.5-14.72.35-2.8-.09-5.6-.23-8.4-.38l.13.98c1.92-.68,3.88-1.22,5.88-1.6.63-.12.36-1.08-.27-.96l-5.11.97.27.96c1.4-.54,2.84-.94,4.31-1.19l-.27-.96c-2.28.79-4.63,1.39-7.01,1.78l.27.96,2.77-.9c.62-.2.36-1.07-.27-.96l-4.91.85c-.64.11-.36,1.06.27.96l6.25-.94-.27-.96-3.72.97.27.96c1.67-.6,3.38-1.04,5.12-1.33.55-.09.43-1.01-.13-.98l-3.92.22.13.98c1.29-.47,2.6-.83,3.94-1.1l-.27-.96-2.69.66c-.62.15-.36,1.12.27.96l2.69-.66c.63-.15.36-1.09-.27-.96-1.34.26-2.66.63-3.94,1.1-.5.18-.47,1.02.13.98l3.92-.22-.13-.98c-1.75.29-3.46.73-5.12,1.33-.6.21-.37,1.13.27.96l3.72-.97c.64-.17.35-1.06-.27-.96l-6.25.94.27.96,4.91-.85-.27-.96-2.77.9c-.62.2-.36,1.07.27.96,2.39-.39,4.73-.99,7.01-1.78.61-.21.37-1.07-.27-.96-1.48.25-2.92.65-4.31,1.19-.6.23-.37,1.09.27.96l5.11-.97-.27-.96c-2,.38-3.96.92-5.88,1.6-.53.19-.45.95.13.98,5.19.27,10.38.53,15.57.45,4.68-.08,9.74-.14,14.12-2.01,2.39-1.02,4.46-2.63,6.5-4.21l-.84-.22c.25.97.11,1.93-.41,2.79l.86.5,1.36-2.77c.19-.38-.12-.86-.56-.73-2.22.64-4.39,1.42-6.51,2.33l.61.79c1.17-1.24,2.61-2.11,4.25-2.57l-.39-.91c-2.37,1.27-4.74,2.54-7.12,3.8-.53.29-.14,1,.39.91,5.24-.86,10.59-1,15.87-.44l-.25-.93c-2.47,1.18-5.25,1.22-7.93,1.14-2.95-.08-5.89-.22-8.84-.37-6-.31-12-.72-17.99-1.25-3.39-.3-6.77-.63-10.15-.99v1c9.26-.04,18.52.35,27.74,1.17,2.63.23,5.27.51,7.89.81l-.13-.98c-3.69.9-7.43,1.52-11.21,1.86l.25.93c4.32-2.19,8.75-4.15,13.27-5.86l-.39-.91c-4.81,2.11-10.09,3-15.33,2.62v1c5.35.2,10.66-.56,15.95-1.28,2.7-.37,5.41-.72,8.13-.92,1-.07,2.04-.16,3.03.06.41.09.83.23,1.17.49s.49.85.88.98c.95.31,1.2-1.19.35-1.53-.55-.22-1.31-.04-1.89,0l-2.45.14c-.53.03-.72.89-.13.98l6.02.95.13-.98c-3.13-.41-6.23-1.06-9.27-1.91l-.13.98,1.71-.05c.64-.02.64-.98,0-1l-8.75-.21c-.55,0-.7.89-.13.98l7.79,1.31.13-.98-5.44-.14c-.66-.02-.62.93,0,1,2.56.29,5.11.71,7.63,1.24l.13-.98c-7.12-.44-14.22-1.16-21.29-2.16l-.13.98c5.36.54,10.68,1.37,15.95,2.48l.13-.98c-4.82-.08-9.62-.59-14.35-1.53v.96c1.64-.33,3.29-.65,4.93-.98.56-.11.43-1-.13-.98-4.16.1-8.3.59-12.37,1.46l.62.62c.08-.32,1.38-.08,1.58-.06l1.97.15,3.69.27,7.64.57c.58.04.65-.82.13-.98-3.46-1.11-6.88-2.34-10.24-3.71l-.27.96c2.13.45,4.11,1.34,5.87,2.63l.12-.91c-3.81.94-7.72,1.4-11.64,1.38v1l1.48-.11-.13-.98c-1.73.28-3.46.06-5.08-.57v.96c1.01-.41,2.04-.5,3.1-.23l.13-.98c-1.84.11-3.62.51-5.33,1.2-.39.16-.55.88,0,.96,3.63.56,7.27.96,10.93,1.2.66.04.62-.92,0-1-4.89-.65-9.78-1.31-14.67-1.96v1l4.08-.18-.13-.98-8.44,2.3c-.62.17-.36,1.11.27.96,8.14-1.91,16.56-2.56,24.9-1.92,2.41.19,4.8.48,7.18.88l.13-.98c-1.82-.18-3.61-.51-5.38-.97l-.13.98c7.07.64,14.13,1.46,21.16,2.46.62.09.9-.77.27-.96-3.79-1.19-7.57-2.38-11.36-3.57l-.13.98c3.61.03,7.18.58,10.64,1.63l.13-.98c-6.19-.31-12.32-1.41-18.24-3.25l-.13.98c7.75.65,15.32,2.54,22.75,4.76s14.87,4.82,22.41,6.87c4.23,1.15,8.5,2.13,12.83,2.79.29.04.67-.12.63-.48l-.23-2.41c-.06-.63-1-.66-1,0v1.94c.33-.04.66-.09.99-.13l-.31-2.19c-.07-.48-.89-.48-.96,0l-.22,1.38.91-.12c-.78-1.28-1.55-2.56-2.33-3.85-.28-.46-1.14-.16-.91.39.51,1.25,1.29,2.34,2.35,3.18.29.23.72.17.84-.22.31-1.02-.18-2.07-1-2.69-1.03-.78-2.41-.88-3.64-1.13-2.95-.61-5.84-1.46-8.65-2.53l-.27.96,3.57,1.2.27-.96c-1.53-.38-3.09-.58-4.67-.59l.13.98c.8-.34,1.61-.5,2.48-.5l-.13-.98-2.41.71c-.44.13-.51.88,0,.96,4.36.73,8.6,2.04,12.59,3.92.58.27,1.04-.5.5-.86-4.14-2.85-8.85-4.82-13.79-5.77l-.13.98c1.95.23,3.86.72,5.68,1.45l.27-.96c-3.41-1.17-6.98-1.8-10.58-1.88-.58,0-.65.81-.13.98,2.24.77,4.57,1.18,6.93,1.26.6.02.63-.79.13-.98-4.34-1.66-8.9-2.62-13.54-2.87-.64-.04-.64.96,0,1l4.18.28c.56.04.69-.87.13-.98l-2.22-.44c-.64-.13-.86.74-.27.96,1.69.64,3.3,1.46,4.82,2.43l.39-.91c-3.07-.75-6.08-1.73-8.99-2.97l-.25.93c1.31.05,2.48.63,3.36,1.6.37.42,1.13-.15.79-.61-.28-.36-.4-.74-.3-1.2l-.73.3c3.23,1.41,6.74,1.49,10.21,1.51.55,0,.7-.86.13-.98-7.39-1.6-14.87-2.78-22.39-3.57-.65-.07-.63.92,0,1,1.99.25,3.97.51,5.96.76v-1c-3.03.06-6.06.12-9.09.18-.66,0-.63.93,0,1l6.4.7v-1l-7.09-.24c-.65-.02-.63.94,0,1l3.51.31v-1l-5.6-.17v1c3.37.09,6.73.34,10.08.77v-1c-.59-.03-1.18-.06-1.76-.09v1c.38,0,.75.02,1.13.04.32,0,.76-.06,1.06.04l-.35-.35v.05c.03-.13.04-.26.06-.39l.23-.1.43.25-.03-.06-.43.75,6.54.82v-1l-3.59-.37c-.65-.07-.62.92,0,1l6.52.86c.55.07.69-.89.13-.98-3.71-.59-7.41-1.3-11.08-2.14l-.27.96,5.74.84.13-.98c-2.11-.23-4.19-.64-6.23-1.22l-.27.96c2.89.44,5.78.87,8.68,1.31l.13-.98-4.77-.35c-.64-.05-.64.95,0,1h0l.04-.04h0Z"
                        />
                        <path
                            className="cls-6"
                            d="m24.72,47.99c.88-.3,1.72-.67,2.53-1.13.48-.28.16-1.09-.39-.91l-1.32.43c-.51.16-.46,1.04.13.98,4.29-.45,8.59-.76,12.89-.94.29,0,.62-.32.48-.63-.37-.89-1.17-1.25-2.09-1.37-1.27-.17-2.6-.09-3.88-.05-2.76.09-5.51.4-8.23.86s-5.58,1.11-8.34,1.84c-1.3.34-2.63.65-3.88,1.14-1.17.46-2.07,1.22-3.04,1.99-2.14,1.7-4.82,2.54-6.87,4.38l.79.61c.67-.94,1.51-1.77,2.56-2.28,1.22-.58,2.59-.45,3.9-.6,2.57-.29,4.95-1.31,7.29-2.34.53-.23.15-1.05-.39-.91-1.06.28-2.13.56-3.19.84l.39.91c.98-.63,1.96-1.25,2.95-1.88.45-.29.16-1.14-.39-.91-1.51.62-3.04,1.19-4.59,1.71-.61.2-.36,1.13.27.96l2.25-.58c.63-.16.36-1.09-.27-.96-3.36.67-6.61,1.7-9.75,3.07-.46.2-.22.96.25.93,2.24-.12,4.47-.29,6.7-.51l-.13-.98-1.48.48.39.91,2.71-1.81c.44-.29.17-1.13-.39-.91-.81.32-1.58.69-2.32,1.15-.47.28-.17,1.11.39.91l2.29-.82c.61-.22.37-1.08-.27-.96l-4.52.84.49.84,1.21-.95-.71-.71c-2.21,1.8-4.64,3.3-7.23,4.47l.73.3c-.07-.24-.02-.4.13-.6l-.91-.39c-.23.93-.46,1.86-.69,2.78l.98.13v-1.69c0-.47-.71-.71-.93-.25-.52,1.05-.53,2.16-.06,3.23.09.2.37.29.56.23,11.03-3.29,22.63-3.52,33.87-5.75,3.16-.63,6.29-1.42,9.34-2.47.6-.21.35-1.17-.27-.96-10.9,3.75-22.51,4.09-33.78,6.05-3.18.55-6.34,1.25-9.44,2.17l.56.23c-.32-.72-.29-1.52.06-2.22l-.93-.25v1.69c0,.56.84.69.98.13.23-.93.46-1.86.69-2.78.14-.58-.59-.83-.91-.39-.3.41-.37.88-.23,1.37.09.34.44.43.73.3,2.68-1.21,5.16-2.77,7.44-4.63.5-.41-.21-1.1-.71-.71l-1.21.95c-.43.34.05.92.49.84,1.51-.28,3.01-.56,4.52-.84l-.27-.96-2.29.82.39.91c.66-.41,1.35-.76,2.08-1.05l-.39-.91-2.71,1.81c-.45.3-.18,1.1.39.91l1.48-.48c.51-.17.46-1.04-.13-.98-2.23.21-4.46.38-6.7.51l.25.93c3.05-1.34,6.24-2.32,9.51-2.97l-.27-.96-2.25.58.27.96c1.55-.52,3.08-1.09,4.59-1.71l-.39-.91c-.98.63-1.96,1.25-2.95,1.88-.47.3-.18,1.06.39.91,1.06-.28,2.13-.56,3.19-.84l-.39-.91c-2.65,1.15-5.23,2.14-8.14,2.29-1.23.06-2.4.23-3.48.87-1.01.6-1.82,1.45-2.49,2.4-.34.48.38.97.79.61,1.64-1.48,3.73-2.28,5.58-3.46.97-.62,1.79-1.43,2.74-2.06,1.06-.7,2.31-1,3.52-1.33,4.97-1.38,10.03-2.51,15.18-2.93,1.43-.12,2.87-.18,4.31-.18.81,0,2.91-.27,3.33.72l.48-.63c-4.31.17-8.61.49-12.89.94l.13.98,1.32-.43-.39-.91c-.73.42-1.49.76-2.29,1.03-.61.2-.35,1.17.27.96h.03,0Z"
                        />
                        <path className="cls-8" d="m.5,56.56c.64,0,.64-1,0-1s-.64,1,0,1h0Z" />
                        <path
                            className="cls-8"
                            d="m.1,56.33c.04.76.05,1.52,0,2.28,0,.26.24.51.5.5.28,0,.49-.22.5-.5.03-.76.03-1.52,0-2.28,0-.26-.22-.51-.5-.5-.26,0-.52.22-.5.5h0Z"
                        />
                    </g>
                    <line className="cls-2" x1={43.83} y1={117.37} x2={68.57} y2={117.37} />
                    <line className="cls-2" x1={68.57} y1={117.37} x2={72.57} y2={113.2} />
                    <line className="cls-2" x1={43.83} y1={117.37} x2={40.13} y2={113.2} />
                </g>
                <g id="Capa_3" data-name="Capa 3">
                    <path
                        className="cls-8"
                        d="m473.69,160.83c2.27-8.55,6.53-16.52,12.22-23.29s12.76-12.34,20.7-16.22c4.46-2.18,9.18-3.79,14.05-4.79.63-.13.36-1.09-.27-.96-8.8,1.8-17.12,5.65-24.31,11.01-7.19,5.36-13.26,12.19-17.66,19.99-2.48,4.4-4.41,9.1-5.71,13.98-.17.62.8.89.96.27h.02Z"
                    />
                    <line className="cls-2" x1={520.53} y1={116.05} x2={639.33} y2={116.05} />
                    <line className="cls-2" x1={520.53} y1={116.05} x2={473.42} y2={117.2} />
                    <line className="cls-2" x1={473.21} y1={93.76} x2={636.13} y2={94.6} />
                    <path
                        className="cls-8"
                        d="m639.06,116.51c3.25-1.5,3.54-6.17,3.67-9.24.09-2.16.03-4.35-.11-6.51-.12-1.76-1.06-3.43-2.17-4.77-1.4-1.69-3.45-1.83-5.5-1.77-.64.02-.64,1.02,0,1,1.04-.03,2.13-.07,3.12.27s1.7,1.16,2.26,2.06,1.17,1.87,1.27,2.99.11,2.31.14,3.47c.06,2.41.02,4.85-.45,7.22-.35,1.74-1.01,3.64-2.73,4.43-.58.27-.08,1.13.5.86h0Z"
                    />
                    <line className="cls-2" x1={473.21} y1={103.69} x2={638.6} y2={103.14} />
                    <line className="cls-2" x1={473.21} y1={106.77} x2={638.6} y2={106.23} />
                    <path
                        className="cls-8"
                        d="m638.24,103.6c.15.01-.09-.03.05,0,.05.01.09.02.14.03s.09.03.13.05c-.07-.03,0,0,.03.02.08.04.15.08.22.14-.07-.06.03.03.04.04.03.03.07.06.1.1,0,0,.1.12.04.04.03.04.05.08.08.12.02.04.04.07.06.11.01.02.06.13.05.1-.02-.04.03.07.03.08.02.05.03.1.04.15s.02.1.03.15c.03.15,0-.09.01.07,0,.09.01.19.01.28v.15s-.01.12,0,.04c0,.05-.02.09-.03.13-.02.05-.02.06,0,.02.01-.03,0-.03-.01.02.04-.03.08-.05.01-.03.08-.03-.05,0-.07.01-.43.1-.88.16-1.32.24-.26.05-.43.37-.35.62.09.28.34.4.62.35s.56-.1.84-.15.58-.07.82-.22c.5-.3.54-1,.48-1.52-.06-.55-.26-1.07-.64-1.48s-.87-.63-1.41-.67c-.26-.02-.51.25-.5.5.01.29.22.48.5.5h0Z"
                    />
                    <g className="sphere">
                        <circle className="cls-2" cx={594.8} cy={59.63} r={55.7} />
                        <ellipse className="cls-2" cx={594.8} cy={62.31} rx={55.7} ry={13.68} />
                        <path
                            className="cls-6"
                            d="m571.83,49.49l-4.77.35.13.98,8.68-1.31-.27-.96c-2.04.58-4.12.99-6.23,1.22l.13.98,5.74-.84-.27-.96c-3.67.83-7.36,1.55-11.08,2.14-.55.09-.43,1.06.13.98l6.52-.86c.62-.08.65-1.07,0-1l-3.59.37v1l6.54-.82-.43-.75-.03.06.43-.25.23.1.05.39v-.05c-.11.12-.22.23-.34.35.28-.1.76-.03,1.06-.04.38,0,.75-.02,1.13-.04v-1c-.59.03-1.18.06-1.76.09v1c3.34-.43,6.71-.69,10.08-.77v-1l-5.6.17v1l3.51-.31c.63-.06.65-1.02,0-1-2.36.08-4.73.16-7.09.24v1l6.4-.7c.63-.07.66-.99,0-1l-9.09-.18v1l5.96-.76c.62-.08.65-1.07,0-1-7.52.78-15,1.97-22.39,3.57-.56.12-.42.98.13.98,3.47-.02,6.98-.09,10.21-1.51l-.73-.3c.1.46-.02.84-.3,1.2-.34.45.41,1.03.79.61.87-.97,2.05-1.55,3.36-1.6l-.25-.93c-2.91,1.24-5.92,2.22-8.99,2.97l.39.91c1.53-.97,3.13-1.78,4.82-2.43.6-.23.37-1.09-.27-.96l-2.22.44c-.55.11-.43,1.02.13.98l4.18-.28c.64-.04.65-1.04,0-1-4.64.25-9.2,1.21-13.54,2.87-.49.19-.47,1,.13.98,2.36-.07,4.7-.49,6.93-1.26.51-.18.46-1-.13-.98-3.6.08-7.17.71-10.58,1.88l.27.96c1.83-.73,3.73-1.22,5.68-1.45l-.13-.98c-4.94.94-9.65,2.91-13.79,5.77-.53.37-.08,1.14.5.86,4-1.88,8.24-3.2,12.59-3.92.51-.09.44-.84,0-.96l-2.41-.71-.13.98c.87,0,1.68.16,2.48.5l.13-.98c-1.58.02-3.14.22-4.67.59l.27.96,3.57-1.2-.27-.96c-2.81,1.07-5.7,1.92-8.65,2.53-1.2.25-2.55.35-3.57,1.08-.86.62-1.39,1.69-1.07,2.74.12.39.54.45.84.22,1.06-.84,1.84-1.93,2.35-3.18.22-.54-.63-.85-.91-.39-.78,1.28-1.55,2.56-2.33,3.85l.91.12-.22-1.38c-.07-.47-.9-.48-.96,0l-.31,2.19.98.13v-1.94c0-.65-.93-.63-1,0l-.23,2.41c-.03.36.35.53.63.48,7.68-1.17,15.15-3.35,22.55-5.68s14.84-4.84,22.44-6.61c4.28-1,8.62-1.76,13-2.13l-.13-.98c-5.92,1.84-12.05,2.93-18.24,3.25l.13.98c3.46-1.04,7.03-1.59,10.64-1.63l-.13-.98c-3.79,1.19-7.57,2.38-11.36,3.57-.63.2-.36,1.05.27.96,7.03-1,14.09-1.82,21.16-2.46l-.13-.98c-1.77.46-3.56.79-5.38.97l.13.98c8.27-1.39,16.77-1.5,25.07-.3,2.35.34,4.69.79,7.01,1.33.63.15.89-.79.27-.96l-8.44-2.3-.13.98,4.08.18v-1c-4.89.65-9.78,1.31-14.67,1.96-.62.08-.66,1.04,0,1,3.66-.24,7.31-.64,10.93-1.2.55-.08.39-.8,0-.96-1.7-.7-3.49-1.09-5.33-1.2l.13.98c1.06-.26,2.09-.17,3.1.23v-.96c-1.62.63-3.36.85-5.08.57l-.13.98,1.48.11v-1c-3.93,0-7.83-.45-11.64-1.38l.12.91c1.76-1.29,3.73-2.18,5.87-2.63l-.27-.96c-3.37,1.36-6.78,2.6-10.24,3.71-.51.16-.46,1.03.13.98,2.55-.19,5.09-.38,7.64-.57l3.69-.27,1.97-.15c.2-.02,1.5-.26,1.58.06l.62-.62c-4.07-.87-8.21-1.36-12.37-1.46-.55,0-.69.87-.13.98,1.64.33,3.29.65,4.93.98v-.96c-4.73.94-9.53,1.45-14.35,1.53l.13.98c5.27-1.1,10.59-1.93,15.95-2.48l-.13-.98c-7.06,1.01-14.17,1.72-21.29,2.16l.13.98c2.52-.53,5.07-.95,7.63-1.24.62-.07.66-1.02,0-1l-5.44.14.13.98,7.79-1.31c.56-.09.42-1-.13-.98l-8.75.21c-.64.02-.64.98,0,1l1.71.05-.13-.98c-3.04.85-6.14,1.5-9.27,1.91l.13.98,6.02-.95c.58-.09.4-.95-.13-.98l-1.96-.11c-.67-.04-1.41-.17-2.08-.09-.74.1-1.27,1.07-.48,1.53.34.2.66.06.87-.23.3-.43.53-.73,1.02-.95.84-.38,1.82-.39,2.72-.35,5.35.25,10.65,1.28,15.97,1.86,3.03.33,6.07.52,9.11.41v-1c-5.24.38-10.52-.51-15.33-2.62l-.39.91c4.53,1.72,8.96,3.68,13.27,5.86l.25-.93c-3.78-.34-7.52-.96-11.21-1.86l-.13.98c9.2-1.06,18.44-1.7,27.7-1.91,2.64-.06,5.29-.08,7.93-.07v-1c-11.95,1.29-23.95,2.15-35.96,2.58-3,.11-6.17.22-8.95-1.11l-.25.93c5.28-.57,10.63-.43,15.87.44.52.09.92-.63.39-.91-2.37-1.27-4.74-2.54-7.12-3.8l-.39.91c1.64.46,3.08,1.33,4.25,2.57l.61-.79c-2.12-.91-4.29-1.69-6.51-2.33-.44-.13-.75.36-.56.73l1.36,2.77.86-.5c-.52-.86-.66-1.82-.41-2.79l-.84.22c1.81,1.4,3.63,2.83,5.69,3.84s4.32,1.56,6.6,1.86c4.99.66,10.11.61,15.13.46,2.93-.09,5.85-.24,8.77-.39.57-.03.66-.79.13-.98-1.92-.68-3.88-1.22-5.88-1.6l-.27.96,5.11.97c.64.12.86-.73.27-.96-1.4-.54-2.84-.94-4.31-1.19-.63-.11-.88.75-.27.96,2.28.79,4.63,1.39,7.01,1.78.63.1.89-.76.27-.96l-2.77-.9-.27.96,4.91.85.27-.96-6.25-.94c-.62-.09-.91.8-.27.96l3.72.97c.63.17.86-.75.27-.96-1.67-.6-3.38-1.04-5.12-1.33l-.13.98,3.92.22c.6.03.63-.8.13-.98-1.29-.47-2.6-.83-3.94-1.1-.62-.12-.9.81-.27.96l2.69.66c.63.15.89-.81.27-.96l-2.69-.66-.27.96c1.34.26,2.66.63,3.94,1.1l.13-.98-3.92-.22c-.55-.03-.69.89-.13.98,1.75.29,3.46.73,5.12,1.33l.27-.96-3.72-.97-.27.96,6.25.94c.62.09.9-.85.27-.96l-4.91-.85c-.63-.11-.89.76-.27.96l2.77.9.27-.96c-2.39-.39-4.73-.99-7.01-1.78l-.27.96c1.48.25,2.92.65,4.31,1.19l.27-.96-5.11-.97c-.63-.12-.9.84-.27.96,2,.38,3.96.92,5.88,1.6l.13-.98c-4.98.25-9.97.51-14.95.46-2.42-.03-4.85-.11-7.27-.34s-4.62-.6-6.78-1.46c-2.4-.96-4.47-2.56-6.49-4.13-.28-.22-.73-.18-.84.22-.32,1.23-.14,2.48.51,3.56.33.56,1.15.07.86-.5l-1.36-2.77-.56.73c2.13.61,4.23,1.35,6.27,2.23.5.21,1.02-.34.61-.79-1.28-1.36-2.89-2.33-4.69-2.83-.54-.15-.89.64-.39.91,2.37,1.27,4.74,2.54,7.12,3.8l.39-.91c-5.34-.88-10.76-1.05-16.13-.47-.44.05-.75.69-.25.93,2.4,1.15,5.05,1.34,7.67,1.3,3-.05,5.99-.21,8.98-.36,6.13-.31,12.25-.73,18.36-1.26,3.47-.3,6.93-.64,10.4-1.01.63-.07.66-1,0-1-9.26-.04-18.52.35-27.74,1.17-2.63.23-5.27.51-7.89.81-.52.06-.73.84-.13.98,3.77.92,7.61,1.55,11.47,1.89.49.04.68-.71.25-.93-4.4-2.23-8.91-4.22-13.51-5.97-.52-.2-.9.69-.39.91,4.97,2.19,10.41,3.15,15.83,2.76.64-.05.65-1.02,0-1-4.33.16-8.65-.31-12.94-.88-2.15-.29-4.3-.6-6.46-.86-2.04-.25-4.12-.54-6.17-.55-1.56,0-3.4.33-4.15,1.88l.43-.25.27.37h.18c.15.04.34.02.49.03l1.1.06,2.08.12-.13-.98-6.02.95c-.55.09-.43,1.06.13.98,3.22-.43,6.4-1.07,9.53-1.95.55-.15.43-.96-.13-.98l-1.71-.05v1l8.75-.21-.13-.98-7.79,1.31c-.56.09-.42,1,.13.98l5.44-.14v-1c-2.65.3-5.29.72-7.9,1.27-.55.12-.43,1.02.13.98,7.21-.44,14.4-1.18,21.55-2.2.55-.08.43-1.04-.13-.98-5.45.55-10.86,1.39-16.22,2.51-.56.12-.43.99.13.98,4.91-.08,9.8-.6,14.62-1.56.48-.1.48-.87,0-.96-1.64-.33-3.29-.65-4.93-.98l-.13.98c4.07.1,8.12.58,12.11,1.43.38.08.71-.23.62-.62-.27-1.12-1.7-.86-2.54-.79l-4.43.33c-2.96.22-5.91.44-8.87.66l.13.98c3.46-1.11,6.88-2.34,10.24-3.71.59-.24.38-1.1-.27-.96-2.21.47-4.29,1.4-6.11,2.73-.32.24-.33.8.12.91,3.9.96,7.9,1.43,11.91,1.42.65,0,.64-.95,0-1l-1.48-.11c-.55-.04-.69.89-.13.98,1.9.3,3.81.13,5.61-.57.48-.19.47-.78,0-.96-1.17-.47-2.41-.54-3.63-.23-.57.14-.41.95.13.98,1.75.11,3.44.51,5.06,1.17v-.96c-3.54.55-7.1.93-10.67,1.16v1c4.89-.65,9.78-1.31,14.67-1.96.62-.08.66-.97,0-1l-4.08-.18c-.57-.03-.67.84-.13.98l8.44,2.3.27-.96c-8.3-1.95-16.9-2.62-25.4-1.93-2.42.19-4.82.5-7.21.9-.55.09-.43,1.04.13.98,1.91-.19,3.79-.52,5.64-1.01.53-.14.44-1.03-.13-.98-7.16.65-14.3,1.48-21.42,2.5l.27.96c3.79-1.19,7.57-2.38,11.36-3.57.53-.17.45-.99-.13-.98-3.7.04-7.37.59-10.91,1.66-.52.16-.45,1.01.13.98,6.28-.32,12.5-1.42,18.5-3.28.51-.16.45-1.03-.13-.98-7.76.65-15.35,2.51-22.8,4.73s-14.94,4.84-22.52,6.9c-4.26,1.16-8.57,2.15-12.94,2.82l.63.48.23-2.41h-1v1.94c0,.54.9.71.98.13l.31-2.19h-.96l.22,1.38c.07.45.71.46.91.12.78-1.28,1.55-2.56,2.33-3.85l-.91-.39c-.45,1.09-1.18,2.01-2.09,2.74l.84.22c-.36-1.18.88-1.9,1.83-2.16,1.15-.31,2.34-.47,3.5-.74,2.47-.57,4.89-1.32,7.26-2.23.59-.23.35-1.17-.27-.96l-3.57,1.2c-.61.2-.36,1.12.27.96,1.45-.36,2.91-.54,4.41-.56.6,0,.63-.78.13-.98-.88-.37-1.8-.54-2.75-.53-.57,0-.68.82-.13.98l2.41.71v-.96c-4.45.74-8.76,2.1-12.83,4.03l.5.86c4.08-2.81,8.68-4.74,13.55-5.67.55-.1.43-1.05-.13-.98-2.05.24-4.03.72-5.95,1.49-.58.23-.35,1.18.27.96,3.33-1.14,6.8-1.76,10.31-1.84l-.13-.98c-2.16.74-4.39,1.15-6.67,1.22l.13.98c4.25-1.63,8.73-2.59,13.27-2.84v-1l-4.18.28.13.98,2.22-.44-.27-.96c-1.77.67-3.46,1.51-5.06,2.53-.48.3-.17,1.05.39.91,3.16-.77,6.24-1.8,9.23-3.07.47-.2.22-.95-.25-.93-1.56.06-3.02.73-4.06,1.9l.79.61c.44-.58.56-1.27.4-1.97-.08-.35-.46-.42-.73-.3-3.05,1.33-6.44,1.35-9.71,1.37l.13.98c7.31-1.58,14.69-2.76,22.13-3.53v-1l-5.96.76c-.62.08-.66.99,0,1l9.09.18v-1l-6.4.7c-.62.07-.66,1.02,0,1,2.36-.08,4.73-.16,7.09-.24v-1l-3.51.31c-.63.06-.65,1.02,0,1l5.6-.17c.64-.02.65-1.02,0-1-3.37.09-6.73.34-10.08.77-.62.08-.66,1.03,0,1,.59-.03,1.18-.06,1.76-.09.64-.03.65-1.02,0-1-.45,0-.9.03-1.35.04-.34,0-.77-.05-1.1.07-.15.06-.32.17-.35.35-.07.4.21.88.67.84.16-.02.36-.08.43-.25l.03-.06c.13-.3-.01-.81-.43-.75l-6.54.82c-.63.08-.65,1.07,0,1l3.59-.37v-1l-6.52.86.13.98c3.71-.59,7.41-1.3,11.08-2.14.64-.15.35-1.06-.27-.96l-5.74.84c-.55.08-.43,1.04.13.98,2.2-.24,4.37-.66,6.49-1.26.63-.18.35-1.06-.27-.96l-8.68,1.31c-.55.08-.43,1.02.13.98l4.77-.35c.64-.05.64-1.05,0-1h0l.05.04h0Z"
                        />
                        <path
                            className="cls-6"
                            d="m626.54,50.45c-.8-.27-1.56-.61-2.29-1.03l-.39.91,1.32.43.13-.98c-4.29-.45-8.59-.76-12.89-.94l.48.63c.37-.87,1.99-.7,2.73-.71,1.28-.02,2.56.02,3.83.1,2.63.16,5.24.52,7.83,1.01s5.02,1.07,7.5,1.74c1.19.32,2.46.59,3.58,1.11s1.91,1.33,2.85,2.03c2.01,1.48,4.46,2.28,6.33,3.97.4.36,1.13-.12.79-.61-.65-.92-1.43-1.76-2.41-2.36-1.09-.67-2.3-.85-3.56-.92-2.91-.15-5.49-1.14-8.14-2.29l-.39.91c1.06.28,2.13.56,3.19.84.56.15.86-.61.39-.91-.98-.63-1.96-1.25-2.95-1.88l-.39.91c1.51.62,3.04,1.19,4.59,1.71l.27-.96-2.25-.58-.27.96c3.27.65,6.46,1.64,9.51,2.97l.25-.93c-2.24-.12-4.47-.29-6.7-.51-.58-.06-.64.82-.13.98l1.48.48c.56.18.84-.61.39-.91l-2.71-1.81-.39.91c.72.29,1.41.64,2.08,1.05l.39-.91-2.29-.82-.27.96,4.52.84c.43.08.92-.5.49-.84l-1.21-.95c-.5-.39-1.21.3-.71.71,2.28,1.86,4.76,3.42,7.44,4.63.29.13.64.04.73-.3.14-.49.07-.96-.23-1.37-.32-.44-1.06-.2-.91.39.23.93.46,1.86.69,2.78.14.55.98.43.98-.13v-1.69l-.93.25c.35.7.38,1.5.06,2.22l.56-.23c-11.03-3.29-22.63-3.52-33.87-5.75-3.16-.63-6.29-1.42-9.34-2.47-.61-.21-.87.76-.27.96,10.9,3.75,22.51,4.09,33.78,6.05,3.18.55,6.34,1.25,9.44,2.17.19.06.48-.03.56-.23.47-1.07.46-2.18-.06-3.23-.23-.46-.93-.22-.93.25v1.69l.98-.13c-.23-.93-.46-1.86-.69-2.78l-.91.39c.15.2.2.35.13.6l.73-.3c-2.59-1.18-5.03-2.67-7.23-4.47l-.71.71,1.21.95.49-.84-4.52-.84c-.63-.12-.87.75-.27.96l2.29.82c.55.2.86-.63.39-.91-.74-.45-1.51-.83-2.32-1.15-.55-.22-.83.62-.39.91l2.71,1.81.39-.91-1.48-.48-.13.98c2.23.21,4.46.38,6.7.51.47.03.71-.73.25-.93-3.13-1.37-6.39-2.41-9.75-3.07-.62-.12-.9.8-.27.96l2.25.58c.63.16.87-.76.27-.96-1.55-.52-3.08-1.09-4.59-1.71-.54-.22-.84.62-.39.91.98.63,1.96,1.25,2.95,1.88l.39-.91c-1.06-.28-2.13-.56-3.19-.84-.53-.14-.92.68-.39.91,2.35,1.02,4.73,2.05,7.29,2.34,1.27.14,2.58.02,3.78.54,1.1.48,1.99,1.36,2.68,2.33l.79-.61c-1.79-1.61-4.05-2.46-6.04-3.78-1.05-.7-1.93-1.64-3.05-2.23s-2.42-.89-3.65-1.23c-5.4-1.48-10.93-2.64-16.54-2.94-1.53-.08-3.1-.16-4.63-.03-1.02.09-1.99.4-2.41,1.41-.13.32.2.62.48.63,4.31.17,8.61.49,12.89.94.58.06.64-.82.13-.98l-1.32-.43c-.54-.18-.87.63-.39.91.8.46,1.65.84,2.53,1.13.61.21.87-.76.27-.96h.01Z"
                        />
                        <path
                            className="cls-8"
                            d="m650.5,59.98c.64,0,.64-1,0-1s-.64,1,0,1h0Z"
                        />
                        <path
                            className="cls-8"
                            d="m649.9,59.76c-.04.76-.05,1.52-.01,2.28.01.26.22.51.5.5.26,0,.51-.22.5-.5-.03-.76-.03-1.52.01-2.28.01-.26-.24-.51-.5-.5-.28,0-.48.22-.5.5h0Z"
                        />
                    </g>
                    <line className="cls-2" x1={607.17} y1={120.79} x2={582.42} y2={120.79} />
                    <line className="cls-2" x1={582.42} y1={120.79} x2={578.42} y2={116.63} />
                    <line className="cls-2" x1={607.17} y1={120.79} x2={610.87} y2={116.63} />
                </g>
            </svg>
            <label htmlFor="first">73mm x 35mm</label>
            <input type="number" min={0} name="first" onInput={e => setFirst(e.target.value)} />
            <label htmlFor="second">73mm x 75mm</label>
            <input type="number" min={0} name="second" onInput={e => setSecond(e.target.value)} />
            <label htmlFor="third">73mm x 150mm</label>
            <input type="number" min={0} name="third" onInput={e => setThird(e.target.value)} />
            <label htmlFor="fourth">73mm x 300mm</label>
            <input type="number" name="fourth" onInput={e => setFourth(e.target.value)} />
        </div>
    )
}