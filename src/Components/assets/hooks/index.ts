import { useState } from "react";

const hooks = () => {
    const [scroll, setScroll] = useState('0px')
    let rolagem = () => {
      if(window.scrollY > 20){
        setScroll('-100px')
      }
      else{
        setScroll('0px')
      }
    }
  return {
        rolagem,
        scroll
    }
}
export default hooks;