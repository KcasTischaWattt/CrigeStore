import "../cssStyles/Index.css";
import logo from "../pictures/logo.png"
import main1 from "../pictures/main1.png"
import main2 from "../pictures/main2.png"
import main3 from "../pictures/main3.png"
import main4 from "../pictures/main4.png"
import dev from "../pictures/dev.png"
import { Link } from 'react-router-dom';
import { AuthContext } from '../network/AuthContext';
import { useContext } from 'react';

function IndexPage() {
    const { handleLogout, isLoggedIn } = useContext(AuthContext);
    return(
        <>
        <div className="Main">
     <header>
      <nav>
        <ul>
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
        <Link to="/products" className="button">View Catalog</Link>
        {isLoggedIn && (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
        </ul>
        </nav>
        </header>
        <img width="50" 
     height="100" src={dev} alt="Logo" className="center" />
        <img width="50" 
     height="100" src={logo} alt="Logo" className="center" />
     <div className="container">
        <article>
          <h2>About us</h2>
          <p>
            Welcome to our Software "CringeSoft" store! CringeSoft is a top-rated online software store 
            that offers a wide range of high-quality software programs for individuals and businesses alike.
             With a vast selection of software available, users can find everything from popular productivity 
             tools and graphic design software to the latest gaming titles and antivirus programs.
          </p>
        </article>
        </div>
        <img width="50" 
     height="100" src={main4} alt="Logo" className="center" />
    <div className="container">
        <article>
          <h2>Why you should choose us?</h2>
          <p>
          What sets CringeSoft apart from other online software stores is its commitment to providing top-notch customer service.
           Their knowledgeable and friendly support team is available around the clock to assist
            customers with any questions or issues they may encounter.

            CringeSoft also offers competitive pricing, with frequent discounts and special deals available to customers.
             They offer a variety of payment options, including secure credit card transactions and MirPay.
          </p>
        </article>
        </div>
        <img width="50" 
     height="100" src={main1} alt="Logo" className="center" />
    <div className="container">
        <article>
          <h2>The cringiest interface</h2>
          <p>
          Additionally, CringeSoft offers a user-friendly interface that makes it easy to browse and search for the software you need.
           Customers can read detailed descriptions and reviews of each product to ensure they are making
            an informed decision before making a purchase.

            The store's website is easy to navigate and provides customers with a streamlined checkout process,
             allowing them to quickly and easily purchase the software they need. CringeSoft also offers fast and reliable shipping,
              with instant digital downloads available for some products.
          </p>
        </article>
        </div>
        <img width="50" 
     height="100" src={main3} alt="Logo" className="center" />
    <div className="container">
        <article>
          <h2>Overall</h2>
          <p>
          Overall, CringeSoft is a fantastic option for anyone in need of high-quality software programs.
           With excellent customer service, competitive pricing, and a vast selection of software,
            it is no wonder why it is one of the most popular online software stores on the web.

            Think about it – with online software, you can manage your finances, 
            streamline your processes, automate your marketing, and so much more. 
            The best part? You can access these tools from anywhere in the world, 
            as long as you have an internet connection.
          </p>
        </article>
        </div>
        <img width="50" 
     height="100" src={main2} alt="Logo" className="center" />
      </div>
      </>
  );
}
export default IndexPage;