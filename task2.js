var Robot = {
    name : "Robot",
    text : "я просто працюю",

    work: function () {
        console.log('Я ' + this.name + ' – ' + this.text);
    },
};

var CoffeeRobot = {
    name : "CoffeeRobot",
    text : "я роблю каву",
    __proto__: Robot
};

var RobotDancer = {
    name : "RobotDancer",
    text : "я просто танцюю",
    __proto__: Robot
};

var RobotCooker = {
    name : "RobotCooker",
    text : "я просто готую",
    __proto__: Robot
};

var Robots = [Robot, CoffeeRobot, RobotDancer, RobotCooker];
for (var i = 0; i < Robots.length; i++) {
  Robots[i].work();
}
