import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../style/ui/Loading";
import RHFSelect from "../../../style/ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import { useForm } from "react-hook-form";

const option = [
  {
    label: "رد شده ",
    value: "0",
  },
  {
    label: "در انتظار تایید",
    value: "1",
  },
  {
    label: "تایید شده",
    value: "2",
  },
];
function ChangeProposalStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm({});
  const { ChangeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    ChangeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        register={register}
        name='status'
        label='تغییر وضعیت'
        required
        options={option}
      />
      <div className='!mt-8'>
        {isUpdating ? (
          <Loading />
        ) : (
          <button type='submit' className='btn btn--primary w-full'>
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeProposalStatus;
