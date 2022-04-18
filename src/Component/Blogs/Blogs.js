import React from 'react';

const Blogs = () => {
  return (
    <div className='container mt-3' style={{marginBottom:'190px'}} >
      Ans1 = <p>Authentication is the process of verifying  someone but Authorization is the process of verifying what specific applications. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization works through settings that are implemented and maintained by the organization.Authentication verifies who the user is.Authorization determines what resources a user can access.</p>

      Ans2 = <p>
      # Implement Option of Authentication:
      1.Password-based authentication = Passwords are the most common methods of authentication. Passwords can be in the form of a string of letters, numbers, or special characters.
      2. Multi-factor authentication = this authentication method that requires two or more independent ways to identify a user. Examples include codes generated from the user’s smartphone, Captcha tests
      3. Certificate-based authentication = Certificate-based authentication technologies identify users, machines or devices by using digital certificates.
      4. Biometric authentication = Biometrics authentication is a security process that relies on the unique biological characteristics of an individual.
      5. Token-based authentication = Token-based authentication technologies enable users to enter their credentials once and receive a unique encrypted string of random characters in exchange.
      </p>


      Ans3= <p> Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend..Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
      </p>
      
    </div>
  );
};

export default Blogs;