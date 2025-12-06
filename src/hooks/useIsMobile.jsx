import { useEffect, useState } from "react";
export default function useIsMobile(breakpoint = 768){
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === "undefined") return false
        return window.innerWidth <= breakpoint
    })

    useEffect(() => {
        if (typeof window === "undefined") return 
        const mqWidth = window.matchMedia(`(max-width: ${breakpoint}px)`)
        const mqPointer = window.matchMedia("(pointer: coarse), (hover: none)")

        const update = () => {
            const isPointerTouch = mqPointer.matches
            setIsMobile(isPointerTouch || mqWidth.matches)
        }

        update()
        mqWidth.addEventListener?.("change", update)
        mqPointer.addEventListener?.("change", update)
        return () => {
            mqWidth.removeEventListener?.("change", update);
            mqPointer.removeEventListener?.("change", update);
          };
    }, [breakpoint])
    
    return isMobile
}