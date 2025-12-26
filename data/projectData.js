const projects = [
   {
    id: "wysp",
    title: "Wsyp",
    category: "UI/UX Design",
    image: "../media/images/Wysp.jpg",
    video: "../media/videos/Wysp.mp4",
    location: "Curtin University",
    description: "A collaborative capstone project undertaken at Curtin univeristy. Tasked with creating an educational coding environment for Computer Science students, inspired by UC Berkeley's Pacman AI project " + 
                 "We delivered a cross-platform IDE that allowed for both java and python coding, syntaxt checking and autosaving to help support the teaching of AI pathing algoirthms",
    features: [
      "Python",
      "Java",
      "PYQT5",
      "Cross-Platform",
      "JPype",
      "Custom IDE features",
      "Version Control",
      "Fullstack"
    ],
    github: "http://github.com/arlen-brower/Wysp"
  },

  {
    id: "barcodeReader",
    title: "Computer Vision: Barcode Reader",
    category: "Machine Perception",
    image: "../media/images/barcodeReader.jpg",
    video: "../media/videos/barcodeReader.mp4",
    location: "Curtin University",
    description: "A machine vision pipeline to detect and decode barcode numbers from images. The project involved image preprocessin (using techniques such as grayscaling, blurring, edge detection, and morphological operations), contour detection to locate the barcode region, and decoding the barcode using the pyzbar library." +
                 "The whole assignment comprised of building the pipeline from scratch without using high-level libraries for barcode detection, the pipeline consisted of:" +
                 "1. Barcode dection and localization - Take an image of a product and find the barcode, the output is an image contain only the barcode numbers" +
                 "2. Barcode digit extraction - Using the barcode image above, extract the 13 indiviual numbers of the barcode. The output will be 13 individual images each containing one number" +
                 "3. Barcode digit reconition - Using the 13 images above, using machine learning identify what the numbers are inside each image. The output will be 13 txt files containing the number corresponding to each image." +
                 "Combining all three, complete the pipeline allowing you to find the numbers of a barcode in one click. It will take an image of a product and output the 13 numbers of the barcode in one single txt file.",
    features: [
      "Python",
      "scikit-learn",
      "torch",
      "Data Manipulation",
      "Machcine Learning",
      "LGMRegressor",
      "GBRegressor",
      "MLPRegressor",
      "Data Visualization",
      "SVR",
      "Machine Stacking",
    ],
    github: "https://github.com/Flosse02/ML"
  },

  {
    id: "bleve",
    title: "BLEVE Peak Pressure Prediction",
    category: "Machine Learning",
    image: "../media/images/bleve.jpg",
    video: "../media/videos/bleve.mp4",
    location: "Curtin University",
    description: "A data driven machine learning project to predict the peak pressure of a BLEVE (Boiling Liquid Expanding Vapor Explosion) around an obstacle."+ 
                 "The project involved data preprocessing (cleaning), feature engineering, model selection (SVR, Regressors, SVR), and evaluation using various machine learning algorithms.",
    features: [
      "Python",
      "scikit-learn",
      "torch",
      "Data Manipulation",
      "Machcine Learning",
      "LGMRegressor",
      "GBRegressor",
      "MLPRegressor",
      "Data Visualization",
      "SVR",
      "Machine Stacking",
    ],
    github: "https://github.com/Flosse02/ML"
  },

  {
    id: "resume",
    title: "Online Resume",
    category: "UI/UX Design",
    image: "../media/images/onlineResume.jpg",
    video: "../media/videos/onlineResume.mp4",
    location: "Home",
    description: "An online resume built using html and modern UI/UX practices, to show off my skill along with my qualifications.",
    features: [
      "HTML",
      "CSS",
      "JS",
      "Responsive Design",
      "Modern UI/UX"
    ],
    github: "https://github.com/Flosse02/Website-Resume"
  },

  {
    id: "smartHomeV2",
    title: "Smarthome Device V2",
    category: "UI/UX + Electrical Engineering",
    image: "../media/images/smartHomeV2.jpg",
    video: "../media/videos/smartHomeV2.mp4",
    location: "Home",
    description: "A basic IOT based smarthome with google calendar integration, music playback and basic home automation. This is the second version with improved features and design. (WIP)",
    features: [
      "Custom Raspberry Pi setup",
      "Works with Google Calendar",
      "User-friendly dashboard"
    ],
    github: "https://github.com/Flosse02/smartHomeV2"
  },

  {
    id: "smartHome",
    title: "Smarthome Device",
    category: "UI/UX + Electrical Engineering",
    image: "../media/images/smartHome.jpg",
    video: "../meida/videos/smartHome.mp4",
    location: "Home",
    description: "A basic IOT based smarthome with google calendar integration, music playback and basic home automation. (ABANDONED)",
    features: [
      "Custom Raspberry Pi setup",
      "Works with Google Calendar",
      "User-friendly dashboard"
    ],
    github: "https://github.com/Flosse02/smarthome"
  }
];