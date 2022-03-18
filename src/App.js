
import './App.css';
import  { useFormik } from 'formik';

function App() {
    const { handleSubmit, handleChange, values} = useFormik({
      initialValues: {
        firstName: 'Hazal',
        lastName: 'Cevik',
        email: 'hazal.cevikk@gmail.com',
        gender: 'female',
        hobies: [],
        country: "turkey"
      },
      onSubmit: values => {
        console.log(JSON.stringify(values));
      },
    });
  return (
    <div className="App">
    <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input name='firstName' value={values.firstName} onChange={handleChange}></input>
        {/* <Field name="firstName" placeholder="Jane" /> */}
         
         <br></br>

        <label htmlFor="lastName">Last Name</label>
        <input name='lastName' value={values.lastName}  onChange={handleChange}></input>
        {/* <Field name="lastName" placeholder="Doe" /> */}
             
        <br></br>

        <label htmlFor="email">Email</label>
        <input name='email' value={values.email}  onChange={handleChange}></input>
        {/* <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
        <br></br>
        <span>Male</span>
        <input name='gender' value="male" type="radio" onChange={handleChange} checked={values.gender === "male"}></input>
        <span>Female</span>
        <input name='gender' value="female" type="radio" onChange={handleChange} checked={values.gender === "female"}></input>
        <br></br>
        <div>
        <input type="checkbox" name='hobies' value="resim" onChange={handleChange}></input>
        Resim
        </div>
        <div>
        <input type="checkbox" name='hobies' value="Kodlamak" onChange={handleChange}></input>
        Kodlamak
        </div>
        <div>
        <input type="checkbox" name='hobies' value="Doga" onChange={handleChange}></input>
        Doğa
        </div>
        <br/>

        <select name='country' onChange={handleChange} >
          <option value="turkey">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>

        
        <br></br>
        <br></br>

        <button type="submit">Submit</button>
        <br/>
        <br/>
        <code>
          {JSON.stringify(values)}
        </code>
      </form>
     </div>
  );
}

export default App;
