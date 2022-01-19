import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Alerta de Instalação!
      <button onClick={closeToast}>Fechar</button>
    </div>
  );
};

toast.configure();
function App() {
  const notify = () => {
    toast("Notificação Utilizando React!", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.success("Notificações Lidas com Sucesso!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8100,
    });
    toast.info("Utilize yarn add react-toastify", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });

    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("Evite Erros no Código!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 6600,
    });
    toast("Leia a Documentação!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 7600,
    });
  };

  return (
    <div className="App">
      <button onClick={notify}>React Notify!</button>
    </div>
  );
}

export default App;
