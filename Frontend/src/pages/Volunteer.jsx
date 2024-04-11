const founders = [
  {
    name: 'Nickhil Shivakumar',
     
  
    image: "./src/images/nixxil.jpg",
  },
  {
    name: 'Harsh Ahuja',
    
    image: './src/images/Harsh.jpg', 
  },

  {
    name: 'Piyush',
    
    image: './src/images/peeyush.jpg',
  },
  {
    name: 'Karan Bhatia',
    
    image: './src/images/Karan.jpg',
  },
];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  