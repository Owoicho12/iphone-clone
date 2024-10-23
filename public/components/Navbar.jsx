import { appleImg, bagImg, searchImg, } from "../../src/utils"
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 flex justify-between items-center">
        <nav className='flex w-full screen-max-width' >
            <img src={ appleImg } 
            alt="Apple"
            width={14}
            height={18}
             />
                <div className="flex">
                    {['Phones', 'Macbook', 'Tablets'].map(nav => (
                        <div key ={nav}>
                            {nav}
                        </div>
                    ))}
    
             </div>
             <div>
                <img src={searchImg} alt="search " height={18} width={18}/>
                <img src={bagImg} alt="bag " height={18} width={18}/>
             </div>
        </nav>
    </header>
  )
}

export default Navbar
