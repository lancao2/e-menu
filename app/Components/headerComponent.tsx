import { PiShoppingCart } from "react-icons/pi";

const HeaderComponent = ({ configCliente }: any): JSX.Element => {
  return (
    <header className="flex justify-between items-center w-full h-fit mt-5 px-6">
      <div className="bg-slate-100 w-10 h-10 rounded-full border border-[#f7f7f7] drop-shadow-sm"></div>
      <h1 className="uppercase font-semibold text-sm text-center text-black">
        {configCliente.name}
      </h1>
      <button className="flex justify-center items-center">
        <PiShoppingCart color="#000" size={20} />
      </button>
    </header>
  );
};

export default HeaderComponent;
