import HeroHeader from "../layout/HeroHeader/page";
import { ticketData } from "../../../public/data/data";
import Label from "../ui/CustomLabel/label";
import Input from "../ui/CustomInput/input";
import CustomSelect from "../ui/CustomSelect/Select";
import { Options } from "../../../public/data/options";
import { UseTicketHook } from "../../context/ticketContext";

const HeroSection = () => {
  const {
    step,
    handleClick,
    pick,
    handleSelect,
    handleUpload,
    form,
    imageUrl,
    handleChange,
    selectedOption,
  } = UseTicketHook();

  return (
    <div className="border border-[#197686] p-3 rounded-2xl">
      {step === 1 ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <HeroHeader title="Ticket Selection" subTitle={step} />
            {/* <div className="border border-[#07373F] flex flex-col gap-3"> */}
              <div className="border border-[#07373F] bg-[07373F] flex flex-col gap-3 p-4 rounded-lg">
                <h1 className="text-[20px] font-[700] text-center">
                  Techember Fest ”25
                </h1>
                <p className="text-[16px] font-[300] text-center">
                  Join us for an unforgettable experience. Secure your spot now.
                </p>
                <p className="text-center">📍 Lagos</p>
                <p className="text-center">March 15, 2025 | 7:00 PM</p>
              </div>
            {/* </div> */}
            <div className="h-[1px] w-full bg-[#07373F]"></div>
            <div>
              <p>Select ticket type:</p>
              <div className="border border-[#07373F] bg-[07373F]">
                {ticketData.map((item, index) => (
                  <div
                  key={index}
                    onClick={() => handleClick(index)}
                    className={`${
                      pick === index ? "bg-[#197686]" : "null"
                    } border border-[#07373F] text-white rounded-sm flex items-start`}
                  >
                    <div>
                      <h1>{item.ticketName}</h1>
                      <p>{item.amountLeft} left</p>
                    </div>
                    <div>
                      {item.ticketAmount === 0 ? "Free" : item.ticketAmount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CustomSelect
                selectedOption={selectedOption}
                handleChange={(selected) => handleSelect(selected)}
                options={Options}
              />
            </div>
          </div>
        </div>
      ) : step === 2 ? (
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
              <Label text="Enter your name" />
              <Input
                handleChange={handleChange}
                type="text"
                name="name"
                value={form.name}
              />
            </div>
            <div>
              <Label text="Enter your email" />
              <Input
                handleChange={handleChange}
                type="text"
                name="email"
                value={form.email}
              />
            </div>
            <div>
              <Label text="About the project" />
              <Input
                handleChange={handleChange}
                type="textarea"
                name="textarea"
                value={form.textarea}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <HeroHeader title="Ready" subTitle={step} />
          <div>
            <h1>Your Ticket is Booked</h1>
            <h1>You can download or Check your email for a copy</h1>
          </div>
          <div>
            <div>
              <div>
                <h1>Techember Fest ”25</h1>
                <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
              <img src={imageUrl} />
              <div className="border ">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <div className="w-[50%]">
                      <p>Enter Your Name</p>
                      <h1>{form.name}</h1>
                    </div>
                    <div className="w-[50%]">
                      <p>Enter Your Email</p>
                      <h1>{form.email}</h1>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[50%]">
                      <p>Ticket Type</p>
                      <h1>{form.type}</h1>
                    </div>
                    <div className="w-[50%]">
                      <p>Ticket For</p>
                      <h1>{form.amount}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
