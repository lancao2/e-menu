import { ReactNode } from "react";

interface ItemfoodComponenteProps {
  icon: ReactNode; // O ícone que será exibido, pode ser qualquer componente React
  title: string; // O título que será exibido no componente
  value: string; // O valor que será exibido no componente
}

const ItemfoodComponente = ({
  icon,
  title,
  value,
}: ItemfoodComponenteProps) => {
  return (
    <div className="bg-white rounded-md w-full h-52 border border-[#e4e4e4]">
      <div className="bg-slate-200 h-2/3 w-full rounded-t-md">
        <div className="bg-white h-8 w-8 rounded-br-md rounded-tl-md flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-center h-1/3 mx-2 overflow-hidden">
        <p className="text-nowrap w-full h-5 overflow-hidden" title={title}>
          {title}
        </p>
        <span className="font-semibold text-lg">R${value}</span>
      </div>
    </div>
  );
};

export default ItemfoodComponente;
