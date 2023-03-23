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
        <h2>Hello and welcome to my portfolio!</h2>
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
      
	  <header>
	    <h2>Jessie Tizon</h2>
	    <p>Aurora, CO | (720)949-3448 | jct2418@gmail.com</p>
	  </header>

	  <section>
	    <h2>Objective</h2>
	    <p>My current objective is to provide any workspace with the experience and skills that I have acquired through school and other forms of learning. I want to be able to provide a company/industry with the skills, time and work needed to help them succeed in all spectrums that I can be a part of.</p>
	  </section>

	  <section>
	    <h2>Experience</h2>

	    <article>
	      <h3>Desktop Support Specialist | Charter Communications | 11/2022 - Present</h3>
	      <ul>
		<li>Communicate effectively with users and team members</li>
		<li>Delegate and triage tickets to ensure every user is properly supported</li>
		<li>Work individually and as a team to tackle projects with deadlines</li>
		<li>Troubleshoot and use all resources available</li>
	      </ul>
	    </article>

	    <article>
	      <h3>CUSTOMER RELATIONSHIP ADVOCATE | FIDELITY INVESTMENTS | 11/2021 - 11/2022</h3>
	      <ul>
		<li>Communicate effectively and efficiently with clients to ensure all tasks are addressed and cared for</li>
		<li>Communicate with other teams and associates to ensure the client is getting the best and up to date service</li>
		<li>Ensure I practice and implement Fidelity’s core path and other tools to ensure a consistent and efficient call</li>
	      </ul>
	    </article>

	    <article>
	      <h3>LAB TECHNICIAN | CHILDREN’S EYE PHYSICIANS | 10/2020 – 11/2021</h3>
	      <ul>
		<li>Test materials and products to ensure patients receive the best product we can provide</li>
		<li>Ensure every patient is notified through our computer programs of the status of their product</li>
		<li>Communicate with vendors and clients to promote a fast and efficient process</li>
		<li>Be cautious and vigilant with every process to minimize mistakes</li>
	      </ul>
	    </article>

	    <article>
	      <h3>TRIAGE ANALYST | INTELISECURE | 5/2020 - 10/2020</h3>
	      <ul>
		<li>Manage client data flow with the use of applications like McAfee and Symantec</li>
		<li>Triage incidents to find out if a client’s data transfer was malicious</li>
		<li>Communicate with other team members and departments so we can provide the best service for our clients</li>
		<li>Communicate with clients to ensure a consistent connection with them that allows us to clearly lay out expectations and the means to deliver them</li>
	      </ul>
	    </article>
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
