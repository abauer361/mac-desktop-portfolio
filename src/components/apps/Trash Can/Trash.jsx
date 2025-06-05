import React, { useState } from "react";
import folder from "../../../images/misc/folder.svg";
import pdf from "../../../images/misc/pdf.svg";
import TrashIcon from "./TrashIcon";
import zip from "../../../images/misc/zip.png";
import txt from "../../../images/misc/txt.png";
import { trashcan } from "@/images/app_icons";

const Trash = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleContainerClick = (e) => {
    // Only deselect if clicking directly on the container, not on an icon
    if (e.target === e.currentTarget) {
      setSelectedIcon(null);
    }
  };

  return (
    <div
      className="flex w-full h-full p-6 overflow-y-auto"
      onClick={handleContainerClick}
    >
      <div className="flex flex-wrap h-[100px] w-full">
        <TrashIcon
          image={folder}
          name="Hopes & Dreams"
          isSelected={selectedIcon === "Hopes & Dreams"}
          onSelect={() => setSelectedIcon("Hopes & Dreams")}
        />

        <TrashIcon
          image={trashcan}
          name="My Ex Girlfriend"
          isSelected={selectedIcon === "My Ex Girlfriend"}
          onSelect={() => setSelectedIcon("My Ex Girlfriend")}
        />

        <TrashIcon
          image={folder}
          name="project final"
          isSelected={selectedIcon === "project final"}
          onSelect={() => setSelectedIcon("project final")}
        />

        <TrashIcon
          image={folder}
          name="project final final"
          isSelected={selectedIcon === "project final final"}
          onSelect={() => setSelectedIcon("project final final")}
        />

        <TrashIcon
          image={pdf}
          name="ResumeUseThis.pdf"
          isSelected={selectedIcon === "ResumeUseThis.pdf"}
          onSelect={() => setSelectedIcon("ResumeUseThis.pdf")}
        />

        <TrashIcon
          image={zip}
          name="TaxStuff IDK.zip"
          isSelected={selectedIcon === "TaxStuff IDK.zip"}
          onSelect={() => setSelectedIcon("TaxStuff IDK.zip")}
        />

        <TrashIcon
          image={folder}
          name="DO NOT DELETE"
          isSelected={selectedIcon === "DO NOT DELETE"}
          onSelect={() => setSelectedIcon("DO NOT DELETE")}
        />

        <TrashIcon
          image={txt}
          name="API_KEYS.txt"
          isSelected={selectedIcon === "API_KEYS.txt"}
          onSelect={() => setSelectedIcon("API_KEYS.txt")}
        />

        <TrashIcon
          image={folder}
          name="Rust Project"
          isSelected={selectedIcon === "Rust Project"}
          onSelect={() => setSelectedIcon("Rust Project")}
        />

        <TrashIcon
          image={txt}
          name="CRYPTO_KEYS.txt"
          isSelected={selectedIcon === "CRYPTO_KEYS.txt"}
          onSelect={() => setSelectedIcon("CRYPTO_KEYS.txt")}
        />
      </div>
    </div>
  );
};

export default Trash;
