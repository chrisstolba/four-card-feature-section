const calculator_icon = require("../images/icon-calculator.svg");
const karma_icon = require("../images/icon-karma.svg");
const supervisor_icon = require("../images/icon-supervisor.svg");
const team_builder_icon = require("../images/icon-team-builder.svg");

let cardInfo = [
  {
    title: "Supervisor",
    description: "Monitors activity  to identify project roadblocks",
    icon: supervisor_icon,
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: team_builder_icon,
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: karma_icon,
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: calculator_icon,
  },
];

export default cardInfo;
