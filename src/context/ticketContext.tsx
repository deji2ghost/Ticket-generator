"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { OptionType } from "../components/ui/CustomSelect/Select";
import { Options } from "../../public/data/options";
import { ticketData } from "../../public/data/data";

export interface TicketProps{
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
    selectedOption: OptionType, 
    setSelectedOption: Dispatch<SetStateAction<OptionType>>,
    form: formProps,
    setForm: Dispatch<SetStateAction<formProps>>,
    handleClick: (value: number) => void, 
    handleChange: (e: { target: { value: string; name: string } }) => void, 
    handleSelect: (selected: OptionType | null) => void, 
    handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void,
    imageUrl: string | undefined,
    pick: number,
}

export interface formProps{
    name: string,
    email: string,
    textarea: string,
    amount: string,
    type: string,
}
const TicketContext = createContext< undefined | TicketProps >(undefined)

const TicketProvider = ({ children }: { children: React.ReactNode}) => {
    const [ step, setStep ] = useState(1)
    const [selectedOption, setSelectedOption] = useState<OptionType>(Options[0]);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [pick, setPick] = useState(0)
      const [ form, setForm ] = useState({
        name: "",
        email: "",
        textarea: "",
        amount: "",
        type: "",
      })

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

      const handleSelect = (selected: OptionType | null) => {
        if (!selected) {
          console.log("Invalid input: Please select a transaction status.");
          return;
        }
        setSelectedOption(selected);
    
      };

      const handleChange = (e: { target: { value: string; name: string } }) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
      }

      const handleClick = (indx: number) => {
        const newData = ticketData.find((item, index)=> indx === index )
        console.log(newData)
        setPick(indx)
      }
      

      return(
        <TicketContext.Provider value={{ step, setStep, selectedOption, setSelectedOption, form, setForm, handleClick, handleChange, handleSelect, handleUpload, imageUrl, pick }}>
            {children}
        </TicketContext.Provider>
      )
}

export default TicketProvider

export const UseTicketHook = () => {
    const context = useContext(TicketContext)

    if (!context) {
        throw new Error("useFormContext must be used within a FormContextProvider");
      }
      return context;
}