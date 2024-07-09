import React from "react";
import { IconLanguage } from "@tabler/icons-react";

const LanguageSelector = ({seletedLanguage, setSelectedLanguage, languages}) => {
    return(
        <span className="cursor-pointer rounded-full space-x-1 pl-2 items-ceter flex bg-black flex-row">
            <IconLanguage size={20} />
            <select
                value={seletedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-black flex flex-row rounded-full py-1 text-white"
            >
                {
                    languages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))
                }

            </select>
        </span>
    )
}

export default LanguageSelector;