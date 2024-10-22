import { TagsInput } from "react-tag-input-component";
import RHFSelect from "../../style/ui/RHFSelect";
import TextField from "../../style/ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../style/ui/DatePickerField";
import useCategories from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loading from "../../style/ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  const { isEditing, editProject } = useEditProject();
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValue });
  const [tags, setTags] = useState(prevTags || []);

  const [date, setDate] = useState(new Date(deadline || ""));
  const { transformCategories } = useCategories();
  const { isCreating, craeteProject } = useCreateProject();
  const onSubmit = async (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      craeteProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };
  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='عنوان پروژه'
        name='title'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value:4,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <TextField
        label=' توضیحات'
        name='description'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
        }}
        errors={errors}
      />
      <TextField
        label='بودجه'
        name='budget'
        register={register}
        required
        validationSchema={{
          required: "عنوان ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label='دسته بندی'
        name='category'
        register={register}
        options={transformCategories}
      />
      <div>
        <label className='text-secondary-700 block'>تگ ها</label>
        <TagsInput value={tags} onChange={setTags} name='tags' />
      </div>
      <DatePickerField date={date} setDate={setDate} label='ددلاین' />

      <div className='!mt-8'>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <button type='submit' className='btn btn--primary w-full mt-2'>
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default CreateProjectForm;
