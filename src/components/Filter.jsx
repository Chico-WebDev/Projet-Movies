import { useNavigate } from "react-router-dom";


function Filter({value, onTitleChange, onRatingChange }) {
 const navigate = useNavigate();

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onTitleChange(newValue);
    navigate(`/Recherche/${encodeURIComponent(newValue)}`);
    if(newValue === '') {
      navigate('/')
    }
  };

  
  // Effet pour naviguer quand inputValue change
 /* useEffect(() => {
    if (search.trim() !== "") {
      navigate(`/Recherche/${encodeURIComponent(search)}`);
    } else {
        navigate('/')
    }
  }, [search, navigate]);
*/
  return (
    <div className="w-full flex gap-4 px-5 md:px-0 flex-row md:gap-6">
       
      <input className="border w-full border-gray-200 py-1 px-4 rounded-md" type="text" placeholder="Rechercher par titre" value={value} onChange={handleInputChange} />
        
      <input className="hidden md:block border border-gray-200 py-1 px-4 rounded-md" type="number" placeholder="Note minimale" onChange={(e) => onRatingChange(Number(e.target.value))} />
    </div>
  );
}

export default Filter;