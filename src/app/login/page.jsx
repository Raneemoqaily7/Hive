"use client";
import { useRouter } from "next/navigation";
import Styles from "./loginPage.module.css";
import {signIn, useSession} from "next-auth/react";
import Loading from "@/components/loading/Loading"
const LoginPage=()=>{

    const {data, status}= useSession()
    console.log(data, status)
    const router =useRouter()


    if (status ==="loading") {
        return <Loading/>
    }

    if (status === "authenticated"){
        router.push("/")
    }
    return(
        <div className={Styles.container}>
          <div className={Styles.wrapper}>
            <div className={Styles.socialButton} onClick={()=>signIn("google")}>Sign in with google</div>
            </div>  
        </div>
    )
}

export default LoginPage;