const Footer = () => {
  return (
    <div className="h-20 flex items-center">
      <div className="container">
        <p className="text-[14px] text-main-color">
          &copy; {new Date().getFullYear()} Upost. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
