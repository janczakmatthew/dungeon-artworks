import About from '../../frontend/pages/About';
import Artwork from '../../frontend/pages/Artwork';
import Cart from '../../frontend/pages/Cart'
import Category from '../../frontend/pages/Category';
import Contact from '../../frontend/pages/Contact';
import Home from '../../frontend/pages/Home';
import Login from '../../frontend/pages/Login';
import PDP from '../../frontend/pages/PDP';

export const templates = [
    {
        name: "About Template", 
        type: "about",
        component: About,
    },
    {
        name: "Artwork Template",
        type: "artwork",
        component: Artwork,
    },
    {
        name: "Cart Template", 
        type: "cart", 
        component: Cart,
    },
    {
        name: "Category Template", 
        type: "category", 
        component: Category,
    }, 
    {
        name: "Contact Template",
        type: "contact", 
        component: Contact,
    }, 
    {
        name: "Home Template",
        type: "home", 
        component: Home,
    },
    {
        name: "Login Template", 
        type: "login", 
        component: Login,
    }, 
    {
        name: "PDP",
        type: "pdp",
        component: PDP,
    }
]