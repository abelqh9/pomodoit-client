import WoodenSword from '../public/Wooden_Sword.svg'
import StoneSword from '../public/Stone_Sword.svg'
import IronSword from '../public/Iron_Sword.svg'
import GoldenSword from '../public/Golden_Sword.svg'
import DiamondSword from '../public/Diamond_Sword.svg'
import NetheriteSword from '../public/Netherite_Sword.svg'
import { getDate } from '../helpers/getDate'
import { objIsEmpty } from '../helpers/objIsEmpty'

export function getMonthLevelData(timeRecord) {

    // Get month hours
    let { year, month } = getDate();
    let monthHours;
    if (objIsEmpty(timeRecord) || objIsEmpty(timeRecord[year]) || objIsEmpty(timeRecord[year][month])){
        monthHours = 0
    }else{
        let monthData = timeRecord[year][month], monthMili = 0;
        for (const day in monthData) { monthMili += monthData[day]; }
        monthHours = Math.floor(monthMili/(1000*60*60))
    }

    // return data    
    if (monthHours <= 96)  return {name: "Wooden", description:"<= 96hrs", img: WoodenSword, nextLevel: "Stone", nextLevelDescription:"< 120hrs"} // work  less than 4 hours per day - 6 days per week
    if (monthHours < 120) return {name: "Stone", description:"< 120hrs", img: StoneSword, nextLevel: "Iron", nextLevelDescription:"< 144hrs"} // work less than 5 hours per day - 6 days per week
    if (monthHours < 144) return {name: "Iron", description:"< 144hrs", img: IronSword, nextLevel: "Golden", nextLevelDescription:"< 156hrs"} // work less than 6 hours per day - 6 days per week
    if (monthHours < 156) return {name: "Golden", description:"< 156hrs", img: GoldenSword, nextLevel: "Diamond", nextLevelDescription:"< 168hrs"} // work less than 6.5 hours per day - 6 days per week
    if (monthHours < 168) return {name: "Diamond", description:"< 168hrs", img: DiamondSword, nextLevel: "Netherite", nextLevelDescription:"> 168hrs"}  // work less than 7 hours per day - 6 days per week
    if (monthHours > 168) return {name: "Netherite", description:"> 168hrs", img: NetheriteSword, nextLevel: false, nextLevelDescription:false} // work more than 7 hours per day - 6 days per week
}