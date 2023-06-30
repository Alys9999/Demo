

export function HexButton({allColor }){
    const defaultButtonColor="#D9D9D9";
    if (!allColor){
        allColor=defaultButtonColor;
    }

    return(
        <svg width="103" height="117" viewBox="0 0 103 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_2)">
        <path d="M47.5 0L94.6984 27.25V81.75L47.5 109L0.301617 81.75V27.25L47.5 0Z" fill="#D9D9D9"/>
        <path d="M0.801617 27.5387L47.5 0.57735L94.1984 27.5387V81.4613L47.5 108.423L0.801617 81.4613V27.5387Z" stroke={allColor}/>
        </g>
        <defs>
        <filter id="filter0_d_1_2" x="0.30162" y="0" width="102.397" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="4" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape"/>
        </filter>
        </defs>
        </svg>
        

    )
}