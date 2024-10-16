import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../style/ui/TextField";
import Loading from "../../style/ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { data, isCreating, createProposal } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createProposal(
      { ...data, projectId },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form className='space-y-8' onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label='توضیحات پروژه'
          name='description'
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label='قیمت پروژه'
          name='price'
          register={register}
          type='number'
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
          errors={errors}
        />
        <TextField
          label='مدت زمان'
          name='duration'
          register={register}
          type='number'
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <div className='!mt-8'>
          {isCreating ? (
            <Loading />
          ) : (
            <button type='submit' className='btn btn--primary w-full mt-2'>
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
