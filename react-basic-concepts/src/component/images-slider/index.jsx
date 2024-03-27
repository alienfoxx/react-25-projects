import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(0);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      setLoading(false);
      const response = await fetch(getUrl);
      const data = await response.jason();

      if (data) {
        setImages(data);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>Loading data ! please wait</div>;
  }
  if (errorMessage !== "") {
    return <div> Error occured ! {errorMessage}</div>;
  }

  return <div className="container"></div>;
}
