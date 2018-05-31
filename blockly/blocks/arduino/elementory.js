goog.provide('Blockly.Blocks.elementory');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['get_humidity'] = {
  init: function() {
    var options = [['1', 'A0'], ['2', 'A1'], ['3', 'A2'], ['4', 'A3']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Humidity Sensor")
        .appendField(new Blockly.FieldImage("http://www.elektrojo.com/448-large_default/dht11-temperature-relative-humidity-sensor-module.jpg",64,64))
        .appendField("PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setOutput(true, 'Number');
    this.setTooltip('Get Humidity Value from Sensor');
  }
};

Blockly.Blocks['get_light_intensity'] = {

  init: function() {
    var options = [['1', 'A0'], ['2', 'A1'], ['3', 'A2'], ['4', 'A3']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Light Sensor")
        .appendField(new Blockly.FieldImage("https://potentiallabs.com/cart/image/cache/catalog/LDR-800x800.jpg",64,64))
        .appendField("PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setOutput(true, 'Number');
    this.setTooltip('Get Light Intensity from Sensor');
  }
};

Blockly.Blocks['get_temperature'] = {

  init: function() {
    var options = [['1', 'A0'], ['2', 'A1'], ['3', 'A2'], ['4', 'A3']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Temperataure Sensor")
      //  .appendField(new Blockly.FieldImage("https://elementory.in/wp-content/uploads/2018/03/elt_small.png"))
        .appendField("PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setOutput(true, 'Number');
    this.setTooltip('Get Temperture in Celsius from Sensor');
  }
};

Blockly.Blocks['get_ultrasonic_distance'] = {

  init: function() {
    var options = [['1', 'A0'], ['2', 'A1'], ['3', 'A2'], ['4', 'A3']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Ultrasonic Distance ")
        .appendField(new Blockly.FieldImage("https://www.makerlab-electronics.com/my_uploads/2016/05/ultrasonic-sensor-HCSR04-1.jpg",64,64))
        .appendField("PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setOutput(true, 'Number');
    this.setTooltip('Get Distance from Ultrasonic Sensor');
  }
};

Blockly.Blocks['lcd_print'] = {

  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("LCD Print")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/Serial%20LCD.jpg", 64, 64))
    this.appendValueInput("Message", 'String')
          //.setCheck('String')
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Message");
    this.appendValueInput("Line", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Line");
    this.appendValueInput("Position", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Position");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Show Text on the LCD');
  }
};

Blockly.Blocks['lcd_clear'] = {

  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("LCD Clear")
        .appendField(new Blockly.FieldImage("https://statics3.seeedstudio.com/images/product/Serial%20LCD.jpg", 64, 64))
    this.setTooltip('Clear the LCD');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks['pump_start'] = {
  init: function() {
    var options = [['1', '10'], ['2', '9'], ['3', '6'], ['4', '5'],['5', '3']];
    this.setColour(150);
    this.appendDummyInput()
        .appendField("Start Pump")
        .appendField(new Blockly.FieldImage("https://mi3.rightinthebox.com/images/384x384/201707/jjjalq1501497786657.jpg",64,64))
        .appendField("Output PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Start the pump');
  }
};

Blockly.Blocks['pump_stop'] = {
  init: function() {
    var options = [['1', '10'], ['2', '9'], ['3', '6'], ['4', '5'],['5', '3']];
    this.setColour(150);
    this.appendDummyInput()
        .appendField("Stop Pump")
        .appendField(new Blockly.FieldImage("https://mi3.rightinthebox.com/images/384x384/201707/jjjalq1501497786657.jpg",64,64))
        .appendField("Output PORT#")
        .appendField(new Blockly.FieldDropdown(options), "PORT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Stop the pump');
  }
};




Blockly.Blocks['save_time'] = {
  init: function() {
    this.appendDummyInput()
          .appendField('Save Current Time in:')
          .appendField(new Blockly.FieldVariable(
          Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR');
    this.setColour(150);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Save the current time in a Variable');
  },
/**
 * Set's the type of the variable selected in the drop down list. As there is
 * only one possible option, the variable input is not really checked.
 * @param {!string} varName Name of the variable to check type.
 * @return {string} String to indicate the variable type.
 */
getVarType: function(varName) {
  return Blockly.Types.DATETIME;
  }
};

Blockly.Blocks['get_time'] = {
  init: function() {
    var options = [['Hour', 'h'], ['Minute', 'm'], ['Second', 's'], ['Year', 'Y'],['Month', 'M'],['Day', 'D']];
    this.appendDummyInput()
          .appendField('Get the current ')
          .appendField(new Blockly.FieldDropdown(options), "option");
    this.setColour(150);
    this.setOutput(true, 'Number');
    this.setTooltip('Get Date and Time from RTC');
  }
};

Blockly.Blocks['save_memory_time'] = {

  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Save ")
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR')
        .appendField('to memory');
    this.setTooltip('Save time to memory');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  getVarType: function(varName) {
    return Blockly.Types.DATETIME;
    }
};

Blockly.Blocks['read_memory_time'] = {

  init: function() {
    var options = [['Hour', 'h'], ['Minute', 'm'], ['Second', 's'], ['Year', 'Y'],['Month', 'M'],['Day', 'D']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Read ")
        .appendField(new Blockly.FieldDropdown(options), "option")
        .appendField(" from memory");

    this.setOutput(true, 'Number');
    this.setTooltip('Read time from memory');
  }
};
