'use client'
import { useState } from "react";
import user from "@/public/user.jpg";
import { SlArrowRight } from "react-icons/sl";
import styles from "./styles.module.scss";
import Image from "next/image";



export default function UserBtn() {

  return (
    <button className={styles.button} > 
       <Image src={user} />
       <SlArrowRight />
    </button>
  )
}
