const header = {
}

const about = {
  name: 'Sushant Chandla',
  // role: 'Student',
  description:
    'I am currently learning Rust.',
  resume: 'https://drive.google.com/file/d/1jl5BVemRNK7yhXCzutVq-UgPH__-rW82/preview',
  social: {
    // linkedin: 'https://linkedin.com',
    github: 'https://github.com/SushantChandla',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up

  {
    name: 'Nith App',
    description:
      'An app for our college to send notifications/announcements to students. It also provide notification to every student before a class starts.',
    stack: ['Android Studio', 'Java', 'Python', 'MongoDb', 'Flutter'],
    livePreview: 'https://play.google.com/store/apps/details?id=com.lightswitch.nith',
  },

  {
    name: 'Cloud Notebook',
    description:
      'A android app with template based notes capabilities, you can create as many as you want notebooks with different templates for pages.',
    stack: ['Flutter', 'Firebase',],
    livePreview: 'https://play.google.com/store/apps/details?id=com.lightswitch.cloud_notebook',
  },
  {
    name: 'SolFluid',
    description:
      'Solfluid is a Solana token streaming platform. Transaction now can be created to a potential receiver and some amount gets send to receiver every second. ',
    stack: ['Flutter', 'Rocket.rs', 'Solana blockchain', 'Rust'],
    sourceCode: 'https://github.com/Solfluid/',
    livePreview: 'https://solfluid.netlify.app/',
  },
  {
    name: 'Wally XTZ',
    description:
      'A mobile wallet for tezos blockchain with multiple account support.',
    stack: ['Flutter', 'Tezos Blockchain',],
    sourceCode: 'https://github.com/SushantChandla/WallyXTZ',
    livePreview: 'https://sushantchandla.github.io/WallyXTZ/',
  },
  {
    name: 'Contractor Project Manager',
    description:
      'A android app made for contractors to manage resources, materials, record transactions and take attendance of there employees',
    stack: ['Flutter', 'Firebase',],
    livePreview: 'https://play.google.com/store/apps/details?id=com.lightswitch.contractor',
  },
  {
    name: 'Sodium web',
    description:
      "A flutter plugin for web, to call cryptographic functions in sodium lib. It is being used in the tezos's `tezster_dart` plugin for web.",
    stack: ['Flutter', 'libsodium.js'],
    sourceCode: 'https://github.com/SushantChandla/sodium_web',
    livePreview: 'https://pub.dev/packages/sodium_web'
  },

  {
    name: 'Contrify',
    description:
      'A flutter app which sends notifications to the users whenever a new contract is deployed on mainnet.',
    stack: ['Flutter', 'Tezos', 'Firebase notifications'],
    sourceCode: 'https://github.com/Anshit01/contrify',
  },
  {
    name: 'Meme bot discord',
    description:
      'A discord bot which edits images on cloud and sends back the edited image. Command example `meme drake arg1 | arg2`',
    stack: ['Dart', 'nyxx', 'Discord'],
    sourceCode: 'https://github.com/SushantChandla/Meme-bot-discord',
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  // 'HTML',
  // 'CSS',
  // 'JavaScript',
  // 'TypeScript',
  // 'React',
  // 'Redux',
  // 'SASS',
  // 'Material UI',
  // 'Git',
  // 'CI/CD',
  // 'Jest',
  // 'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sushantchandla@gmail.com',
}

export { header, about, projects, skills, contact }
