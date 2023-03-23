function handleHome(){
  return `
    <nav class="navbar">
      <header class="banner">Jessie Tizon</header>
      <div class="hamburger">&#9776;
        <div class="hamburger-content" id="dropdown">
          <li id="a" style="color: #CCFFFF">Home</li>   
          <li id="a">Bio</li>
          <li id="a">Projects</li>
        </div>
        </div>
		  <ul class="menu">
        <li id="a">Projects</li>
			  <li id="a">Bio</li>
			  <li id="a" style="color: #CCFFFF">Home</li>
		  </ul>
    </nav>
      <main class="BioMain">
        <h2 class="Bio">Hello and welcome to my portfolio!</h2>
	<p>My name is Jessie Tizon and I am a desktop support specialist currently working for Charter Communications. I graduated from the University of Colorado, Denver with a Bachelor's Degree in Management Information Systems. Throughout my coursework, I have gained valuable experience in C++, MySQL, and JavaScript. I have also completed the Thinkful bootcamp, which has given me a solid foundation in full stack development.</p>
	<p>I am passionate about technology and am always eager to learn new things. In this portfolio, you will find a selection of my projects and experiences that showcase my skills and abilities in the field of information technology. Thank you for taking the time to view my work, and I hope you enjoy exploring my portfolio.</p>
      </main>
      <footer>
		    <ul class="social">
			    <a href="https://twitter.com/misterteezon"><li class="social_icon"><i class="fab fa-twitter"></i></li></a>
			    <a href="https://www.facebook.com/jessie.tizon.3"><li class="social_icon"><i class="fab fa-facebook"></i></li></a>
			    <a href="https://www.instagram.com/tizzooonnnn/?hl=en"><li class="social_icon"><i class="fab fa-instagram"></i></li></a>
		    </ul>
  	  </footer>
      <script src="https://code.jquery.com/jquery-3.2.1.js"></script> 
      <script src="script.js"></script>`;
}

function handleBio(){
  return `
    <nav class="navbar">
      <header class="banner">Jessie Tizon</header>
      <div class="hamburger">&#9776;
        <div class="hamburger-content" id="dropdown">
          <li id="a">Home</li>
          <li id="a" style="color: #CCFFFF">Bio</li>
          <li id="a">Projects</li>
        </div>
      </div>
		  <ul class="menu">
        <li id="a">Projects</li>
			  <li id="a" style="color: #CCFFFF">Bio</li>
			  <li id="a">Home</li>
		  </ul>
    </nav>
    <h1> About Me </h1>
    <main class="BioMain">
      
      <h2 class="Bio">Hello, my name is Jessie Tizon, and I'm a Management Information Systems graduate from the University of Colorado, Denver. With experience working across various industries, including healthcare, finance, and technology, I have honed my skills in Desktop Support and troubleshooting. Currently, I work as a Desktop Support Specialist at Charter Communications, where I work directly with users to address their day-to-day issues and manage projects efficiently. My ability to manage workload and prioritize tasks has allowed me to meet project deadlines while still fulfilling my daily responsibilities.<br><br> Outside of work, I enjoy staying active through working out and adventuring with my girlfriend and dog. Thank you for taking the time to learn more about me and my experience.</h2>
      <h1 style="color: black">Connect</h1>
      <div class="connect">
        <div class="column">
          <a href="https://twitter.com/misterteezon"><i class="fab fa-twitter"></i></a>
        </div>
        <div class="column">
          <a href="https://github.com/jtizon"><i class="fab fa-github-square"></i></a>
        </div>
        <div class="column">
          <a href="https://www.linkedin.com/in/jessietizon/"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="column">
          <a href="mailto:jct2418@gmail.com?Subject=Let's Connect" target="_blank" title="jct2418@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
    </main>
    <footer>
		    <ul class="social">
			    <a href="https://twitter.com/misterteezon"><li class="social_icon"><i class="fab fa-twitter"></i></li></a>
			    <a href="https://www.facebook.com/jessie.tizon.3"><li class="social_icon"><i class="fab fa-facebook"></i></li></a>
			    <a href="https://www.instagram.com/tizzooonnnn/?hl=en"><li class="social_icon"><i class="fab fa-instagram"></i></li></a>
		    </ul>
  	  </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script> 
    <script src="script.js"></script>`;
}

