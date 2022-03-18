
import './App.css';
import  { useFormik } from 'formik';
import userSchema from './Validation';

function App() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
      initialValues: {
       email: '',
       password: '',
       passwordConfirm: ''        
      },
      onSubmit: values => {
        console.log(JSON.stringify(values));
      },
      validationSchema: userSchema,
    });
  return (
    <div className="App">
    <h1>ÜYE OL</h1>
        <form onSubmit={handleSubmit}>
       
        <label >Email</label>
        <input name='email' value={values.email}  onChange={handleChange} onBlur={handleBlur}></input>
        <br/>
        {errors.email && touched.email && <div className='error'>{errors.email}</div>}
       
        <br></br>      
        <br></br>

        <label >Parola</label>
        <input name='password' value={values.password} type="password" onChange={handleChange} onBlur={handleBlur}></input> 
        <br/>
        {errors.password && touched.password && <div className='error'>{errors.password}</div>}
        <br></br>
        <br></br>

        <label >Parola Onayı </label>
        <input name='passwordConfirm' value={values.passwordConfirm} type="password" onChange={handleChange}  onBlur={handleBlur}></input>
        <br/>
        {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
        <br></br>
        <br></br>
        <br/>

        <button type="submit">Gönder</button>
        <br/>
        <br/>
      
      </form>
     </div>
  );
}

export default App;
