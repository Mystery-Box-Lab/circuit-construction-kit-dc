// Copyright 2017, University of Colorado Boulder

/**
 * The "Lab" Screen for the Circuit Construction Kit: DC simulation.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitDc = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/circuitConstructionKitDc' );
  var LabScreenModel = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/model/LabScreenModel' );
  var LabScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_DC/lab/view/LabScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var CircuitConstructionKitCommonConstants =
    require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CircuitConstructionKitCommonConstants' );
  var Property = require( 'AXON/Property' );
  var Image = require( 'SCENERY/nodes/Image' );

  // strings
  var labString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_DC/lab' );

  // images
  var labScreenIcon = require( 'image!CIRCUIT_CONSTRUCTION_KIT_DC/lab-screen-icon.png' );

  /**
   * @param {Tandem} tandem
   * @param {Object} options
   * @constructor
   */
  function LabScreen( tandem, options ) {

    Screen.call(
      this,
      function() { return new LabScreenModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new LabScreenView( model, tandem.createTandem( 'view' ), options ); }, {
        name: labString,
        backgroundColorProperty: new Property( CircuitConstructionKitCommonConstants.BACKGROUND_COLOR ),
        homeScreenIcon: new Image( labScreenIcon ),
        tandem: tandem
      }
    );
  }

  circuitConstructionKitDc.register( 'LabScreen', LabScreen );

  return inherit( Screen, LabScreen );
} );