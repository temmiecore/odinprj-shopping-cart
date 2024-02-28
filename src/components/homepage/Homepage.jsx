import Button from "../Button";
import "../../styles/Homepage.css"

function Homepage() {
    return <div className="homepage">
        <p>
            Welcome to [Shop Name], your one-stop destination for all your shopping needs! 
            Explore our wide range of products carefully curated to bring you the latest 
            trends and timeless classics. From fashion-forward apparel to must-have accessories, 
            stylish home decor to innovative gadgets, we have something for everyone.
        </p>
        <p>
            This is not a real shop! This is a learning project. All the item data was taken from [some API]. You can't actually buy any of these. Oh well
        </p>
        <div>
            <Button text="Start Shopping!" isLink={true} to="something"/>
            <Button text="Log in" isLink={false} to=""/>
        </div>
    </div>
}

export default Homepage;