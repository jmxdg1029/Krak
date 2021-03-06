import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import img1 from '../components/images/post.png';
import img2 from '../components/images/web2.jpg';
import img3 from '../components/images/web3.png'
import bar from '../components/images/bar.png';

function Carditem(){
    return(
        <div className="container-fluid justify-center w-75" alt="Responsive image">
            <h1 className="text-white display-4 mt-4">Post Snippets of your Website</h1>
            <img src={bar} style={{height: "70px", width:"1100px"}}/>
            <p id="description" className="text-white mx-auto w-50 h5"> Post Projects you've created to your friends and family members. Show the world what you're capable of by displaying your skills and languages you've used</p>
            <dib className="mt-5 container " >
                <div className="row w-100 mt-4">
                    <CardDeck>
                        <div className='justify-center col'>
                            <Card border="dark">
                                <Card.Img src={img1} />
                                <Card.Body>
                                    <Card.Title className="justify-center">Contagion</Card.Title>
                                    <Card.Text className="ml-auto">2 days ago</Card.Text>
                                    <Card.Text>Just made this Project out of ReactJS and Bootstrap !! Can't wait to publish this online. Check my profile to download the folder</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <code>@ran_forz12 </code>• 33 likes • 17 comments
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card border="dark">
                                <Card.Img src={img3} />
                                <Card.Body>
                                    <Card.Title>Contagion</Card.Title>
                                    <Card.Text>1 weeks ago</Card.Text>
                                    <Card.Text>Just made this Project out of ReactJS and Bootstrap !! Can't wait to publish this online. Check my profile to download the folder</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <code>@jmxdg1029 </code>• 17 likes • 10 comments 
                                </Card.Footer>
                            </Card>
                        </div>
                        <div className='col'>
                            <Card border="dark">
                                <Card.Img src={img2} />
                                <div className="card-img-overlay">
                                
                                </div>
                                <Card.Body>
                                    <Card.Title>Contagion</Card.Title>
                                    <Card.Text>43 days ago</Card.Text>
                                    <Card.Text>Just made this Project out of ReactJS and Bootstrap !! Can't wait to publish this online. Check my profile to download the folder</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <code>@jmxdg1029 </code>• 17 likes • 10 comments 
                                </Card.Footer>
                            </Card>
                        </div>
                    </CardDeck>
                </div>
            </dib>
        </div>
    )
}

export default Carditem;