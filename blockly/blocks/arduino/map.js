/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.provide('Blockly.Blocks.map');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.map.HUE = 230;

Blockly.Blocks['base_map'] = {
  /**
   * Block for creating a the map function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/map');
    this.setColour(Blockly.Blocks.map.HUE);
    this.appendValueInput('NUM')
        .appendField(Blockly.Msg.ARD_MAP)
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendValueInput('DMIN')
            .appendField(Blockly.Msg.ARD_MAP_VAL)
            .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendValueInput('DMAX')
            .appendField('-')
            .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(']');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.ARD_MAP_TIP);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['convert_angle'] = {
  /**
   * Block for creating a the map function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/map');
    this.setColour(Blockly.Blocks.map.HUE);
    this.appendValueInput("IN")
         .setCheck(Blockly.Types.NUMBER.checkList)
         .appendField("Convert to Angle (0 -180 degs)");
    this.setOutput(true,Blockly.Types.NUMBER.output);
    this.setTooltip("Convert an input to Angle");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['convert_level'] = {
  /**
   * Block for creating a the map function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/map');
    this.setColour(Blockly.Blocks.map.HUE);
    this.appendValueInput("IN")
         .setCheck(Blockly.Types.NUMBER.checkList)
         .appendField("Convert to Level (0 -255)");
    this.setOutput(true,Blockly.Types.NUMBER.output);
    this.setTooltip("Convert an input to Level");
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};
