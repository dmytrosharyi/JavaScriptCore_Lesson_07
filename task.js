var robot = new Robot();

var coffeeRobot = new CoffeeRobot();

var robotDancer = new RobotDancer();

var robotCooker = new RobotCooker();


function Robot() {
  this.text = 'я просто працюю';
  this.work = function () {
    console.log('Я ' + this.constructor.name + ' – ' + this.text);
  };
}

function CoffeeRobot() {
  Robot.call(this);
  this.text = 'я варю каву';
}

function RobotDancer() {
  Robot.call(this);
  this.text = 'я просто танцюю';
}


function RobotCooker() {
  Robot.call(this);
  this.text = 'я просто готую';
}

var Robots = [robot, coffeeRobot, robotDancer, robotCooker];

for (var i = 0; i < Robots.length; i++) {
  Robots[i].work();
}
