import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'


import './style.css'



export function Header() {
    return (
        <header className="header">

            <div className="container">

                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">

                    <AiOutlineSearch color="#8e8e8e" size="16px" />

                    <input placeholder="Pesquisar" />
                </div>

                <div className="menu-icons">
                    <div>
                        <AiFillHome size="18px" />
                    </div>
                    <div>
                        <FiSend size="18px" />
                    </div>
                    <div>
                        <BsPlusSquare size="18px" />
                    </div>
                    <div>
                        <MdOutlineExplore size="18px" />
                    </div>
                    <div>
                        <FiHeart size="18px" />
                    </div>

                    <img className="img-user" src="https://media-exp1.licdn.com/dms/image/C5603AQHgmlQu-t28pQ/profile-displayphoto-shrink_200_200/0/1646933567346?e=1661990400&v=beta&t=aBUe2f1lpHghYg6q_uu0ouGEXz3HSd2A1cjwp6KT4Wo" />
                </div>
            </div>

        </header>
    )
}