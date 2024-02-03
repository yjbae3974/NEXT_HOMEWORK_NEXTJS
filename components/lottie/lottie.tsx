import Lottie from "lottie-react";
import Rocket from "public/assets/lottie/rocket-loader.json";
import Programming from "public/assets/lottie/programming.json";
import Session from "public/assets/lottie/session.json";
import Project from "public/assets/lottie/project.json";
import Demoday from "public/assets/lottie/demoday.json";
import DemodayFinal from "public/assets/lottie/demoday-final.json";
import DemodayInHouse from "public/assets/lottie/demoday-in-house.json";
import Launch from "public/assets/lottie/launch.json";
import Fire from "public/assets/lottie/fire.json";
import { useLottie, useLottieInteractivity } from "lottie-react";

export default function RocketLottie() {
  const options = {
    animationData: Rocket,
  };
  const style = { width: "100%" };
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 110],
      },
    ],
  });

  return Animation;
}
const LaptopLottie = () => {
  const options = {
    animationData: Programming,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);

  return View;
};
const SessionLottie = () => {
  const options = {
    animationData: Session,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);

  return View;
};
const ProjectLottie = () => {
  const options = {
    animationData: Project,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);

  return View;
};
const DemodayLottie = () => {
  const options = {
    animationData: Demoday,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);

  return View;
};

const DemodayFinalLottie = () => {
  const options = {
    animationData: DemodayFinal,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);

  return View;
};

const DemodayInHouseLottie = () => {
  const options = {
    animationData: DemodayInHouse,
  };
  const style = { width: "100%" };
  const { View } = useLottie(options, style);
  return View;
};

const FireLottie = () => {
  const options = {
    animationData: Fire,
  };
  const style = { width: "100%", height: "100%", transform: "rotate(180deg)" };
  const { View } = useLottie(options, style);
  return View;
};

export {
  RocketLottie,
  LaptopLottie,
  SessionLottie,
  ProjectLottie,
  DemodayLottie,
  DemodayFinalLottie,
  DemodayInHouseLottie,
  FireLottie,
};
