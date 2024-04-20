import "./Home.css";

const Home = () => {
    return (
        <div className="Home-Container" style={{ fontFamily: "Victor Mono", fontWeight: "300", lineHeight: "1.5" }}>
            <h1>Rakesh Challa</h1>
            <img src="https://i.imgur.com/sUAwYDZ.jpeg" className="MyImage" alt="myimage" />
            <p className="paragraph">Welcome to my home page ☕️</p>

            <p className="paragraph">
                I'm Rakesh Challa from Kaleshwaram, a small town in Jayashankar Bhupalpally district, Telangana. 
                I graduated with a B.Tech in Civil Engineering from Sreenidhi Institute of Science and Technology in June 2023.
                Coming from a farming background, I've seen the challenges farmers face.
                So I've set my goal to create a mobile app that will offer various services to help farmers.
            </p>
            <p className="paragraph">
                Currently, I'm learning Advanced React Native to become a skilled mobile app developer. I aim to develop 
                a one-stop solution for farmers. This app will enable farmers to book tractors, buy and sell cattle, 
                book electricians and mechanics for repairs, sell old tools, and even book veterinary doctors.
            </p>
            <p className="paragraph">
                During college, I chose Python as an elective, sparking my interest in coding. I then learned web development 
                basics like HTML and CSS from resources like HackerRank, W3Schools, and YouTube.
                After that, I learned JavaScript, which made it easier to pick up Node.js and React.js since they are built on 
                top of JavaScript. I enjoyed learning JavaScript because of its simple syntax and versatility.
                 I also learned about databases like SQL and MongoDB and started working on full-stack projects. It's rewarding 
                to turn ideas into reality through coding. I've built several projects using React.js for the frontend and Node.js 
                with MongoDB for the backend.
            </p>
            <p className="paragraph">
                Now, I'm focusing on React Native and have already developed some mobile apps with it. I'm eager to join a company 
                where I can further improve my skills by working on real-time projects. I'm currently actively searching for job 
                opportunities related to my skills. If there's a chance, you can reach me at rakeshchr17@gmail.com, 7569140843.
            </p>

             
            <div className="Personal">
            <h3>Personal Details</h3>
            <p className="Email">Email: rakeshchr17@gmail.com</p>
            <p>Phone/Whatsapp: 7569140843</p>
            </div>
            <h3>Links</h3>
            <p className="Git">Github: <a href="https://github.com/CHALLARAKESHREDDY"  style={{color:"skyblue"}}>https://github.com/CHALLARAKESHREDDY</a></p>
            <p>LinkedIn:
                <a href="https://www.linkedin.com/in/challa-rakesh-1903851a4/"  style={{color:"skyblue"}}>
                    https://www.linkedin.com/in/challa-rakesh-1903851a4/
                </a>
            </p>
            <p  className="Git">HackerRank:
            <a href="https://www.hackerrank.com/profile/19311a0112"  style={{color:"skyblue"}}>
                https://www.hackerrank.com/profile/19311a0112
            </a>
        </p>
            
            <div className="Personal">
                
            <h3>Projects</h3>
            <div>
            <h4 className="React-Native">React-Native Projects</h4>
            <div className="Each-Poject">
              <p className="Tictactoe">Tic Tac Toe</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/TicTacToeApp"  style={{color:"skyblue"}}>
                    https://github.com/CHALLARAKESHREDDY/TicTacToeApp
                </a>
              </p>
              <p className="Git" >App:</p>
              <p className="description">Description: It's just a basic Tic Tac Toe game. Users can enter player names and play. 
                 The game uses simple logic. Circle and cross icons are used from Vector Icons.The player's 
                 name is displayed on top when their turn comes.After winning, the winning title is shown on top
              </p>
              
            </div>
            <div className="Each-Poject">
              <p  className="Tictactoe">Cricket Score Board</p>
              <p className="Git" >Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/CricketScoreBoard"  style={{color:"skyblue"}}>
                    https://github.com/CHALLARAKESHREDDY/CricketScoreBoard
                </a>
              </p>
              <p className="Git">App:</p>
              <p className="description">Description: It's very useful during a cricket match. Users can note down both teams' scores, boundaries, overs, and balls, and save them.
                 Instead of using a notebook or trying to remember, I came up with this idea and developed it
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="Tictactoe">Music Player</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/SpotifyMusic"  style={{color:"skyblue"}}>
                    https://github.com/CHALLARAKESHREDDY/SpotifyMusic
                </a>
              </p>
              <p className="Git">App:</p>
              <p className="description">Description:It's a music player designed with a Spotify-like interface. 
                I used the track player package to handle functionalities such as changing songs and playing/pausing them.
                The app can only play the songs that I've set up in the assets folder.
              </p>
              
            </div>
            </div>
            <div >
            <h4 className="Reactjs">Reactjs/Full Stack Projects</h4>
            <div className="Each-Poject">
              <p className="RythuVaaradhi">RythuVaaradhi A farmers App</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/RythuVaradhiSolutionsWebApp"  style={{color:"skyblue"}}>
                   https://github.com/CHALLARAKESHREDDY/RythuVaradhiSolutionsWebApp
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://rythu-vaaradhi.vercel.app/"  style={{color:"skyblue"}}>
                    https://rythu-vaaradhi.vercel.app/
                 </a>
              </p>
              <p className="description">Description:RythuVaaradhi is a farmer app designed to be a one-stop solution for farmers. 
                Farmers can register and log in using their name and phone number. After authentication,
                 they can access the services provided by the app. Services include buying and selling cattle, 
                 booking drones for fertilizer spraying, booking electricians/mechanics, and booking veterinary doctors. 
                 The app is still under development, and I am working on it.
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="RythuVaaradhi">StrikeOff A Coupons App</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/StrikeOffApp"  style={{color:"skyblue"}}>
                    https://github.com/CHALLARAKESHREDDY/StrikeOffApp
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://656da30a1d7bce35bd4ba8f3--guileless-fox-b49ecc.netlify.app/"  style={{color:"skyblue"}}>
                     https://656da30a1d7bce35bd4ba8f3--guileless-fox-b49ecc.netlify.app/
                 </a>
              </p>
              <p className="description">Users can create an account and access the coupons section where they can post coupons 
                they don't need and buy coupons they require for shopping.
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="RythuVaaradhi">NxtTrends</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/Shopping_App"  style={{color:"skyblue"}}>
                   https://github.com/CHALLARAKESHREDDY/Shopping_App
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://shopingapp37.ccbp.tech/login"  style={{color:"skyblue"}}>
                    https://shopingapp37.ccbp.tech/login
                 </a>
              </p>
              <p className="description">Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.
                 Built pages for Login, Products, and Product details with React Router, React components, form inputs,and event handlers.
                 Enabled secure authentication and authorization with JWT tokens and REST API calls .User can login and 
                 add products to the cart and total bill amountwith order quantity will be shoen 
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="RythuVaaradhi">JobbyApp</p>
              <p className="Git">Repository: 
                <a href="https://jobbyapp1237.ccbp.tech/"  style={{color:"skyblue"}}>
                   https://jobbyapp1237.ccbp.tech/
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://jobbyapp1237.ccbp.tech/"  style={{color:"skyblue"}}>
                    https://jobbyapp1237.ccbp.tech/
                 </a>
              </p>
              <p className="description">Constructed an all-in-one job searching platform, Jobby App.
                 Built pages for Login, Home, Jobs, and Job item details with React components, form inputs, and event
                 handlers.Ensured secure authentication with JWT tokens and REST API calls.
                 Persisted login state with local storage and protected routes with React Router.
              </p>
              
            </div>
            </div>
            <div >
            <h4 className="Javascript">JavaScript Projects</h4>
            <div className="Each-Poject">
              <p className="Todo">CricketScore Board</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/CricketScoreBoard"  style={{color:"skyblue"}}>
                    https://github.com/CHALLARAKESHREDDY/CricketScoreBoard
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://cricb.ccbp.tech/"  style={{color:"skyblue"}}>
                    https://cricb.ccbp.tech/
                 </a>
              </p>
              <p className="description">Description:It's very useful during a cricket match. Users can note down both teams' scores, boundaries, overs, and balls, and save them.
                 Instead of using a notebook or trying to remember, I came up with this idea and developed it
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="Todo">ToDos App</p>
              <p className="Git">Repository: 
                <a href="https://github.com/CHALLARAKESHREDDY/Todos_Assignment"  style={{color:"skyblue"}}>
                   https://github.com/CHALLARAKESHREDDY/Todos_Assignment
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://mytodosapp17.ccbp.tech/"  style={{color:"skyblue"}}>
                    https://mytodosapp17.ccbp.tech/
                 </a>
              </p>
              <p>Its just a basic todos app.user can add the todo and delete it and save it.
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="Todo">ChatBox</p>
              <p className="Git">Repository: 
                <a href="https://chatbox1237.ccbp.tech/"  style={{color:"skyblue"}}>
                   https://chatbox1237.ccbp.tech/
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://chatbox1237.ccbp.tech/"  style={{color:"skyblue"}}>
                    https://chatbox1237.ccbp.tech/
                 </a>
              </p>
              <p className="description">Developed a ChatBot. User can send message and repy will be given by the bot. 
                I just gave some list of messages and the messages will be shown ramdomly.
                For each message you send you will get a reply message from thet list.
              </p>
              
            </div>
            <div className="Each-Poject">
              <p className="Todo">ON/OFF Tommy</p>
              <p className="Git">Repository: 
                <a href="https://bulbcat2.ccbp.tech/"  style={{color:"skyblue"}}>
                   https://bulbcat2.ccbp.tech/
                </a>
              </p>
              <p className="Git">App: 
                 <a href="https://bulbcat2.ccbp.tech/"  style={{color:"skyblue"}}>
                    https://bulbcat2.ccbp.tech/
                 </a>
              </p>
              <p className="description">
                Image Changes when clicks on ON/OFF button. Toggled  based on the state of the bub.
              </p>
              
            </div>
            </div>

            </div>
            
            



        </div>
    );
}

export default Home;
