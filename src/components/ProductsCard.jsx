import { star } from "../assets/icons";
export default function ProductsCard(props) {
  return (
    <div className=" mt-16 flex flex-col gap-6">
      <img
        className="bg-card bg-center rounded-xl"
        src={props.shoe.url}
        alt="shoe-img"
      />
      <div className="flex gap-6">
        <img src={star} alt="" />
        <p className="text-xl text-slate-gray">({props.shoe.rating})</p>
      </div>
      <p className="text-2xl font-semibold font-montserrat">
        {props.shoe.model}
      </p>
      <p className="text-2xl font-bold text-coral-red">{props.shoe.price}</p>
    </div>
  );
}
