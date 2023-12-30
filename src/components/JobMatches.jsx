// JobMatches.jsx
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";

const JobMatches = ({ answers }) => {
  const [jobMatches, setJobMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobMatches = async () => {
      try {
        setLoading(true);

      
        const response = await axios.get("YOUR_API_ENDPOINT"); 

        // Assuming the API returns an array of job matches
        setJobMatches(response.data);
      } catch (error) {
        console.error("Error fetching job matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobMatches();
  }, [answers]); 

  // const jobMatches = [
  //   {
  //     job_position: "Sr. Director of HR (India)",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "OpenGov Inc.",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/opengov-inc?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "2 weeks ago",
  //     job_description:
  //       "Imagine yourself here!OpenGov is a mission driven, fast-growth, venture backed SaaS company (includes Andreessen Horowitz, Formation 8, Cox, and Emerson Collective). Our Board of Directors includes iconic Silicon Valley executives John Chambers (former Cisco Chairman and CEO) and Marc Andreessen (Time Magazine’s list of the 100 most influential people in the world). OpenGov is the leader in modern cloud software for local governments and state agencies. We have surpassed 1,800+ governments (and growing fast!) using our products in our mission to power more effective and accountable government.OpenGov is a 2023 Top Workplaces USA award winner, Top 25 Highest Rated Cloud Companies to Work For, and a Forbes 2022 America's Best Startup Employer! Please see this video from John Chambers  about OpenGov IndiaJob SummaryThe Director of HR (India) will develop strong partnerships with the business and determine HR priorities consistent with business objectives for OpenGov India. This role is a highly visible role in providing the vision, direction, strategy, tactics, and operational excellence to support our employees at OpenGov. You will counsel all levels from entry level to senior leaders on all HR matters, help them analyze problems and create solutions in a complex, changing environment. Your HR leadership will impact employee engagement, employee culture, performance, and critical talent planning to help grow the business and maintain a competitive advantage in the marketplace.This is an onsite role based in Pune*Responsibilities Be a business partner to assigned organization: Help them achieve/exceed business results, strengthen team performance, culture, and retention while mitigating legal exposure Implement and support HR programs, processes and initiatives, such as performance management, compensation, employee and leadership development, succession planning, diversity. Responsible for developing and executing human resource strategy in support of the overall India site plan and strategic direction of the organization specifically in the areas of talent management, change management, organizational and performance management, training and development, and compensation Establish and implement HR efforts that effectively communicate and support the company’s mission and strategic vision in the India location Provide day-to-day consulting to leadership in a variety of areas of HR including employee relations, policy interpretation and application, communications, employee engagement, resource management, talent management and development, and organizational design Own and drive all Learning & Development Programs Implement tools and processes to support your business units: training, career ladders, competencies, development plans, PIPs, onboarding, etc. Develop events, training, materials etc to support a successful remote culture Develop HR plans and strategies in connection with the enterprise to support the achievement of the overall site business operations and objectives Create programs to build the OpenGov brand in India to attract and retain great talent. Be the OpenGov advocate. Develop comprehensive strategic recruiting and retention plans to meet the human capital needs of the strategic plan. Consult on market trends and available talent pool. Be an advocate and help champion OpenGov’s culture and values. Build the culture of \"Work hard, play harder\" that will energize the company. Functions as a strategic business advisor to CHRO and SVP of Engineering/Managing Director and their teams regarding key organizational and management issues. Partner with HR Analyst on Onboarding and Offboarding processes; conduct exit interviews Manage compliance reporting and administration as well as training (Workplace Harassment, Security Training)Requirements And Preferred Experience 12+ years of experience within Human Resources with increasing levels of responsibility and leadership required. Experience scaling a Development Center in India is required HRIS system savvy / administration / operations experience preferred Proficiency in Mac and Google applications, such as Sheets, Slides, and Docs preferred Strong written and oral communication / ability to push back and say “no” effectively to employees and leaders at every level Experience with HR operational practices, including benefits, employee relations, data management, leave management, on/off-boarding, and employment law (COBRA, HIPAA, FMLA, ADA, EEOC, FLSA, etc.) Experience working with RPOs and recruitment agencies is a plus. Strong sense of urgency and demonstrated ability to deliver results with a wide degree of judgment, creativity, and latitude expected Excellent priority setting and project/time management skills with the flexibility and adaptability to respond to shifting business needs High professional standards and a strong customer experience mentality with an energetic, positive attitude can quickly build partnerships, relationships, and trust Bachelor's degree in Human Resources or related field requiredWhat Makes OpenGov Unique» Leadership: CEO Zac Bookman (MPA from Harvard and JD from Yale) is truly a mission-driven CEO. He was named one of the 100 most Intriguing Entrepreneurs by Goldman Sachs, a Tech Pioneer by the World Economic Forum, and SF and Silicon Valley Business Times' 40 under 40 class of 2018 !» Funding: Over $250 million, late stage venture backed company, from top tier investors including Andreessen Horowitz, 8VC, Cox Enterprises, and Emerson Collective.» Board of Directors: Includes iconic executives John Chambers (former Cisco Chairman and CEO), Marc Andreessen (Time Magazine’s list of the 100 most influential people in the world), Katherine August-deWilde (Vice Chair of First Republic Bank), and Amy Pressman (co-founder, former president, and a current board member of Medallia).» Growth: Record breaking growth with 1,800+ governments (and counting) using our products. Click here to read more.» Culture:  Winner of 2023 Top Workplaces USA award , Awarded Top 25 Cloud Companies to Work For , Winner of Forbes 2022 Best Startup Employers , 50 Best Workplaces award . Check out our Careers Video !» Product: Named to the GovTech 100 (seven consecutive years), we are the leader in cloud software for our nation's cities, counties, and state agencies.» Mission Driven: We are a technology company with a passion for the mission. We're powering more effective and accountable government.Come join us and make a positive social impact!OpenGov is an equal opportunity employer. All applicants will be considered for employment without attention to race, color, religion, sex, sexual orientation, gender identity, national origin, veteran or disability status.",
  //     Seniority_level: "Director",
  //     Employment_type: "Full-time",
  //     Job_function: "Human Resources",
  //     Industries: "Software Development",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3752143851?url=https%3A%2F%2Fjobs%2Elever%2Eco%2Fopengov%2Fe0a5262c-1cec-4685-8cf2-6d92fbc25ba9%3Fsource%3DLinkedIn&urlHash=k6dP&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Human Resources (HR)",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Nexapp Technologies Private Limited",
  //     company_linkedin_id:
  //       "https://in.linkedin.com/company/nexapptechnologies?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "9 hours ago",
  //     job_description:
  //       "Selected Intern's Day-to-day Responsibilities Include Screening candidates Calling on data",
  //     Seniority_level: "Internship",
  //     Employment_type: "Internship",
  //     Job_function: "Human Resources",
  //     Industries: "Computer Networking Products",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3782520824?url=https%3A%2F%2Finternshala%2Ecom%2Finternship%2Fdetail%2Fhuman-resources-hr-internship-in-pune-at-nexapp-technologies-private-limited1701865254%2F%3Futm_source%3Dlinkedin_feed%26utm_source%3DLinkedin_Partnership&urlHash=NhhA&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Human Resources Generalist",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Salezcraft Global E-Services",
  //     company_linkedin_id:
  //       "https://in.linkedin.com/company/salezcraft?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "4 months ago",
  //     job_description:
  //       "Roles & ResponsibilitiesManaging the complete recruitment life-cycle.Sourcing & screening resumes, scheduling & interviewing candidates, line-up the final round of interview.Calling/Emailing to the screened/short-listed resumes and checking their availability and interests.To Roll out offers to candidates time to time.Managing records of all candidates in excel format.Sending Daily Calling Report to my VP.Maintaining folders, arrange sitting arrangement ,before joining of concern candidate. Joining formalities:Handling Employee Life Cycle.Fill up PF, ESI, Gratuity, & Medi-claim nomination forms by New joinee.Preparing of Appointment Letters.Line up Induction program for new joiners.Handover the Respective Candidate to their Manager.Generation of Employee code, Employee ID Cards, Employee Official ID Operations:Probation Letter, Probation Extension Letters and Appraisal Letters.Sending Communication to entire Organization.Sending Birthday Wishes Mail to all Employees. Exit formalities:Conduct Exit Interview and help employee to complete exit formalities.Handling Exit Interviews and Prepare Reports which Helps Organizations to Understand Lacks.Issuing Reliving ,Experience letters and Salary Slips.Mark Exit In Paybooks and Employee Master. Pay Roll:Maintain all data related to Employees Example: Employee Master, Payroll Data etc.Recording, maintaining and monitoring attendance.Update Leaves of each employee.Prepare Payslips.Issuing Internship Letters. Employee Relation:Monthly One on One sessions with employees.Organizing various employee welfare activities for events like Birth day celebration, Festival Celebration, Annual day Celebration, Cultural activities etc.Organizing Reward and Recognition.Solving Employees Problems.Handling separation mechanism & providing the inputs based on Exit interview to management in view to strengthen the system. Administration:Keeping track of Stationery and House hold Items.Ordering Required Items for the Company.",
  //     Seniority_level: "Executive",
  //     Employment_type: "Full-time",
  //     Job_function: "Human Resources",
  //     Industries: "Advertising Services",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3679286706?url=https%3A%2F%2Fwww%2Eexpertia%2Eai%2Fsalezcraft%2Fjob%2F64ae536d75656d2ae9ac0172%3Futm_source%3Dlinkedin-feed%26easy_apply%3Dtrue&urlHash=j92w&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Dir-Human Resources-Multiprop-B",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Marriott Hotels",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/marriott_hotels_resorts?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "2 weeks ago",
  //     job_description:
  //       "Job Number 23205731Job Category Human ResourcesLocation JW Marriott Hotel Pune, Senapati Bapat Road, Pune, Maharashtra, India VIEW ON MAPSchedule Full-TimeLocated Remotely? NRelocation? NPosition Type ManagementJob SummaryThe Director of Human Resources will report directly to the property General Manager, with a dotted-line (functional) reporting relationship to the Regional Senior Director of Human Resources and will be an integral member of the property executive committee. As a member of the Human Resources organization, he/she contributes a high level of human resource generalist knowledge and expertise for a designated property. He/she will be accountable for talent acquisition, succession/workforce planning, performance management and development for property employees, using technology efficiently, and coaching/developing others to help influence and execute business objectives in the most efficient manner. He/she generally works with considerable independence, developing processes to accomplish objectives in alignment with broader business objectives. Additionally, he/she utilizes a Human Resource Business Plan aligned with property and brand strategies to deliver HR services that enable business success.CANDIDATE PROFILE Education And Experience 2-year degree from an accredited university in Human Resources, Business Administration, or related major; 4 years experience in the human resources, management operations, or related professional area. OR 4-year bachelor's degree in Human Resources, Business Administration, or related major; 2 years experience in the human resources, management operations, or related professional area. CORE WORK ACTIVITIESManaging the Human Resources Strategy Executes and follows-up on engagement survey related activities.  Champions and builds the talent management ranks in support of property and region diversity strategy.  Translates business priorities into property Human Resources strategies, plans and actions Implements and sustains Human Resources initiatives at the property.  Coordinates the human capital review process at property(s) and leads succession planning activities on property and in the market, as appropriate.  Leads the assessment of property(s) leadership pipeline through the human capital review process and assists with follow-up.  Creates value through proactive approaches that will affect performance outcome or control cost.  Monitors effective use of myHR by property managers and employees.  Leads and participates in succession management and workforce planning.  Responsible for Human Resources strategy and execution.  Serves as key change manager for initiatives that have high employee impact.  Attends owners meetings as a member of the property executive committee and provides meaning or context to the Human Resources results (e.g., retention statistics, critical open positions, employee satisfaction, and training initiatives and results); and demonstrates an understanding of owner priorities.  Supervises one or more on-property Human Resources, as well as market-based Human Resources Specialist type resources where appropriate. Managing Staffing and Recruitment Process Analyzes open positions to balance the development of existing talent and business needs.  Serves as coach and expert facilitator of the selection and interviewing process.  Surfaces opportunities in work processes and staffing optimization.  Makes staffing decisions to manage the talent cadre and pipeline at the property.  Develops staffing strategy (in collaboration with hiring manager) relating to hiring practices; consults with hiring manager on compensation, benefits, etc.  Monitors sourcing process and outcomes of staffing process.  Ensures managers are competent in assessing and evaluating hourly staff. Managing Employee Compensation Strategy Remains current and knowledgeable in the internal and external compensation and work competitive environments.  Leads the planning of the hourly employee total compensation strategy.  Champions the communication and proper use of total compensation systems, tools, programs, policies, etc.  Participates in quarterly internal equity analysis; reviews internal equity reports and surface issues needing resolution.  Creates and implement s total compensation management packages/offers, particularly recognition and incentive programs directed towards property priorities. Managing Staff Development Activities Ensures completion of the duties and responsibilities of the properties’ Human Resources staff members, as outlined in applicable job description(s).  Ensures property Human Resources staff is properly trained in all employee-related human resource information to appropriately respond to property employees.  Serves as resource to property Human Resources staff on employee relations questions and issues.  Continually reinforces positive employee relations concepts. Marriott International is an equal opportunity employer. We believe in hiring a diverse workforce and sustaining an inclusive, people-first culture. We are committed to non-discrimination on any protected basis, such as disability and veteran status, or any other basis covered under applicable law.Marriott Hotels strive to elevate the art of hospitality, innovating at every opportunity while keeping the comfort of the oh-so-familiar all around the globe. As a host with Marriott Hotels, you will help keep the promise of “Wonderful Hospitality. Always.” by delivering thoughtful, heartfelt, forward-thinking service that upholds and builds upon this living legacy. With the name that’s synonymous with hospitality the world over, we are proud to welcome you to explore a career with Marriott Hotels. In joining Marriott Hotels, you join a portfolio of brands with Marriott International. Be where you can do your best work, begin your purpose, belong to an amazing global team, and become the best version of you.JW Marriott is part of Marriott International's luxury portfolio and consists of more than 100 beautiful properties in gateway cities and distinctive resort locations around the world. JW believes our associates come first. Because if you’re happy, our guests will be happy. JW Marriott associates are confident, innovative, genuine, intuitive, and carry on the legacy of the brand’s namesake and company founder, J.Willard Marriott. Our hotels offer a work experience unlike any other, where you’ll be part of a community and enjoy true camaraderie with a diverse group of co-workers. JW creates opportunities for training, development, recognition and most importantly, a place where you can pursue your passions in a luxury environment with a focus on holistic well-being. Treating guests exceptionally starts with the way we take care of our associates. That’s The JW Treatment™. In joining JW Marriott, you join a portfolio of brands with Marriott International. Be where you can do your best work, begin your purpose, belong to an amazing global team, and become the best version of you.",
  //     Seniority_level: "Entry level",
  //     Employment_type: "Full-time",
  //     Job_function: "Human Resources",
  //     Industries: "Hospitality",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3763808499?url=https%3A%2F%2Fjobs%2Emarriott%2Ecom%2Fjobs%2F23205731%3Flang%3Den-us%26utm_medium%3Djobboard%26utm_source%3DLinkedInOrganic&urlHash=vUKv&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Human Resources (HR)",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Arcatron Mobility Private Limited",
  //     company_linkedin_id:
  //       "https://in.linkedin.com/company/arcatron-mobility?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "1 day ago",
  //     job_description:
  //       "Selected Intern's Day-to-day Responsibilities Include Assisting design and implementing the overall recruiting strategy Performing job and task analysis to document job requirements and objectives Sourcing and recruiting candidates by using databases, social media, etc. Screening candidates' resumes and job applications Conducting interviews using various reliable recruiting and selection tools/methods to filter candidates within the schedule Taking care of new hire joining formalities Adhering to SOPs for hiring/ interview coordination with respective stakeholders Maintaining database and personnel file updation Managing employee records file Maintaining all employment records for hiring, onboarding, termination, leaves etc. Conferring with the management to develop or implement employee policies and procedures and updating all the paperwork Handling the onboarding activities and documentation Verifying attendance, hours worked, and leaves as per the records and maintaining monthly attendance Managing the employee exit formalities",
  //     Seniority_level: "Internship",
  //     Employment_type: "Internship",
  //     Job_function: "Human Resources",
  //     Industries: "Medical Equipment Manufacturing",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3781681285?url=https%3A%2F%2Finternshala%2Ecom%2Finternship%2Fdetail%2Fhuman-resources-hr-internship-in-pune-at-arcatron-mobility-private-limited1701929401%2F%3Futm_source%3Dlinkedin_feed%26utm_source%3DLinkedin_Partnership&urlHash=W2HI&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Human Resources Executive",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Duende Designs",
  //     company_linkedin_id:
  //       "https://in.linkedin.com/company/duendedesignsindia?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "5 months ago",
  //     job_description:
  //       'About Us: "We are an Interior Design company in India located in pune, considered one of the best interior designers in pune with a passion to create comfortable, elegant, sophisticated & luxurious spaces. We strongly believe in EVERY DETAIL MATTERS, the spaces we design are tailor made according to our clients vision. Reach out to us for renovation, interior design, execution of interior construction or styling."Job DescriptionPreparing job descriptions, advertising vacant positions, and managing the employment process.Orienting new employees and training existing employees.Monitoring employee performance.Ensuring that all employees are organized and satisfied in their work environment.Overseeing the health and safety of all employees.Implementing systematic staff development procedures.Providing counseling on policies and procedures.Ensuring meticulous implementation of payroll and benefits administration.Communicating with staff about issues affecting their performance.Ensuring accurate and proper record-keeping of employee information in electronic and digital format.Skills required:-CommunicationDecision-makingTraining and developmentalEmpathicFinanceOrganisationalBusiness managementLeadershipStrategic thinkingMulti-taskingRelationshipTeamwork and collaborationOnboardingRisk managementIntercultural sensitivity and languageHR Officer RequirementsBachelors degree in human resources.Minimum 1 year of relevant experience in human resources.Additional training/certification in Payroll Management may be advantageous.Labor Relations certification may be advantageous.Experience as a Skills Development Facilitator may be advantageous.Able to engage in meaningful negotiation and resolution.Knowledge of employment legislation.Excellent verbal and written communication skills.Protecting the interests of all employees.Full understanding of HR functions and best practices',
  //     Seniority_level: "Entry level",
  //     Employment_type: "Full-time",
  //     Job_function: "Human Resources",
  //     Industries: "Architecture and Planning",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3678191950?url=https%3A%2F%2Fwww%2Eexpertia%2Eai%2Fduendedesigns%2Fjob%2F6428247ada55e410ea0ed778%3Futm_source%3Dlinkedin-feed%26easy_apply%3Dtrue&urlHash=bs_h&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  //   {
  //     job_position: "Dir-Human Resources-Multiprop-B",
  //     job_location: "Pune, Maharashtra, India",
  //     company_name: "Marriott Hotels",
  //     company_linkedin_id:
  //       "https://www.linkedin.com/company/marriott_hotels_resorts?trk=public_jobs_topcard-org-name",
  //     job_posting_time: "2 weeks ago",
  //     job_description:
  //       "職務編號 23205731工作類別 Human Resources地點 JW Marriott Hotel Pune, Senapati Bapat Road, Pune, Maharashtra, India 在地圖中查看工作編制 Full-Time身處外地？ N願意海外赴任？ N職位類型 管理 Management職位概述人力資源總監將直接向酒店總經理報告，與人力資源地區高級總監之間存在間接（職能）報告關係，並將成為酒店執行委員會中的一員。作為人力資源組織的成員，他/她為指定的酒店提供高水準的人力資源綜合知識和專業知識。他/她將負責人才招聘、接班人/員工隊伍規劃、績效管理和酒店員工培養，高效採用技術，並以最有效的方式指導/培養其他人幫助影響和實現業務目標。他/她通常以相當高的獨立性開展工作，制定流程以實現符合更廣泛業務宗旨的目標。此外，他/她還利用與酒店和品牌策略相一致的人力資源業務計劃，提供能促進業務成功的人力資源服務。求職者個人資料教育和經驗要求 在經認可的大學取得人力資源、工商管理或相關專業的兩年制學位；4 年人力資源、管理運營或相關專業領域工作經驗。或者 人力資源、工商管理或相關專業四年制學士學位；2 年人力資源、管理運營或相關專業領域工作經驗。核心工作活動管理人力資源戰略 執行和跟進敬業度調查相關活動。 爭取和建立人才管理隊伍，支援酒店和地區多元化戰略。 將業務優先事項轉化為酒店人力資源戰略、計劃和行動。 在酒店實施和維持人力資源舉措。 協調酒店的人力資本審查流程，並酌情在酒店範圍內和市場上領導接班人計劃活動。 透過人力資本審查流程對酒店領導補給線進行評估，並協助跟進。 透過會影響績效成果或控制成本的主動方式創造價值。 監督酒店經理和員工有效使用 myHR。 領導並參加接班人管理和員工隊伍規劃。 負責人力資源戰略和執行。 擔任關鍵變革經理，負責執行對員工影響較大的舉措。 作為酒店執行委員會的成員出席業主會議；為人力資源成果賦予意義或背景（例如，人才保留統計、重要空缺職位、員工滿意度、培訓舉措和成果）；並展現出對業主優先事項的理解。 監督一項或多項酒店人力資源，以及基於市場的人力資源專家型資源（如適當）。管理人員編制和招聘流程 分析空缺職位，以平衡現有人才培養和業務需求。 擔任選拔和麵試流程的輔導員和專家協調員。 在工作流程和人員編制優化中尋找機會。 作出人事決策，管理酒店的人才幹部和補給線。 制定與雇傭慣例相關的人事策略（與招聘經理合作）；與招聘經理就薪酬和福利等問題進行協商。 監控採購流程和人員編制流程的結果。 確保管理人員有能力評估和評價時薪制員工。管理員工薪酬策略 時刻瞭解內部和外部薪酬以及工作競爭環境。 領導時薪制員工總體薪酬策略的規劃。 支持總體薪酬體系、工具、計劃和政策等的溝通和恰當使用。 參與季度內部股權分析；審查內部股權報告並處理需要解決的問題。 創建和實施總體薪酬管理包/方案，尤其是針對酒店優先事項的認可和獎勵計劃。管理員工培養活動 確保完成酒店人力資源工作人員的職責，如適用的職位描述中所述。 確保酒店人力資源員工在所有與員工有關的人力資源資訊方面得到適當培訓，以適當回應酒店員工。 作為酒店人力資源部員工關於員工關係問題的資源。 不斷強化積極的員工關係理念。Marriott International 是履行平等工作機會的僱主。我們深信應招聘多元化員工並秉持包容、以人為本的文化。我們致力於不歧視任何受到保障的群體，例如殘障和退伍軍人身分，或是任何其他適行法律所涵蓋的任何其他群體。",
  //     Seniority_level: "Entry level",
  //     Employment_type: "Full-time",
  //     Job_function: "Human Resources",
  //     Industries: "Hospitality",
  //     job_apply_link:
  //       "https://www.linkedin.com/jobs/view/externalApply/3763812552?url=https%3A%2F%2Fjobs%2Emarriott%2Ecom%2Fjobs%2F23205731%3Flang%3Dzh-tw%26utm_medium%3Djobboard%26utm_source%3DLinkedInOrganic&urlHash=QZX8&trk=public_jobs_apply-link-offsite_sign-up-modal-sign-up-later",
  //   },
  // ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Top 25 Job Matches
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : jobMatches.length > 0 ? (
        jobMatches.map((job, index) => {
          console.log(jobMatches);
          const {
            job_position,
            job_location,
            company_name,
            Employment_type,
            job_apply_link,
          } = job;
          console.log(job);
          return (
            <Card
              key={index}
              sx={{
                minWidth: 275,
                marginBottom: 2,
                width: "70vw",
                height: "20vh",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5" component="div">
                  {company_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {job_position}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Location:</strong> {job_location}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Employment Type:</strong> {Employment_type}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ alignSelf: "flex-end", marginRight: 2, marginBottom: 2 }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={job_apply_link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    fontWeight: "semibold",
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Typography variant="body1">No job matches found</Typography>
      )}

      {/* {jobMatches.length > 0 ? (
        jobMatches.map((job, index) => {
          console.log(jobMatches);
          const {
            job_position,
            job_location,
            company_name,
            Employment_type,
            job_apply_link,
          } = job;
          console.log(job);
          return (
            <Card
              key={index}
              sx={{
                minWidth: 275,
                marginBottom: 2,
                width: "70vw",
                height: "20vh",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5" component="div">
                  {company_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {job_position}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Location:</strong> {job_location}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
                  <strong>Employment Type:</strong> {Employment_type}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ alignSelf: "flex-end", marginRight: 2, marginBottom: 2 }}
              >
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  href={job_apply_link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    fontWeight: "semibold",
                    "&:hover": {
                      backgroundColor: "#000000",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <Typography variant="body1">No job matches found</Typography>
      )} */}
    </Box>
  );
};

export default JobMatches;
