import { useEffect, useState } from "react";

function Footer() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    let time = new Date();
    const currentYear = time.getFullYear();
    setDate(currentYear);
  }, []);

  return (
    <footer className=" pt-8  bg-[hsla(219,32%,12%,1)] h-60">
      <h1 className="text-center text-4xl font-bold text-color py-4">
        {" "}
        Nilesh Gautam
      </h1>

      <div className="text-center text-lg font-semibold text-color py-4">
        {date}
      </div>
    </footer>
  );
}

export default Footer;
