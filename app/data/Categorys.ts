import { IconType } from "react-icons";
import { PiHamburgerLight } from "react-icons/pi";
import { BsCupStraw } from "react-icons/bs";
import { MdOutlineFastfood } from "react-icons/md";
import { LuIceCream2 } from "react-icons/lu";

interface ICategory{
    id: string,
    name: string,
    icon: IconType
}

const Categorys: ICategory[] = [
        {
            id: "550e8400-e29b-41d4-a716-446655440000",
            name: "Sanduíches",
            icon: PiHamburgerLight
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440001",
            name: "Bebidas",
            icon: BsCupStraw
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440002",
            name: "Combos",
            icon: MdOutlineFastfood
        },
        {
            id: "550e8400-e29b-41d4-a716-446655440003",
            name: "Sobremesas",
            icon: LuIceCream2
        }
]

export default Categorys;