// TODO: Add published projects
const projects = [
  {
    title: 'RoboLecturer',
    date: '2023-03-30',
    subtitle: 'LLM-powered robotic lecturer with STT/TTS, RAG Q&A, and ROS integration',
    image: '/images/projects/robolecturer.png',
    description:
      "Designed and developed a human-like robotic system using Softbank Robotics' Pepper robot, utilising Large Language Models for slide and script generation, DNNs for speech synthesis (TTS) and recognition (STT), and vector-based retrieval for accurate Q&A. (ROS, Python)",
  },
  {
    title: 'Tennis Serve Predictor',
    date: '2023-03-25',
    subtitle: 'Real-time ML system predicting tennis serve outcomes with custom hardware',
    image: '/images/projects/tennis.png',
    description:
      'Designed and built a Machine Learning system capable of predicting tennis serve results using custom-built hardware. Integrated hardware and software components for seamless data acquisition and analysis. (Python, C++)',
  },
  {
    title: 'Multitask Music Classification',
    date: '2020-06-12',
    subtitle: 'CNN/RNN models on spectrograms for genre and emotion classification',
    image: '/images/projects/pitch_mean_onetwothree8.png',
    description:
      'Built and trained deep learning models to classify music genre and emotion from spectrogram data. Developed multitask architectures and evaluation pipelines for improved predictive performance. (Python)',
  },
  {
    title: "Pop n' Win",
    date: '2018-02-10',
    subtitle: "Android app that won the Vodafone/EESTEC 'It's APP to you' hackathon",
    image: '/images/projects/popnwin_merge.png',
    description:
      'Designed and built an Android app that won the Vodafone/EESTEC hackathon. Developed a balloon-popping game with retention-focused business logic. (Java, Android Studio)',
  },
  {
    title: 'Cat Detector',
    date: '2017-05-15',
    subtitle: 'A convolutional neural network to classify cats (and dogs)',
    image: '/images/projects/catdetector.jpg',
    description:
      'Trained a convolutional neural network to classify between ~80 cat breeds. Processed and labeled a large dataset and deployed a demo server (eventually paused due to hosting costs).',
  },
  {
    title: 'F1 Performance Analysis and Visualisation',
    date: '2022-08-07',
    subtitle: 'Data analysis and visualisation of driver performance from telemetry',
    image: '/images/projects/Hungary_2022_Qualifying_RUS_LEC.png',
    description:
      'Analysed Formula 1 telemetry to evaluate driver performance and produce interactive visualisations and infographics. Implemented data pipelines and plotting tools for race analytics. (Python)',
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;
