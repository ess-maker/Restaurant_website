import assest from "../assets/imges"

interface benfite {
    titel:string;
    discrption:string;
    img:string;
}
export const benfites:benfite[] =  [
    {
        titel : "Premium Quality",
        discrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
        img:assest.fish
    },
    {
        titel : "Seasonal Vegetables",
        discrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
        img:assest.carrot
    },
    {
        titel : "Fresh Fruit",
        discrption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
        img:assest.lemon
    }
]

export const categorys  = [
    {
        titel : "Starters",
        img : assest.category1
    },
    {
        titel : "Mains",
        img : assest.category2
    },
    {
        titel : "Soups",
        img : assest.category3
    }
]