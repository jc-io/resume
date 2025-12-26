import React from 'react';

interface ResumeData {
  personalInfo: {
    name: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
  Summary: string;
  skills: {
    programmingLanguages: string[];
    cloudInfrastructure: string[];
    softwareTools: string[];
  };
  experience: Array<{
    position: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }>;
  projects: Array<{
    name: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    status?: string;
    certificates?: Array<{
      name: string;
      institution: string;
      date: string;
    }>;
    relevantCoursework?: string[];
  }>;
}

interface ResumeDisplayProps {
  data: ResumeData;
}

export function ResumeDisplay({ data }: ResumeDisplayProps) {
  const formatDate = (date: string) => {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="space-y-8">
      {/* Personal Info */}
      <div className="text-center border-b pb-6">
        <h2 className="text-3xl mb-3">{data.personalInfo.name}</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span>{data.personalInfo.phone}</span>
          <span>•</span>
          <a href={`mailto:${data.personalInfo.email}`} className="text-blue-600 hover:underline">
            {data.personalInfo.email}
          </a>
          <span>•</span>
          <a href={`https://${data.personalInfo.github}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {data.personalInfo.github}
          </a>
          <span>•</span>
          <a href={`https://${data.personalInfo.linkedin}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            {data.personalInfo.linkedin}
          </a>
          <span>•</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <h3 className="text-xl mb-3 text-gray-900 uppercase tracking-wide border-b pb-2">
          Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">{data.Summary}</p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-xl mb-3 text-gray-900 uppercase tracking-wide border-b pb-2">
          Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-sm mb-2 text-gray-800">Programming Languages</h4>
            <ul className="space-y-1">
              {data.skills.programmingLanguages.map((skill, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm mb-2 text-gray-800">Cloud & Infrastructure</h4>
            <ul className="space-y-1">
              {data.skills.cloudInfrastructure.map((skill, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm mb-2 text-gray-800">Software Tools</h4>
            <ul className="space-y-1">
              {data.skills.softwareTools.map((skill, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-xl mb-4 text-gray-900 uppercase tracking-wide border-b pb-2">
          Professional Experience
        </h3>
        <div className="space-y-6">
          {data.experience.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg text-gray-900">{job.position}</h4>
                  <p className="text-sm text-gray-600">
                    {job.company}, {job.location}
                  </p>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  {formatDate(job.startDate)} – {job.endDate === 'Present' ? 'Present' : formatDate(job.endDate)}
                </div>
              </div>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div>
        <h3 className="text-xl mb-4 text-gray-900 uppercase tracking-wide border-b pb-2">
          Projects
        </h3>
        <div className="space-y-6">
          {data.projects.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg text-gray-900">{project.name}</h4>
                <div className="text-sm text-gray-600">
                  {formatDate(project.startDate)} – {formatDate(project.endDate)}
                </div>
              </div>
              <ul className="space-y-2">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl mb-4 text-gray-900 uppercase tracking-wide border-b pb-2">
          Education
        </h3>
        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg text-gray-900">{edu.degree}</h4>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <div className="text-sm text-gray-600 text-right">
                  {formatDate(edu.startDate)} – {edu.endDate === 'Present' ? 'Present' : formatDate(edu.endDate)}
                  {edu.status && <span className="block text-gray-500">({edu.status})</span>}
                </div>
              </div>
              {edu.certificates && (
                <div className="mt-3">
                  <p className="text-sm text-gray-700 mb-1">Certificates:</p>
                  <ul className="space-y-1 ml-4">
                    {edu.certificates.map((cert, certIndex) => (
                      <li key={certIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2">○</span>
                        <span>{cert.name} ({cert.date})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.relevantCoursework && (
                <div className="mt-3">
                  <p className="text-sm text-gray-700 mb-1">Relevant Coursework:</p>
                  <p className="text-sm text-gray-600 ml-4">
                    {edu.relevantCoursework.join(' | ')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
