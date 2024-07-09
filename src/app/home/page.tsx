"use client";
import "regenerator-runtime/runtime"
import { cn } from "@/lib/utils";
import DotPattern from "@/components/DotPattern";
import TextArea from '@/components/Inputs/TextArea'
import { ChangeEvent, useState } from "react";
import SpeechRecognitionComponent from '@/components/SpeechRecognition/SpeechRecognition'
import { IconCopy, IconStar, IconThumbDown, IconThumbUp, IconVolume } from "@tabler/icons-react";
import FileUpload from '@/components/Inputs/FileUpload';
import LinkPaste from '@/components/Inputs/LinkPaste';
import { rtfToText } from '@/utils/rtfToText'
import useTranslate  from '@/hooks/useTranslate'
import LanguageSelector from '@/components/Inputs/LanguageSelector'
import SvgDecorations from "@/components/svgDecorations";
const DotPatternDemo = () =>{
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    // Implement like logic
  };

  const handleDislike = () => {
    // Implement dislike logic
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      localStorage.setItem("favoriteTranslation", targetText);
    } else {
      localStorage.removeItem("favoriteTranslation");
    }
  };


  const handlePlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

    return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent ">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <h1 className="z-10 whitespace-pre-wrap text-center text-8xl font-extrabold tracking-tighter text-black dark:text-white">
        Lang <span className="text-orange-600">Speak</span>
      </h1>
      <p className="mt-3 text-neutral-700">
        LangSpeak: Bridging Voices, Connecting Worlds
      </p>
      <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
            <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-black-900/20">
                <TextArea 
                    id="source-language"
                    value={sourceText}
                    placeholder='Source Language'                                 
                    onChange={(e:ChangeEvent<HTMLTextAreaElement>) => {
                        setSourceText(e.target.value);
                    }}
                />
                <div className="flex flex-row justify-between w-full p-2">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                        <SpeechRecognitionComponent setSourceText={setSourceText}/>
                        <IconVolume size={22} onClick={() => handlePlayback(sourceText)} className="text-white"/>
                        <FileUpload handleFileUpload={handleFileUpload} />
                        <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </span>
                    <span className="text-sm pr-4">
                      {sourceText.length} / 2000
                    </span>
                </div>
            </div>
            <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="target-language"
                    value={targetText}
                    onChange={() => {}}
                    placeholder="Target Language"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex items-center space-x-2 flex-row">
                      <LanguageSelector
                        seletedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        languages={languages}
                      />
                      <IconVolume
                        size={22}
                        onClick={() => handlePlayback(targetText)}
                        className="text-white"
                      />
                    </span>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                      <IconCopy size={22} onClick={handleCopyToClipboard} className="text-white"/>
                      {copied && (
                        <span className="text-xs text-green-500">Copied!</span>
                      )}
                      <IconThumbUp size={22} onClick={handleLike} className="text-white"/>
                      <IconThumbDown size={22} onClick={handleDislike} className="text-white"/>
                      <IconStar
                        size={22}
                        onClick={handleFavorite}
                        className={favorite ? "text-yellow-500 background-yellow-800" : ""}
                      />
                    </div>
                  </div>
                </div>
              <SvgDecorations />
        </div>
      </div>
    </div>
  );
}

export default DotPatternDemo;