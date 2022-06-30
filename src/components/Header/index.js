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

                    <AiOutlineSearch color="#8e8e8e" size="20px" />

                    <input placeholder="Pesquisar" />
                </div>

                <div className="menu-icons">
                    <div>
                        <AiFillHome size="20px" />
                    </div>
                    <div>
                        <FiSend size="20px" />
                    </div>
                    <div>
                        <BsPlusSquare size="20px" />
                    </div>
                    <div>
                        <MdOutlineExplore size="20px" />
                    </div>
                    <div>
                        <FiHeart size="20px" />
                    </div>

                    <img className="img-user" src="https://media-exp1.licdn.com/dms/image/C4D03AQGWvUZl33YSqQ/profile-displayphoto-shrink_200_200/0/1656383071503?e=1661990400&v=beta&t=HHMZcvML1eM1SCBAbiUK9mWy60OwPx7LLDE-RenMASk" />
                </div>
            </div>

        </header>


    )


}
