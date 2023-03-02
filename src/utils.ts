import { Icon } from "./types"
import { icons } from "./icons"

export function getCards(level:number) {
    const iconsSelected = shuffleArray(icons).slice(0, level)
    const iconsToReturn = shuffleArray([...iconsSelected, ...iconsSelected])
    return iconsToReturn
  }
  
  function shuffleArray (arr: Icon[]) {
    return arr.sort(() => Math.random() -0.5)
  }
  