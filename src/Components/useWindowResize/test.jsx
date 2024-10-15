import useWindowResize from "./index";

const UseWindowResize = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>use window resize hook</h1>
      <h3>Width is {width}</h3>
      <h3>Height is {height}</h3>
    </div>
  );
};

export default UseWindowResize;
