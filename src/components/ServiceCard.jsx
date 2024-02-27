export default function ServiceCard({ icon, title, description }) {
  return (
      <div className="bg-white shadow-3xl rounded-xl px-8 py-16 flex flex-col gap-6">
        <div className="max-w-max p-4 rounded-full bg-coral-red">
          <img src={icon} alt="service-icon" />
        </div>

        <h1 className="text-2xl font-bold font-palanquin">{title}</h1>
        <p className="text-lg text-slate-gray font-palanquin">{description}</p>
      </div>
  );
}
