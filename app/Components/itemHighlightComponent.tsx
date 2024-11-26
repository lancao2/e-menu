const ItemHeightComponent = ({ text, icon, active = false, onClick }: any) => {
  return (
    <div
      className={`flex items-center gap-1  ${
        active ? "bg-zinc-400" : "bg-white border border-[#e4e4e4]"
      } w-fit max-h-10 px-3 py-2 rounded-full`}
      onClick={onClick}
    >
      <div
        className={active ? "text-white size-[22px]" : "text-black size-[22px]"}
      >
        {icon}
      </div>
      <p
        className={` uppercase text-sm whitespace-nowrap ${
          active ? "text-white" : "text-black"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default ItemHeightComponent;
