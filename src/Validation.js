import { object, string, ref } from 'yup';

const userSchema = object({
    email: string().email('Lütfen emailinizi doğru giriniz.').required('Bu alan boş bırakılamaz!'),
    password: string().min(5, 'Parolanız en az 5 karakter içermelidir.').required('Bu alan boş bırakılamaz!'),
    passwordConfirm: string().oneOf([ref('password')],'Parolanız uyuşmamaktadır!').required('Bu alan boş bırakılamaz!')
    
  });

export default userSchema;