import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Olha só que legal minha miniatura do Batmóvel. <br/>
        Muito Bom estudar tecnologia <br/>
        Acho isso tudo extraordinario
      </Post>
    </div>
  );
}

export default App;