function handleProjects(){
  return `
    <nav class="navbar">
      <header class="banner">Jessie Tizon</header>
      <div class="hamburger">&#9776;
        <div class="hamburger-content" id="dropdown">
          <li id="a">Home</li>
          <li id="a">Bio</li>
          <li id="a" style="color: #CCFFFF">Projects</li>
        </div>
      </div>
		  <ul class="menu">
        <li id="a" style="color: #CCFFFF">Projects</li>
			  <li id="a">Bio</li>
			  <li id="a">Home</li>
		  </ul>
    </nav>
    <h1> Song Quiz </h1>
    <div class="Projects">
     	<h2>SONG QUIZ | <a href="https://jtizon.github.io/songquiz/">https://jtizon.github.io/songquiz/</a> | SOLE DEVELOPER</h2>
	<ul>
	    	<li>Developed an online application that allows users to play a song trivial game</li>
	    	<li>The game implements CSS, HTML, and JavaScript to ensure the game is playable and enjoyable</li>
	    	<li>Prioritized the UI and UX to ensure the game is aesthetically pleasing and playable on all platforms</li>
	</ul>

	<h2>WHATS4DINNER | <a href="https://jtizon.github.io/whats4dinner/">https://jtizon.github.io/whats4dinner/</a> | SOLE DEVELOPER</h2>
	<ul>
		<li>Developed an online application that allows users to search for a meal they would like to cook</li>
	    	<li>This meal search engine uses the criteria inputed by a user to output different meals resulting from the criteria</li>
	    	<li>Each search result is given with a picture of the dish, special qualities, such as being gluten free, and the ingredients needed to make the dish</li>
	    	<li>Prioritized the UI and UX to ensure the application was easy to use and information was easy to find</li>
	    	<li>Implemented HTML, CSS, JavaScript, and jQuery</li>
	    	<li>Pulled recipes from a third-party API</li>
	</ul>

	<h2>BATTLESHIP | <a href="https://replit.com/join/cluyflysfw-jtizon2418">https://replit.com/join/cluyflysfw-jtizon2418</a> | SOLE DEVELOPER</h2>
	<ul>
	   	<li>Developed an application with C++ and CSV files to recreate the iconic Battleship game</li>
	    	<li>The game implements a variety of coding and developing methods to create a smooth and seamless interaction with the user and the code</li>
	    	<li>Players take turns playing against the computer and grids are shown to help with playability</li>
	    	<li>Code was developed for school and was required to meet certain standards and deadlines</li>
	</ul>
    </div>
    <footer>
		    <ul class="social">
			    <a href="https://twitter.com/misterteezon"><li class="social_icon"><i class="fab fa-twitter"></i></li></a>
			    <a href="https://www.facebook.com/jessie.tizon.3"><li class="social_icon"><i class="fab fa-facebook"></i></li></a>
			    <a href="https://www.instagram.com/tizzooonnnn/?hl=en"><li class="social_icon"><i class="fab fa-instagram"></i></li></a>
		    </ul>
  	  </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.js"></script> 
    <script src="script.js"></script>`;
}


function menu() {
  $('.navbar').on('click', '#a', function(event){
    console.log($(this).text());
    if($(this).text() === "Home"){
      $("#Home").html(handleHome());
    }else if($(this).text() === "Bio"){
      $("#Home").html(handleBio());
    }else if($(this).text() === "Projects"){
      $("#Home").html(handleProjects());
    }else if($(this).text() === "Contact"){
      $("#Home").html(handleContact());
    }
  });
}



menu();
