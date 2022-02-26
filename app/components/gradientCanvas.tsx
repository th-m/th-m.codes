import { Gradient } from "../utils/gradient";
import { useEffect, useRef, HTMLAttributes } from "react"
type Props = HTMLAttributes<HTMLCanvasElement>
export const GradientCanvas = (props: Props) => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    var gradient = new Gradient();
    // @ts-ignore
    console.log({ gradient })
    // @ts-ignore
    console.log(ref.current);

    // @ts-ignore
    gradient.initGradient(ref.current);
  }, [ref])

  return (
    <>
      <div className="canvas-wrapper">
        <canvas ref={ref} id="gradient-canvas"
          data-transition-in=""
          width="891"
          height="600"
          className="isLoaded">
        </canvas>
      </div>
      <div className="cut-out"></div>
    </>
  )
}