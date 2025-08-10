import React from "react";
import {
  ImageIcon,
  VideoIcon,
  AudioIcon,
  DocumentIcon,
} from "../../assets/index";
import SvgIconWrapper from "../SvgIconWrapper/SvgIconWrapper";

const SideBar = ({onMenuClick}) => {
  const menuItems = [
    {  key:'image', name: "Images", icon: ImageIcon },
    { key:'video', name: "Videos", icon: VideoIcon },
    { key:'audio', name: "Audio", icon: AudioIcon },
    { key:'document', name: "Documents", icon: DocumentIcon },
  ];

  const [activeItem, setActiveItem] = React.useState("Images");
  const handleMenuClick = (item) => {
    setActiveItem(item.name);
    onMenuClick(item.key)
  };

  return (
    <div className="w-64 pt-3">
      <nav className="space-y-4">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.name;
          console.log("Clicked on:", isActive, item);

          return (
            <div style={{width:208,marginInline:10, borderRadius:30, backgroundColor:  isActive
                      ? "#F0F2F5"
                      : "#ffffff"}}  onClick={() => handleMenuClick(item)} key={item.name}>
              <div
                className={`
                  flex items-center gap-4 w-full p-3 cursor-pointer
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-gray-100 text-blue-600 rounded-lg"
                      : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                <SvgIconWrapper
                  Icon={IconComponent}
                  width={24}
                  height={24}
                  color={"#f8f9fa"}
                />
                <span className="font-medium ps-4 fs-6">{item.name}</span>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
