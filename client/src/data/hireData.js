import { BarChart3, Brain, Building2, Server, ShoppingCart, Smartphone } from 'lucide-react';

// Hire Developer pages data. Same shape as categoryData.js (category -> services),
// where a category is a mega-menu group and a service is a role.
// Also the single source of truth for the navbar mega menu (see hireRoles.js).
export const HIRE_DATA = {
  "backend-enterprise": {
    "icon": Server,
    "title": "Backend & Enterprise",
    "tagline": "Engines that scale.",
    "description": "Hire backend, full-stack and enterprise developers to build and run your core systems — .NET, Java, MERN, Python, Golang, SAP, Oracle and more.",
    "color": "#a06cd5",
    "gradient": "linear-gradient(135deg, #a06cd5, #5b346d)",
    "orbColor": "#a06cd5",
    "highlights": [
      {
        "value": "10",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "dotnet-developer",
        "name": ".NET Developer",
        "desc": "ASP.NET Core · C# · ASP.NET MVC · Blazor",
        "icon": "01",
        "longDesc": "Build your team with skilled .NET professionals experienced in developing scalable web applications, enterprise solutions, cloud-based systems, APIs, and modern software platforms.",
        "features": [
          "ASP.NET Core",
          "C#",
          "ASP.NET MVC",
          "Blazor"
        ]
      },
      {
        "id": "java-developer",
        "name": "Java Developer",
        "desc": "Spring Boot · Microservices · REST APIs · Hibernate",
        "icon": "02",
        "longDesc": "Build scalable, secure, and high-performance applications with experienced Java developers skilled in Spring Boot, Microservices, Cloud, APIs, Full Stack Development, and enterprise software solutions.",
        "features": [
          "Spring Boot",
          "Microservices",
          "REST APIs",
          "Hibernate"
        ]
      },
      {
        "id": "mern-stack-developer",
        "name": "MERN Stack Developer",
        "desc": "MongoDB · Express.js · React · Node.js",
        "icon": "03",
        "longDesc": "Build scalable, high-performance web applications with experienced MERN and full-stack developers skilled in MongoDB, Express.js, React.js, Node.js, modern JavaScript frameworks, APIs, cloud technologies, and enterprise application development.",
        "features": [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js"
        ]
      },
      {
        "id": "mean-stack-developer",
        "name": "MEAN Stack Developer",
        "desc": "Angular · Node.js · Express.js · MongoDB",
        "icon": "04",
        "longDesc": "Hire experienced MEAN Stack developers skilled in Angular, Node.js, Express.js, MongoDB, TypeScript, REST APIs, Microservices, and cloud technologies to build scalable and high-performance web applications.",
        "features": [
          "Angular",
          "Node.js",
          "Express.js",
          "MongoDB"
        ]
      },
      {
        "id": "php-laravel-developer",
        "name": "PHP Laravel Developer",
        "desc": "Laravel · CodeIgniter · MySQL · REST APIs",
        "icon": "05",
        "longDesc": "Build secure, scalable, and high-performance web applications with experienced PHP Laravel developers skilled in Laravel, CodeIgniter, MySQL, REST APIs, e-commerce platforms, CMS development, cloud deployment, and full-stack application development.",
        "features": [
          "Laravel",
          "CodeIgniter",
          "MySQL",
          "REST APIs"
        ]
      },
      {
        "id": "python-django-developer",
        "name": "Python Django Developer",
        "desc": "Django · Django REST Framework · FastAPI · Flask",
        "icon": "06",
        "longDesc": "Hire experienced Python Django developers to build secure, scalable, and high-performance web applications, with expertise in Django, Django REST Framework, FastAPI, Flask, microservices, REST APIs, cloud platforms, databases, and modern AI-powered backend solutions.",
        "features": [
          "Django",
          "Django REST Framework",
          "FastAPI",
          "Flask"
        ]
      },
      {
        "id": "ruby-on-rails-developer",
        "name": "Ruby on Rails Developer",
        "desc": "Ruby on Rails · REST APIs · PostgreSQL · Sidekiq",
        "icon": "07",
        "longDesc": "Hire experienced Ruby on Rails developers to build scalable, secure, and high-performance web applications, with expertise in Ruby on Rails, REST APIs, PostgreSQL, Sidekiq, Redis, background processing, and cloud deployment.",
        "features": [
          "Ruby on Rails",
          "REST APIs",
          "PostgreSQL",
          "Sidekiq"
        ]
      },
      {
        "id": "golang-developer",
        "name": "Golang Developer",
        "desc": "Golang · Gin · gRPC · PostgreSQL",
        "icon": "08",
        "longDesc": "Hire experienced Golang developers with expertise in building scalable backend systems, REST APIs, microservices, cloud-native applications, high-performance systems, and enterprise solutions.",
        "features": [
          "Golang",
          "Gin",
          "gRPC",
          "PostgreSQL"
        ]
      },
      {
        "id": "sap-developer",
        "name": "SAP Developer",
        "desc": "SAP S/4HANA · SAP ABAP · SAP HANA · SAP CPI",
        "icon": "09",
        "longDesc": "Hire experienced SAP professionals with expertise across SAP functional consulting, development, integration, SAP S/4HANA, SAP ABAP, SAP HANA, and enterprise SAP solutions.",
        "features": [
          "SAP S/4HANA",
          "SAP ABAP",
          "SAP HANA",
          "SAP CPI"
        ]
      },
      {
        "id": "oracle-developer",
        "name": "Oracle Developer",
        "desc": "Oracle Fusion · Oracle Cloud · OIC · PL/SQL",
        "icon": "10",
        "longDesc": "Hire skilled Oracle developers and consultants with expertise in Oracle Fusion, Oracle Cloud, OIC, HCM, ERP, SCM, PeopleSoft, PL/SQL, BI Publisher, OTBI, integrations, and reporting.",
        "features": [
          "Oracle Fusion",
          "Oracle Cloud",
          "OIC",
          "PL/SQL"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which Backend & Enterprise roles can I hire?",
        "a": "You can hire: .NET Developer, Java Developer, MERN Stack Developer, MEAN Stack Developer, PHP Laravel Developer, Python Django Developer, Ruby on Rails Developer, Golang Developer, SAP Developer, Oracle Developer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
  "ai-cloud-data": {
    "icon": Brain,
    "title": "AI, Cloud & Data",
    "tagline": "Intelligence, at scale.",
    "description": "Hire AI/ML, cloud, DevOps and data engineers to build intelligent products, reliable infrastructure and data pipelines you can trust.",
    "color": "#D8B4E2",
    "gradient": "linear-gradient(135deg, #D8B4E2, #a06cd5)",
    "orbColor": "#D8B4E2",
    "highlights": [
      {
        "value": "11",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "ai-ml-genai-engineer",
        "name": "AI/ML & GenAI Engineer",
        "desc": "Machine Learning · Deep Learning · NLP & LLMs · RAG",
        "icon": "01",
        "longDesc": "Hire experienced AI/ML and Generative AI engineers skilled in machine learning, deep learning, NLP, LLMs, RAG, AI agents, computer vision, model development, and production AI solutions.",
        "features": [
          "Machine Learning",
          "Deep Learning",
          "NLP & LLMs",
          "RAG"
        ]
      },
      {
        "id": "data-scientist",
        "name": "Data Scientist",
        "desc": "Machine Learning · Predictive Analytics · Statistical Modeling · NLP",
        "icon": "02",
        "longDesc": "Hire experienced Data Scientists skilled in machine learning, predictive analytics, statistical modeling, NLP, data analysis, feature engineering, data visualization, and advanced data-driven solutions.",
        "features": [
          "Machine Learning",
          "Predictive Analytics",
          "Statistical Modeling",
          "NLP"
        ]
      },
      {
        "id": "cloud-engineer",
        "name": "Cloud Engineer",
        "desc": "AWS · Microsoft Azure · Google Cloud Platform · Terraform",
        "icon": "03",
        "longDesc": "Build, scale, and modernize your technology infrastructure with experienced Cloud Engineers specializing in AWS, Azure, GCP, cloud architecture, DevOps, Kubernetes, Terraform, CI/CD, automation, security, migration, and cloud operations.",
        "features": [
          "AWS",
          "Microsoft Azure",
          "Google Cloud Platform",
          "Terraform"
        ]
      },
      {
        "id": "devops-engineer",
        "name": "DevOps Engineer",
        "desc": "CI/CD Automation · Kubernetes · Docker · Infrastructure as Code",
        "icon": "04",
        "longDesc": "Hire experienced DevOps engineers specializing in cloud infrastructure, CI/CD automation, Kubernetes, Docker, Infrastructure as Code, cloud migration, DevSecOps, monitoring, reliability, and scalable deployment solutions.",
        "features": [
          "CI/CD Automation",
          "Kubernetes",
          "Docker",
          "Infrastructure as Code"
        ]
      },
      {
        "id": "sre",
        "name": "SRE",
        "desc": "High Availability · Observability · Incident Management · Kubernetes",
        "icon": "05",
        "longDesc": "Hire Site Reliability Engineers focused on high availability, observability, incident management, automation, cloud infrastructure, Kubernetes, CI/CD, performance, security, and reliable production operations.",
        "features": [
          "High Availability",
          "Observability",
          "Incident Management",
          "Kubernetes"
        ]
      },
      {
        "id": "azure-engineer",
        "name": "Azure Engineer",
        "desc": "Microsoft Azure · Azure DevOps · AKS · Bicep & ARM Templates",
        "icon": "06",
        "longDesc": "Hire experienced Azure Engineer professionals skilled in Microsoft Azure, Azure DevOps, AKS and Bicep & ARM Templates. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Microsoft Azure",
          "Azure DevOps",
          "AKS",
          "Bicep & ARM Templates"
        ]
      },
      {
        "id": "aws-data-engineer",
        "name": "AWS Data Engineer",
        "desc": "AWS Glue · Amazon Redshift · S3 & Athena · EMR & Spark",
        "icon": "07",
        "longDesc": "Hire experienced AWS Data Engineer professionals skilled in AWS Glue, Amazon Redshift, S3 & Athena and EMR & Spark. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "AWS Glue",
          "Amazon Redshift",
          "S3 & Athena",
          "EMR & Spark"
        ]
      },
      {
        "id": "gcp-data-engineer",
        "name": "GCP Data Engineer",
        "desc": "BigQuery · Dataflow · Pub/Sub · Cloud Composer",
        "icon": "08",
        "longDesc": "Hire experienced GCP Data Engineer professionals skilled in BigQuery, Dataflow, Pub/Sub and Cloud Composer. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "BigQuery",
          "Dataflow",
          "Pub/Sub",
          "Cloud Composer"
        ]
      },
      {
        "id": "data-analyst",
        "name": "Data Analyst",
        "desc": "SQL · Python · Power BI · Excel & Power Query",
        "icon": "09",
        "longDesc": "Hire Data Analysts skilled in SQL, Python, Power BI, data visualization, business analytics, KPI reporting, and turning raw data into insights your team can act on.",
        "features": [
          "SQL",
          "Python",
          "Power BI",
          "Excel & Power Query"
        ]
      },
      {
        "id": "database-sql-engineer",
        "name": "Database & SQL Engineer",
        "desc": "SQL Server · MySQL · PostgreSQL · Query Optimization",
        "icon": "10",
        "longDesc": "Hire experienced Database & SQL Engineer professionals skilled in SQL Server, MySQL, PostgreSQL and Query Optimization. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "SQL Server",
          "MySQL",
          "PostgreSQL",
          "Query Optimization"
        ]
      },
      {
        "id": "informatica-etl-developer",
        "name": "Informatica & ETL Developer",
        "desc": "Informatica IDMC · Informatica PowerCenter · ETL Pipelines · Data Integration",
        "icon": "11",
        "longDesc": "Hire experienced Informatica & ETL Developer professionals skilled in Informatica IDMC, Informatica PowerCenter, ETL Pipelines and Data Integration. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Informatica IDMC",
          "Informatica PowerCenter",
          "ETL Pipelines",
          "Data Integration"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which AI, Cloud & Data roles can I hire?",
        "a": "You can hire: AI/ML & GenAI Engineer, Data Scientist, Cloud Engineer, DevOps Engineer, SRE, Azure Engineer, AWS Data Engineer, GCP Data Engineer, Data Analyst, Database & SQL Engineer, Informatica & ETL Developer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
  "frontend-mobile": {
    "icon": Smartphone,
    "title": "Frontend & Mobile",
    "tagline": "Interfaces people love.",
    "description": "Hire frontend developers, UI/UX designers and mobile engineers to build fast, polished web and app experiences.",
    "color": "#7a4fa0",
    "gradient": "linear-gradient(135deg, #7a4fa0, #3a1f4a)",
    "orbColor": "#7a4fa0",
    "highlights": [
      {
        "value": "9",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "frontend-developer",
        "name": "Frontend Developer",
        "desc": "React · Angular · Vue.js · TypeScript",
        "icon": "01",
        "longDesc": "Hire experienced Frontend Developer professionals skilled in React, Angular, Vue.js and TypeScript. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "React",
          "Angular",
          "Vue.js",
          "TypeScript"
        ]
      },
      {
        "id": "ui-ux-designer",
        "name": "UI/UX Designer",
        "desc": "Figma · Wireframing · Prototyping · Design Systems",
        "icon": "02",
        "longDesc": "Hire experienced UI/UX Designer professionals skilled in Figma, Wireframing, Prototyping and Design Systems. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Figma",
          "Wireframing",
          "Prototyping",
          "Design Systems"
        ]
      },
      {
        "id": "web-developer",
        "name": "Web Developer",
        "desc": "HTML5 & CSS3 · JavaScript · React · PHP",
        "icon": "03",
        "longDesc": "Hire experienced Web Developer professionals skilled in HTML5 & CSS3, JavaScript, React and PHP. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "HTML5 & CSS3",
          "JavaScript",
          "React",
          "PHP"
        ]
      },
      {
        "id": "android-developer",
        "name": "Android Developer",
        "desc": "Kotlin · Java · Jetpack Compose · REST APIs",
        "icon": "04",
        "longDesc": "Hire experienced Android Developer professionals skilled in Kotlin, Java, Jetpack Compose and REST APIs. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Kotlin",
          "Java",
          "Jetpack Compose",
          "REST APIs"
        ]
      },
      {
        "id": "flutter-developer",
        "name": "Flutter Developer",
        "desc": "Flutter · Dart · State Management · Firebase",
        "icon": "05",
        "longDesc": "Hire experienced Flutter Developer professionals skilled in Flutter, Dart, State Management and Firebase. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Flutter",
          "Dart",
          "State Management",
          "Firebase"
        ]
      },
      {
        "id": "react-native-developer",
        "name": "React Native Developer",
        "desc": "React Native · TypeScript · Redux · Native Modules",
        "icon": "06",
        "longDesc": "Hire experienced React Native Developer professionals skilled in React Native, TypeScript, Redux and Native Modules. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "React Native",
          "TypeScript",
          "Redux",
          "Native Modules"
        ]
      },
      {
        "id": "xamarin-developer",
        "name": "Xamarin Developer",
        "desc": "Xamarin.Forms · C# · .NET MAUI · Xamarin.Android",
        "icon": "07",
        "longDesc": "Hire experienced Xamarin Developer professionals skilled in Xamarin.Forms, C#, .NET MAUI and Xamarin.Android. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Xamarin.Forms",
          "C#",
          ".NET MAUI",
          "Xamarin.Android"
        ]
      },
      {
        "id": "swift-ios-developer",
        "name": "Swift/iOS Developer",
        "desc": "Swift · SwiftUI · UIKit · Core Data",
        "icon": "08",
        "longDesc": "Hire experienced Swift/iOS Developer professionals skilled in Swift, SwiftUI, UIKit and Core Data. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Swift",
          "SwiftUI",
          "UIKit",
          "Core Data"
        ]
      },
      {
        "id": "web-designer",
        "name": "Web Designer",
        "desc": "Figma · HTML5 & CSS3 · Responsive Layouts · Landing Pages",
        "icon": "09",
        "longDesc": "Hire experienced Web Designer professionals skilled in Figma, HTML5 & CSS3, Responsive Layouts and Landing Pages. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Figma",
          "HTML5 & CSS3",
          "Responsive Layouts",
          "Landing Pages"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which Frontend & Mobile roles can I hire?",
        "a": "You can hire: Frontend Developer, UI/UX Designer, Web Developer, Android Developer, Flutter Developer, React Native Developer, Xamarin Developer, Swift/iOS Developer, Web Designer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
  "enterprise-platforms": {
    "icon": Building2,
    "title": "Enterprise Platforms",
    "tagline": "Platforms that run business.",
    "description": "Hire specialists for CRM, ERP and workflow platforms — Salesforce, Dynamics 365, Zoho, NetSuite, ServiceNow, SharePoint and Odoo.",
    "color": "#c49bda",
    "gradient": "linear-gradient(135deg, #c49bda, #7a4fa0)",
    "orbColor": "#c49bda",
    "highlights": [
      {
        "value": "7",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "salesforce-developer-consultant",
        "name": "Salesforce Developer / Consultant",
        "desc": "Apex · Lightning Web Components · Salesforce Flows · Sales Cloud",
        "icon": "01",
        "longDesc": "Hire experienced Salesforce Developer / Consultant professionals skilled in Apex, Lightning Web Components, Salesforce Flows and Sales Cloud. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Apex",
          "Lightning Web Components",
          "Salesforce Flows",
          "Sales Cloud"
        ]
      },
      {
        "id": "microsoft-dynamics-365",
        "name": "Microsoft Dynamics 365",
        "desc": "Dynamics 365 CRM · Dynamics 365 CE · Dataverse · Power Platform",
        "icon": "02",
        "longDesc": "Hire experienced Microsoft Dynamics 365 professionals skilled in Dynamics 365 CRM, Dynamics 365 CE, Dataverse and Power Platform. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Dynamics 365 CRM",
          "Dynamics 365 CE",
          "Dataverse",
          "Power Platform"
        ]
      },
      {
        "id": "zoho-crm-developer",
        "name": "Zoho CRM Developer",
        "desc": "Zoho CRM · Deluge Scripting · Workflow Automation · Zoho Creator",
        "icon": "03",
        "longDesc": "Hire experienced Zoho CRM Developer professionals skilled in Zoho CRM, Deluge Scripting, Workflow Automation and Zoho Creator. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Zoho CRM",
          "Deluge Scripting",
          "Workflow Automation",
          "Zoho Creator"
        ]
      },
      {
        "id": "netsuite-developer",
        "name": "NetSuite Developer",
        "desc": "SuiteScript · SuiteFlow · SuiteTalk · Saved Searches",
        "icon": "04",
        "longDesc": "Hire experienced NetSuite Developer professionals skilled in SuiteScript, SuiteFlow, SuiteTalk and Saved Searches. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "SuiteScript",
          "SuiteFlow",
          "SuiteTalk",
          "Saved Searches"
        ]
      },
      {
        "id": "servicenow-developer",
        "name": "ServiceNow Developer",
        "desc": "ITSM · Flow Designer · Scripting · Service Portal",
        "icon": "05",
        "longDesc": "Hire experienced ServiceNow Developer professionals skilled in ITSM, Flow Designer, Scripting and Service Portal. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "ITSM",
          "Flow Designer",
          "Scripting",
          "Service Portal"
        ]
      },
      {
        "id": "sharepoint-developer",
        "name": "SharePoint Developer",
        "desc": "SharePoint Online · SPFx · Power Automate · Power Apps",
        "icon": "06",
        "longDesc": "Hire experienced SharePoint Developer professionals skilled in SharePoint Online, SPFx, Power Automate and Power Apps. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "SharePoint Online",
          "SPFx",
          "Power Automate",
          "Power Apps"
        ]
      },
      {
        "id": "odoo-developer",
        "name": "Odoo Developer",
        "desc": "Odoo · Python · Custom Modules · QWeb & OWL",
        "icon": "07",
        "longDesc": "Hire experienced Odoo Developer professionals skilled in Odoo, Python, Custom Modules and QWeb & OWL. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Odoo",
          "Python",
          "Custom Modules",
          "QWeb & OWL"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which Enterprise Platforms roles can I hire?",
        "a": "You can hire: Salesforce Developer / Consultant, Microsoft Dynamics 365, Zoho CRM Developer, NetSuite Developer, ServiceNow Developer, SharePoint Developer, Odoo Developer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
  "microsoft-business-apps": {
    "icon": BarChart3,
    "title": "Microsoft & Business Apps",
    "tagline": "Automate. Analyze. Grow.",
    "description": "Hire Power Platform, Power BI, Dynamics 365 and automation specialists to connect your data, streamline processes and report with confidence.",
    "color": "#b88ad9",
    "gradient": "linear-gradient(135deg, #b88ad9, #5b346d)",
    "orbColor": "#b88ad9",
    "highlights": [
      {
        "value": "7",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "power-platform-developer",
        "name": "Power Platform Developer",
        "desc": "Power Apps · Power Automate · Power BI · Dataverse",
        "icon": "01",
        "longDesc": "Hire experienced Power Platform Developer professionals skilled in Power Apps, Power Automate, Power BI and Dataverse. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Power Apps",
          "Power Automate",
          "Power BI",
          "Dataverse"
        ]
      },
      {
        "id": "power-bi-developer",
        "name": "Power BI Developer",
        "desc": "Power BI · DAX · Power Query · Data Modeling",
        "icon": "02",
        "longDesc": "Hire experienced Power BI Developer professionals skilled in Power BI, DAX, Power Query and Data Modeling. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Power BI",
          "DAX",
          "Power Query",
          "Data Modeling"
        ]
      },
      {
        "id": "dynamics-365-crm-ce",
        "name": "Dynamics 365 CRM CE",
        "desc": "Sales · Customer Service · Dataverse · C# Plugins",
        "icon": "03",
        "longDesc": "Hire experienced Dynamics 365 CRM CE professionals skilled in Sales, Customer Service, Dataverse and C# Plugins. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Sales",
          "Customer Service",
          "Dataverse",
          "C# Plugins"
        ]
      },
      {
        "id": "dynamics-365-business-central",
        "name": "Dynamics 365 Business Central",
        "desc": "AL Language · Business Central Extensions · Power Platform · Integrations",
        "icon": "04",
        "longDesc": "Hire experienced Dynamics 365 Business Central professionals skilled in AL Language, Business Central Extensions, Power Platform and Integrations. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "AL Language",
          "Business Central Extensions",
          "Power Platform",
          "Integrations"
        ]
      },
      {
        "id": "dynamics-365-finance-operations",
        "name": "Dynamics 365 Finance & Operations",
        "desc": "X++ · Finance & Operations · Data Entities · Extensions",
        "icon": "05",
        "longDesc": "Hire experienced Dynamics 365 Finance & Operations professionals skilled in X++, Finance & Operations, Data Entities and Extensions. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "X++",
          "Finance & Operations",
          "Data Entities",
          "Extensions"
        ]
      },
      {
        "id": "rpa-developer",
        "name": "RPA Developer",
        "desc": "UiPath · Power Automate Desktop · Automation Anywhere · Process Automation",
        "icon": "06",
        "longDesc": "Hire experienced RPA Developer professionals skilled in UiPath, Power Automate Desktop, Automation Anywhere and Process Automation. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "UiPath",
          "Power Automate Desktop",
          "Automation Anywhere",
          "Process Automation"
        ]
      },
      {
        "id": "workfront-developer",
        "name": "Workfront Developer",
        "desc": "Adobe Workfront · Workflow Configuration · Custom Forms · Reporting",
        "icon": "07",
        "longDesc": "Hire experienced Workfront Developer professionals skilled in Adobe Workfront, Workflow Configuration, Custom Forms and Reporting. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Adobe Workfront",
          "Workflow Configuration",
          "Custom Forms",
          "Reporting"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which Microsoft & Business Apps roles can I hire?",
        "a": "You can hire: Power Platform Developer, Power BI Developer, Dynamics 365 CRM CE, Dynamics 365 Business Central, Dynamics 365 Finance & Operations, RPA Developer, Workfront Developer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
  "ecommerce-other-roles": {
    "icon": ShoppingCart,
    "title": "E-commerce & Other Roles",
    "tagline": "Sell more. Ship faster.",
    "description": "Hire e-commerce and CMS developers, plus QA engineers, project managers and technical leads to round out your delivery team.",
    "color": "#8a5cc0",
    "gradient": "linear-gradient(135deg, #8a5cc0, #D8B4E2)",
    "orbColor": "#8a5cc0",
    "highlights": [
      {
        "value": "11",
        "label": "Roles to Hire"
      },
      {
        "value": "95%",
        "label": "Client Retention"
      },
      {
        "value": "Flexible",
        "label": "Engagement Models"
      }
    ],
    "services": [
      {
        "id": "shopify-developer",
        "name": "Shopify Developer",
        "desc": "Shopify Liquid · Custom Themes · Shopify Apps · Storefront API",
        "icon": "01",
        "longDesc": "Hire experienced Shopify Developer professionals skilled in Shopify Liquid, Custom Themes, Shopify Apps and Storefront API. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Shopify Liquid",
          "Custom Themes",
          "Shopify Apps",
          "Storefront API"
        ]
      },
      {
        "id": "magento-developer",
        "name": "Magento Developer",
        "desc": "Magento 2 · PHP · Custom Modules · Theme Development",
        "icon": "02",
        "longDesc": "Hire experienced Magento Developer professionals skilled in Magento 2, PHP, Custom Modules and Theme Development. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Magento 2",
          "PHP",
          "Custom Modules",
          "Theme Development"
        ]
      },
      {
        "id": "bigcommerce-developer",
        "name": "BigCommerce Developer",
        "desc": "BigCommerce · Stencil Themes · Headless Commerce · Storefront APIs",
        "icon": "03",
        "longDesc": "Hire experienced BigCommerce Developer professionals skilled in BigCommerce, Stencil Themes, Headless Commerce and Storefront APIs. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "BigCommerce",
          "Stencil Themes",
          "Headless Commerce",
          "Storefront APIs"
        ]
      },
      {
        "id": "solidus-developer",
        "name": "Solidus Developer",
        "desc": "Solidus · Ruby on Rails · Custom Extensions · Payments",
        "icon": "04",
        "longDesc": "Hire experienced Solidus Developer professionals skilled in Solidus, Ruby on Rails, Custom Extensions and Payments. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Solidus",
          "Ruby on Rails",
          "Custom Extensions",
          "Payments"
        ]
      },
      {
        "id": "wordpress-developer",
        "name": "WordPress Developer",
        "desc": "WordPress · Custom Themes · Plugin Development · WooCommerce",
        "icon": "05",
        "longDesc": "Hire experienced WordPress Developer professionals skilled in WordPress, Custom Themes, Plugin Development and WooCommerce. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "WordPress",
          "Custom Themes",
          "Plugin Development",
          "WooCommerce"
        ]
      },
      {
        "id": "webflow-developer",
        "name": "Webflow Developer",
        "desc": "Webflow · CMS Collections · Interactions · Custom Code",
        "icon": "06",
        "longDesc": "Hire experienced Webflow Developer professionals skilled in Webflow, CMS Collections, Interactions and Custom Code. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Webflow",
          "CMS Collections",
          "Interactions",
          "Custom Code"
        ]
      },
      {
        "id": "qa-engineer-tester",
        "name": "QA Engineer / Tester",
        "desc": "Manual Testing · Test Automation · Selenium · API Testing",
        "icon": "07",
        "longDesc": "Hire experienced QA Engineer / Tester professionals skilled in Manual Testing, Test Automation, Selenium and API Testing. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Manual Testing",
          "Test Automation",
          "Selenium",
          "API Testing"
        ]
      },
      {
        "id": "project-manager",
        "name": "Project Manager",
        "desc": "Agile & Scrum · Sprint Planning · Risk Management · Stakeholder Communication",
        "icon": "08",
        "longDesc": "Hire experienced Project Manager professionals skilled in Agile & Scrum, Sprint Planning, Risk Management and Stakeholder Communication. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Agile & Scrum",
          "Sprint Planning",
          "Risk Management",
          "Stakeholder Communication"
        ]
      },
      {
        "id": "technical-lead-architect",
        "name": "Technical Lead / Architect",
        "desc": "Solution Architecture · System Design · Code Reviews · Technical Mentoring",
        "icon": "09",
        "longDesc": "Hire experienced Technical Lead / Architect professionals skilled in Solution Architecture, System Design, Code Reviews and Technical Mentoring. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Solution Architecture",
          "System Design",
          "Code Reviews",
          "Technical Mentoring"
        ]
      },
      {
        "id": "embedded-developer",
        "name": "Embedded Developer",
        "desc": "Embedded C/C++ · Microcontrollers · RTOS · IoT",
        "icon": "10",
        "longDesc": "Hire experienced Embedded Developer professionals skilled in Embedded C/C++, Microcontrollers, RTOS and IoT. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Embedded C/C++",
          "Microcontrollers",
          "RTOS",
          "IoT"
        ]
      },
      {
        "id": "vba-developer",
        "name": "VBA Developer",
        "desc": "Excel VBA · Macros · Access VBA · Automation",
        "icon": "11",
        "longDesc": "Hire experienced VBA Developer professionals skilled in Excel VBA, Macros, Access VBA and Automation. Interview profiles directly and scale your team as your project grows.",
        "features": [
          "Excel VBA",
          "Macros",
          "Access VBA",
          "Automation"
        ]
      }
    ],
    "faqs": [
      {
        "q": "How does hiring work?",
        "a": "Tell us the role, skills and duration you need. We share matching pre-vetted profiles, you interview the developers directly, and the engagement starts once you have picked your team."
      },
      {
        "q": "Can I interview developers before hiring?",
        "a": "Yes. You interview the shortlisted profiles directly and choose the people you want on your team."
      },
      {
        "q": "What engagement models are available?",
        "a": "We offer staff augmentation, contract hiring and dedicated developers. Share your requirement and we will suggest the model that fits your project size and duration."
      },
      {
        "q": "Which E-commerce & Other Roles roles can I hire?",
        "a": "You can hire: Shopify Developer, Magento Developer, BigCommerce Developer, Solidus Developer, WordPress Developer, Webflow Developer, QA Engineer / Tester, Project Manager, Technical Lead / Architect, Embedded Developer, VBA Developer. Don't see the skill you need? Contact us and we will tell you what we can offer."
      }
    ]
  },
};
