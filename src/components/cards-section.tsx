import { CARD_ITEMS } from "../constatnts";
import Card from "./card";

const CardsSection = () => {
    return (
        <div className="pt-6 pb-12 overflow-hidden scroll-none">
            <div className="flex gap-4 overflow-x-auto scroll-smooth scroll-none scrollbar-hide p-1">
                {CARD_ITEMS.map((item, index) => (
                    <Card 
                        key={index} 
                        image={item.image} 
                        title={item.title} 
                        description={item.description} 
                        btn_txt={item.btn_txt} 
                        number={index}
                    /> 
                ))}
            </div>
        </div>
    );
};

export default CardsSection;