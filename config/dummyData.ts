// import { CertificateItemModel } from '@/components/customComponents/CertificateItem';
import { ProjectItemModel } from '@/components/customComponents/ProjectItem2'

export const experiences = [
  {
    companyName: "Direction Software LLP",
    companyDescription: `Headquarter at Mumbai (Maharashtra) Direction 
      Software LLP provides IT services and solution like e-Business consulting,
       Microsoft Business, custom software development etc.
        Works on various technologies like Java, .Net, 
        Angular, Vue.js and serves 50+ international client across the 
        world with 350+ of employees. Give freshers opportunity to showcase their 
        technical skill and guide them to improve those skills.`,
    companyWebsite: "www.direction.biz",
    jobTitle: "Associate Software Engineer",
    responsibilities: `my responsibility is to complete the assigned 
      tasks which involves development, testing, deploying and managing Java-based
       server-side and Angular/Vue.js based client-side applications.`,
    startDate: "Dec 2021",
    endDate: "",
    isPresent: true,

  },
  {
    companyName: "Rockfort Technosys India Pvt. Ltd",
    companyDescription: `Australian IT services providing company manages Network and IT infrastructure of Top colleges located in Australia. Also manages Pbx and Telecommunication system of
      various restaurant and super mall chains in Australia having more than 20 employees.`,
    companyWebsite: "www.rockfortglobal.com",
    jobTitle: "Technical Support Executive",
    responsibilities: `my responsibilities is to manage IT
       Infrastructure and troubleshoot any technical issue within SLA`,
    startDate: "May 2019",
    endDate: "Sep 2021",
    isPresent: false,

  },
];

export const projects: ProjectItemModel[] = [
  {
    projectName: "Audit Management System",
    role: "Full-Stack developer",
    techUsed: [
      "Java",
      "Angular",
      "PostgreSql"
    ],
    purpose: `To develop a web-based system to automate back office process for managing 
    corporate social responsibility(CSR) 
    audits of partner factories also manage information related factories and vendors.`,
    workedOnFeature: `Displaying list of audits in the tabular form using angular material based
     on the conditions used server side filtering, searching and pagination. Multi page form for 
     adding and updating Vendor and factories using ngx-formly form 3rd party library for reactive
     forms, upload, view and remove documents, also implemented my event calendar using full 
     calendar library etc.`,
    isPrivateRepo: true

  },
  {
    projectName: "Human Resource Management System.",
    role: "Full-Stack developer",
    techUsed: ["Java(Jmix)", "Vue.js(Quasar)", "PostgreSql"],
    purpose: `Build a web-based system where employees can login and enter
   their attendance timings(Login/Logout) through an easy-to-use interface.
    Admin dashboard where HR admin can do various configuration like adding holidays,
     set default login/logout timing, add employees and assign resource access etc. Based on 
     rules set by the HR admin system automatically generates notifications like late login, early 
     logout, weekly working hours are less, leave deduction etc.
   Team manager and HR admin can view their employees login/logout details`,
    workedOnFeature: `Backend business logic for validating and generating notifications. 
    Displaying notification list in the frontend.`,
    isPrivateRepo: false
  },
  {
    projectName: "Woldo Analytics.",
    role: "Full-Stack developer",
    techUsed: ["Java(Jmix)", "Vue.js(Quasar)", "PostgreSql"],
    purpose: `Build a web-based system where employees can login and enter
   their attendance timings(Login/Logout) through an easy-to-use interface.
    Admin dashboard where HR admin can do various configuration like adding holidays,
     set default login/logout timing, add employees and assign resource access etc. Based on 
     rules set by the HR admin system automatically generates notifications like late login, early 
     logout, weekly working hours are less, leave deduction etc.
   Team manager and HR admin can view their employees login/logout details`,
    workedOnFeature: `Backend business logic for validating and generating notifications. 
    Displaying notification list in the frontend.`,
    isPrivateRepo: true
  },
];

// export const certificates: CertificateItemModel[] = [
//   {
//     name: "3cx Basic Certification",
//     description: "Successfully completed and passed 3cx basic certification.",

//   },
//   {
//     name: "3cx Intermediate Certification",
//     description: "Successfully completed and passed 3cx basic certification.",

//   },
//   {
//     name: "Oracle Java Explorer",
//     description: "Successfully completed and passed 3cx basic certification.",

//   },
//   {
//     name: "StudySection Java programmer",
//     description: "Successfully completed and passed 3cx basic certification.",

//   },
//   {
//     name: "HackerRank Problem solving(Basic):",
//     description: "Successfully completed and passed 3cx basic certification.",

//   },

// ]
