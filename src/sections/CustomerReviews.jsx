import { customer1, customer2 } from "../assets/images";
import { star } from "../assets/icons";
export default function CustomerReviews() {
  const customerList = [
    {
      img: customer1,
      review:
        "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
      star: star,
      rating: "4.5",
      name: "Morich Brown",
    },
    {
      img: customer2,
      review:
        "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
      star: star,
      rating: "4.5",
      name: "Lota Mongeskar",
    },
  ];
  const customer = customerList.map((item, index) => {
    return (
      <div
        className="flex flex-col text-center items-center gap-4 max-w-xs font-montserrat"
        key={index}
      >
        <img className="h-32 w-32 rounded-full" src={item.img} alt="person" />
        <p className="text-xl text-slate-gray">{item.review}</p>
        <div className="flex gap-2">
          <img src={star} alt="star" />
          <p className="text-xl text-slate-gray">({item.rating})</p>
        </div>
        <h1 className="text-2xl font-bold">{item.name}</h1>
      </div>
    );
  });
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <div className="text-center max-w-xl ">
        <p className="text-4xl font-semibold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </p>
        <p className="text-lg p-4 text-slate-gray font-montserrat">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-3/4 justify-around">
        {customer}
      </div>
    </div>
  );
}
