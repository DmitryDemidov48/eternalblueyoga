import { HiHomeModern } from "react-icons/hi2";
import { GrSchedules } from "react-icons/gr";
import { MdPhotoCamera } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import { RiFolderVideoFill } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { IoInfiniteOutline } from "react-icons/io5";
import { IoInfiniteSharp } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { PiAddressBookBold } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
export const MenuData = [
        {title:'Главная',
            path:'/',
        icon:<IoInfiniteSharp />
        },
        {title:'Расписание',
            path:'/schedule',
            icon:<GrSchedules />
        },
        {title:'Семинары',
            path:'/seminars',
        icon:<GiBookmarklet />

        },
       {title:'Фото',
            path:'/photo',
            icon:<MdPhotoCamera />
        },
        {title:'Видео',
            path:'/video',
            icon: <RiFolderVideoFill />
        },





];
