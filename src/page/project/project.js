import React, { useState } from 'react'

const Project = () => {
    const [selectedProject, setSelectedProject] = useState('Connecting Job Seekers and Recruiters');

    const projectDetails = {
      'Connecting Job Seekers and Recruiters': (
        <>
          <h2>Connecting Job Seekers and Recruiters</h2>
          <p>
            Website Sections:
            - Home: Landing page introducing the platform's services and benefits.
            - Jobseeker: Section dedicated to job seekers, providing them with resources and tools to find employment opportunities.
            ...
          </p>
        </>
      ),
      'Wps-send Message': (
        <>
          <h2>Wps-send Message</h2>
          <p>
            Admin side:
            - The WPS-Send Message project is a comprehensive solution designed to streamline communication with customers via WhatsApp...
          </p>
        </>
      ),
      'Over company website': (
        <>
          <h2>Over company website</h2>
          <p>
            Overview:
            - The project aims to develop a comprehensive company website that serves as an online platform to showcase the company's services...
          </p>
        </>
      ),
    };
  return (
    <section className="project" id="services">

    <h1 className="heading"> my <span>Projects</span> </h1>
    
    {/* <div className="box-container margin"> */}
    <div className="project-nav">
        <button onClick={() => setSelectedProject('Connecting Job Seekers and Recruiters')} className='btn'>
          Connecting Job Seekers and Recruiters
        </button>
        <button onClick={() => setSelectedProject('Wps-send Message')} className='btn'>
          Wps-send Message
        </button>
        <button onClick={() => setSelectedProject('Over company website')} className='btn'>
          Over company website
        </button>
      </div>

      {/* Selected Project Details */}
      <div className="project-details content">
       
       <h2><b>Connecting Job Seekers and Recruiters</b></h2>
       <p>
           <strong>Website Sections:</strong><br />
           <b>Home:</b> Landing page introducing the platform's services and benefits.<br />
           <b>Jobseeker:</b> Section dedicated to job seekers, providing them with resources and tools to find employment opportunities.<br />
           <b>Recruiter:</b> Section tailored for recruiters and employers, allowing them to post job vacancies and manage candidate applications.<br />
           <b>About Us:</b> Information about the company, its mission, vision, and values.<br />
           <b>Contact Us:</b> Contact details and a form for inquiries and feedback.<br />
           <b>Privacy Policy:</b> Detailed policy outlining how user data is collected, stored, and used, ensuring compliance with data protection regulations.<br />
           <b>Terms and Conditions:</b> Legal terms and conditions governing the use of the platform by both job seekers and recruiters.
       </p>
   
       <p>
           <strong>User Authentication:</strong><br />
           Jobseekers and recruiters login with OTP (One-Time Password) via email or contact number for verification.<br />
           If users are already logged in on iOS and Android devices, they can directly log in without OTP verification.
       </p>
   
       <p>
           <strong>Jobseeker Dashboard and Recruiter Features:</strong><br />
           Advice videos related to job searching and career growth.<br />
          <b> Favorite jobs:</b> A section where users can save and revisit jobs they are interested in.<br />
           <b>Social sharing icons: </b> Allow users to share job listings on various social media platforms.<br />
           <b>Scanning feature:</b> Possibly a QR code or document scanning for quick access or information.
       </p>
   
       <p>
           <strong>Admin Side Features:</strong><br />
           <b>Admin Login:</b> Secure login for administrators to access the backend system.<br />
          <b>Jobseeker and Recruiter List:</b> View and manage registered job seekers and recruiters.<br />
           <b>Master Settings:</b> Configure global settings like website theme, currency, language, etc.<br />
           <b>Email Template Management:</b> Customize and manage email templates for notifications, newsletters, etc.<br />
           <b>Notification System:</b> Send notifications to job seekers and recruiters for important updates, job alerts, etc.
       </p>
   
       <p>
           <strong>Additional Features (Not Mentioned but Commonly Included):</strong><br />
           Search and filter job listings based on location, industry, salary range, etc.<br />
           Resume builder or upload feature for jobseekers.<br />
           Application tracking system for jobseekers to monitor their job applications.<br />
           Review and rating system for recruiters and companies.
       </p>
   
       <p>
           <strong>Technologies Used:</strong><br />
           <b>Front-end:</b> HTML, CSS, JavaScript, React.js, Typescript,Redux
           <b>Authentication:</b> JWT (JSON Web Tokens)
       </p>
   
      
       <h2><b>Wps-send Message</b></h2>
       <p>
           <strong>Admin side:</strong><br />
           The WPS-Send Message project is a comprehensive solution designed to streamline communication with customers via WhatsApp. It offers robust features for managing companies, users, products, and orders. Admin users can authenticate securely, manage message templates, and send customized messages to customer WhatsApp contacts.
       </p>
   
       <p>
           <strong>Technologies Used:</strong><br />
           <b>Front-end:</b> HTML, CSS, JavaScript, React.js,Redux
           <b>Authentication:</b> JWT (JSON Web Tokens)
       </p>
   
      
       <h2><b>Over company website</b></h2>
       <p>
           <strong>Overview:</strong><br />
           The project aims to develop a comprehensive company website that serves as an online platform to showcase the company's services, projects, team members, and other relevant information. The website will have both admin and user-facing features to manage and display dynamic content efficiently.
       </p>
   
       <p>
           <strong>Admin Side Features:</strong><br />
           Login Form: Secure login mechanism for authorized personnel to access the admin dashboard.<br />
           User List: A list of registered users with options for management and user-specific actions.<br />
           <b>Header Session:</b> A customizable header section for managing website branding, navigation menus, and other essential elements.<br />
           Services: Add, edit, or delete services offered by the company.<br />
           Subservices under each service category.<br />
           Detailed information about each service and subservice.<br />
           Projects: Manage and showcase company projects with detailed descriptions, images, and other relevant information.<br />
           Blog and News: Create, edit, and publish blog posts and news articles.<br />
           Categorize and archive posts for easy navigation.<br />
           About Company: Editable section to provide information about the company's history, mission, and vision.<br />
           FAQs: Frequently asked questions section with answers to common queries.<br />
           Contact Us: Manage contact information and integrate contact forms for user inquiries.<br />
           Team: Add and manage team members with their profiles, roles, and contact details.<br />
           Team Member: Individual profiles for team members with photos, bios, and social media links.
       </p>
   
       <p>
           <strong>Website Features:</strong><br />
           <b>Header Session:</b> Consistent header across all pages with branding, navigation menus, and other essential links.<br />
           Services: Display of company services with options to view subservices and detailed service information.<br />
           Projects: Showcase of company projects with images, descriptions, and other relevant details.<br />
           Blog and News: Access to blog posts, news articles, and company updates.<br />
           About Company: Information about the company's background, mission, and values.<br />
           FAQs: Answers to frequently asked questions for user guidance.<br />
           Contact Us: Contact information and a contact form for user inquiries.<br />
           Team: Overview of the company's team with links to individual team member profiles.<br />
           Team Member: Detailed profiles of team members with photos, bios, and contact information.
       </p>
   
       <p>
           <strong>Features:</strong><br />
           All content sections mentioned above are dynamic, allowing admin users to manage, edit, and update content effortlessly through the admin dashboard.
       </p>
   
       <p>
           <strong>Technologies Used:</strong><br />
           <b>Front-end:</b> HTML, CSS, JavaScript, Next.js<br />
           Redux<br />
           Authentication: JWT (JSON Web Tokens)
       </p>
   </div>
   
    
    
    
    {/* </div> */}
    
    </section>
  )
}

export default Project