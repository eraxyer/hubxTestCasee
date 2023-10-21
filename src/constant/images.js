import Scanner from '../assets/icons/scanner.svg';
import Speed from '../assets/icons/speed.svg';
import Close from '../assets/icons/close.svg';
import SearchIcon from '../assets/icons/search.svg';
import Send from '../assets/icons/send.svg';
import Arrow from '../assets/icons/arrow.svg';
import {wp} from '../utils/Responsive';

export default {
    getStarted:require('../assets/images/getstarted.png'),
    onBoarding:require('../assets/images/onboarding.png'),
    iphone:require('../assets/images/iphone.png'),
    artwork:require('../assets/images/Artwork.png'),
    background:require('../assets/images/image.png'),
    scanner:<Scanner width={wp(5)} height={wp(5)} />,
    speed:<Speed width={wp(5)} height={wp(5)} />,
    close:<Close width={wp(8)} height={wp(8)} />,
    searchIcon:<SearchIcon width={wp(5)} height={wp(5)} />,
    send:<Send width={wp(15)} height={wp(15)} style={{marginTop : 10}} />,
    arrow:<Arrow width={wp(8)} height={wp(8)} />,
};