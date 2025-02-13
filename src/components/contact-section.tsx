import { LOCATION_ITEMS } from "../constatnts"
import Button from "./button"
import InputField from "./input-field"


const ContactSectionForm = () => {
    return (
        <div className="rounded-[12px] bg-[--transparent-panel] p-[24px] flex flex-col gap-[12px]">
            <div className="pb-[24px] font-[700] text-[18px]">Send us a message</div>
            <InputField type={"text"} label={"Full Name"} placeholder={"John Doe"} constant={""} name={"full-name"} />
            <InputField type={"text"} label={"E-mail"} placeholder={"johndoe@gmail.com"} constant={""} name={"e-mail"} />
            <InputField type={"text"} label={"Phone"} placeholder={""} constant={"+63 "} name={"phone"} />
            <InputField type={"text"} label={"Message"} placeholder={"Type your message here"} constant={""} name={"message"} />
            <Button className={"w-full mt-[12px] sm:w-max ml-auto"} text={"Send"} isActive={true} isPrimary={true}  />
        </div>
    )
}

const ContactSectionLocations = () => {
    return (
        <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col">
                <div className="font-[700] text-[16px] text-[--blue]">Contact Us</div>
                <div className="font-[600] sm:text-[42px] text-[20px]">Get In Touch With Us</div>
                <div className="font-[400] text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor</div>
            </div>
            <div className="flex flex-col gap-[12px]">
                {LOCATION_ITEMS.map((item, index) => (
                    <div key={index} className="flex flex-row gap-[10px]">
                        <div className="w-[50px] h-[50px] rounded-[8px] grid place-items-center bg-[--blue]">
                            <div className=" grid place-items-center">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0875 7.275L13.425 1.2C12.5625 0.6 11.4375 0.6 10.575 1.2L1.9125 7.275C1.2375 7.725 0.862503 8.5125 0.862503 9.3V20.8125C0.862503 22.1625 1.9875 23.2875 3.3375 23.2875H20.7C22.05 23.2875 23.175 22.1625 23.175 20.8125V9.3C23.175 8.475 22.7625 7.725 22.0875 7.275ZM15.4125 21.5625H8.5875V17.25C8.5875 16.9875 8.7 16.7625 8.925 16.6125L11.55 14.775C11.8125 14.5875 12.1875 14.5875 12.45 14.775L15.075 16.6125C15.3 16.7625 15.4125 16.9875 15.4125 17.25V21.5625ZM21.4875 20.775C21.4875 21.225 21.15 21.5625 20.7 21.5625H17.1V17.25C17.1 16.4625 16.725 15.675 16.05 15.225L13.425 13.3875C12.5625 12.7875 11.4375 12.7875 10.575 13.3875L7.95 15.225C7.275 15.675 6.9 16.4625 6.9 17.25V21.5625H3.3C2.85 21.5625 2.5125 21.225 2.5125 20.775V9.3C2.5125 9.0375 2.625 8.8125 2.85 8.6625L11.55 2.55C11.7 2.4375 11.85 2.4 12 2.4C12.15 2.4 12.3 2.4375 12.45 2.55L21.15 8.625C21.375 8.775 21.4875 9 21.4875 9.2625V20.775Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-[700] text-[14px]">{item.name}</div>
                            <div className="font-[400] text-[16px]">{item.address}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const ContactSection = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="flex-1 p-[24px]">
                <ContactSectionLocations />
            </div>
            <div className="flex-1 p-[24px] relative">
                <ContactSectionForm />
                <div className="absolute -top-[20px] -right-[20px] rounded-[110px] w-[176px] h-[176px] gradient">
                    {/* <Image src={Gradient} alt="gradient" width={176} height={176}/> */}
                </div>
                <div className="absolute -bottom-[65px] -left-[65px] rounded-[110px] w-[176px] h-[176px] gradient">
                    {/* <Image src={Gradient} alt="gradient" width={176} height={176}/> */}
                </div>
            </div>
        </div>
    )
}
export default ContactSection;