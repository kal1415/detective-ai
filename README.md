# Detective AI

Detective AI is a web-based application that uses the [Coco-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) AI model to detect objects and persons in real-time through a webcam feed. The application also includes a feature to alert the user if more than one person is detected, making it particularly useful for scenarios such as online exams to ensure monitoring and compliance.

## Features

- **Real-Time Object Detection**: Leverages the Coco-SSD model to detect and localize multiple objects in a video feed.
- **Person Detection Alert**: Triggers an alert if more than one person is detected in the frame.
- **Web-Based Interface**: Built using Next.js and React, providing a responsive and user-friendly interface.
- **Customizable Detection Threshold**: Configurable confidence threshold for object detection.

## Use Case

This project is ideal for online exam monitoring, where detecting the presence of multiple individuals in the frame can help ensure exam integrity.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/detective-ai.git
   cd detective-ai

2. Install dependencies:
    npm install
    or
    yarn install

3. Running the Application:

    npm run dev
    or
    yarn dev


Technologies Used
- **Next.js**: Framework for building the web application.
- **React**: Library for building the user interface.
- **TensorFlow.js**: For running the Coco-SSD model in the browser.
- **Tailwind CSS**: For styling the application.