export default function Subscribe() {
  return (
    <div className="flex flex-col max-lg:gap-6 items-center max-lg:text-center justify-between lg:flex-row w-full bg-white">
      <p className="text-4xl font-bold w-full lg:w-1/2">
        Sign Up for Updates & <span className="text-coral-red">Newsletter</span>
      </p>
      <div className="sm:border-2 flex flex-col max-sm:gap-4 sm:flex-row justify-between items-center border-slate-gray rounded-full p-2 sm:p-4 w-full lg:w-1/2">
        <input
          className="outline-none rounded-xl w-full sm:w-3/4 max-sm:border-2 max-sm:border-slate-gray max-sm:p-4"
          placeholder="subscribe@nike.com"
          type="text"
        />
        <button className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}
