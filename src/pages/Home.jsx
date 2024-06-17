import logo from "../img/icion.png"
function Home (){
    return(
        <div className=" bg-black flex text-[#FBF6E8] justify-between items-center py-[10px] px-[20px] border-b-[1px] border-[#FBF6E8]">
            <div>
            <i className="fa-solid fa-phone text-[32px]  hover:cursor-pointer " ></i>
            <span className="text-[27px] hover:cursor-pointer ml-[3px]">+79789990088</span>
            </div>
            <img src={logo} alt="icon" className=" hover:cursor-pointer "/>
            <p className="text-[27px] hover:cursor-pointer">Севастополь, ул.Стахановцев,3</p>
        </div>
    )
}
export default Home