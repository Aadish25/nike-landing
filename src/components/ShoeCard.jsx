import { useDispatch } from "react-redux";
import { setShoe } from "../reducers/shoeSet/shoeNum";

export default function ShoeCard(props) {
  const dispatch = useDispatch();
  const handleClick = (index) => {
    dispatch(setShoe(index));
  };
  return (
    <div
      className={`bg-card bg-center min-h-min min-w-min xl:p-3 rounded-3xl border-2 ${
        props.curr == props.index ? "border-coral-red" : "border-transparent"
      }`}
      onClick={() => handleClick(props.index)}
    >
      <img className="h-auto w-full" src={props.img} alt="shoe-img" />
    </div>
  );
}
