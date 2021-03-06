import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import img1 from '../components/images/post.png';
import img2 from '../components/images/web2.jpg';
import bar from '../components/images/bar.png';

function Carditem(){
    return(
        <div className="container-fluid justify-center" alt="Responsive image">
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
                                    <Card.Text className="float-right">• 2 days ago</Card.Text>
                                    <Card.Title className="">Contagion</Card.Title>
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
                                <Card.Body>
                                <Card.Text className="float-right">• 2 days ago</Card.Text>
                                    <Card.Title>Contagion</Card.Title>
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
                                <Card.Text className="float-right">• 2 days ago</Card.Text>
                                    <Card.Title>Contagion</Card.Title>
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