export default function Curve (){
    return(
                
        <svg

        xmlns="http://www.w3.org/2000/svg"
        id="curve"
        version="1.1"
        viewBox="0 0 220 40"
        // height="67.279778mm"
        // width="254.75594mm"
        >
       <g
          transform="translate(0,-230)"
          id="layer1">
         <path
            id="curve-path"
            d="m -25.70238,268.08151 c 77.790201,-54.69314 94.456549,-21.71093 132.94523,-9.21138 24.54999,7.97282 57.97842,7.61222 121.81071,-29.1499 v 66.09943 l -254.75594,1.18035 z"
             />
       </g>
       <style jsx>
           {`
                #curve{
                    width:100%;
                    fill: #fff;
                    padding:0;
                    stroke:none;
                }

                #curve-path{
                    stroke:none;
                }

           `}
       </style>
     </svg>
)}