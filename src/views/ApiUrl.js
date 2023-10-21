import {useState, useEffect} from "react";

export function useFetch(urlApi) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    setLoading(true);

    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if(error.name === "AbortError"){
          console.log("Intento fallido");
        } else{
          setError(error);
        }
      })
      .finally(() => setLoading(false));

  }, [urlApi]);

  return { data, loading, error };
}