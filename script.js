function handleHome(){
  return `
    <nav class="navbar">
      <header class="banner">Jessie Tizon</header>
      <div class="hamburger">&#9776;
        <div class="hamburger-content" id="dropdown">
          <li id="a">Home</li>   <li id="a">Bio</li>
          <li id="a">Projects</li>
          <li id="a">Contact</li>
        </div>
        </div>
		  <ul class="menu">
        <li id="a">Contact</li>
        <li id="a">Projects</li>
			  <li id="a">Bio</li>
			  <li id="a">Home</li>
		  </ul>
    </nav>
      <main class="IntroMain">
        <h2 class="Intro">Hello, my name is Jessie! I am a learning Fullstack Developer, with skills ranging from C++ to CSS.</h2>
      </main>
      <footer>
		    <ul class="social">
			    <li class="social_icon"><i class="fab fa-twitter"></i></li>
			    <li class="social_icon"><i class="fab fa-facebook"></i></li>
			    <li class="social_icon"><i class="fab fa-instagram"></i></li>
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
          <li id="a">Bio</li>
          <li id="a">Projects</li>
          <li id="a">Contact</li>
        </div>
      </div>
		  <ul class="menu">
        <li id="a">Contact</li>
        <li id="a">Projects</li>
			  <li id="a">Bio</li>
			  <li id="a">Home</li>
		  </ul>
    </nav>
    <main class="BioMain">
      <h1> About Me </h1>
      <h2 class="Bio">I am a learning web developer currently enrolled in the Bloc program to gain skills and knowledges on the languages needed for web developing. I first found interest in developing in my Junior year of high school. I was enrolled in this class that used a program named Scratch. Scratch used blocks instead of code to imitate the same feeling. Ever since then, I wanted to learn more and more and expand my learning past blocks of code. I am now learning languages, such as CSS, HTML and JavaScript with previous learnings in C++ and Python. <br><br> Once the code is fully compiled and working, I am found working, studying, teaching or coaching. These are the activities that take up my day to day schedule. I currently work for 24 Hour Fitness where I sell memberships as well as teach children how to code using programs like Scratch through a program named Coding with Kids. When I am not working, I am finishing my studies as I am pursuing my Computer Science Degree at the University of Colorado, Denver as I am in my second year. And once all tasks are taken care of, I head to Rangeview High School where I coach the lacrosse team in hopes to make playoffs this year! </h2>
    </main>
    <footer>
		    <ul class="social">
			    <li class="social_icon"><i class="fab fa-twitter"></i></li>
			    <li class="social_icon"><i class="fab fa-facebook"></i></li>
			    <li class="social_icon"><i class="fab fa-instagram"></i></li>
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
          <li id="a">Projects</li>
          <li id="a">Contact</li>
        </div>
      </div>
		  <ul class="menu">
        <li id="a">Contact</li>
        <li id="a">Projects</li>
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
			    <li class="social_icon"><i class="fab fa-twitter"></i></li>
			    <li class="social_icon"><i class="fab fa-facebook"></i></li>
			    <li class="social_icon"><i class="fab fa-instagram"></i></li>
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
