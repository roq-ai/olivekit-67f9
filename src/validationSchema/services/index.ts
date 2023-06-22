import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  company_id: yup.string().nullable(),
});
