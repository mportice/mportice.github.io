// Projects data - add new projects here
const projects = [
    {
        title: "Autonomous Navigation System",
        year: "2024",
        role: "Lead Engineer",
        tech: "Python, ROS, OpenCV",
        description: "Developed a computer vision-based navigation system for autonomous mobile robots in warehouse environments.",
        content: `
            <h2>Overview</h2>
            <p>This project focused on creating a robust navigation system capable of operating in dynamic warehouse environments. The system needed to handle real-time obstacle detection, path planning, and adaptive routing.</p>
            
            <h2>Technical Approach</h2>
            <p>We implemented a multi-layered approach combining classical computer vision techniques with modern deep learning. The perception layer uses OpenCV for real-time image processing, while path planning leverages ROS navigation stack with custom cost functions.</p>
            
            <p>Key challenges included handling lighting variations, dynamic obstacles, and ensuring safe operation around human workers. We solved these through careful sensor fusion and predictive modeling of human movement patterns.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li>Real-time 3D mapping using LiDAR and stereo cameras</li>
                <li>Predictive collision avoidance with 500ms lookahead</li>
                <li>Dynamic replanning with sub-100ms response time</li>
                <li>Integration with warehouse management systems</li>
            </ul>
            
            <h2>Results</h2>
            <p>The system achieved 99.8% navigation success rate in field testing, with zero safety incidents over 10,000 hours of operation. It reduced warehouse picking time by 35% compared to manual operation.</p>
        `
    },
    {
        title: "Smart Energy Monitor",
        year: "2024",
        role: "Hardware & Software",
        tech: "ESP32, React, MQTT",
        description: "Designed an IoT device that provides real-time insights into household energy consumption patterns.",
        content: `
            <h2>Problem Statement</h2>
            <p>Most home energy monitors provide only aggregate data, making it difficult for users to identify which appliances consume the most power. We set out to create a non-intrusive system that could break down energy usage by device.</p>
            
            <h2>Solution</h2>
            <p>The device uses current sensing and machine learning to disaggregate total household power into individual appliance signatures. It connects to the home circuit panel and requires no per-device installation.</p>
            
            <h2>Technical Implementation</h2>
            <p>Hardware is built around ESP32 microcontroller with high-precision current sensors. The device samples at 8kHz to capture appliance signatures, then uses on-device processing to classify usage patterns.</p>
            
            <p>The web dashboard, built with React, provides real-time monitoring and historical analysis. Users can set energy budgets, receive alerts for unusual consumption, and track progress toward reduction goals.</p>
            
            <h2>Impact</h2>
            <p>Beta users reported an average 18% reduction in energy consumption after using the device for three months. The visibility into appliance-level usage helped them identify inefficient devices and modify usage patterns.</p>
        `
    },
    {
        title: "Structural Analysis Tool",
        year: "2023",
        role: "Full Stack Developer",
        tech: "JavaScript, WebGL, Python",
        description: "Built a web-based finite element analysis tool for quick structural engineering calculations.",
        content: `
            <h2>Project Goal</h2>
            <p>Create an accessible, browser-based tool for engineers to perform preliminary structural analysis without requiring expensive desktop software or specialized hardware.</p>
            
            <h2>Architecture</h2>
            <p>The frontend uses WebGL for 3D visualization and real-time rendering of stress distributions. The FEA solver runs in Python on the backend, optimized for speed using NumPy and sparse matrix operations.</p>
            
            <h2>Features</h2>
            <ul>
                <li>Interactive 3D model builder with parametric shapes</li>
                <li>Material library with common engineering materials</li>
                <li>Real-time stress and displacement visualization</li>
                <li>Export to industry-standard formats</li>
                <li>Collaborative workspace for team analysis</li>
            </ul>
            
            <h2>Validation</h2>
            <p>Results were validated against commercial FEA software, showing agreement within 2% for standard test cases. The tool has been used by over 500 engineers for preliminary design work.</p>
        `
    },
    {
        title: "Mechanical Arm Controller",
        year: "2023",
        role: "Mechatronics Engineer",
        tech: "Arduino, C++, PID Control",
        description: "Developed a precision control system for a 6-DOF robotic arm with integrated haptic feedback.",
        content: `
            <h2>System Design</h2>
            <p>This project involved complete control system design for a surgical training robot. The arm needed sub-millimeter precision and smooth motion profiles to provide realistic simulation.</p>
            
            <h2>Control Strategy</h2>
            <p>Implemented cascaded PID control loops with feedforward compensation. Each joint has position, velocity, and torque control layers. Gravity compensation and dynamic modeling ensure smooth trajectories.</p>
            
            <h2>Haptic Feedback</h2>
            <p>Force sensors at the end effector provide resistance feedback, allowing users to feel simulated tissue interaction. The haptic loop runs at 1kHz to maintain stable feel.</p>
            
            <h2>Challenges</h2>
            <p>Main challenges included eliminating backlash, achieving repeatability across the workspace, and maintaining transparency in the force feedback. These were addressed through mechanical design improvements and advanced control algorithms.</p>
        `
    },
    {
        title: "Data Visualization Dashboard",
        year: "2024",
        role: "Data Engineer",
        tech: "D3.js, Node.js, TimescaleDB",
        description: "Created a real-time analytics platform for monitoring manufacturing line performance.",
        content: `
            <h2>Context</h2>
            <p>Manufacturing lines generate massive amounts of sensor data, but operators need to quickly identify anomalies and performance trends. This dashboard aggregates data from hundreds of sensors into actionable insights.</p>
            
            <h2>Data Pipeline</h2>
            <p>Built a streaming data pipeline that processes over 1 million data points per minute. Uses TimescaleDB for efficient time-series storage and retrieval, with automatic data aggregation at multiple time scales.</p>
            
            <h2>Visualization Design</h2>
            <p>The interface prioritizes clarity and quick decision-making. Uses D3.js for custom visualizations that highlight deviations from normal operation. Color coding and alert levels guide operator attention.</p>
            
            <h2>Impact on Operations</h2>
            <p>Reduced mean time to detect issues by 60%. Operators can now spot developing problems before they cause downtime. The system has prevented an estimated $2M in lost production time.</p>
        `
    },
    {
        title: "3D Printed Prosthetic",
        year: "2023",
        role: "Mechanical Designer",
        tech: "CAD, FDM Printing, Arduino",
        description: "Designed an affordable, customizable prosthetic hand using 3D printing and open-source electronics.",
        content: `
            <h2>Mission</h2>
            <p>Make functional prosthetics accessible to people in developing countries where traditional prosthetics are prohibitively expensive. Target cost: under $500 per device.</p>
            
            <h2>Design Philosophy</h2>
            <p>Focused on simplicity and repairability. All parts can be printed on consumer 3D printers. Uses commonly available hardware like fishing line for tendons. Electronics based on Arduino for easy programming and customization.</p>
            
            <h2>Customization Process</h2>
            <p>Developed a parametric CAD model that adjusts to individual measurements. Users provide simple dimensions, and the software generates printable files. Entire hand can be fabricated in 48 hours.</p>
            
            <h2>Functionality</h2>
            <p>Five individually actuated fingers controlled by EMG sensors. Users can perform grip patterns through muscle activation. Battery life of 8+ hours with USB charging.</p>
            
            <h2>Community Impact</h2>
            <p>Open-sourced the design and received contributions from makers worldwide. Over 200 hands have been built and distributed. Working with NGOs to scale manufacturing in target regions.</p>
        `
    }
];
