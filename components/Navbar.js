const Navbar = ({userName}) => {
  return (
    <nav className="w-100 bg-[#101010] h-[84px] font-Inter">
      <div className="flex items-center justify-between h-[100%] px-[43px]">
        <h1 className="text-[36px] font-bold text-white leading-10 font-SF">Edvora</h1>
        <div className="flex items-center">
          <span className="text-[20px] font-bold text-white pr-[24px] leading-6">
            {userName}
          </span>
          <img
            src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg"
            alt="myimg"
            className="w-[44px] h-[44px] rounded-[22px]"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
