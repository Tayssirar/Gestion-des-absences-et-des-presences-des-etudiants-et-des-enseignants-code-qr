import Lottie from "react-lottie";

interface LottieGifProps {
    illustration: any; // Replace 'any' with the appropriate type
    width: number;
    height: number;
  }

export default function LottieGif({illustration, width,height}: LottieGifProps) {
    const defaultOptions={
        loop:true,
        autoplay: true,
        animationData: illustration,
        rendererSettings: {
            preserveAspectRatio:"xMidYMid slice",
        },
    };
  return (
    <div>
      <Lottie options={defaultOptions} width={width} height={height}/>
    </div>
  )
}


