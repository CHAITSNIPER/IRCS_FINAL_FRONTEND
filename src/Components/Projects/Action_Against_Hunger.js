import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function Action_Against_Hunger() {

    const data = useParams();
    const navigate = useNavigate();
   
  return (
    <div>
       <button className='goBack' onClick={()=>{navigate('/ourProjects')}}>Go Back</button>
    <div className="container">
      
      <div className='card'>
      <h1 className="App-header">
        <h1>ACTIONS AGAINST MALNUTRITION</h1>
      </h1>
      <main>
        <section>
          <h2>Basic Education and Development</h2>
          <p>
            Basic education links the children, whether of the cities or the villages. Education is the key to the development not only of children but of nations. Prem Seva Mahila Mandal, as an NGO with its volunteers, has been working to address this issue over the years, across communities by promoting the cause of education by generating awareness, encouraging children to attend schools, initiating innovative school programs like door-to-door schools for children who have never attended school or have dropped out for various reasons through our mobile school bus. This is possible only if every single person in society joins hands and comes together to demand and ensure education. Bombay City Red Cross has given the resources to the cause of education through the nutritious mid-day meal.
          </p>
        </section>
        <section>
          <h2>Education, Child Health, and Nutrition</h2>
          <p>
            The program aims to reduce malnutrition in children whom we teach. It provides a nutritious mid-day meal, a balanced diet, and identifies and treats severely malnourished children with health supplements like Sheera, Upma, Sukli (Wheat and Jaggery) and by improving feeding practices of young children among mothers.
          </p>
          <p>
            Beneficiaries are around 500 children (girls and boys), who have demonstrated positive thinking, improved self-esteem, decision-making ability to stand up to abuse, and improved health mainly in hygiene and diets. Over 40 volunteers have been trained as educators, and counselors for empowering these children and adolescent girls.
          </p>
          <p>
            Liaisoning activities with service providers include medical and immunization check-ups, camps conducted regularly for immunization, and maintaining height-weight charts.
          </p>
          <p>
            Mobile doorstep check-up of women and children. Counseling services for violence, physical abuse. Legal help and police help and refer for further intervention.
          </p>
        </section>
        <section>
          <h2>Community Engagement</h2>
          <p>
            Street plays are organized by our own volunteers or from ideal drama academics. Empowering men to fight against violence on women and children; importance of education and girl child.
          </p>
          <p>
            Outdoor activities include taking children out for picnics to a resort, beach, park, or circus for exposure to the outside world as well as entertainment, otherwise all they know is coal, dust, mud, and bricks.
          </p>
          <p>
            Educational tours are organized, taking them to Nehru Planetarium, Worli, Coin Museum, Reserve Bank, Post-office, Bank to encourage savings, police station, and fire station for them to know what goes on beyond them.
          </p>
          <p>
            Visits to the biscuit factory, and textile loom give them a firsthand experience of how things are made.
          </p>
        </section>
        <section>
          <h2>Reports of Health Check-ups</h2>
          <h3>Common Problems found in Children:</h3>
          <ul>
            <li>Malnourishment / Anaemia</li>
            <li>Vitamin A Deficiency</li>
            <li>Wax in the ears</li>
            <li>Lice in the hair</li>
            <li>Fungal Infection</li>
            <li>High rate of alcoholism among parents, chewing of tobacco even among children. Parents neglect the children due to alcoholism.</li>
          </ul>
          <h3>Malnutrition:</h3>
          <p>
            Nutritious mid-day meal provided to combat malnutrition. A well-balanced diet of proteins, carbohydrates, etc., is prepared and fed as a mid-day meal along with health supplements.
          </p>
          <h4>Health supplements for children up to 3 years of age:</h4>
          <ul>
            <li>Sheera</li>
            <li>Upma</li>
            <li>Sathu</li>
            <li>Sukli – for pregnant and lactating women. (Sukli is an ingredient of wheat and Jaggery)</li>
          </ul>
        </section>
        <section>
          <h2>Knowledge on Wheels</h2>
          <p>
            Prem Seva organizes computers by networking with other NGOs. The first touch, first feel on the computers, the pictures on the screen motivates children to increase their knowledge.
          </p>
        </section>
      </main>
      </div>
    </div>
    </div>
  )
}
