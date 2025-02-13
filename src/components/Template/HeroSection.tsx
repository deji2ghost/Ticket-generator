import HeroHeader from "../layout/HeroHeader/page"
import { ticketData } from "../../../public/data/data"
import { useEffect, useState } from "react";
import Label from "../ui/CustomLabel/label";
import Input from "../ui/CustomInput/input";

const HeroSection = ({step}: {step: number}) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "williams"); // Replace with your Cloudinary preset
    
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dsul8htpl/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
    
        const data = await response.json();
        setImageUrl(data.secure_url); // Cloudinary returns the image URL
      };

      useEffect(() => {
        console.log(imageUrl)
      }, [imageUrl])
  return (
    <div className="border border-[#197686] p-3 rounded-2xl">
      {
        step === 2 ?
        <div>
            <HeroHeader title="Ticket Selection" subTitle={step} />
            <div className="border border-[#07373F]">
                <div className="border border-[#07373F] bg-[07373F]">
                    <h1>Techember Fest ”25</h1>
                    <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                </div>
                <div className="h-[1px] w-full bg-[#07373F]"></div>
                <div>
                    <p>Select ticket type:</p>
                    <div className="border border-[#07373F] bg-[07373F]">
                        {
                            ticketData.map(item => (
                                <div className="border border-[#07373F] rounded-sm flex items-start">
                                    <div>
                                        <h1>{item.ticketName}</h1>
                                        <p>{item.amountLeft} left</p>
                                    </div>
                                    <div>{item.ticketAmount === 0 ? "Free" : item.ticketAmount}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div> :
        step === 1 ?
        <div>
            <HeroHeader title="Attendee Details" subTitle={step} />
            <div>
                <div>
                    <h1>Upload Profile Photo</h1>
                    <div className="bg-[#0E464F]">
                    <input type="file" onChange={handleUpload} />
                    {imageUrl && <img src={imageUrl} alt="Uploaded" width={200} />}
                    </div>
                </div>
                <div>
                    <Label text="Enter your name"/>
                    <Input handleChange={} type="text" name="" value="" />
                </div>
                <div>
                    <Label text="Enter your email"/>
                </div>
                <div>
                    <Label text="About the project"/>
                </div>
            </div>
            
        </div> :
        step === 3 ?
        <div>3</div> :
        <div>4</div>
      }
    </div>
  )
}

export default HeroSection