import {seagame} from "./Country";
import {CountryManager} from "./countryManager";
let countryManager = new CountryManager()

let VietNam = new seagame(10,7,8,`VietNam`)
let Lao = new seagame(4,5,7,`Lao`)
let ThaiLan = new seagame(6,5,3,`ThaiLan`)
let Campuchia = new seagame(2,4,8,`Campuchia`)
let Indo = new seagame(1,3,8,`Indo`)
let Viet = new seagame(10,7,8,`Viet`)
let Uiet2 = new seagame(10,7,8,`Aiet`)

countryManager.add(VietNam)
countryManager.add(Lao)
countryManager.add(ThaiLan)
countryManager.add(Campuchia)
countryManager.add(Indo)
countryManager.add(Viet)
countryManager.add(Uiet2)

console.log(countryManager.countrySort())

