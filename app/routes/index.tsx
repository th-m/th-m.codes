import { Atom } from "~/components/atom";
import { House } from "~/components/house";
import { Platonic } from "~/components/platonic";
import { GradientCanvas } from "../components/gradientCanvas";

export default function Index() {
  return (
    <>
    <GradientCanvas />
    {/* <House /> */}
    <Atom />
    <Platonic />
    </>
    
  );
}
