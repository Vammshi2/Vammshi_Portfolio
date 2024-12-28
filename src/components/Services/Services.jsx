import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const certificates = [
  {
    s_no: 1,
    s_name: 'Build Your Own Static Website',
    s_desc: 'Learn how to build a static website from scratch, covering HTML, CSS, and basic layout techniques.',
    credential_id: 'LRGPLULJBF',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/LRGPLULJBF.png',
    website_url: 'https://certificates.ccbp.in/academy/static-website?id=LRGPLULJBF',
  },
  {
    s_no: 2,
    s_name: 'Build Your Own Responsive Website',
    s_desc: 'Understand how to create a responsive website using modern HTML, CSS, and responsive design principles.',
    credential_id: 'QQAMTITMIF',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QQAMTITMIF.png',
    website_url: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=QQAMTITMIF',
  },
  {
    s_no: 3,
    s_name: 'Build Your Own Dynamic Web Application',
    s_desc: 'Master the basics of dynamic web applications using JavaScript and back-end integration.',
    credential_id: 'SGAHYXNXHO',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/SGAHYXNXHO.png',
    website_url: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=SGAHYXNXHO',
  },
  {
    s_no: 4,
    s_name: 'Introduction to Databases',
    s_desc: 'Get familiar with databases, SQL, and how to interact with data storage systems.',
    credential_id: 'HCIXFLPCEL',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HCIXFLPCEL.png',
    website_url: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=HCIXFLPCEL',
  },
  {
    s_no: 5,
    s_name: 'JavaScript Essentials',
    s_desc: 'Cover essential JavaScript concepts, including variables, functions, and loops.',
    credential_id: 'EXISCFIOSA',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/EXISCFIOSA.png',
    website_url: 'https://certificates.ccbp.in/academy/javascript-essentials?id=EXISCFIOSA',
  },
  {
    s_no: 6,
    s_name: 'Responsive Web Design using Flexbox',
    s_desc: 'Learn the power of Flexbox to design responsive layouts with ease.',
    credential_id: 'WFDYMJHGAP',
    credential_url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/WFDYMJHGAP.png',
    website_url: 'https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=WFDYMJHGAP',
  },
  {
    s_no: 7,
    s_name: 'Cloud Digital Leader Certification',
    s_desc: 'ACloud Digital Leader can articulate the capabilities of Google Cloud core products and services and how they benefit organizations.',
    credential_id: 'B7B69925-5FE8-4D6A-9C0B-EDAA362EE',
    credential_url: 'https://www.credly.com/badges/b7b69925-5fe8-4d6a-9c0b-edaa362eef1c/public_url',
    website_url: 'https://www.credly.com/badges/b7b69925-5fe8-4d6a-9c0b-edaa362eef1c/public_url',
  },
  {
    s_no: 8,
    s_name: 'AWS Certified Cloud Practitioner',
    s_desc: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud.',
    credential_id: '616CEA9C-803F-4780-B8C0-5EDD937E1D60',
    credential_url: 'https://www.credly.com/badges/616cea9c-803f-4780-b8c0-5edd937e1d60/public_url',
    website_url: 'https://www.credly.com/badges/616cea9c-803f-4780-b8c0-5edd937e1d60/public_url',
  },
  {
    s_no: 9,
    s_name: 'Problem Solving (Basic)',
    s_desc: 'Develop your problem-solving skills and practice algorithms with HackerRank.',
    credential_id: '8AFF61D746E1',
    credential_url: 'https://www.hackerrank.com/certificates/iframe/8aff61d746e1',
    website_url: 'https://www.hackerrank.com/certificates/8aff61d746e1',
  },
  {
    s_no: 10,
    s_name: 'SQL (Basic)',
    s_desc: 'Get started with SQL and learn how to perform basic database queries.',
    credential_id: 'DEF201D5F980',
    credential_url: 'https://www.hackerrank.com/certificates/iframe/def201d5f980',
    website_url: 'https://www.hackerrank.com/certificates/def201d5f980',
  },
  {
    s_no: 11,
    s_name: 'Python Basics',
    s_desc: 'Learn Python basics, including variables, loops, and functions.',
    credential_id: 'PYTHON123',
    credential_url: 'https://www.example.com/python_basics_certificate.png',
    website_url: 'https://www.hackerrank.com/certificates/0b723802963c',
  },
  {
    s_no: 12,
    s_name: 'JavaScript Advanced',
    s_desc: 'Deep dive into advanced JavaScript concepts like closures, promises, and async/await.',
    credential_id: 'JSADVANCED456',
    credential_url: 'https://www.example.com/js_advanced_certificate.png',
    website_url: 'https://www.hackerrank.com/certificates/iframe/8aff61d746e1',
  }
];

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="title-box">
        <h1>Certifications</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {/* Displaying Certificates 1 to 6 */}
        {certificates.slice(0, 6).map((certificate, index) => (
          <div key={index} className='services-format'>
            <h3>{certificate.s_no}</h3>
            <h2>{certificate.s_name}</h2>
            <p>{certificate.s_desc}</p>
            <div className='services-readmore'>
              <a href={certificate.website_url} target="_blank" rel="noopener noreferrer">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </a>
            </div>
            <div className='certificate-preview'>
              <a href={certificate.website_url} target="_blank" rel="noopener noreferrer">
                <img src={certificate.credential_url} alt={`${certificate.s_name} Certificate`} />
              </a>
            </div>
          </div>
        ))}

        {/* Displaying Certificates 7 to 12 */}
        {certificates.slice(6).map((certificate, index) => (
          <div key={index} className='services-format'>
            <h3>{certificate.s_no}</h3>
            <h2>{certificate.s_name}</h2>
            <p>{certificate.s_desc}</p>
            <div className='services-readmore'>
              <a href={certificate.website_url} target="_blank" rel="noopener noreferrer">
                <p>Read More</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </a>
            </div>
            <div className='certificate-preview'>
              {/* Making the whole div clickable */}
              <a href={certificate.website_url} target="_blank" rel="noopener noreferrer" className="certificate-link">
                <div className="certificate-box">
                  <p>View Certificate</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
