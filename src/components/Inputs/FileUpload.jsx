import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

const FileUpload = ({handleFileUpload}) => {
    return(
        <label htmlFor="file-upload" className="flex items-center justify-center text-white">
            <IconPaperclip size={21} />
            <input id="file-upload" type="file"  onChange={handleFileUpload} className="hidden"/>
        </label>
    );
}

export default FileUpload;