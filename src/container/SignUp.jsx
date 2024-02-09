import React, { useState } from 'react'
import {Logo} from "../assets"
import {UserAuthInput} from "../components"
import { FaEnvelope } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { MdPassword } from 'react-icons/md'
import {AnimatePresence, motion} from "framer-motion"
import { signInWithGoogle } from '../utils/helper'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import{ auth } from "../config/firebase.config";
import { fadeInOut } from '../animations'

const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [getEmailValidationStatus, setgetEmailValidationStatus] = useState(false)
    const [isLogin, setisLogin] = useState(false)
    const [alert, setalert] = useState(false)
    const [alertMsg, setalertMsg] = useState("")

    const createNewUser= async()=>{
        if (getEmailValidationStatus){
            await createUserWithEmailAndPassword(auth,email, password)
            .then((userCred)=>{
                if(userCred){
                    console.log(userCred);
                }
            })
            .catch((err)=>console.log(err));
        }
    };


    const loginWithEmailPassword= async()=>{
        if (getEmailValidationStatus){
            await createUserWithEmailAndPassword(auth,email, password)
            .then((userCred)=>{
                if(userCred){
                    console.log(userCred);
                }
            })
            .catch((err)=>
            {
                console.log(err.message);
                if(err.message.includes("user-not-found")){
                    setalert(true);
                    setalertMsg("Invalid Id: User Not Found! Sorry Please, Create One");
                }
                else if(err.message.includes("wrong-password")){
                    setalert(true);
                    setalertMsg("Password Mismatch");
                }
                else{
                    setalert(true);
                    setalertMsg("Temporarily disabled due to many failed login");
                }
                setInterval(()=>{
                    setalert(false);
                },4000);
            });
        }
    };

  return (
    <div className='w-full'>
        <img  src={Logo} className='object-contain w-32 opacity-50 h-auto' alt="" />
        
        
        
        <div className="w-full flex flex-col items-center justify-center py-8">
            <p className=" text-2xl text-primaryText">Join With Us!😃</p>
            
            
            <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-8">
            {/* Email */}
            <UserAuthInput 
            label="Email" 
            placeholder="Email" 
            isPass={false} 
            key="Email" 
            setStateFunction={setemail}
            Icon={FaEnvelope}
            setgetEmailValidationStatus={setgetEmailValidationStatus}
            />

            {/* Password */}
            <UserAuthInput 
            label="Password" 
            placeholder="Password" 
            isPass={true} 
            key="Password" 
            setStateFunction={setpassword}
            Icon={MdPassword}/>


            {/* alert message */}
            <AnimatePresence>
                {alert && (
                    <motion.p
                    key={"AlertMessage"}
                    {...fadeInOut} 
                    className='text-red-500'>
                        {alertMsg}
                    </motion.p>
                )}
            </AnimatePresence>

            {/* Login Button */}
            {! isLogin ? <motion.div
                onClick={createNewUser}
                whileTap={{scale:0.9}}
                className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500">
            <p className='text-xl text-white'>Sign Up</p>
            </motion.div> : 
            <motion.div
                onClick={loginWithEmailPassword}
                whileTap={{scale:0.9}}
                className="flex items-center justify-center w-full py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500">
                <p className='text-xl text-white'>Login</p>
            </motion.div>}

            {!isLogin ? (
                <p className='text-sm text-primaryText flex items-center justify-center gap-3'> 
                Already Have an Account !
                <span 
                onClick={()=>(setisLogin(!isLogin))} className='text-emerald-500 cursor-pointer'>
                Login Here
                </span>
                </p> 
            ): (
            <p className='text-sm text-primaryText flex items-center justify-center gap-3'>
                Does't Have an Account ! {" "}
                <span 
                onClick={()=>(setisLogin(!isLogin))} className='text-emerald-500 cursor-pointer'>
                Create Here
                </span>
            </p> 
            )}

            {/* or section */}
            <div className='flex items-center justify-center gap-1'>
                <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'>
                    
                </div>
                <p className='text-sm text-[rgba(256,256,256,0.2)]'>OR
                </p>
                <div className='h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24'>

                </div>
            </div>

            {/* sign in with google */}
            <motion.div onClick={signInWithGoogle} className='flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] blackdrop-blur-md w-full py-3 rounded-xl hover:bg-[rgba(256,256,256,0.4)] ' whileTap={{scale:0.9}}>
                <FcGoogle className='text-3xl'/>
                <p className='text-xl text-white'>
                    Sign in with Google
                </p>

            </motion.div>
            </div>

        </div>
        </div>
    
  )
}

export default SignUp