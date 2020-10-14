import P5 from "p5";

const sketch = (p5: P5) => {
  /**
   * This function is called once when the program starts.
   */
  p5.setup = () => {
    // create p5 canvas doohickey
    const canvas = p5.createCanvas(800, 640);
    canvas.parent('doohickey');

    // set background color
    p5.background(0);

    // create notepad lines
    p5.stroke('#252525');
    for (let i = 1; i <= 20; i++)
      p5.line(0, 32 * i, p5.width, 32 * i);


    // create horizontal line
    p5.stroke('orange');
    p5.line(0, 96, p5.width, 96);

    // create vertical line
    p5.stroke('red');
    p5.line(100, 0, 100, p5.height);

    // add your code...
  }

  /**
   * This function continuously executes the lines of code contained inside
   *  its block until the program is stopped or noLoop() is called
   */
  p5.draw = () => {

    // create heading text
    p5.textSize(32);
    p5.fill('green');
    p5.stroke(0);
    p5.text('Doohickey', p5.width * 0.5 - 50, 40, 100, 32);

    // create body text
    p5.textSize(18);
    p5.fill('gray');
    p5.text('Use mouse cursor to draw on this doohickey pad 😎', 120, 146, p5.width, 32);

    // draw line using mouse
    p5.stroke(255);
    if (p5.mouseIsPressed === true)
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);

    // add your code...
  }
}

export default new P5(sketch);