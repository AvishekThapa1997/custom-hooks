// import usePageBottom from "./hooks/usePageBottom";

import Form from '/Form';
import useForm from './hooks/useForm';
import {
  isValidEmail,
  isNotNullOrEmpty,
  isValidPassword,
  isPassowrdContainMinChars,
} from './util/validation';

// const items = Array(20).fill('');
const inputFields = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'email',
    label: 'email',
    required: true,
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'password',
    label: 'password',
    required: true,
    minLength: 6,
  },
];
function App() {
  const { formValues, handleSubmit, handleInputChange } = useForm({
    email: {
      value: '',
      validation: {
        isValid: (email) =>
          isValidEmail(email) || 'Please provide valid email address',
        isNotNullOrEmpty: (email) =>
          isNotNullOrEmpty(email) || 'Email Cannot be empty',
      },
    },
    password: {
      value: '',
      validation: (password) =>
        isPassowrdContainMinChars(password) ||
        'Password should contain minimum 8 characters.',
    },
  });
  // const lastElementRef = usePageBottom();
  // const cb = (node) => {
  //   if(!node) return;
  //   console.log(node.lastElementChild);
  //   lastElementRef.current = node.lastElementChild;
  // }
  /*LAST PAGE BOTTOM*/
  // return (
  //   <div className="App" style={{
  //     overflow:'hidden'
  //   }}>
  //     <ul ref={cb} style={{
  //       height:'20rem',
  //       overflow:'auto'

  //     }}>
  //       {items.map((_,index) => {
  //         return <li key={index}>
  //             <div  style={{
  //               padding:'2rem'
  //             }}> Item - {index+1}</div>
  //         </li>
  //       })}
  //     </ul>
  //   </div>
  // );

  function loginSubmitHandler(formData) {
    console.log(formData);
  }

  return (
    <div className='h-screen grid place-items-center px-4'>
      <div className='rounded w-full max-w-lg shadow shadow-slate-600 py-6 px-4'>
        <Form
          onSubmit={handleSubmit(loginSubmitHandler)}
          submitButtonLabel='login'
        >
          <h3 className='text-center text-2xl capitalize mb-4'>login</h3>
          {inputFields.map((inputField) => {
            const error = formValues[inputField.name].error;
            return (
              <div className=' mb-4 last-of-type:mb-0' key={inputField.id}>
                <div className='flex gap-2 items-center'>
                  <label
                    className='capitalize basis-1/4 cursor-pointer'
                    htmlFor={inputField.id}
                  >
                    {inputField.label}
                  </label>
                  <div className='basis-3/4 '>
                    <input
                      {...inputField}
                      onChange={handleInputChange}
                      className='w-full placeholder:capitalize border-2 flex-[8] p-2 rounded outline-none focus:ring-1 ring-slate-500'
                    />
                    {error ? (
                      <span className='text-red-500 text-sm capitalize mt-2'>
                        *{error}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </Form>
      </div>
    </div>
  );
}

export default App;
