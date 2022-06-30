import { Post } from '../Posts';
import { Storys } from '../Storys';
import './style.css';


export function Layout() {
    return (
        <div>
            <div className='MainGrid'>
                <div className='first-column' style={{gridArea: "firstColumn"}}>
                    <div className="box">
                    <Storys />
                    </div>
                    <div className="box">
                    <Post />
                    </div>
                </div>
            
                <div className='second-column' style={{gridArea: "secondColumn"}}>
                    <div className="sugestao-box">
                    sugestão
                    </div>
                </div>                    
            </div>
        </div>
    )
}