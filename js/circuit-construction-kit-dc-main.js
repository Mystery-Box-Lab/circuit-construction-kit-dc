// Copyright 2016-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import KeyboardUtils from '../../scenery/js/accessibility/KeyboardUtils.js';
import '../../scenery/js/nodes/Image.js'; // Image is required for making toDataURLNodeSynchronous work in the built version
import Tandem from '../../tandem/js/Tandem.js';
import circuitConstructionKitDcStrings from './circuit-construction-kit-dc-strings.js';
import IntroScreen from './intro/IntroScreen.js';
import LabScreen from './lab/LabScreen.js';

// constants
const tandem = Tandem.ROOT;

const circuitConstructionKitDcTitleString = circuitConstructionKitDcStrings[ 'circuit-construction-kit-dc' ].title;

const simOptions = {
  credits: {
    leadDesign: 'Amy Rouinfar',
    softwareDevelopment: 'Sam Reid, Denzell Barnett',
    team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
    qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Kathryn Woessner',
    graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
  },
  tandem: tandem,
  accessibility: true
};

// Support accessibility for deleting selected circuit elements, but don't support broader tab navigation until it
// is complete
document.addEventListener( 'keydown', event => {
  const keyCode = event.keyCode || event.which;
  if ( keyCode === KeyboardUtils.KEY_TAB ) {
    event.preventDefault();
  }
} );

// Circuit Construction Kit has unit tests for checking the mathematics for the Modified Nodal Analysis algorithm.  In
// order to load the classes into an accessible namespace, the *-config.js and *-main.js are loaded however, when
// running the unit tests we don't also want to launch the simulation.
if ( !window.circuitConstructionKitTestSuite ) {
  SimLauncher.launch( () => {

    // Launch the simulation once everything is ready
    const sim = new Sim( circuitConstructionKitDcTitleString, [
      new IntroScreen( tandem.createTandem( 'introScreen' ) ),
      new LabScreen( tandem.createTandem( 'labScreen' ) )
    ], simOptions );
    sim.start();
  } );
}