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
    errors,
  } = UseTicketHook();

  return (
    <div
      className={`${
        step === 3 ? "border-none" : "border border-[#197686]"
      } p-3 rounded-2xl mb-3 text-white`}
    >
      {step === 1 ? (
        <div className="flex flex-col gap-5">
          <HeroHeader title="Ticket Selection" subTitle={step} />
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
          <div className="h-[1px] w-full bg-[#07373F]"></div>
          <div>
            <p>Select ticket type:</p>
            <div className="border border-[#07373F] bg-[07373F] flex flex-col gap-4 p-4 rounded-md md:flex-row md:w-full">
              {ticketData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`${
                    pick === index ? "bg-[#197686]" : ""
                  } border border-[#07373F] text-white rounded-sm flex flex-col-reverse items-start md:justify-between p-2 md:w-full`}
                >
                  <div>
                    <h1>{item.ticketName} Access</h1>
                    <p>{item.amountLeft} left</p>
                  </div>
                  <div>
                    {item.ticketAmount === "0" ? "Free" : item.ticketAmount}
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
      ) : step === 2 ? (
        <div>
          <HeroHeader title="Attendee Details" subTitle={step} />
          <div className="flex flex-col gap-3">
            <div className="border border-[#0E464F] rounded-md p-4">
              <h1>Upload Profile Photo</h1>
              <div className="bg-[#0E464F] h-[330px] w-[250px] md:mx-auto">
                <input type="file" onChange={handleUpload} />
                {imageUrl && <img src={form.imageUrl} alt="Uploaded" width={200} />}
                {errors.imageUrl && (
                  <p className="text-red-500 text-sm">{errors.imageUrl}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label text="Enter your name" />
              <Input
                handleChange={handleChange}
                type="text"
                name="name"
                value={form.name}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label text="Enter your email" />
              <Input
                handleChange={handleChange}
                type="text"
                name="email"
                value={form.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label text="About the project" />
              <Input
                handleChange={handleChange}
                type="textarea"
                name="textarea"
                value={form.textarea}
              />
              {errors.textarea && (
                <p className="text-red-500 text-sm">{errors.textarea}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <HeroHeader title="Ready" subTitle={step} />
          <div className="text-center mb-4">
            <h1>Your Ticket is Booked</h1>
            <h1>You can download or Check your email for a copy</h1>
          </div>
          <div className=" border border-[#197686]  md:w-[40%] mx-auto p-4 rounded-lg">
            <div>
              <div className="text-center flex flex-col gap-3 mb-3">
                <h1>Techember Fest ”25</h1>
                <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                <p>📅 March 15, 2025 | 7:00 PM</p>
              </div>
              <div className="w-[200px] h-[200px] mx-auto mb-4">
                {imageUrl && <img src={form.imageUrl} />}
              </div>
              <div className="border ">
                <div className="flex flex-col items-center">
                  <div className="flex items-start w-full">
                    <div className="w-[50%] h-full flex border-none flex-col p-4">
                      <p className="text-[10px]">Enter Your Name</p>
                      <h1 className="break-words">{form.name}</h1>{" "}
                      
                    </div>
                    <div className="w-[50%] h-full flex border-l flex-col p-4">
                      <p className="text-[10px]">Enter Your Email</p>
                      <h1 className="break-words">{form.email}</h1>{" "}
                      
                    </div>
                  </div>
                  <div className="flex items-center w-full">
                    <div className="w-[100%] border flex flex-col p-4">
                      <p className="text-[10px]">Ticket Type</p>
                      <h1>{form.type}</h1>
                    </div>
                    <div className="w-[100%] border flex flex-col p-4">
                      <p className="text-[10px]">Ticket For</p>
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
