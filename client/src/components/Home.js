import React from 'react';
import FilteredEventsList from './FilteredEventsList';

export default function Home() {
  
 return (
      <div >
        <svg className="flex-1 flex max-w-5xl mx-auto px-6 sm:px-6 lg:px-8" id="Hero_slider" xmlns="http://www.w3.org/2000/svg" width="1400" height="400" viewBox="0 0 1681.398 415">
            <rect id="Rechteck_3" data-name="Rechteck 3" width="1162" height="181" transform="translate(374.505)" fill="#e4e4e4"/>
            <text id="Super_Rocket_Event" data-name="Super Rocket Event" transform="translate(336.505 208)" font-size="77" font-family="Helvetica"><tspan x="0" y="0">SUPER ROCKET EVENT</tspan></text>
            <text id="Berlin_12._Mar_2021" data-name="Berlin, 12. Mar 2021" transform="translate(454.505 281)" font-size="44" font-family="Helvetica"><tspan x="0" y="0">BERLIN, 12. MAR 2021</tspan></text>
            <text id="IRONHACK_WDFT" data-name="IRONHACK WDFT" transform="translate(999.505 281)" font-size="44" font-family="Helvetica"><tspan x="0" y="0">IRONHACK WDFT</tspan></text>
            <g id="Rechteck_19" data-name="Rechteck 19" transform="translate(304.505 78)" fill="none" stroke="#000" stroke-width="7">
              <rect width="1168" height="247" stroke="none"/>
              <rect x="3.5" y="3.5" width="1161" height="240" fill="none"/>
            </g>
            <g id="Komponente_17_1" data-name="Komponente 17 – 1" transform="translate(1627.398 173)">
              <path id="Polygon_4" data-name="Polygon 4" d="M35,0,70,54H0Z" transform="translate(54) rotate(90)" fill="#ff30f7"/>
            </g>
            <g id="Komponente_16_1" data-name="Komponente 16 – 1" transform="translate(0 173)">
              <g id="Polygon_3" data-name="Polygon 3" transform="matrix(-0.017, -1, 1, -0.017, 1.222, 70.932)" fill="#fbff4a">
                <path d="M 69.08008575439453 53.5 L 0.9199179410934448 53.5 L 35 0.9193019866943359 L 69.08008575439453 53.5 Z" stroke="none"/>
                <path d="M 35 1.838588714599609 L 1.839828491210938 53 L 68.16017150878906 53 L 35 1.838588714599609 M 35 0 L 70 54 L 0 54 L 35 0 Z" stroke="none" fill="#eaed63"/>
              </g>
            </g>
            <g id="Komponente_18_3" data-name="Komponente 18 – 3" transform="translate(835.505 389)">
              <rect id="Rechteck_20" data-name="Rechteck 20" width="26" height="26" fill="#ff00f5"/>
              <rect id="Rechteck_20-2" data-name="Rechteck 20" width="26" height="26" transform="translate(40)" fill="rgba(255,0,245,0.2)"/>
              <rect id="Rechteck_20-3" data-name="Rechteck 20" width="26" height="26" transform="translate(80)" fill="rgba(255,0,245,0.2)"/>
            </g>
        </svg>

        <div className="container mx-auto p-6">
          <h1 className="font-bold text-3xl">Find the best startup events to pitch your startup, win great prices & more.</h1>
          <FilteredEventsList />
        </div>
      </div>
    )
}



