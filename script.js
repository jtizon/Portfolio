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
      <main class="IntroMain">
        <h2 class="Intro">Hello and welcome to my portfolio!</h2>
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
      <h2 class="description"> Description </h2>
      <h3> I created a fun little Song Quiz that tests the user’s knowledge on music to see if the user really knows their stuff. The user is asked a total of 10 questions asking the user to either tell me the artist who performed the song or finish the line of the lyric given.</h3>
      <h2 class="tech">Tech </h2>
      <h3> I used CSS, JavaScript as well as HTML to develop this game as HTML was used to start the game and JavaScript was used to execute the rest of the game as CSS makes it all look pretty and adjust to the proper screen size.</h3>
      <div class="images">
        <div class="column">
          <img src="Screenshot.jpg" alt="Start" style="width:100%">
        </div>
        <div class="column">
          <img src="Screenshot2.jpg" alt="Question" style="width:100%">
        </div>
      </div>
      <a href='https://jtizon.github.io/SongQuiz/'><button class="quizApp">Song Quiz</button></a>
      <h3 class="repo"><a href="https://github.com/jtizon/SongQuiz.git">Repository</a></h3>
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
