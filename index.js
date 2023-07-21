function App() {
  const [text, setText] = React.useState("unfollow");
  const handleChange = (e) => {
    setText(!text);

  };
  
    
  const dummyData = [
    {
      id: 0,
      title: "lofi rain",
      description: "a girl and cat",
      image: "./assests/song1.png",
      audio:"./",
      isFilled:false
    },
    {
      id: 1,
      title: "Atrapalos Ya!",
      description: "Pokemon",
      image: "./assests/song2.png",
      audio:"./",
      isFilled:false
    },
    {
      id: 2,
      title: "Catch You Catch me",
      description: "GUMI",
      image: "./assests/song3.png",
      audio:"./",
      isFilled:false
    },
    {
      id: 3,
      title: "Shinzo wo Sasgoyo~",
      description: "Kinked Horizon",
      image: "./assests/song4.png",
      audio:"./",
      isFilled:false
    },
   
     
    
  ];
  const [songs, setSongs] = React.useState(dummyData);

  const ChangeColor=(Id)=>{
   
   let mapped = songs.map((item)=>{
     if(item.id === Id ){
  
      return {...item, isFilled:!item.isFilled}
 }
 return {...item}
 }
    
  
    

)
     
  
    
   setSongs(mapped) 
   
  }
 

  return (
    <div className="app">
      <nav>
        <div className="next">
       
          <img className="arrow" src="./assests/arrow.png" alt="arrow" />
        </div>

        <div className="image">
          <img src="./assests/song1.png" alt="girl with cat" />
        </div>
        <div className="title">
          <h1> a girl and a cat</h1>
          <p>661,250 monthly listeners</p>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="sub-container">
         
          <div className="one">
              {" "}
              <p>Popular</p>
            </div>
            <div className="sub-sub-container">
              <div className="next2">
                <img
                  className="arrow2"
                  src="./assests/play.png"
                  alt="arrow2"
                />
              </div>

              <div>
                {text ? (
                <button className="follow" onClick={handleChange}>Follow</button>):(
                  <button className="follow" onClick={handleChange}>Following</button>
                )
              }
              </div>
              <div>
                <img
                  className="share"
                  src="./assests/share.png"
                  alt="share"
                />
              </div>
            </div>
            
            
          </div>
          {songs.map((item) => (
          
            <div className="body-container" key={item.id}> 
              <div className="music-sub">
                <div>
                  {" "}
                  <img
                    alt="logo"
                    src={item.image}
                    className="music-log"
                  />
                </div>

                <div className="list">
                  <h1 className="list-title">{item.title}</h1>
                  <h2 className="list-description">{item.description}</h2>
                </div>
              </div>
              <div className="icons-sub">
               
                
            <div  onClick={()=>ChangeColor(item.id)}>
            {!(item.isFilled ) ?  
                 ( 
                  
                 <img
                    className="heart"
                    src="./assests/heart.png"
                    alt="heart"
              
                    />
                
                  ):
                  
                  (
                    
                  <i className="fas fa-heart"></i>
            
                  )
}
      </div>

                <div>
                  <img
                    className="dot"
                    src="./assests/dot.png"
                    alt="dot"
                  />
                </div>
              </div>
            </div>
          ))}
           
          
        </div>
      </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
