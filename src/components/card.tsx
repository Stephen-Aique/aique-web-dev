import Image, { StaticImageData } from "next/image";
import Button from "./button";

export type CardProps = {
    image: StaticImageData;
    title: string;
    description: string;
    btn_txt: string;
    number: number;
}

const Card = ({ image, title, description, btn_txt, number }: CardProps) => {
    return (
        <div className="overflow-hidden inline-block min-w-[370px] h-full rounded-lg shadow-md">
            <div className="w-[370px] h-[230px] overflow-hidden">
                <Image src={image} alt="card image" height={1000} width={1000} />
            </div>
            <div className="p-8 text-center gap-7 flex flex-col">
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">{title}</p>
                    <p className="text-md font-normal text-gray-500">{description}</p>
                </div>
                <Button className={"w-max mx-auto"} text={btn_txt} isActive={true} isPrimary={+number === 0 ? true : false}  />
            </div>
        </div>
    );
};

export default Card;