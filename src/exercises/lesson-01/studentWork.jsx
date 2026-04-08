//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  // Name, Age, Hobbies
  const name = "Euclid";
  const age = "22";
  const hobbies = ["Playing Videogames", "Tennis", "Going to Coffee Shops", "Taking Photobooth Pictures with Friends"];

  return (
    <div>
      {/* add JSX here */}
      <h1>About {name}</h1>
      <p>Hi! My name is {name} and I am {age} years old! I am from California, USA. 
        I recently graduated at UC Irvine with a degree in Game Design & Interactive Media.
        I love creating interactive and meaningful experiences through game design and UI/UX. 
        Whether it is designing a game interface, building a menu flow, or crafting graphics for a project, 
        I enjoy making things that look good and feel good to use!</p>

      <p>A few hobbies I enjoy are:</p>

      <ul>{hobbies.map((hobby, index) => (<li key={index}> {hobby} </li>))}</ul>
    </div>
  );
}