import HeroHeader from "../components/hero-header";

import { Link, useLocation } from 'react-router-dom';

function Category() {

    const location = useLocation();
    const state = location.state;
    
    const { title } = state;

    console.log("Location State:", state);
    return (
            <HeroHeader
                heroTitle={title ? title : 'Default Title'}
                heroDescription={state ? state.heroDescription : 'Default Description'}
                heroSubtitle={state ? state.heroSubtitle : 'Default Subtitle'}
                bgColor="bg-gray-900"
                textColor="text-white"
                customStyles="min-h-[300px]"
            />
    );
}

export default Category;
