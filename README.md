# Project Phoenix

Phoenix is an AI-powered, API-based open source framework that enables applications to scan online and offline content to combat information pollution, hate speech, and gender-based violence.

![alt text](https://github.com/cncf-hacks/phoenix/blob/main/images/phoenix.jpg?raw=true)

## Overview

In the digital age, the spread of information through various channels can significantly impact democratic processes. Information pollution, including hate speech, misinformation, and gender-based violence, can sway public opinion, influence voters, and create distrust in democratic institutions. This project leverages AI and digital technologies to scan online and offline content, aiming to combat these threats by identifying harmful content and providing actionable insights to safeguard democratic processes.

## Features

- **Real-time Analysis**: Utilizes the OpenAI model to analyze text in real time, identifying potential threats to democracy such as misinformation, hate speech, and gender-based violence.
- **Online and Offline Content Scanning**: Capable of processing both online and offline content, ensuring comprehensive coverage.
- **Actionable Insights**: Generates insights that can help stakeholders mitigate the identified threats effectively.
- **Open-Source**: Allows for community contributions, ensuring the tool evolves to meet emerging challenges.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- An OpenAI API key and endpoint

### Installation

1. Clone the repository:

```sh
git clone https://github.com/cncf-hacks/phoenix.git
```

2. Navigate to the project directory:

```sh
cd phoenix
```

3. Install NPM Packages:

```sh
npm install
```

4. Create a `.env` file in the root directory and add your OpenAI API key and endpoint:

```sh
OPENAI_API_KEY=your_api_key_here
OPENAI_API_ENDPOINT=your_api_endpoint_here
```

### Usage

To start the server, run:

```sh
npm start
```

Use the provided REST API endpoints to submit content for analysis. Example request:

```sh
curl -X POST http://localhost:3000/analyze -H "Content-Type: application/json" -d '{"analyzType": "<analyz type>"}'
```

Replace `<analyz type>` with the content you wish to analyze.

### API Reference

#### POST `/analyze`

Analyzes the provided text and returns insights on potential threats.

- **Request Body:**

```json
{
  "analyzType": "string",
  "contents:": "string[]"
}
```

- **Response:**

```json
[
  {
    "content": "string",
    "response": "string"
  }
]
```

![alt text](https://github.com/cncf-hacks/phoenix/blob/main/images/cncf.png?raw=true)
