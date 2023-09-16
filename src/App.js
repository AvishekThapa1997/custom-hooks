// import usePageBottom from "./hooks/usePageBottom";

import Form from "./components/Form";
import useForm from "./hooks/useForm";

// const items = Array(20).fill('');
const inputFields = [
    {
      id:'email',
      name:'email',
      type:'email',
      placeholder:'email',
      label:'email'
    },
    {
      id:'password',
      name:'password',
      type:'password',
      placeholder:'password',
      label:'password'
    },
  ]
function App() {

  const {formValues,handleSubmit,handleInputChange} = useForm({
    email:{
      value:'',
      validation : [()=>{},()=>{}]
    },
    password:{
      value:'',
      validation:[() => {},() => {}]
    }
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

  
  function loginSubmitHandler (formData) {
    console.log(formData);
  }

  return <div className="h-screen grid place-items-center px-4">
              <div className="rounded w-full max-w-md shadow shadow-slate-600 py-6 px-4">
                  <Form onSubmit={handleSubmit(loginSubmitHandler)} submitButtonLabel='login'>
                    <h3 className="text-center text-2xl capitalize mb-4">login</h3>
                    {inputFields.map(inputField => {
                      return <div className="flex gap-2 items-center mb-4 last-of-type:mb-0" key={inputField.id}>
                                <label className="capitalize basis-1/4 cursor-pointer" htmlFor={inputField.id}>{inputField.label}</label>
                                <input {...inputField} onChange={handleInputChange} className="basis-3/4 placeholder:capitalize border-2 flex-[8] p-2 rounded outline-none focus:ring-1 ring-slate-500"/>
                            </div>
                    })}
                  </Form>
            </div>
        </div>
}

export default App;
