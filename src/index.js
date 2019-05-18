import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

const DESTINATIONS = [
  {
    theme: "luna",
    title: "Luna",
    distance: "240 Thousand Miles",
    travelTime: "2 Days",
    cryoSleep: "none",
    transport: [
      "Blue Origin New Armstrong",
      "Boeing Starliner",
      "Sierra Nevada Shuttle Alpha",
      "SpaceX Lunar Dragon"
    ],
    arrivalSites: [
      "Luna City",
      "Mare Crisium",
      "Mare Imbrium",
      "Mare Tranquilitatis"
    ],
    header: "A Great Vacation for the Whole Family",
    blurb:
      "There is so much to do! Visit the Apollo 11 landing site and see the cheap dimestore flag Buzz and Neil left there, now bleached white by the sun. Take the 'Missed it by that much' tour and marvel at some of the greatest moon crashes of all time, the smashed wreckage still perfectly preserved. But before you leave, you simply must see Luna City. It's a bustling hub of activity that some call it the Tokyo of the moon. Stay at the luxury Bigelow Hilton, and golf in style.",
    siteMap:
      "https://www.google.com/maps/space/moon/@0,0,13467204m/data=!3m1!1e3",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/JBWA-luna.jpg"
  },
  {
    theme: "mars",
    title: "Mars",
    distance: "48 Million Miles",
    travelTime: "219 Days",
    cryoSleep: "optional",
    transport: [
      "Lavochkin Mars Avtobus",
      "Sierra Nevada Dream Reacher",
      "SpaceX Star Hopper",
      "Virgin Galactic Mars Express"
    ],
    arrivalSites: [
      "Cydonia",
      "Hellas Planitia",
      "Olympus Mons",
      "Utopia Rupes"
    ],
    header: "Visit the Red Planet",
    blurb:
      "Follow the curious path of NASA's Spirit, Opportunity, and Curiosity rovers. Snap a selfie beside the Viking and Pathfinder landers. Marvel at the ancient canals. Climb Olympus Mons, the highest peak in the solar system! Sleepover at the Musk/Aldrin outpost, and enjoy the best potatoes this side of Earth! Explore the ruins of Earth's oldest rival civilization. No not really, but maybe...",
    siteMap:
      "https://www.google.com/maps/space/mars/@0,0,13467204m/data=!3m1!1e3",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/9Dz--mars.png"
  },
  {
    theme: "belt",
    title: "Asteroid Belt",
    distance: "189.2 Million Miles",
    travelTime: "9 Months, 3 Days",
    cryoSleep: "optional",
    transport: ["Lavochkin Vega Loop", "SpaceX Belt Hopper", "USCSS Nostromo"],
    header: "What a Rush",
    blurb:
      "You don't need to be a 'stroid miner to have a blast in the belt. After touching down on your pick of several of the largest asteroids in the belt, you'll suit up and take part in some exciting activities, such as mastering the quadruple backflip and driving a golf ball into orbit with one swing. Then, you'll be off on a rocket-propelled zipline tour of nearby proto-planet debris. It's the zip trip of a lifetime!",
    arrivalSites: ["Ceres", "Vesta", "Pallas", "Hygiea", "Euphrosyne", "Juno"],
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/LLOI-asteroid-belt.jpg"
  },
  {
    theme: "europa",
    title: "Europa",
    distance: "390.23 Million Miles",
    travelTime: "1 Year, 6 Months, 2 Days",
    cryoSleep: "optional",
    header: "Citizen Science on a Jovian Moon ",
    blurb:
      "With the enormous, awe-inspiring presence of Jupiter dominating the sky, you'll touch down on Europa's frozen surface. Scientists think there is life in the ocean below. During your voyage to the Jovian system you'll train on operation of the search mission technology. Paired with a local researcher, you'll depart from one of the major sites in high-tech style. Plunge several miles below the surface to participate in the ongoing search for life. Will you be the one to make the big discovery?",
    arrivalSites: [
      "Orbital Observation Only",
      "Staldon Linea",
      "Tara Regio",
      "Rathmore Chaos"
    ],
    transport: [
      "Dhruva Space Aryabhata",
      "Sierra Nevada Deep Dreamer",
      "SpaceX Star Hopper ",
      "Virgin Galactic Jovian Express"
    ],
    siteMap:
      "https://www.google.com/maps/space/europa/@19.5424886,-111.4554562,6345704m/data=!3m1!1e3",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/hBCM-europa.png"
  },
  {
    theme: "jupiter",
    title: "Jupiter",
    distance: "403.1 Million Miles",
    travelTime: "1 Year, 7 Months, 3 Weeks",
    cryoSleep: "optional",
    transport: [
      "Dhruva Space Aryabhata",
      "SpaceX Star Hopper",
      "Virgin Galactic Jovian Express"
    ],
    arrivalSites: [
      "Great Red Spot",
      "North Pole",
      "Orbital Observation Only",
      "South Pole"
    ],
    header: "The Solar System's Biggest Attraction Awaits",
    blurb:
      "Jupiter is fantastic. Just to see it from orbit is worth the trip. But for the bold, there is the opportunity to descend below the stormy clouds and take a balloon journey through the soupy atmosphere. Experience diamond rain, and if you're lucky, you might spot a 'gasbag'; one of the enormous jellyfish-like lifeforms thought to live there, drifting upon the turbulant streams. Bring an umbrella, it's always stormy on Jupiter!",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/f0Ms-jupiter.png"
  },
  {
    theme: "titan",
    title: "Titan",
    distance: "812.5 Million Miles",
    travelTime: "4 Years, 6 Months, 22 Days",
    cryoSleep: "required",
    transport: [
      "Lavochkin Titanovyy Avtobus",
      "Sierra Nevada Reacher",
      "SpaceX Grace Hopper",
      "Virgin Galactic Super Sport"
    ],
    arrivalSites: [
      "Chusuk Planitia",
      "Orbital Observation Only",
      "Senikyo",
      "Quivira"
    ],
    header: "The Ultimate Climbing Adventure",
    blurb:
      "As you hang from your last gear placement, rest a moment and take in the awesome view. Saturn and its massive rings fill the eternal night sky, providing just the right amount of illumination to sight your climb. There are bolted routes, of course, but you don't travel all the way to the edge of the solar system to follow someone else's moves up the crag. Get out there and lead the climb of your life!",
    siteMap:
      "https://www.google.com/maps/space/titan/@0,0,13467204m/data=!3m1!1e3",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/DZ5t-titan.jpg"
  },
  {
    theme: "neptune",
    title: "Neptune",
    distance: "2.7 Billion Miles",
    travelTime: "9 Years, 3 Months, 12 Days",
    cryoSleep: "required",
    transport: [
      "Blue Origin Optimus Prime",
      "Northrop Grumman Le Verrier",
      "SpaceX Star Cruiser"
    ],
    arrivalSites: ["Orbital Observation Only", "Subsurface Exploration"],
    header: "Get Away From It All",
    blurb:
      "If you ever get the feeling that there are just too many people breathing up your air, the operators of Yellow Star Line know just how you feel. Of course, you'll marvel at the spectacle of Neptune's ring system and its 14 moons on your way in. But deep below the surface of the planet's murky bluegreen seas, it's difficult to be any further from the madding crowd. Simply put, it's the perfect getaway!",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/rTwo-neptune.jpg"
  },
  {
    theme: "pluto",
    title: "Pluto",
    distance: "3.5 Billion Miles",
    travelTime: "12 Years, 5 Months, 9 Days",
    cryoSleep: "required",
    transport: [
      "Blue Origin Optimus Prime",
      "Northrup Grumman Tombaugh Blink",
      "SpaceX Star Cruiser"
    ],
    arrivalSites: [
      "Columbia Colles",
      "Orbital Observation Only",
      "Kadejo Macula",
      "Sputnik Planitia"
    ],
    siteMap:
      "https://www.google.com/maps/space/pluto/@0,0,13467204m/data=!3m1!1e3",
    header: "On Pluto, It's Always Winter",
    blurb:
      "The ultimate backcountry, Pluto offers ski and snowboarding experiences like no where else. All your favorite slopes on Earth tracked out? No problem. Come freestyle and make fresh tracks on some of the sickest pow-pow in the solar system! A true shredder or ripper's bucket list isn't complete until this box is ticked. A day on Pluto is over 150 hours long, so you decide when it's time to pull off your planks and hit the lodge and warm up with your best snow bunny or moose.",
    poster:
      "https://uploads.codesandbox.io/uploads/user/13a9d4ab-104d-4152-bf41-621a9097470b/dBOt-pluto.jpg"
  }
];

ReactDOM.render(
  <App destinations={DESTINATIONS} />,
  document.getElementById("root")
);
