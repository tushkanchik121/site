"use client"

import LifestyleProfile from "@/components/lifestyle-profile"
import { useRouter } from "next/navigation"
export default function Page() {
const router = useRouter()

  return (
    // ... код вашої анкети
    <div>
      
    <button 
      onClick={() => router.push('/verification')} 
      className="..."
    >
      Продовжити
    </button>
    <LifestyleProfile />
    </div>
    
    
  );
}
