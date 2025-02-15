"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { OptionType } from "../components/ui/CustomSelect/Select";
import { Options } from "../../public/data/options";
import { ticketData } from "../../public/data/data";

export interface TicketProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  selectedOption: OptionType;
  setSelectedOption: Dispatch<SetStateAction<OptionType>>;
  form: formProps;
  setForm: Dispatch<SetStateAction<formProps>>;
  handleClick: (value: number) => void;
  handleChange: (e: { target: { value: string; name: string } }) => void;
  handleSelect: (selected: OptionType | null) => void;
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string | undefined;
  pick: number | null;
  isFormValid: boolean;
  setIsFormValid: Dispatch<SetStateAction<boolean>>;
  errors: {
    [key: string]: string;
  };
  setErrors: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
  validateForm: () => void;
}

export interface formProps {
  name: string;
  email: string;
  textarea: string;
  amount: string;
  type: string;
}
const TicketContext = createContext<undefined | TicketProps>(undefined);

const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<OptionType>(Options[0]);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [pick, setPick] = useState<null | number>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    textarea: "",
    amount: "0",
    type: selectedOption.value,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    console.log("clicked");
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.textarea) newErrors.textarea = "Project details are required";
    if (!imageUrl) newErrors.imageUrl = "Profile picture is required";

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "williams");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dsul8htpl/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setImageUrl(data.secure_url);

    setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors.imageUrl;
        return newErrors;
      });
    
      validateForm();
    
  };

  const handleSelect = (selected: OptionType | null) => {
    if (!selected) {
      console.log("Invalid input: Please select a transaction status.");
      return;
    }
    setSelectedOption(selected);
  };

  const handleChange = (e: { target: { value: string; name: string } }) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });

    validateForm();
  };

  const handleClick = (indx: number) => {
    const newData = ticketData.find((_item, index) => indx === index);
    setForm({
      ...form,
      amount: newData?.ticketAmount?.toString() ?? "",
    });
    setPick(indx);
  };

  return (
    <TicketContext.Provider
      value={{
        step,
        setStep,
        selectedOption,
        setSelectedOption,
        form,
        setForm,
        handleClick,
        handleChange,
        handleSelect,
        handleUpload,
        imageUrl,
        pick,
        isFormValid,
        setIsFormValid,
        errors,
        setErrors,
        validateForm,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;

export const UseTicketHook = () => {
  const context = useContext(TicketContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }
  return context;
};
