import { useSelector } from "react-redux";

const Home = () => {
  let count = useSelector((state) => state.count.value);

  return <div>{count}</div>;
};

export default Home;
