/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';


goog.provide('Blockly.Arduino.elementory');

goog.require('Blockly.Arduino');


Blockly.Arduino['get_humidity'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'readHumidity('+dropdown_pin+')';
  code+='delay(2000)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_light_intensity'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_temperature'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'readTemperature('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_ultrasonic_distance'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'get_ultrasonic_distance('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['lcd_print'] = function(block) {
  //var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var text = Blockly.Arduino.valueToCode(this, 'Message', Blockly.Arduino.ORDER_ATOMIC);
  var line = Blockly.Arduino.valueToCode(this, 'Line', Blockly.Arduino.ORDER_ATOMIC);
  var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addSetup('','lcd.init();\nlcd.backlight();',true);
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'lcd.setCursor(' + pos + ',' + line +');\n';
  code+='lcd.print('+text+');\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['lcd_clear'] = function(block) {

  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addSetup('lcd.init();');
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['pump_start'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  var stateOutput = Blockly.Arduino.valueToCode(
      block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, dropdown_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + dropdown_pin, pinSetupCode, false);

  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'pump_start('+dropdown_pin+');\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['pump_stop'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  var stateOutput = Blockly.Arduino.valueToCode(
      block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  Blockly.Arduino.reservePin(
      block, dropdown_pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  var pinSetupCode = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  Blockly.Arduino.addSetup('io_' + dropdown_pin, pinSetupCode, false);
  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  var code = 'pump_stop('+dropdown_pin+');\n';
  return code;
};
