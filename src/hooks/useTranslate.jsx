import { useEffect, useState } from "react";
import translate from "translate";

const useTranslate = (sourceText, targetLanguage) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async (text) => {
      try {
        const result = await translate(text, { to: targetLanguage });
        setTargetText(result);
      } catch (error) {
        console.error("Error translating text:", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, targetLanguage]);

  return targetText;
};

export default useTranslate;