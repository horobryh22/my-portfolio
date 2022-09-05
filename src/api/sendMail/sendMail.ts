import { instance } from 'api/config';
import { FormDataType } from 'types';

export const sendMail = (values: FormDataType): Promise<void> => {
    return instance.post(`sendMail`, values);
};
