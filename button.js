class Button {
  constructor(width, height, type = "button", color = "green") {
    this.button_width = width;
    this.button_height = height;
    this.button_type = type;
    this.button_color = color;
    this.props = {
      propsWidth: this.button_width,
      propsHeight: this.button_height,
      propsType: this.button_type,
      propsColor: this.button_color,
    };
  }
  onClick() {
    console.log(this.props);
  }
}
let myButton = new Button(10, 5);
myButton.onClick();

testButton(myButton, 10, 5, "button", "green");
function testButton(
  button,
  expectedWidth,
  expectedHeight,
  expectedType,
  expectedColor
) {
  if (
    button.button_width === expectedWidth &&
    button.button_height === expectedHeight &&
    button.button_type === expectedType &&
    button.button_color === expectedColor
  ) {
    console.log("button has been made correctly");
  } else {
    console.log("button has been made incorrectly");
  }
}
