goog.provide('Blockly.Blocks.elementory');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['get_humidity'] = {
  init: function() {
    var options = [['1', 'A0'], ['2', 'A1'], ['3', 'A2'], ['4', 'A3']];
    this.setColour(120);
    this.appendDummyInput()
        .appendField("Humidity Sensor")
      //  .appendField(new Blockly.FieldImage("https://elementory.in/wp-content/uploads/2018/03/elt_small.png"))
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
      //  .appendField(new Blockly.FieldImage("https://elementory.in/wp-content/uploads/2018/03/elt_small.png"))
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
