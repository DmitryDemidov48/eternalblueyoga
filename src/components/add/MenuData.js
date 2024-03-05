import { HiHomeModern } from "react-icons/hi2";
import { GrSchedules } from "react-icons/gr";
import { GiBookmarklet } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import { PiAddressBookBold } from "react-icons/pi";
export const MenuData = [
        {title:'Главная',
            path:'/',
        icon:<HiHomeModern />
        },
        {title:'Расписание',
            path:'/schedule',
            icon:<GrSchedules />
        },
        {title:'Семинары',
            path:'/seminars',
        icon:<GiBookmarklet />

        },
      /*  {title:'Видео',
            path:'/videos',
            icon:<BiSolidMoviePlay />
        },*/
        {title:'Контакты',
            path:'/contacts',
            icon: <RiContactsFill />
        },
      /*  {title:'Регистрация',
            path:'/register',
        icon:<PiAddressBookBold />
        },
    {title:'Вход',
        path:'/login',
    icon:<BiLogIn />}*/
];
