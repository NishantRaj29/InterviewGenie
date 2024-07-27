# InterviewGenie

 Welcome to Interview Genie! This project is designed to help job seekers prepare for interviews by generating real-time, AI-powered mock interviews. The application allows users to create a profile, take mock interviews based on their job position, experience, and job description, and receive detailed feedback on their performance.

### Features
- **User Profiles:** Create and manage profiles using Clerk, with options to sign up or log in via Facebook or Google.
- **Real-Time Interview Generation:** Generate interviews in real-time based on job position, job experience, and job description with the help of Google Gemini.
- **Five Question Interviews:** Each interview consists of five questions that users must answer.
- **Answer Recording and Conversion:** Users' answers are recorded and converted to text on the backend.
- **Detailed Feedback :** After the interview, users receive comprehensive feedback, including ratings and an analysis of their responses.
- **Interview History :** Existing users can access their previous interviews, review feedback, and have the option to retest.


### How It Works
1. Profile Creation:
Users can create a profile using Clerk, with the option to sign up via Facebook or Google.

2. Interview Generation:
Interviews are generated in real-time based on the user's job position, experience, and job description, leveraging the capabilities of Google Gemini.

3. Answering Questions:
Users will be asked five questions during the mock interview. Their responses are recorded and converted to text on the backend.

4. Receiving Feedback:
Once the interview is completed, users will receive detailed feedback that includes an analysis of their responses and ratings.

5. Reviewing Past Interviews:
Existing users can review their past interviews, see the feedback they received, and have the option to retest if they wish.

### Getting Started
To get started with Interview Genie, follow these steps:
**Clone the Repository:**
```
git clone https://github.com/NishantRaj29/InterviewGenie.git
cd InterviewGenie

```
**Install Dependencies:**
```
npm install
```
** Set Up Environment Variables: **
```
NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=<your_google_gemini_api_key>
NEXT_PUBLIC_QUESTION_NOTE=<note_for_questions>

```
** Run the Application: **

```
npm start
```

### Technologies Used
**Frontend: **React.js, Next.js
**Styling: **Tailwind CSS, Tailwind Merge, Tailwind CSS Animate
**Authentication: **Clerk (with options for Facebook and Google login)
**AI Integration: **Google Gemini
**Database: **Neon Database, Drizzle ORM
**Speech Recognition: **React Hook Speech-to-Text
**Video Recording:** React Webcam
**Other Libraries:** Moment.js, Lucide React, UUID, Sonner, Class Variance Authority

### Scripts

```
Development: npm run dev - Starts the development server.
Build: npm run build - Builds the application for production.
Start: npm run start - Starts the production server.
Database Push: npm run db:push - Pushes the latest database schema.
Database Studio: npm run db:studio - Opens the database studio for management.

```
