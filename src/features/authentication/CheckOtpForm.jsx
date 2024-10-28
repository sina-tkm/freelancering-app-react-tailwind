import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Loading from "../../style/ui/Loading";
import useCheckOtp from "./useCheckOtp";

const RESEND_INITIAL = 90;

function CheckOtpForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_INITIAL);
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useCheckOtp();

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const checkOtpHandler = (e) => {
    e.preventDefault();

    mutateAsync(
      { phoneNumber, otp },
      {
        onSuccess: (data) => {
          const { message, user } = data;
          toast.success(message);

          
          if (!user.isActive) {
            return navigate("/complete-profile");
          }

          if (user.status !== 2) {
            toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
            return navigate("/");
          }

          const roleRoutes = {
            OWNER: "/owner",
            FREELANCER: "/freelancer",
          };
          navigate(roleRoutes[user.role] || "/");
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "خطایی رخ داده است");
        },
      }
    );
  };

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className='w-6 h-6 text-secondary-500' />
      </button>

      {otpResponse?.message && (
        <p className='flex items-center gap-x-4 my-4'>
          {otpResponse.message}
          <button onClick={onBack}>
            <CiEdit />
          </button>
        </p>
      )}

      <div className='mb-4 text-secondary-500'>
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>

      <form className='space-y-8' onSubmit={checkOtpHandler}>
        <p className='font-bold text-secondary-800'>کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type='number' {...props} />}
          containerStyle='flex flex-row-reverse gap-x-2 justify-center'
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "2px solid rgb(var(--color-primary-300))",
            borderRadius: "16px",
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button className='btn btn--primary w-full'>تایید</button>
        )}
      </form>
    </div>
  );
}

export default CheckOtpForm;
