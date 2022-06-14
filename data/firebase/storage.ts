import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { app } from ".";

// Create a reference with an initial file path and name
const storage = getStorage(app);
const getImageUrl = (imgSrc: string) => {
    const imgRef = ref(storage, "komari/" + imgSrc);
    return getDownloadURL(imgRef).catch(console.error);
};

export const useImageUrl = (imgSrc?: string) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    useEffect(() => {
        if (imgSrc) {
            getImageUrl(imgSrc).then((url) => {
                if (url) setImageUrl(url);
            });
        }
    }, [imgSrc]);
    return imageUrl;
};
