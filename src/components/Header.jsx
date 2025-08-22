// create funtional component use rsc

import { useRef } from "react";


const Header = () => {
    let FirstName = useRef();
    let MiddleName = useRef(); 
    let LastName = useRef();
    let Phone = useRef(); 
    let Email = useRef(); 
    let Password = useRef();
    let ConfirmPassword = useRef();
    const change = (event)=>{
        event.preventDefault();
        if(FirstName.current.value == "" || MiddleName.current.value == "" || LastName.current.value == "" || Phone.current.value == "" || Email.current.value == "" || Password.current.value == "" || ConfirmPassword.current.value == ""){
            alert("Please Enter the value")
        }
        else if (FirstName.current.value == /^[A-Z a-z]/ || MiddleName.current.value == /^[A-Z a-z]/ || LastName.current.value == /^[A-Z a-z]/) {
            alert("name should be only (A-Z) and (a-z)")            
        }
        else if (Email.current.value == /^[a-z.0-9@]/img) {
            alert("please enter the valid email")
        }
        else if (Password.current.value != ConfirmPassword.current.value) {
            alert("Password Does not match")
        }
        else
            alert("submit")
    }
    const number = () =>{
        if (Phone.current.value == /[A-Z a-z]/) {
            Phone.current.innerHTML = "";    
        }
    }   
    return (
        <div className="h-[100vh] w-[100vw] bg-black pt-28">
           <div className="h-[75%] w-80 bg-white mx-auto rounded-xl px-3 py-2">
                <h2 className="text-black text-2xl text-center font-bold ">Ragistation</h2>
                <form onSubmit={change}>
                    <div className="flex flex-wrap gap-4 py-3">
                        <input type="text" ref={FirstName} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="First Name"/>
                        <input type="text" ref={MiddleName} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Middle Name"/>
                        <input type="text" ref={LastName} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Last Name"/>
                        <input type="text" onKeyUp={number} ref={Phone} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Phone"/>
                        <input type="email" ref={Email} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Email"/>
                        <input type="Password" ref={Password} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Password"/>
                        <input type="password" ref={ConfirmPassword} className="text-black bg-transparent border-b-2 border-black w-full outline-none" placeholder="Confirm Password"/>
                        <button type="submit" className="h-10 w-full bg-blue-600 text-sm mt-2 outline-none border-none">Submit</button>
                    </div>
                </form>   
           </div>
        </div>
    );
};

export default Header;