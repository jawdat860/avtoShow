function ListHome() {
    return (
        <div className="px-5 text-[#FBF6E8] bg-black text-[18px] ">
            <ul className="flex justify-between">
                <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">Home</li>
                <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">About</li>
                <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">Our advantages</li>
                <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">Feedback</li>
                <li className="hover:cursor-pointer p-[10px] border-b-2 border-transparent hover:text-[#E25A1D] hover:border-[#E25A1D] transition-all duration-300">Contacts</li>
            </ul>
        </div>
    );
}

export default ListHome;
