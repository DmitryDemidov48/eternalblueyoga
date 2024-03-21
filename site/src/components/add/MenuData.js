
import { GrSchedules } from "react-icons/gr";
import { MdPhotoCamera } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { RiFolderVideoFill } from "react-icons/ri";
import { IoInfiniteSharp } from "react-icons/io5";
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
