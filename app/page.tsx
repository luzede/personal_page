'use client'

import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ['latin'],
  variable: "--font-sans"
})

export default function Page() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between p-24">
      <span className={cn(bebas.className, "text-9xl text-white")}>WELCOME,</span>
      <span className={cn(bebas.className, "text-9xl text-white")}>I am Loukas</span>
      <div className="flex flex-row items-center gap-4">
        <a href="https://github.com/luzede" className="hover:bg-black rounded-xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden"><Image src="/github.png" alt="Github Logo Icon" width={140} height={140}/></a>
        <a href="https://www.linkedin.com/in/luzede/" className="hover:bg-black rounded-xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden"><Image src="/linkedin.png" alt="LinkedIn Logo Icon" className="object-none" width={200} height={200}/></a>
        <a href="https://stackoverflow.com/users/18140743/luzede" className="hover:bg-black rounded-xl w-[150px] h-[150px] flex items-center justify-center overflow-hidden"><Image src="/stackoverflow.png" alt="StackOverflow Logo Icon" width={140} height={140}/></a>
      </div>
    </main>
  );
}
