"use client"
import VerificationStep3 from "@/components/verification-step3";
import { useRouter } from "next/navigation"
export default function Page() {
  const router = useRouter()
  return (
    <div>
      <VerificationStep3 />
    </div>
  
  )
}
