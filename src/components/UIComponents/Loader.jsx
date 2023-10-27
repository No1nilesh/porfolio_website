import { useProgress } from "@react-three/drei/core/useProgress";
import { Html } from "@react-three/drei/web/Html";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
       <div className="code-loader flex items-center justify-center gap-2 font-[Poppins,sans-serif]">
  <span>&#123;</span><p className="text-xl">{progress.toFixed(2)}%</p><span>&#125;</span>
</div>
    </Html>
  );
};

export default Loader;