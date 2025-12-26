import React from 'react';
import { ResumeDisplay } from './components/ResumeDisplay';
import { JsonDisplay } from './components/JsonDisplay';
import { Tabs } from './components/ui/tabs';

function App() {
  const resumeData = {
    "personalInfo": {
      "name": "Joseph Chen",
      "phone": "+1(510)299-1821",
      "email": "josephsoftengineering@gmail.com",
      "github": "github.com/jc-io",
      "linkedin": "linkedin.com/in/joch2436",
      "location": "Castro Valley, CA"
    },
    "Summary": "Machine Learning Engineer with experience in full-stack development and leading product cycles from conception to completion. Skilled in building scalable ML pipelines, deploying models on AWS, and collaborating with cross-functional teams at high-growth technology companies.",
    "skills": {
      "programmingLanguages": ["Python", "HTML/CSS/JavaScript", "SQL"],
      "cloudInfrastructure": ["AWS", "Terraform", "Kubernetes/Docker"],
      "softwareTools": ["Unix/Linux", "Git Source Control", "JIRA"]
    },
    "experience": [
      {
        "position": "Code Instructor",
        "company": "Code Ninjas",
        "location": "San Ramon, CA",
        "startDate": "2025-09",
        "endDate": "Present",
        "responsibilities": [
          "Provided individualized lessons in Python, visual/block-based programming, Unity (C#), and Roblox scripting (Lua), adapting curriculum to each student's pace and interests"
        ]
      },
      {
        "position": "Machine Learning Engineer",
        "company": "Ancestry.com, Inc",
        "location": "San Francisco, CA",
        "startDate": "2023-10",
        "endDate": "2024-03",
        "responsibilities": [
          "Developed Customer Segmentation Model using AWS S3, AWS Sagemaker, AWS Redshift, AWS Lambda, Jenkins, Terraform, and Github",
          "Collaborated with Ancestry's analytics and database teams to deploy a model profiling the current user base, improving personalization and targeted strategies",
          "Secured internal access to necessary datasets and performed extensive data cleaning to ensure usability",
          "Normalized data across disparate and nonuniform fields, creating robust subset datasets for testing",
          "Designed and built a scalable data pipeline using an existing framework, tailored to handle inputs of any size",
          "Leveraged AWS Redshift to enable efficient processing of large datasets",
          "Deployed the pipeline on AWS Lambda, ensuring it is serverless, cost-effective, and automatically triggered on a defined schedule"
        ]
      },
      {
        "position": "Machine Learning Engineer Intern",
        "company": "Ancestry.com, Inc",
        "location": "Lehi, UT",
        "startDate": "2023-06",
        "endDate": "2023-09",
        "responsibilities": [
          "Record Extraction Model using AWS Sagemaker, AWS EC2, Jenkins, Terraform, AWS S3, Github, Pytorch",
          "Partnered with Ancestry's Data Science interns to deploy a model for group biographics and perform text-based searches on United States Census data",
          "Engineered a scalable pipeline for the creation of sentence embeddings, improving processing efficiency",
          "Enabled Data Scientists to analyze U.S. Census data and uncover meaningful patterns rapidly",
          "Developed BLIP Model for image captioning",
          "Migrated Ancestry's BLIP image captioning system to the ML team's updated architecture by replacing the synchronous model with an asynchronous one, significantly improving efficiency and scalability",
          "Contributed to Ancestry's internal innovation by enabling the use of the BLIP image captioning model in a company-wide hackathon"
        ]
      }
    ],
    "projects": [
      {
        "name": "ImageGen",
        "startDate": "2024-01",
        "endDate": "2024-03",
        "description": [
          "Project Manager: Lead a team of 6 programmers to deploy models to design a demo website that generates images and prompts using pre-trained models",
          "Models used: Generative AI: StableDiffusion, Large Language Model: Zephyr 7B, ComputerVision: BLIP",
          "Tools: AWS Amplify, Github, JIRA, Figma"
        ]
      }
    ],
    "education": [
      {
        "degree": "Master's in Computer Science",
        "institution": "University of Colorado Boulder",
        "startDate": "2024-10",
        "endDate": "2026-06",
        "status": "Expected",
        "certificates": [
          {
            "name": "Foundations of Autonomous Systems Certificate",
            "institution": "University of Colorado Boulder",
            "date": "2025-07-04"
          },
          {
            "name": "Computing, Ethics, and Society Certificate",
            "institution": "University of Colorado Boulder",
            "date": "2025-05-10"
          },
          {
            "name": "Network Systems: Principles in Practice Certificate",
            "institution": "University of Colorado Boulder",
            "date": "2025-03-14"
          },
          
        ]
      },
      {
        "degree": "Bachelor of Science in Computer Science",
        "institution": "University of California, Santa Cruz",
        "startDate": "2020-09",
        "endDate": "2024-06",
        "relevantCoursework": [
          "Data Structures and Algorithms",
          "Introduction to Software Engineering",
          "Artificial Intelligence",
          "Introduction to Natural Language Processing"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Content */}
          <div className="p-8">
            <ResumeDisplay data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;