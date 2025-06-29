import { useEffect,useState } from "react";

function usegithub(name){
    const [data,setData] = useState(null)
    const [loding,setLoading]=useState(false)
    const [error,setError]=useState(false)

    useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false); // Reset error on each request

      try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (!res.ok) {
          setError(true);
          setData(null);
        } else {
          const json = await res.json();
          setData(json);
        }
      } catch (e) {
        setError(true);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (name) fetchData();
  }, [name]);

    return [data,loding,error]
}

export default usegithub