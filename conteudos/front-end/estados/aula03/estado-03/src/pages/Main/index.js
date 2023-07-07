import "./style.css";

function Main() {
  return (
    <div className="container">
      <div>
        <input type="text" placeholder="Nova tarefa" />
      </div>

      <div>
        <ul>
          <li><span>Texto</span></li>
          <button className='btn-del'>X</button>

          <li><span>Texto</span></li>
          <button className='btn-del'>X</button>

          <li><span>Texto</span></li>
          <button className='btn-del'>X</button>

          <li><span>Texto</span></li>
          <button className='btn-del'>X</button>

          <li><span>Texto</span></li>
          <button className='btn-del'>X</button>
        </ul>
      </div>
    </div>
  );
}

export default Main;
