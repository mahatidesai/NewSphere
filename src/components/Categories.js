import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";


export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('General');

    const categories = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"];

    const {BgColor, textColor} = useContext(ThemeContext);


    return(
        <>
             <div className="Intro" style={{backgroundColor: BgColor}}> 
                 <img src="https://i.pinimg.com/736x/10/05/46/100546967c9a2d5890c46d3f5ce1be70.jpg" className='introImage' alt='IntroImage'/> 
                <h2 className="Quote">Stay informed, Stay connected, <br />Stay ahead! 🚀 </h2>
            </div>
            <div className="Categories" style={{ backgroundColor: BgColor}}>
                {categories.map((category, i) => (
                    <Link
                        key={i}
                        to ={`/${category.toLowerCase()}`}
                        className="categoryItem"
                        onClick={() => {
                            setActiveCategory(category);
                          }}
                        style={{
                            textDecorationColor: activeCategory === category ? "red" : "transparent",
                            color: textColor 
                        }}
                        >
                        {category}
                        </Link>
                    ))}
                </div>
            <hr className="horizontalLine" style={{color: textColor}}></hr>
        </>
    )
}
