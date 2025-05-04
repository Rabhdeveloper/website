import React from 'react';
import './Page.css'; // Ensure your CSS file contains appropriate styles
import { useParams } from 'react-router-dom';
import img1 from './Image/vid1.jpg'; // Correct image import
import img2 from './Image/m1.jpeg'; // Add imports for other images as needed

function Page() {
  // Access the machineId from the route parameters
  const { machineId } = useParams();

  // Data for each machine
  const machineData = [
    {
      id: 1,
      img: img1, // Use the imported image
      title: 'The Power Grading System',
      description: `
        **Performance Analysis**:
        Evaluates the efficiency and performance of electrical systems or devices.
        Identifies areas where energy loss occurs and provides insights to enhance energy utilization.

        **Grading Mechanism**:
        Grades equipment based on their power consumption and energy efficiency.
        Helps classify devices into different efficiency categories (e.g., high, medium, low efficiency).

        **Real-Time Monitoring**:
        Tracks power usage in real time, providing actionable data for better load management.
        Can be integrated with IoT systems for remote monitoring and control.

        **Optimization**:
        Assists in optimizing energy usage by recommending adjustments based on the graded performance.
        Reduces operational costs by identifying inefficient components.

        **Energy Efficiency**:
        Encourages the use of energy-efficient equipment and practices.
        Helps organizations achieve sustainability goals.

        **Cost Savings**:
        Identifies high-energy-consuming components, enabling corrective measures to reduce costs.

        **Reliability**:
        Improves system reliability by detecting potential faults in power supply or equipment.

        **Compliance**:
        Ensures adherence to local and international energy standards or guidelines.

        **Customizable Insights**:
        Provides detailed reports tailored to specific needs, such as energy audits or performance reviews.
      `,
    },
    {
      id: 2,
      img: img2, // Use the imported image
      title: 'The 150 kvar APFC',
      description: `
        - **Reactive Power Compensation**: The 150 kVAR panel provides automatic or manual reactive power compensation, reducing the lagging power factor caused by inductive loads.
        - **Durability**: Designed with high-quality materials to withstand harsh environments.
        - **Automatic Power Factor Correction (APFC)**: Equipped with APFC relays for real-time power factor regulation.
        - **Capacitor Bank Integration**: Total reactive power of 150 kVAR.
        - **Safety Mechanisms**: Includes overload protection, short-circuit protection, and temperature monitoring.
      `,
    },
    // Add other machine data objects here
  ];

  // Find the selected machine based on the route parameter
  const selectedMachine = machineData.find(
    (machine) => machine.id === parseInt(machineId, 10)
  );

  // Handle invalid machine ID
  if (!selectedMachine) {
    return <div className="error-message">Machine not found!</div>;
  }

  return (
    <div className="page-container">
      <div className="machine-details">
        <img src={selectedMachine.img} alt={selectedMachine.title} className="machine-image" />
        <h1>{selectedMachine.title}</h1>
        <hr />
        <div className="machine-description">
          {selectedMachine.description.split('\n').map((line, index) => (
            <p key={index}>{line.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
