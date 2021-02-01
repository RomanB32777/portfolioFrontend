import React, { useCallback } from 'react'

//export const 

export const useAlert = () => {
 return  useCallback( (text: string) => {
     if (window.M) window.M.toast({html: text})
}, [])

}


