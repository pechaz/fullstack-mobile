import * as Yup from 'yup';

export const taskSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required').min(24, 'Too Short!'),
  dueDate: Yup.date()
    .required('Required')
    .min(new Date(), 'due date should be for ongoing date'),
});
