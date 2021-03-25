import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>About us</h3>
              <div className="row">
                <div className="col-1">
                  <FontAwesomeIcon icon={["fa", "map-pin"]} fixedWidth />
                </div>
                <div className="col">
                  Halle & Berlin, old city and new capital of germany
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <FontAwesomeIcon icon={["fa", "headset"]} fixedWidth />
                </div>
                <div className="col">
                  Call us via <a href="https://discord.com/">Discord</a>
                </div>
              </div>
              <div className="row">
                <div className="col-1">
                  <FontAwesomeIcon icon={["fa", "envelope-open"]} fixedWidth />
                </div>
                <div className="col">thesportsblog@posteo.de</div>
              </div>
            </div>
            <div className="col">
              <h3>Follow us</h3>
              <div className="row">
                <div className="col-1 pointer">
                  <img
                    className="socialicon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII="
                    alt="social icon"
                  />
                </div>
                <div className="col-1 pointer">
                  <img
                    className="socialicon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                    alt="social icon"
                  />
                </div>
                <div className="col-1 pointer">
                  <img
                    className="socialicon"
                    src="https://upload.wikimedia.org/wikipedia/de/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png"
                    alt="social icon"
                  />
                </div>
                <div className="col-1 pointer">
                  <img
                    className="socialicon"
                    src="https://www.ynovation.de/wordpress/wp-content/uploads/2018/07/badgeRGB.png"
                    alt="social icon"
                  />
                </div>
                <div className="col-1 pointer">
                  <img
                    className="socialicon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2000px-WhatsApp.svg.png"
                    alt="social icon"
                  />
                </div>
              </div>
            </div>
            <Col>
              <Form>
                <h3>Contact us</h3>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="searchbar"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>What would you like to tell us?</Form.Label>
                  <Form.Control className="searchbar" as="textarea" rows={3} />
                </Form.Group>
                <Button
                  className="bg-light"
                  variant="outline-secondary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </div>
          <hr className="hr" />
          <p className="text-center">
            ©2021 Sports Blog - The Blog about Sports in Life. All Rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
