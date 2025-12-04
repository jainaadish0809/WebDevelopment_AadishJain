const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


const MEMBERS_DATA = [
    { id: 1, name: "Vaibhav", role: "Lead", skills: ["Web Developer","HTML", "Tailwind", "JS"], bio: "Frontend Architecture Lead. Focuses on scalable web design and component libraries.", color: "#4285F4" },
    { id: 2, name: "Madhur", role: "Core Member", skills: ["Web Developer","HTML", "Tailwind", "CSS"], bio: "Tailwind CSS and responsive design expert. Dedicated to pixel-perfect cross-browser layouts.", color: "#4285F4" },
    { id: 3, name: "Harsh", role: "Core Member", skills: ["Web Developer","HTML", "JavaScript", "Performance"], bio: "JavaScript performance optimization. Enjoys diving deep into browser rendering processes.", color: "#4285F4" },
    { id: 4, name: "Piyush", role: "Core Member", skills: ["Web Developer","HTML", "Accessibility", "PWA"], bio: "Web accessibility and PWA development. Focused on inclusive and fast web experiences.", color: "#4285F4" },

    { id: 5, name: "Rohit", role: "Lead", skills: ["Android",    "Compose", "Coroutines"], bio: "Android Compose and Kotlin Coroutines Lead. Manages high-performance mobile architectures.", color: "#DB4437" },
    { id: 6, name: "Ayush", role: "Core Member", skills: ["Android", "Firebase", "Backend"], bio: "Firebase and back-end integration in mobile apps. Connects the dots between cloud and device.", color: "#DB4437" },
    { id: 7, name: "Pritam", role: "Core Member", skills: ["Android", "UI/UX", "Design"], bio: "UI/UX implementation in Android. Ensures beautiful, modern, and smooth user interfaces.", color: "#DB4437" },
    { id: 8, name: "Akhil", role: "Core Member", skills: ["Android", "Testing", "Debugging"], bio: "Testing and debugging complex Android applications. Focuses on maintainability and robustness.", color: "#DB4437" },
    
    { id: 9, name: "Gaurav", role: "Lead", skills: ["Blockchain","Solidity", "EVM", "Audit"], bio: "Smart Contract Audit and EVM development Lead. Dedicated to secure and efficient blockchain solutions.", color: "#F4B400" },
    { id: 10, name: "Manan", role: "Core Member", skills: ["Blockchain","Solidity", "dApp", "Web3"], bio: "Decentralized application (dApp) development. Bridges the gap between frontend and smart contracts.", color: "#F4B400" },
    { id: 11, name: "Aviral", role: "Core Member", skills: ["Blockchain","Solidity", "Layer 2", "Security"], bio: "Blockchain security and layer 2 solutions. Focuses on scaling and transaction efficiency.", color: "#F4B400" },
    { id: 12, name: "Armaan", role: "Core Member", skills: ["Blockchain","Solidity", "ERC-20", "Tokens"], bio: "Token standards (ERC-20, ERC-721) implementation. Expertise in digital asset representation.", color: "#F4B400" },

    { id: 13, name: "Navika", role: "Lead", skills: ["UX Design", "Research", "Figma"], bio: "User research and interface design Lead. Defines the user journey and visual direction.", color: "#0F9D58" },
    { id: 14, name: "Mohit", role: "Core Member", skills: ["UX Design", "Prototyping", "Testing"], bio: "Prototyping and user testing. Turns concepts into testable, interactive models.", color: "#0F9D58" },
    { id: 15, name: "Sachin", role: "Core Member", skills: ["UX Design", "Motion", "Branding"], bio: "Motion graphics and visual branding. Adds delightful animations and brand consistency.", color: "#0F9D58" },
    { id: 16, name: "Vishal", role: "Core Member", skills: ["UX Design", "Design Systems", "Figma"], bio: "Design system creation and maintenance. Ensures consistency across all products.", color: "#0F9D58" },

    { id: 17, name: "Vivan", role: "Lead", skills: ["Backend","Go", "Microservices", "APIs"], bio: "High-performance Go microservices Lead. Designs scalable, concurrent backend systems.", color: "#7E57C2" },
    { id: 18, name: "Abhishek", role: "Core Member", skills: ["Backend","Go", "Cloud", "Deployment"], bio: "Cloud deployments and API development. Focuses on reliable and resilient deployment pipelines.", color: "#7E57C2" },
    { id: 19, name: "Arijit", role: "Core Member", skills: ["Backend","Go", "Database", "NoSQL"], bio: "Database architecture (Postgres/NoSQL). Optimizes data storage and retrieval patterns.", color: "#7E57C2" },
    { id: 20, name: "Ram", role: "Core Member", skills: ["Backend","Go", "Monitoring", "Logging"], bio: "System monitoring and logging integration. Ensures operational health and performance tracking.", color: "#7E57C2" },
];


app.use(cors());
app.use(express.json());


app.get('/members', (req, res) => {
    
    setTimeout(() => {
        
        if (Math.random() < 0.1) {
            return res.status(500).json({ error: "Simulated Internal Server Error" });
        }
        res.status(200).json(MEMBERS_DATA);
    }, 1500); 
});


app.get('/members/:id', (req, res) => {
    const memberId = parseInt(req.params.id);
    const member = MEMBERS_DATA.find(m => m.id === memberId);

    if (member) {
        res.status(200).json(member);
    } else {
        res.status(404).json({ error: `Member with ID ${memberId} not found.` });
    }
});


app.listen(PORT, () => {
    console.log(`GDGC Member API running at http://localhost:${PORT}`);
    console.log(`Access all members at http://localhost:${PORT}/members`);
});