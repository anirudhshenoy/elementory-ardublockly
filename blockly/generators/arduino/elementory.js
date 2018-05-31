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
//  Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'readHumidity('+dropdown_pin+')';
  code+='delay(2000)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_light_intensity'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_temperature'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'readTemperature('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['get_ultrasonic_distance'] = function(block) {
  var dropdown_pin = this.getFieldValue('PORT');
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'get_ultrasonic_distance('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['lcd_print'] = function(block) {
  //var text = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_UNARY_POSTFIX);
  var text = Blockly.Arduino.valueToCode(this, 'Message', Blockly.Arduino.ORDER_ATOMIC);
  var line = Blockly.Arduino.valueToCode(this, 'Line', Blockly.Arduino.ORDER_ATOMIC);
  var pos = Blockly.Arduino.valueToCode(this, 'Position', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addSetup('','lcd.init();\n  lcd.backlight();',true);
  //Blockly.Arduino.definitions_['define_elementory'] = '#include <elementory.h>\n';
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  var code = 'lcd.setCursor(' + pos + ',' + line +');\n';
  code+='lcd.print('+text+');\n';
  return code;
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

Blockly.Arduino['save_time'] = function(block) {
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  //Blockly.Arduino.definitions_['define_var'] = 'DateTime ' + varName +';\n';
  Blockly.Arduino.addSetup('','rtc.begin();',true);
  return varName + ' = rtc.now();\n';
};

Blockly.Arduino['get_time'] = function(block) {
  var time_option = this.getFieldValue('option');
  Blockly.Arduino.addInclude('', '#include <elementory.h>');
  Blockly.Arduino.addSetup('','rtc.begin();',true);

  var code = 'getTime(\''+time_option+'\')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
