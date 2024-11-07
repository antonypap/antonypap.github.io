// TODO: Add published projects
const projects = [
  {
    title: 'Cat Detector',
    date: '2017-05-15',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    description:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. Over 60,000 cats were classified before server bills made the project too expensive to continue hosting.',
  },
  {
    title: 'Multitask Music Classification',
    date: '2020-06-12',
    subtitle: 'Classified genres and emotions in songs using Deep Learning',
    image: '/images/projects/pitch_mean_onetwothree8.png',
    description:
      'Implemented Deep Learning models (LSTMs, CNNs, RNNs) to classify genres and emotions in songs based on spectrogram information. Developed and fine-tuned models for high accuracy, leveraging advanced software engineering practices for model training and evaluation. Kaggle competition (Python)',
  },
  {
    title: "Pop n' Win",
    date: '2018-02-10',
    subtitle: "Android app that won the Vodafone/EESTEC 'It's APP to you' hackathon",
    image: '/images/projects/popnwin_merge.png',
    description:
      "Designed and built an Android app that won the Vodafone/EESTEC 'It's APP to you' 3-day hackathon. Developed a balloon-popping game with retention business logic. (Java, Android Studio)",
  },
  {
    title: 'F1 Performance Analysis and Visualisation',
    date: '2022-08-07',
    subtitle: 'Data Analysis of drivers performance from telemetry using Python',
    image: '/images/projects/Hungary_2022_Qualifying_RUS_LEC.png',
    description:
      'Analysed drivers performance and produced infographics as well as maps for better data visualisation using telemetry recordings from live GP races. (Python)',
  },
  {
    title: 'Tennis Serve Predictor',
    date: '2023-03-25',
    subtitle: 'Designed and built a Machine Learning system capable of predicting tennis service results, using custom-built hardware',
    image: '/images/projects/tennis.png',
    description:
      'Designed and built a Machine Learning system capable of predicting tennis serve outcomes using custom-built hardware. Collaborated closely with a multidisciplinary team to integrate hardware and software components, ensuring seamless data collection and analysis. Developed software for data acquisition and real-time processing. (Python, C++)',
  },
  {
    title: 'RoboLecturer',
    date: '2023-03-30',
    subtitle: 'Designed a human-like robotic system capable of giving interactive lectures by utilising LLMs for slide and script generation, DNNs for speech synthesis (TTS) and recognition (STT) and Computer Vision',
    image: '/images/projects/robolecturer.png',
    description:
      "Designed and developed a human-like robotic system using Softbank Robotics' Pepper robot, capable of delivering interactive lectures. Utilised Large Language Models for slide and script generation, DNNs for speech synthesis (TTS) and recognition (STT), and vector-based databases for accurate Q&A retrieval. (ROS, Python)",
  },
].sort((a, b) => new Date(b.date) - new Date(a.date));

export default projects;
