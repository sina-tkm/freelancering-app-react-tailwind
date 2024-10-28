import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authservice";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AthContainer() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();


  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: OtpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data,{
    
      });
      
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "مشکلی پیش آمده است.");
    } finally {
      setStep(2);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            register={register}
            onsubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            OtpResponse={OtpResponse}
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onResendOtp={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };
  return <div className='w-full sm:max-w-sm'>{renderStep()}</div>;
}

export default AthContainer;
