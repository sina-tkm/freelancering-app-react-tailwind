import Loading from "../../style/ui/Loading";
import { useForm } from "react-hook-form";
import RHFSelect from "../../style/ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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
function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  console.log(projectId, proposalId);
  const { register, handleSubmit } = useForm({});
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
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
