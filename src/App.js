import {useEffect, useState} from "react";

const jsonData = [
  {
  key: "1",
  name: "Juan"
}, {
  key: "2",
  name: "Valeria"
}, {
  key: "3",
  name: "Max"
}, {
  key: "4",
  name: "Alfonso"
}
];

// mostrar loading condicionando usestate y useeffect
// con useEffect mandar el cambio de estado
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 4000);
  }, []);

  const renderData = () => {
    if(isLoading){
      return(
        <h2>Cargando .... ... .. .</h2>
      )
    }
    return jsonData?.map((value, index) => (
      <div key={value.key}>
        <p>{value.name}</p>
      </div>
    ))
  }
  return (
    <div>
      Hola {renderData()}
    </div>
  );
}

export default App;
