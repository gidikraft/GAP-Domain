import slider from './svg/slider.svg';
import drawer from './svg/drawer_icon.svg';
import illustration from './svg/landing_Illustration.svg';
import search from './svg/search_icon.svg';
import profile from './svg/profile_picture.svg';
import profileActive from './svg/profile.svg';
import home from './svg/home.svg';
import historyActive from './svg/history_active.svg';
import historyInactive from './svg/history_inactive.svg';
import cardsActive from './svg/cards_active.svg';
import cardsInactive from './svg/cards_inactive.svg';
import backButton from './svg/back_button.svg';
import cards from './svg/visa_card.svg';
import plus from './svg/plus_icon.svg';
import visa from './svg/visa.svg';
import bag from './svg/bag_icon.svg';
import food from './svg/food_icon.svg';
import homeIcon from './svg/heart.svg';
import heart from './svg/home_icon.svg';
import downArrow from './svg/down_arrow.svg';
import starbucks from './svg/starbucks.svg';
import travelLogo from './svg/travel_logo.svg';

const svgIconPack = {
    backButton,
    bag,
    cards,
    cardsActive,
    cardsInactive,
    downArrow,
    drawer,
    food,
    heart,
    historyActive,
    historyInactive,
    home,
    homeIcon,
    illustration,
    plus,
    profile,
    profileActive,
    search,
    slider,
    starbucks,
    travelLogo,
    visa,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;