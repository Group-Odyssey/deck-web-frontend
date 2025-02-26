export default function NavLink ({ text, href = "#", isButton = false, extra = ""}) {
    return (
      <a
        href={href}
        className={`mx-2 ${extra} ${isButton ? "px-6 py-2 rounded-full bg-[#12454C] text-white fraiche" : ""}`}
      >
        {text}
      </a>
    );
  };