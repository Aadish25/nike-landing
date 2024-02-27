import { truckFast, support, shieldTick } from "../assets/icons";
import ServiceCard from "../components/ServiceCard";
export default function Services() {
  const ServiceDetails = [
    {
      icon: truckFast,
      title: "Free shipping",
      description:
        "Enjoy seamless shopping with our complimentary shipping service.",
    },
    {
      icon: shieldTick,
      title: "Secure Payment",
      description:
        "Experience worry-free transactions with our secure payment options.",
    },
    {
      icon: support,
      title: "Love to help you",
      description:
        "Our dedicated team is here to assist you every step of the way.",
    },
  ];
  const services = ServiceDetails.map((item, index) => {
    return <ServiceCard key={index} {...item} />;
  });
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {services}
    </div>
  );
}
