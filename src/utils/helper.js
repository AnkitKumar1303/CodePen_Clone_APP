import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import{ auth } from "../config/firebase.config";
import {v4 as uuidv4} from "uuid"; 

const googleprovider=new GoogleAuthProvider()

export const signInWithGoogle=async()=>{
    await signInWithRedirect(auth, googleprovider).then(userCred =>{
        window.location.reload()
    })
}

export const Menus=[
    {id: uuidv4(), name:"Projects" , uri:"/home/projects"},
    {id: uuidv4(), name:"Collections" , uri:"/home/collections"},
    {id: uuidv4(), name:"Profile" , uri:"/home/profile"},
]

export const signOutAction=async()=>{
    await auth.signOut().then(()=>{
        window.location.reload();
    })
}