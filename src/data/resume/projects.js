// TODO: Add published projects
// TODO: Add photos to projects
// TODO: Update descriptions
const projects = [
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2015-05-15',
    description:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting.',
  },
  {
    title: 'Multitask Music Classification',
    date: '2020-06-12',
    subtitle: 'Classified genres and emotions in songs using Deep Learning',
    description: 'Classified genres and emotions in songs using Deep Learning (LSTMs, CNNs, RNNs) through spectrogram information. Kaggle competition (Python)',
  },
  {
    title: "Pop n' Win",
    date: '2018-02-10',
    subtitle: "Android app that won the Vodafone/EESTEC 'It's APP to you' hackathon",
    description: "Android app that won the Vodafone/EESTEC 'It's APP to you' 3-day hackathon/competition, built by the team Fibonacchos. The task is to pop the balloons in order to win amazing prizes! Implemented game and business logic (Java, Android Studio)",
  },
  {
    title: 'F1 Performance Analysis and Visualisation',
    date: '2022-08-07',
    subtitle: 'Data Analysis of drivers performance from telemetry using Python',
    description: 'Analysed drivers performance and produced infographics as well as maps for better data visualisation using telemetry recordings from live GP races (Python)',
    image: '/images/projects/Hungary_2022_Qualifying_RUS_LEC.png',
  },
  {
    title: 'Tennis Serve Predictor',
    date: '2023-03-25',
    subtitle: 'Designed and built a Machine Learning system capable of predicting tennis service results, using custom-built hardware',
    description: 'Designed and built a Machine Learning system capable of predicting tennis service results by abstracting the court based on a dataset collected on a tennis court using custom-built hardware (Python, C++)',
  },
  {
    title: 'RoboLecturer',
    date: '2023-03-30',
    subtitle: 'Designed a human-like robotic system capable of giving interactive lectures by utilising LLMs for slide and script generation, DNNs for speech synthesis (TTS) and recognition (STT) and Computer Vision',
    description: "Designed and implemented a human-like robotic system (based on Softbank Robotics' Pepper robot) capable of giving interactive lectures by utilising LLMs for slide and script generation, DNNs for speech synthesis (TTS) and recognition (STT) as well as Computer Vision for face and body posture recognition (ROS, Python)",
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;
