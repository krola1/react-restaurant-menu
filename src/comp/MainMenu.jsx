import "../styles/MainMenu.css"
import MyCard from "./MyCard.jsx"
const MainMenu =({menu})=>{
    return (
        <div id ="menu-card">
            <h1>Menu</h1>
            <ul id = "menu">
                {menu.map((obj)=>(
                    <MyCard{...obj} />
                ))}
            </ul>
        </div>
    )
}
export default MainMenu